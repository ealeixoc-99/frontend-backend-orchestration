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
                bat 'git config --global user.email "florian.marques@efrei.net" && git config --global user.name "MarquesFlorian" && git checkout release && git pull && git add . && git commit -m "Merge" && git push'
            }
        }
    }
}