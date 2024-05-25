pipeline {
  agent any

  tools {nodejs "nodeJS"}

  environment {
      CHROME_BIN = '/bin/google-chrome'
  }
  stages {
      stage('Clear reporting directories') {
          steps {
              ansiColor('xterm'){sh 'rm -rf cypress/reports/*'}
              ansiColor('xterm'){sh 'rm -rf mochawesome-report/*'}
          }
      }

      stage('Dependencies') {
          steps {
              ansiColor('xterm'){sh 'npm i'}
          }
      }
      stage('e2e Tests') {
        parallel {
            stage('Test 1 (pass)') {
                 steps {
                  catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE'){
                      ansiColor('xterm'){sh 'npm run cypress:run -- --spec cypress/e2e/test_pass.cy.js --reporter mochawesome'}
                  }
                 }
              }

               stage('Test 2 (fail)') {
                 steps {
                  catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE'){
                      ansiColor('xterm'){sh 'npm run cypress:run -- --spec cypress/e2e/test_fail.cy.js --reporter mochawesome'}
                  }
                 }
              }
        }
      }

      stage('Merge Reports') {
          steps {
              ansiColor('xterm') {
                    sh 'npx mochawesome-merge --reportDir mochawesome-report mochawesome-report/*.json -o mochawesome-report/merged-report.json'
                }
                ansiColor('xterm'){
                    sh 'npx marge mochawesome-report/merged-report.json -f report -o cypress/reports/html'
                }
                }
          }

      stage('Report') {
          steps {
              publishHTML([
                  allowMissing: false,
                  alwaysLinkToLastBuild: false,
                  keepAll: true,
                  reportDir: 'cypress/reports/html',
                  reportFiles: 'report.html',
                  reportName: 'HTML Report', 
                  reportTitles: ''])
          }
      }
  }
}