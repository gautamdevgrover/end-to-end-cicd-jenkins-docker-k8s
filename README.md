# 🚀 End-to-End CI/CD Pipeline with Docker, Jenkins & Kubernetes

## 📌 Project Overview

This project demonstrates a complete **end-to-end CI/CD pipeline** that automates the process of building, testing, and deploying a containerized application using modern DevOps tools.

The pipeline ensures that only **tested and verified Docker images** are promoted to deployment, with **automatic rollback** in case of failures.

---

## 🛠️ Tech Stack

* **CI/CD Tool:** Jenkins
* **Containerization:** Docker
* **Orchestration:** Kubernetes
* **Cloud:** AWS EC2
* **Version Control:** GitHub
* **Language:** Node.js

---

## 🔄 CI/CD Workflow

```
Code Push → Jenkins Trigger → Build Docker Image → Run Tests → Push Image → Deploy to Kubernetes → Rollback (if failure) → Email Notification
```

---

## ⚙️ Pipeline Stages Explained

### 1️⃣ Code Checkout

* Pulls latest code from GitHub repository

### 2️⃣ Build Docker Image

* Builds a Docker image using a custom Dockerfile
* Tags image with:

  * `BUILD_NUMBER`
  * `latest`

### 3️⃣ Automated Testing

* Runs a container from the built image
* Performs **health check validation** using `/health` endpoint
* Implements:

  * Retry mechanism
  * Initial wait for container readiness
* Pipeline fails if application is unhealthy

### 4️⃣ Push to Docker Hub

* Authenticates securely using Jenkins credentials
* Pushes both:

  * Versioned image
  * Latest image

### 5️⃣ Kubernetes Deployment

* Updates deployment using new Docker image
* Monitors rollout status
* Automatically performs **rollback on failure**

### 6️⃣ Notifications

* Sends email notifications for:

  * Success
  * Failure

---

## 🔥 Key Features

* ✅ Build once, deploy everywhere (image reuse)
* ✅ Health-based automated testing before deployment
* ✅ Retry mechanism for reliable validation
* ✅ Secure DockerHub authentication
* ✅ Kubernetes deployment with rollback strategy
* ✅ Email notifications with build details

---

## 📦 Docker Image Strategy

* Each build is tagged with a unique version:

```
gautamdevgrover/node-cicd-app:<BUILD_NUMBER>
```

* Also tagged as:

```
gautamdevgrover/node-cicd-app:latest
```

---

## 🧠 Design Decisions

* **Health Checks Before Deployment:** Ensures only stable builds are promoted
* **Retry Logic:** Avoids false failures due to startup delays
* **Rollback Strategy:** Maintains system stability in production
* **Single Image Flow:** Eliminates inconsistencies between test and deployment

---

## 🚧 Future Improvements

* Add multi-environment support (Dev → Staging → Production)
* Integrate monitoring tools like Prometheus & Grafana
* Implement GitOps using ArgoCD
* Add unit and integration testing

---

## 📸 Architecture Overview

```
Developer → GitHub → Jenkins → Docker → Kubernetes → Users
```
---

📁 Project Structure
node-app
├── README.md
├── app
│   ├── app.js
│   ├── package-lock.json
│   ├── package.json
│   └── public
│       ├── index.html
│       └── style.css
├── docker
│   └── Dockerfile
├── jenkins
│   └── Jenkinsfile
├── kubernetes
│   ├── deployment.yaml
│   └── service.yaml
└── tests
    └── test.js
📌 Directory Breakdown
app/ → Node.js application source code
docker/ → Dockerfile for building container image
jenkins/ → Jenkins pipeline definition (CI/CD automation)
kubernetes/ → Deployment & Service manifests
tests/ → Basic test scripts for application validation
🧠 Why This Structure?
Keeps application, infrastructure, and pipeline separated and organized
Makes the project scalable and easy to maintain
Follows real-world DevOps project structure

---

▶️ How to Run This Project

Follow the steps below to set up and run this project on your system.

🔧 Prerequisites

Make sure the following tools are installed:

Git
Docker
Jenkins
Kubernetes (Minikube / Kind / or Cluster)
kubectl CLI
📥 1. Clone the Repository
git clone https://github.com/gautamdevgrover/Project1.git
cd Project1
🐳 2. Build Docker Image (Optional Manual Test)
docker build -t node-cicd-app -f docker/Dockerfile .

Run container:

docker run -d -p 3000:3000 node-cicd-app

Test app:

curl http://localhost:3000/health
⚙️ 3. Setup Jenkins
Install Jenkins on your system
Install required plugins:
Pipeline
Docker Pipeline
Email Extension
Create a new Pipeline Job
Configure:
GitHub repo URL
Branch: main
Script Path: Jenkinsfile
🔐 4. Configure Credentials in Jenkins

Add Docker Hub credentials:

Go to: Jenkins → Manage Credentials
Add:
Username
Password
Use ID: docker-creds
☸️ 5. Setup Kubernetes

Make sure Kubernetes cluster is running.

Create namespace:

kubectl create namespace frontend

Apply deployment (if not already created):

kubectl apply -f k8s/deployment.yaml
🚀 6. Run Pipeline
Push code to GitHub
Jenkins will automatically trigger pipeline

OR manually:

Click Build Now in Jenkins
📊 7. Verify Deployment
kubectl get pods -n frontend
kubectl get svc -n frontend
📬 8. Email Notifications
Configure SMTP in Jenkins
You will receive email on:
Success ✅
Failure ❌
🧪 Expected Outcome
Docker image is built and tested
Image pushed to Docker Hub
App deployed to Kubernetes
Rollback happens if deployment fails

---

## 👨‍💻 Author

**Gautam Dev**
DevOps Enthusiast | Cloud & Automation Learner

---

## ⭐ If you like this project

Give it a star on GitHub ⭐
