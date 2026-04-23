# 🚀 End-to-End CI/CD Pipeline using Jenkins, Docker, Helm & Kubernetes

## 📌 Overview

This project demonstrates a **production-style CI/CD pipeline** that automates building, testing, containerization, and deployment of a Node.js application using modern DevOps practices.

The pipeline ensures:

* Automated testing
* Reliable deployments
* Deployment validation
* Automatic rollback on failure

---

## ⚙️ Tech Stack

* CI/CD: Jenkins
* Containerization: Docker
* Orchestration: Kubernetes
* Package Manager: Helm
* Source Control: GitHub

---

## 🔄 Pipeline Flow

```text
GitHub → Jenkins → Docker Build → Test → Docker Push → Helm Deploy → Kubernetes
                                                        ↓
                                                Rollout Validation
                                                        ↓
                                                  Auto Rollback
```

---

## ✨ Key Features

* ✅ End-to-end CI/CD automation
* ✅ Docker-based testing environment
* ✅ Image versioning using build number
* ✅ Secure Docker Hub authentication
* ✅ Helm-based Kubernetes deployments
* ✅ Deployment validation using rollout status
* ✅ Automatic rollback on failure
* ✅ HTML email notifications
* ✅ Automatic cleanup of containers

---

## 🧪 Testing Strategy

* Application is built inside a Docker container
* A temporary container is started for testing
* Health endpoint (`/health`) is validated
* Retry logic ensures stability
* Pipeline fails if the application is unhealthy

---

## 🚀 Deployment Strategy

* Uses Helm for deployment:

```bash
helm upgrade --install node-app ...
```

* Atomic deployment ensures safe updates:

```bash
--atomic --timeout 60s
```

* Post-deployment validation:

```bash
kubectl rollout status deployment/node-cicd-deploy
```

---

## 🔁 Rollback Mechanism

This project implements **multi-layer rollback protection**:

### 1. Helm Atomic Rollback

* Automatically rolls back if deployment fails during upgrade

### 2. Manual Rollback (Fallback)

* Triggered via Jenkins pipeline if rollout validation fails

```bash
helm rollback node-app
```

---

## 📂 Project Structure

```text
Project1/
 ├── app/
 ├── docker/
 │    └── Dockerfile
 ├── kubernetes/
 │    └── node-app-chart/   # Helm Chart
 ├── Jenkinsfile
 └── README.md
```

---

## 📧 Notifications

* Email alerts on:

  * ✅ Successful build
  * ❌ Failed build

Includes:

* Build number
* Project details
* Deployment info
* Direct Jenkins link

---

## 🛠️ How to Run

### 1. Clone Repository

```bash
git clone https://github.com/your-username/nodejs-cicd-pipeline-jenkins-k8s.git
cd nodejs-cicd-pipeline-jenkins-k8s
```

---

### 2. Setup Jenkins

* Install Jenkins
* Configure Docker credentials
* Configure email (SMTP)
* Create pipeline job using Jenkinsfile

---

### 3. Run Pipeline

* Push code to GitHub
* Jenkins automatically triggers pipeline

---

## 📸 Screenshots (Optional)

*Add screenshots of:*

* Jenkins pipeline success
* Docker image push
* Kubernetes pods

---

## 🎥 Demo (Optional)

*Add demo video link*

---

## 🧠 Challenges & Solutions

### ❌ Challenge: Deployment shows success even when pods fail

✔ Solution:

* Added `kubectl rollout status` for validation

---

### ❌ Challenge: Helm not detecting image pull failures

✔ Solution:

* Combined Helm deployment with rollout verification

---

### ❌ Challenge: Reliable rollback implementation

✔ Solution:

* Used Helm atomic flag + manual rollback fallback

---

## 📣 Interview Explanation

> This project implements a complete CI/CD pipeline where code changes trigger automated build, test, and deployment processes. Helm is used for Kubernetes deployments with atomic rollback, and rollout validation ensures only successful deployments are promoted.

---

## 🔗 Future Improvements

* Monitoring (Prometheus + Grafana)
* Logging (ELK stack)
* Multi-environment setup (dev/prod)
* Cloud deployment (AWS EKS)

---

## 👨‍💻 Author

**Gautam Dev**
DevOps Engineer 🚀

---
