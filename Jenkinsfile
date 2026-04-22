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
                 docker stop test --signal KILL || true
                 docker rm test || true
                 sleep 3
                 docker build -t test-app .
                 docker run --rm --name test -d -p 3001:3000 test-app
                 sleep 5
                 curl -f http://localhost:3001/health
                 docker stop test --signal KILL || true
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
  post {
    success {
        emailext (
            subject: "✅ SUCCESS: Build #${BUILD_NUMBER}",
            mimeType: 'text/html',
            body: """
            <html>
            <body style="font-family: Arial;">

                <h2 style="color: green;">Build Successful 🚀</h2>

                <table border="1" cellpadding="10" cellspacing="0">
                    <tr>
                        <th>Project</th>
                        <td>${JOB_NAME}</td>
                    </tr>
                    <tr>
                        <th>Build Number</th>
                        <td>${BUILD_NUMBER}</td>
                    </tr>
                    <tr>
                        <th>Docker Image</th>
                        <td>${DOCKER_IMAGE}</td>
                    </tr>
                </table>

                <br>

                <a href="${BUILD_URL}" style="color: blue;">
                    🔗 View Build Details
                </a>

            </body>
            </html>
            """,
            to: "gautamaws777@gmail.com"
        )
    }

    failure {
        emailext (
            subject: "❌ FAILED: Build #${BUILD_NUMBER}",
            mimeType: 'text/html',
            body: """
            <html>
            <body style="font-family: Arial;">

                <h2 style="color: red;">Build Failed ❌</h2>

                <p><b>Project:</b> ${JOB_NAME}</p>
                <p><b>Build Number:</b> ${BUILD_NUMBER}</p>

                <a href="${BUILD_URL}" style="color: blue;">
                    🔗 Check Logs
                </a>

            </body>
            </html>
            """,
            to: "gautamaws777@gmail.com"
        )
    }

    always {
        sh 'docker rm -f test || true'
    }
}
}
