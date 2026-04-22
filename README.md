# 🚀 Node.js CI/CD Pipeline using Jenkins, Docker & Kubernetes

## 📌 Overview

This project demonstrates an **end-to-end CI/CD pipeline** that automates the process of building, testing, containerizing, and deploying a Node.js application to a Kubernetes cluster.

The pipeline ensures **zero manual intervention**, fast delivery, and reliable deployments.

---

## ⚙️ Tech Stack

* **CI/CD**: Jenkins
* **Containerization**: Docker
* **Orchestration**: Kubernetes
* **Source Control**: GitHub

---

## 🔄 Pipeline Flow

```text
GitHub → Jenkins → Docker Build → Docker Push → Kubernetes Deploy
```

1. Developer pushes code to GitHub
2. Jenkins pipeline is triggered
3. Application is tested using a Docker container
4. Docker image is built and pushed to Docker Hub
5. Kubernetes deployment is updated with the new image
6. Rollout status is verified
7. Email notification is sent (success/failure)

---

## ✨ Features

* ✅ Automated CI/CD pipeline
* ✅ Containerized testing environment
* ✅ Docker image versioning using build number
* ✅ Secure Docker Hub authentication using Jenkins credentials
* ✅ Kubernetes rolling deployment
* ✅ Deployment validation using rollout status
* ✅ HTML-based email notifications
* ✅ Automatic cleanup of test containers

---

## 🧪 Testing Strategy

* Application is built inside a Docker container
* A temporary container is started
* Health check endpoint (`/health`) is validated
* Pipeline fails if the application is not healthy

---

## 🚀 Deployment Strategy

* Uses `kubectl set image` to update deployment
* Kubernetes performs rolling update
* `kubectl rollout status` ensures deployment success

---

## 📂 Project Structure

```text
Project1/
 ├── app/
 ├── Dockerfile
 ├── Jenkinsfile
 ├── k8s/
 │    ├── deployment.yaml
 │    ├── service.yaml
 └── README.md
```

---

## 📧 Notifications

* Email notifications are triggered on:

  * ✅ Successful build
  * ❌ Failed build

* Includes:

  * Build number
  * Project name
  * Docker image
  * Direct Jenkins build link

---

## 🛠️ How to Run

### 1. Clone Repository

```bash
git clone https://github.com/your-username/Project1.git
cd Project1
```

---

### 2. Setup Jenkins

* Install Jenkins
* Add Docker credentials
* Configure email (SMTP)
* Create pipeline job using Jenkinsfile

---

### 3. Run Pipeline

* Push code to GitHub
* Jenkins will automatically trigger pipeline

---


## 🧠 Key Learnings

* Building real-world CI/CD pipelines
* Docker-based testing workflows
* Kubernetes deployment automation
* Handling build failures and validations
* Integrating notifications in pipelines

---

## 📣 Interview Explanation

> This project implements an end-to-end CI/CD pipeline where code pushed to GitHub triggers Jenkins, which builds and tests a Docker image, pushes it to Docker Hub, and deploys it to Kubernetes with rollout validation and email notifications.

---

## 🔗 Future Improvements

* Add monitoring (Prometheus + Grafana)
* Implement Helm charts
* Add security scanning (Trivy)
* Deploy on cloud (AWS EKS)

---

## 👨‍💻 Author

**Gautam Dev**
DevOps Enthusiast 🚀

---

