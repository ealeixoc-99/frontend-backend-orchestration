pipeline {
    agent any

    stages {
        stage('LaunchDocker') {
            steps {
                bat 'docker-compose up -d --build'
            }
        }
        stage('Tests') {
            steps {
                bat 'cd frontend && npm install && CI=true npm test'
            }
        }
    }
}