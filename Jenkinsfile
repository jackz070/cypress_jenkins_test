pipeline {
  agent any

  tools {nodejs "nodeJS"}

  environment {
      CHROME_BIN = '/bin/google-chrome'
  }
  stages {
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
           
            // stage('Test 2') {
            //      steps {
            //    sh 'npm run cypress2:ci'
            //      }
            //   }
        } // This is the missing closing brace
      }

      stage('Merge Reports') {
          steps {
              ansiColor('xterm') {
                // sh 'npx mochawesome-merge cypress/reports/*.json > cypress/reports/merged-report.json'
                // sh 'npx marge cypress/reports/merged-report.json -f report -o cypress/reports/html'
                sh 'npx mochawesome-merge cypress/mochawesome-report/*.json > cypress/mochawesome-report/merged-report.json'
                sh 'npx marge cypress/mochawesome-report/merged-report.json -f report -o cypress/reports/html'
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