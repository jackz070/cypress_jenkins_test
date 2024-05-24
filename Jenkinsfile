pipeline {
  agent any

  tools {nodejs "Node"}

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
               sh 'npm run cypress:ci'
                 }
              }
           
            stage('Test 2') {
                 steps {
               sh 'npm run cypress2:ci'
                 }
              }
        } // This is the missing closing brace
      }
      stage('Deploy') {
          steps {
              echo 'Deploying....'
          }
      }
  }
}