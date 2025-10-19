# 📄 DocuFlow - Smart Document Management System

<div align="center">

![DocuFlow Logo](https://img.shields.io/badge/DocuFlow-Document%20Management-blueviolet?style=for-the-badge&logo=files)

A modern, full-stack document management system built with Spring Boot and React.

[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5.6-brightgreen?style=flat-square&logo=spring-boot)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0-green?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![Java](https://img.shields.io/badge/Java-17-orange?style=flat-square&logo=openjdk)](https://www.oracle.com/java/)

</div>

---

## 🌟 Features

### ✨ Modern UI/UX
- 🎨 Professional gradient design with purple theme
- 📤 Drag-and-drop file upload
- 📊 Interactive document library with real-time updates
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Smooth animations and transitions
- 🎯 File type detection with visual icons

### 🔐 Backend Features
- 🚀 RESTful API built with Spring Boot
- 💾 MongoDB for document storage
- 🔒 Spring Security with configurable authentication
- 📝 Multipart file upload support
- 🔄 CORS enabled for frontend integration
- 📊 Actuator endpoints for monitoring

### 📦 Document Management
- ✅ Upload documents with owner information
- 📋 View all documents in a clean table
- 👤 Owner avatars and file type badges
- 💾 File size display and metadata
- 🔍 File type detection (PDF, DOC, images, etc.)
- 🎯 Action buttons (view, download, delete - ready for implementation)

---

## 🏗️ Architecture

```
DocuFlow/
├── backend/                 # Spring Boot REST API
│   ├── src/main/java/
│   │   └── com/docuflow/backend/
│   │       ├── config/      # Security & configurations
│   │       ├── controller/  # REST endpoints
│   │       ├── model/       # Data models
│   │       ├── repository/  # MongoDB repositories
│   │       └── service/     # Business logic
│   ├── src/main/resources/
│   │   └── application.yml  # Configuration
│   └── pom.xml             # Maven dependencies
│
├── frontend/               # React SPA
│   └── docuflow-frontend/
│       ├── public/
│       ├── src/
│       │   ├── components/ # React components
│       │   ├── App.js      # Main app
│       │   └── App.css     # Global styles
│       └── package.json    # NPM dependencies
│
└── infra/                  # Infrastructure
    └── docker-compose.yml  # MongoDB setup
```

---

## 🚀 Getting Started

### Prerequisites

- ☕ Java 17 or higher
- 📦 Node.js 16 or higher
- 🍃 MongoDB 6.0 or higher
- 🛠️ Maven 3.8+ (included via wrapper)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/docuflow.git
cd docuflow
```

### 2️⃣ Start MongoDB

**Option A: Using Docker Compose** (Recommended)
```bash
cd infra
docker-compose up -d
```

**Option B: Local MongoDB**
```bash
# Start MongoDB on default port 27017
mongod
```

### 3️⃣ Start the Backend

```bash
cd backend
./mvnw spring-boot:run
```

**Windows:**
```powershell
cd backend
.\mvnw.cmd spring-boot:run
```

The backend will start on `http://localhost:8081`

### 4️⃣ Start the Frontend

```bash
cd frontend/docuflow-frontend
npm install
npm start
```

The frontend will open automatically at `http://localhost:3000`

---

## 🔧 Configuration

### Backend Configuration

Edit `backend/src/main/resources/application.yml`:

```yaml
spring:
  data:
    mongodb:
      uri: mongodb://127.0.0.1:27017/docuflow

server:
  port: 8081

management:
  endpoints:
    web:
      exposure:
        include: health,info
```

### Frontend Configuration

Update API endpoint in components if needed:
```javascript
// Default: http://localhost:8081
axios.get("http://localhost:8081/api/documents")
```

---

## 📡 API Endpoints

### Documents API

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/documents/upload` | Upload a new document |
| GET | `/api/documents` | Get all documents |

### Health & Info

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/actuator/health` | Check application health |
| GET | `/actuator/info` | Get application info |

### Example: Upload Document

```bash
curl -X POST http://localhost:8081/api/documents/upload \
  -F "file=@document.pdf" \
  -F "owner=John Doe"
```

---

## 🛠️ Technology Stack

### Backend
- **Framework:** Spring Boot 3.5.6
- **Language:** Java 17
- **Database:** MongoDB
- **Security:** Spring Security
- **Build Tool:** Maven
- **Dependencies:**
  - Spring Data MongoDB
  - Spring Web
  - Spring Security
  - Spring Actuator
  - Lombok
  - Apache Pulsar Client

### Frontend
- **Library:** React 18
- **HTTP Client:** Axios
- **Styling:** CSS3 with modern animations
- **Icons:** SVG icons
- **Build Tool:** Create React App

---

## 📸 Screenshots

### Upload Interface
Modern drag-and-drop file upload with visual feedback

### Document Library
Clean table view with file icons, owner avatars, and action buttons

---

## 🎨 Design System

**Color Palette:**
- Primary Gradient: `#667eea` → `#764ba2`
- Background: White cards on gradient background
- Text: Dark gray `#333` on light backgrounds
- Accent: Various colors for badges and states

**Typography:**
- Font Family: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto)
- Heading: 1.5rem - 2.5rem, weight 600-700
- Body: 0.9rem - 1rem

---

## 🔒 Security

- CSRF protection disabled for API endpoints (development mode)
- CORS enabled for `http://localhost:3000`
- Spring Security configured for `/api/**` access
- Production deployment should enable proper authentication

**⚠️ Important:** Update security configuration before production deployment!

---

## 🧪 Testing

### Backend Tests
```bash
cd backend
./mvnw test
```

### Frontend Tests
```bash
cd frontend/docuflow-frontend
npm test
```

---

## 📦 Building for Production

### Backend
```bash
cd backend
./mvnw clean package
java -jar target/backend-1.0.0.jar
```

### Frontend
```bash
cd frontend/docuflow-frontend
npm run build
# Serve the build folder with any static server
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Development

### Project Structure
- `backend/` - Spring Boot application
- `frontend/docuflow-frontend/` - React application
- `infra/` - Infrastructure configuration (Docker Compose)

### Key Components

**Backend:**
- `DocumentController` - REST API endpoints
- `DocumentService` - Business logic
- `DocumentRepository` - MongoDB data access
- `Document` - Entity model
- `SecurityConfig` - Security configuration

**Frontend:**
- `App.js` - Main application layout
- `UploadDoc.js` - File upload component
- `DocumentList.js` - Document table component

---

## 🐛 Known Issues

- Delete functionality is UI-only (needs backend implementation)
- Download functionality is UI-only (needs backend implementation)
- No pagination for large document lists
- No search/filter functionality yet

---

## 🗺️ Roadmap

- [ ] Implement document download functionality
- [ ] Add document deletion with confirmation
- [ ] User authentication and authorization
- [ ] Document preview/viewer
- [ ] Search and filter documents
- [ ] Pagination for large datasets
- [ ] Bulk upload support
- [ ] Document categories and tags
- [ ] File sharing and permissions
- [ ] Activity logs and audit trail
- [ ] Email notifications
- [ ] Advanced search with filters

---

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

## 🙏 Acknowledgments

- Spring Boot for the excellent framework
- React for the amazing UI library
- MongoDB for reliable document storage
- All open-source contributors

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ using Spring Boot and React

</div>
