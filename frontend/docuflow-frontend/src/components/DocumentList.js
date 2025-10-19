import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DocumentList.css";

export default function DocumentList() {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadDocuments();
  }, []);

  const loadDocuments = () => {
    setLoading(true);
    setError(null);
    axios.get("http://localhost:8081/api/documents")
      .then(res => {
        setDocs(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to load documents");
        setLoading(false);
      });
  };

  const getFileIcon = (fileName) => {
    const ext = fileName?.split('.').pop()?.toLowerCase();
    switch (ext) {
      case 'pdf':
        return '📄';
      case 'doc':
      case 'docx':
        return '📝';
      case 'xls':
      case 'xlsx':
        return '📊';
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return '🖼️';
      case 'zip':
      case 'rar':
        return '📦';
      default:
        return '📎';
    }
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return 'N/A';
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  return (
    <div className="document-list-card">
      <div className="card-header">
        <div className="header-left">
          <h2>📚 Document Library</h2>
          <p>{docs.length} {docs.length === 1 ? 'document' : 'documents'} stored</p>
        </div>
        <button className="refresh-button" onClick={loadDocuments} disabled={loading}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={loading ? "spinning" : ""}>
            <polyline points="23 4 23 10 17 10"/>
            <polyline points="1 20 1 14 7 14"/>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
          </svg>
          Refresh
        </button>
      </div>
      
      <div className="card-body">
        {loading ? (
          <div className="loading-state">
            <div className="spinner-large"></div>
            <p>Loading documents...</p>
          </div>
        ) : error ? (
          <div className="error-state">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <p>{error}</p>
            <button onClick={loadDocuments} className="retry-button">Try Again</button>
          </div>
        ) : docs.length === 0 ? (
          <div className="empty-state">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
              <polyline points="13 2 13 9 20 9"/>
            </svg>
            <p className="empty-title">No documents yet</p>
            <p className="empty-subtitle">Upload your first document to get started</p>
          </div>
        ) : (
          <div className="table-container">
            <table className="documents-table">
              <thead>
                <tr>
                  <th>Document</th>
                  <th>Owner</th>
                  <th>Type</th>
                  <th>Size</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {docs.map(doc => (
                  <tr key={doc.id}>
                    <td>
                      <div className="document-cell">
                        <span className="file-icon">{getFileIcon(doc.fileName)}</span>
                        <div className="doc-info">
                          <span className="doc-name">{doc.fileName || 'Untitled'}</span>
                          <span className="doc-id">ID: {doc.id?.substring(0, 8)}...</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="owner-cell">
                        <div className="owner-avatar">{doc.owner?.charAt(0).toUpperCase()}</div>
                        <span>{doc.owner || 'Unknown'}</span>
                      </div>
                    </td>
                    <td>
                      <span className="file-type-badge">{doc.fileType || 'N/A'}</span>
                    </td>
                    <td>{formatFileSize(doc.content?.length)}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="action-btn view-btn" title="View">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                          </svg>
                        </button>
                        <button className="action-btn download-btn" title="Download">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="7 10 12 15 17 10"/>
                            <line x1="12" y1="15" x2="12" y2="3"/>
                          </svg>
                        </button>
                        <button className="action-btn delete-btn" title="Delete">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
