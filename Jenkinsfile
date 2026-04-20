pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "gautamdevgrover/node-cicd-app"
    }

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/gautamdevgrover/Project1.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE:v2 .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-creds',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS')]) {

                    sh '''
                    echo $PASS | docker login -u $USER --password-stdin
                    docker push $DOCKER_IMAGE:v2
                    '''
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                kubectl set image deployment/node-app-deployment \
                node-app=$DOCKER_IMAGE:v2
                '''
            }
        }
    }
}
