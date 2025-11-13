pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'api-test'
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Checkout') {
            steps {
                echo '📥 Clonando el repositorio...'
                checkout scm
            }
        }

        stage('Build Docker image') {
            steps {
                echo '🏗️ Construyendo la imagen Docker...'
                sh 'docker compose build'
            }
        }

        stage('Run Containers') {
            steps {
                echo '🚀 Levantando contenedores...'
                sh 'docker compose up -d'
            }
        }

        stage('Verify containers') {
            steps {
                echo '🔍 Verificando contenedores...'
                sh 'docker ps'
            }
        }

        stage('Post-build cleanup') {
            steps {
                echo '🧹 Limpiando recursos antiguos...'
                sh 'docker system prune -af || true'
            }
        }
    }

    post {
        always {
            echo '✅ Pipeline finalizado.'
        }
    }
}
