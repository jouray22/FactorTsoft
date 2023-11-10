pipeline {
    agent any

    environment {
        // Define la URL del repositorio Git y la ruta local en el servidor de Jenkins
        GIT_REPO_URL = 'https://github.com/jouray22/FactorTsoft.git'
        LOCAL_REPO_PATH = '/home/ubuntu'
    }

    stages {
        stage('Checkout') {
            steps {
                // Clona el repositorio de Git en el servidor de Jenkins
                script {
                    git branch: 'main', credentialsId: 'ID_de_credenciales_de_git', url: GIT_REPO_URL, dir: LOCAL_REPO_PATH
                }
            }
        }
    }

    post {
        success {
            echo 'Clonado del repositorio exitoso'
        }
        failure {
            echo 'Error en el clonado del repositorio'
        }
    }
}

