# aws-devops-project
# 🚀 AWS DevOps Project — Scalable Web Application with ECS, RDS & Redis

## 📌 Overview

This project demonstrates a **production-style cloud architecture** built on AWS.
It includes containerized application deployment, load balancing, database integration, caching, and CI/CD automation.

---

## 🧠 Architecture

```
User → Domain (HTTPS)
        ↓
Application Load Balancer (ALB)
        ↓
Amazon ECS (Docker Containers)
        ↓        ↓
Redis Cache   MySQL Database
(ElastiCache) (Amazon RDS)
```

---

## ⚙️ Tech Stack

* **Compute:** AWS ECS (Fargate)
* **Load Balancer:** Application Load Balancer (ALB)
* **Database:** Amazon RDS (MySQL)
* **Caching:** Amazon ElastiCache (Redis)
* **DNS:** Route 53
* **SSL:** AWS Certificate Manager (ACM)
* **CI/CD:** GitHub Actions
* **Monitoring:** CloudWatch
* **Containerization:** Docker
* **Language:** Node.js

---

## 🚀 Features

* 🔐 HTTPS-enabled application with custom domain
* ⚡ Redis caching for improved performance
* 🔁 Auto-scaling using ECS services
* 🔄 CI/CD pipeline with GitHub Actions
* 📊 Logging and monitoring using CloudWatch
* 🌐 Public access via custom domain

---

## 📂 Project Structure

```
.
├── app.js
├── Dockerfile
├── package.json
├── .github/workflows/
└── README.md
```

---

## 🐳 Docker Setup

### Build Image

```
docker build -t my-app .
```

### Run Container

```
docker run -p 3000:3000 my-app
```

---

## ☁️ Deployment Steps

1. Containerize the application using Docker
2. Push image to Amazon ECR
3. Deploy using ECS (Fargate)
4. Configure ALB for routing traffic
5. Set up RDS for persistent storage
6. Add Redis (ElastiCache) for caching
7. Configure Route 53 for domain
8. Enable HTTPS using ACM

---

## ⚡ Caching Strategy

Implemented **Cache-Aside Pattern**:

* First request → fetch from DB
* Store result in Redis
* Subsequent requests → served from cache

---

## 🔍 Monitoring

* Logs stored in CloudWatch
* Used for debugging:

  * DB connection issues
  * Redis connection failures
  * Application errors

---

## 🧪 Challenges Faced

* Redis connection issues due to TLS mismatch
* Security group misconfiguration
* DNS resolution problems
* Missing dependencies in Docker image

---

## 🧠 Key Learnings

* AWS networking and security groups
* Container orchestration with ECS
* Load balancing and HTTPS setup
* Debugging distributed systems
* Performance optimization using caching

---

## 🌐 Live Demo

👉 https://rahulanasibuilds.online

---

## 📌 Future Improvements

* Use AWS Secrets Manager for credentials
* Move services to private subnets
* Infrastructure as Code using Terraform
* Add advanced monitoring and alerts

---

## 👨‍💻 Author

**Rahul Anasi**

---

## ⭐ If you like this project, give it a star!

