import React, { useState } from "react";
import axios from "axios";
import "./UploadDoc.css";

export default function UploadDoc() {
  const [file, setFile] = useState(null);
  const [owner, setOwner] = useState("");
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const upload = async () => {
    if (!file || !owner) {
      alert("Please select a file and enter owner name");
      return;
    }
    
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("owner", owner);
    
    try {
      await axios.post("http://localhost:8081/api/documents/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ File uploaded successfully!");
      setFile(null);
      setOwner("");
      window.location.reload();
    } catch (error) {
      console.error("Upload error:", error);
      const details = error?.response?.data || error?.message || error;
      alert(`❌ Upload failed: ${JSON.stringify(details)}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="upload-card">
      <div className="card-header">
        <h2>📤 Upload Document</h2>
        <p>Upload and manage your documents securely</p>
      </div>
      
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="owner-input">Document Owner</label>
          <input
            id="owner-input"
            type="text"
            placeholder="Enter owner name"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            className="text-input"
            disabled={uploading}
          />
        </div>

        <div className="form-group">
          <label>Select File</label>
          <div
            className={`file-drop-zone ${dragActive ? "drag-active" : ""} ${file ? "has-file" : ""}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              onChange={handleFileChange}
              className="file-input"
              id="file-input"
              disabled={uploading}
            />
            <label htmlFor="file-input" className="file-label">
              {file ? (
                <div className="file-selected">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                    <polyline points="13 2 13 9 20 9"/>
                  </svg>
                  <div className="file-info">
                    <p className="file-name">{file.name}</p>
                    <p className="file-size">{(file.size / 1024).toFixed(2)} KB</p>
                  </div>
                </div>
              ) : (
                <div className="file-placeholder">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="17 8 12 3 7 8"/>
                    <line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                  <p className="drop-text">Drag & drop your file here</p>
                  <p className="or-text">or</p>
                  <span className="browse-button">Browse Files</span>
                </div>
              )}
            </label>
          </div>
        </div>

        <button
          onClick={upload}
          className={`upload-button ${uploading ? "uploading" : ""}`}
          disabled={uploading || !file || !owner}
        >
          {uploading ? (
            <>
              <span className="spinner"></span>
              Uploading...
            </>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="17 8 12 3 7 8"/>
                <line x1="12" y1="3" x2="12" y2="15"/>
              </svg>
              Upload Document
            </>
          )}
        </button>
      </div>
    </div>
  );
}