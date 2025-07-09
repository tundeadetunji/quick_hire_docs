import React from 'react';
import logo from './logo.svg';
import './App.css';

const swaggerLinks = [
  {
    title: 'Candidate Service',
    url: 'https://quick-hire-candidate-service.onrender.com/swagger-ui/index.html',
    description: 'Handles account creation and job applications.',
    repo:'https://github.com/tundeadetunji/quick-hire_candidate-service'
  },
  {
    title: 'Recruiter Service',
    url: 'https://quick-hire-recruiter-service.onrender.com/swagger-ui/index.html',
    description: 'Manages job posting, recruiters, and applications.',
    repo:'https://github.com/tundeadetunji/quick-hire_recruiter-service'
  },
  {
    title: 'Admin Service',
    url: 'https://quick-hire-admin-service.onrender.com/swagger-ui/index.html',
    description: 'Internal listeners and admin notifications.',
    repo:'https://github.com/tundeadetunji/quick-hire_admin-service'
  },
];

function App() {
  return (
    <div className="container mt-5">
      {/* Header Card */}
      <div className="row justify-content-center mb-4">
        <div className="col-sm-12 col-md-8">
          <div className="card text-center shadow">
            <div className="card-body">
              <h2 className="card-title mb-0">QuickHire+ API Docs</h2>
              <a
                  href='https://github.com/tundeadetunji/quick_hire_docs'
                  className="btn btn-primary mt-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
            </div>
          </div>
        </div>
      </div>

      {/* Swagger Links as Cards */}
      <div className="row">
        {swaggerLinks.map(({ title, url, description, repo }) => (
          <div key={title} className="col-sm-12 col-md-4 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <p className="card-text flex-grow-1">{description}</p>
                <a
                  href={url}
                  className="btn btn-primary mt-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Swagger Docs
                </a>
              </div>
              <div className="card-footer text-muted small text-break">
                {
                 <a
                  href={repo}
                  className="btn btn-primary mt-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a> }

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
