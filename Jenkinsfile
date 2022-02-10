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
                bat 'git config --global user.email "florian.marques@efrei.net"'
                bat 'git config --global user.name "MarquesFlorian"'
                bat 'git checkout release'
                bat 'git add .'
                bat 'git commit -m "Merge"'
                bat 'git push'
                bat 'git pull'
            }
        }
    }
}