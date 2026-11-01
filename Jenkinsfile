pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t jenkins-cicd-app .'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'docker run --rm jenkins-cicd-app npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Application is ready for deployment!'
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline completed successfully!'
        }

        failure {
            echo 'CI/CD Pipeline failed!'
        }
    }
}