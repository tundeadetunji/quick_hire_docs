![CI](https://github.com/tundeadetunji/quick-hire_docs/actions/workflows/ci.yml/badge.svg)


A lightweight frontend & documentation layer for the QuickHire+ microservices MVP.

🔗 [Live Demo on Render](https://quick-hire-docs.onrender.com)

🧰 Tech Stack:
- ⚛️ React
- 🌐 RESTful API Integration with Spring Boot Microservices
- 📬 RabbitMQ (Async Messaging via Backend)
- 🛡️ Resilience4j (Observability Layer via Backend)
- 🗄️ H2 / PostgreSQL (DB Strategy via Backend)
- 🧪 JUnit 5, 🎭 Mockito (Backend Testing)
- ⚙️ CI/CD via GitHub Actions

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

---

⚠️ Deployment Note on Cold Start Behavior (Render)

QuickHire+ is deployed on [Render](https://render.com).

When inactive for some time, services may enter a **"cold" state**, resulting in:

- Initial request latency (10–30s) as services spin up
- Temporary 502/504 responses until startup completes

🧪 To trigger warm-up manually:
- Open Swagger UI or hit a simple `/health` or `/actuator/info` endpoint
- Wait a few seconds for services to fully boot
