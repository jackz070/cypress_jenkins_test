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
            stage('Test 1') {
                 steps {
               sh 'npm run cypress:run'
                 }
              }
           
            // stage('Test 2') {
            //      steps {
            //    sh 'npm run cypress2:ci'
            //      }
            //   }
        } // This is the missing closing brace
      }
      stage('Verify Directory') {
        steps {
          sh 'ls -l /Users/jaceksmoter/.jenkins/workspace/cypress_jenkins_pipeline/cypress/cypress/reports'
        }
      }
      stage('Report') {
          steps {
              publishHTML([
                  allowMissing: false,
                  alwaysLinkToLastBuild: false,
                  keepAll: true,
                  reportDir: 'cypress/cypress/reports/html',
                  reportFiles: 'index.html',
                  reportName: 'HTML Report', 
                  reportTitles: ''])
          }
      }
  }
}