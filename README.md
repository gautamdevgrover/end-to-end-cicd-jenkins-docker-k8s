# 🚀 End-to-End CI/CD Pipeline with Docker, Jenkins & Kubernetes

## 📌 Project Overview

This project demonstrates a complete **end-to-end CI/CD pipeline** that automates the process of building, testing, and deploying a containerized Node.js application using modern DevOps tools.

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

* Builds Docker image using custom Dockerfile
* Tags image with:

  * `BUILD_NUMBER`
  * `latest`

### 3️⃣ Automated Testing

* Runs a container from the built image
* Performs **health check validation** using `/health` endpoint
* Includes:

  * Initial wait for container startup
  * Retry mechanism
* Pipeline fails if application is unhealthy

### 4️⃣ Push to Docker Hub

* Authenticates securely using Jenkins credentials
* Pushes:

  * Versioned image
  * Latest image

### 5️⃣ Kubernetes Deployment

* Updates deployment with new Docker image
* Monitors rollout status
* Automatically performs **rollback on failure**

### 6️⃣ Notifications

* Sends email notifications for:

  * Success ✅
  * Failure ❌

---

## 🔥 Key Features

* ✅ Build once, deploy everywhere (image reuse)
* ✅ Health-based automated testing
* ✅ Retry mechanism for stability
* ✅ Secure DockerHub authentication
* ✅ Kubernetes deployment with rollback
* ✅ Email notifications

---

## 📦 Docker Image Strategy

* Versioned image:

```
gautamdevgrover/node-cicd-app:<BUILD_NUMBER>
```

* Latest tag:

```
gautamdevgrover/node-cicd-app:latest
```

---

## 📁 Project Structure

```
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
```

---

## 📌 Directory Breakdown

* **app/** → Node.js application source code
* **docker/** → Dockerfile for building container image
* **jenkins/** → Jenkins pipeline definition
* **kubernetes/** → Deployment & Service manifests
* **tests/** → Application test scripts

---

## ▶️ How to Run This Project

### 🔧 Prerequisites

Ensure the following tools are installed:

* Git
* Docker
* Jenkins
* Kubernetes (Minikube / Kind / Cluster)
* kubectl

---

### 📥 1. Clone Repository

```
git clone https://github.com/gautamdevgrover/Project1.git
cd Project1
```

---

### 🐳 2. Build & Test Docker Image (Optional)

```
docker build -t node-cicd-app -f docker/Dockerfile .
docker run -d -p 3000:3000 node-cicd-app
curl http://localhost:3000/health
```

---

### ⚙️ 3. Setup Jenkins

* Install Jenkins

* Install plugins:

  * Pipeline
  * Docker Pipeline
  * Email Extension

* Create Pipeline Job:

  * Git repo: your repo URL
  * Branch: `main`
  * Script Path: `jenkins/Jenkinsfile`

---

### 🔐 4. Configure DockerHub Credentials

* Go to Jenkins → Manage Credentials
* Add Username & Password
* Credential ID: `docker-creds`

---

### ☸️ 5. Setup Kubernetes

```
kubectl create namespace frontend
kubectl apply -f kubernetes/deployment.yaml
kubectl apply -f kubernetes/service.yaml
```

---

### 🚀 6. Run Pipeline

* Push code → triggers pipeline automatically

OR

* Click **Build Now** in Jenkins

---

### 📊 7. Verify Deployment

```
kubectl get pods -n frontend
kubectl get svc -n frontend
```

---

### 📬 8. Email Notifications

* Configure SMTP in Jenkins
* Receive email alerts on:

  * Success
  * Failure

---

## 🧠 Design Decisions

* Health checks ensure only stable builds are deployed
* Retry logic avoids false failures during startup
* Rollback mechanism ensures high availability
* Single image flow prevents environment mismatch

---

## 🚧 Future Improvements

* Multi-environment setup (Dev → Staging → Prod)
* Monitoring using Prometheus & Grafana
* GitOps using ArgoCD
* Advanced testing (unit + integration)

---

## 📸 Architecture Overview

```
Developer → GitHub → Jenkins → Docker → Kubernetes → Users
```

---

## 👨‍💻 Author

**Gautam Dev**
DevOps Enthusiast | Cloud & Automation Learner

---

## ⭐ Support

If you found this project helpful, give it a ⭐ on GitHub!

