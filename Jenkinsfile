pipeline {
  agent any

  tools {nodejs "nodeJS"}

  environment {
      CHROME_BIN = '/bin/google-chrome'
  }
  stages {
      stage('Dependencies') {
          steps {
              sh 'npm i'
          }
      }
      stage('e2e Tests') {
        parallel {
            stage('Test 1 (pass)') {
                 steps {
                  catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE'){
                      sh 'npm run cypress:run -- --spec cypress/e2e/test_pass.cy.js'
                  }
                 }
              }

               stage('Test 2 (fail)') {
                 steps {
                  catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE'){
                      sh 'npm run cypress:run -- --spec cypress/e2e/test_fail.cy.js'
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

      stage('Report') {
          steps {
              publishHTML([
                  allowMissing: false,
                  alwaysLinkToLastBuild: false,
                  keepAll: true,
                  reportDir: 'cypress/reports/html',
                  reportFiles: 'index.html',
                  reportName: 'HTML Report', 
                  reportTitles: ''])
          }
      }
  }
}