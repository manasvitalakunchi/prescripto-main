pipeline {
    agent { label 'agent-vinod' }

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/manasvitalakunchi/prescripto-main.git'
            }
        }

        stage('Build Docker Containers') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Run Application') {
            steps {
                sh 'docker compose down'
                sh 'docker compose up -d'
            }
        }
    }
}
