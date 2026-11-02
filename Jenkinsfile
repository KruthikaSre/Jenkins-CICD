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
            sh 'docker build -t jenkins-cicd-app .'
        }
    }

    stage('Run Tests') {
        steps {
            sh 'docker run --rm jenkins-cicd-app npm test'
        }
    }

    stage('Deploy') {
        steps {
            sh '''
                docker rm -f my-cicd-app || true
                docker run -d --name my-cicd-app -p 3000:3000 jenkins-cicd-app
            '''
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