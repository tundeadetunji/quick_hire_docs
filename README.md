![Java](https://img.shields.io/badge/Java-17-blue?logo=java)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen?logo=spring-boot)
![RabbitMQ](https://img.shields.io/badge/Messaging-RabbitMQ-orange?logo=rabbitmq)
![CI](https://github.com/tundeadetunji/quick-hire_docs/actions/workflows/ci.yml/badge.svg)


A lightweight frontend & documentation layer for the QuickHire+ microservices MVP.

🔗 [Live Demo on Render](https://quick-hire-docs.onrender.com)

🛠️ Tech Stack  
- ⚛️ React + Vite (TypeScript)  
- 📡 RESTful integration with backend microservices  
- 🔁 Messaging flow illustration (via Swagger links)  
- ⚙️ Spring Boot, RabbitMQ, H2/PostgreSQL (via backend)  
- 🚀 Ready for CI/CD via GitHub Actions

📂 Features  
- Role-based navigation for:  
  ✅ Candidates  
  ✅ Recruiters  
  ✅ Admins  
- Swagger links for all backend services  
- Summary of features and flows

📐 Architecture Overview  
```
+-------------------+       RabbitMQ        +-------------------+
|  Candidate Service|  ───────────────▶     |  Recruiter Service|
|                   |       🔔 Notify       |                   |
| - Apply to jobs   |◀───────────────       | - Manage Jobs     |
+-------------------+                      ◀| - Notify Admin    |
                                            +-------------------+
                                                   │
                                                   ▼
                                       +------------------------+
                                       |    Admin Service       |
                                       | - Logs notifications   |
                                       | - In-memory store      |
                                       +------------------------+
```

📘 Purpose  
This UI helps illustrate backend interactions and microservice coordination.
