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
                bat 'cd frontend && npm install && npm test -- --bail --ci'
            }
        }
        stage('Deployment on Release Branch') {
            steps {
                bat 'git checkout release && git merge dev && git push'
            }
        }
    }
}