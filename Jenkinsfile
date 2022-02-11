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
                bat 'git checkout dev'
                bat 'git pull'
                bat 'git checkout release'
                bat 'git merge dev'
                withCredentials([usernamePassword(credentialsId: 'GitHub', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
                    bat "git push http://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/ealeixoc-99/frontend-backend-orchestration.git"
                }
            }
        }
    }
}