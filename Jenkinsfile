pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "gautamdevgrover/node-cicd-app:${BUILD_NUMBER}"
    }

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/gautamdevgrover/Project1.git'
            }
        }
        stage('Test') {
             steps {
              sh '''
                 docker stop test --signal KILL
                 docker rm test
                 sleep 3
                 docker build -t test-app .
                 docker run --rm --name test -d -p 3001:3000 test-app
                 sleep 5
                 curl -f http://localhost:3001/health
                 docker stop test --signal KILL 
                 '''
               }
             }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
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
                    docker push $DOCKER_IMAGE
                    '''
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                kubectl set -n frontend image deployment/node-cicd-deploy \
                node-cicd-app=$DOCKER_IMAGE
                '''
            }
        }
    }
}
