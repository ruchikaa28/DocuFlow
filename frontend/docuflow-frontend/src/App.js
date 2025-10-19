import React from "react";
import UploadDoc from "./components/UploadDoc";
import DocumentList from "./components/DocumentList";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <div className="logo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="4" width="24" height="32" rx="2" stroke="white" strokeWidth="2"/>
              <line x1="12" y1="12" x2="28" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="12" y1="18" x2="28" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="12" y1="24" x2="22" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <h1>DocuFlow</h1>
          </div>
          <p className="tagline">Smart Document Management System</p>
        </div>
      </header>
      
      <main className="main-content">
        <div className="content-wrapper">
          <UploadDoc />
          <DocumentList />
        </div>
      </main>
      
      <footer className="app-footer">
        <p>&copy; 2025 DocuFlow. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
