import logo from './logo.svg';
import React from 'react';
import './App.css';

const swaggerLinks = [
  {
    title: 'Candidate Service',
    url: 'https://quick-hire-candidate-service.onrender.com/swagger-ui/index.html',
    description: 'Handles account creation and job applications.',
  },
  {
    title: 'Recruiter Service',
    url: 'https://quick-hire-recruiter-service.onrender.com/swagger-ui/index.html',
    description: 'Manages job posting, recruiters, and applications.',
  },
  {
    title: 'Admin Service',
    url: 'https://quick-hire-admin-service.onrender.com/swagger-ui/index.html',
    description: 'Internal listeners and admin notifications.',
  },
];

function App() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">QuickHire+ API Docs</h2>
      <div className="list-group">
        {swaggerLinks.map(({ title, url, description }) => (
          <a
            key={title}
            href={url}
            className="list-group-item list-group-item-action"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5 className="mb-1">{title}</h5>
            <p className="mb-1">{description}</p>
            <small>{url}</small>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
