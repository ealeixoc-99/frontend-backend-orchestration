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
                bat 'cd frontend'
                bat 'npm test'
            }
        }
    }
}