# 🤝 Contributing to DocuFlow

First off, thank you for considering contributing to DocuFlow! It's people like you that make DocuFlow such a great tool.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)

---

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please be respectful and considerate in all interactions.

---

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a branch** for your feature/fix
4. **Make your changes**
5. **Test thoroughly**
6. **Submit a pull request**

---

## 💡 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the bug
- **Expected behavior** vs **actual behavior**
- **Screenshots** if applicable
- **Environment details** (OS, Java version, Node version)
- **Error messages** and stack traces

**Example:**
```markdown
## Bug: Upload fails for files over 10MB

### Steps to Reproduce:
1. Navigate to upload page
2. Select a file larger than 10MB
3. Click upload

### Expected: File uploads successfully
### Actual: Error message "Upload failed"

### Environment:
- OS: Windows 11
- Browser: Chrome 120
- Backend: Java 17, Spring Boot 3.5.6
```

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear title**
- **Provide detailed description** of the enhancement
- **Explain why this enhancement would be useful**
- **List potential drawbacks** if any

### Pull Requests

- **Fix bugs** or **implement features** from issues
- **Improve documentation**
- **Add tests**
- **Refactor code** for better quality

---

## 🛠️ Development Setup

### Prerequisites

- Java 17+
- Node.js 16+
- MongoDB 6.0+
- Maven 3.8+
- Git

### Setup Instructions

1. **Fork and clone:**
```bash
git clone https://github.com/YOUR_USERNAME/docuflow.git
cd docuflow
```

2. **Backend setup:**
```bash
cd backend
./mvnw install
./mvnw spring-boot:run
```

3. **Frontend setup:**
```bash
cd frontend/docuflow-frontend
npm install
npm start
```

4. **MongoDB:**
```bash
cd infra
docker-compose up -d
```

---

## 🔄 Pull Request Process

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `refactor/` - Code refactoring
- `test/` - Adding tests

### 2. Make Your Changes

- Write clean, readable code
- Follow existing code style
- Add comments for complex logic
- Update documentation if needed

### 3. Test Your Changes

**Backend:**
```bash
./mvnw test
./mvnw spring-boot:run
```

**Frontend:**
```bash
npm test
npm run build
npm start
```

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat: add document download functionality"
```

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create Pull Request

1. Go to the original repository
2. Click "New Pull Request"
3. Select your branch
4. Fill in the PR template
5. Submit for review

---

## 🎨 Style Guidelines

### Java Code Style

```java
// ✅ Good
public class DocumentService {
    private final DocumentRepository repository;
    
    public Document upload(MultipartFile file, String owner) throws IOException {
        Document doc = new Document();
        doc.setFileName(file.getOriginalFilename());
        return repository.save(doc);
    }
}

// ❌ Avoid
public class documentservice {
    public Document Upload(MultipartFile File,String Owner) throws IOException{
        Document Doc=new Document();
        Doc.setFileName(File.getOriginalFilename());return repository.save(Doc);}
}
```

**Rules:**
- Use PascalCase for classes
- Use camelCase for methods and variables
- 4 spaces indentation
- Max line length: 120 characters
- Use Lombok annotations where appropriate

### JavaScript/React Code Style

```javascript
// ✅ Good
export default function UploadDoc() {
  const [file, setFile] = useState(null);
  
  const handleUpload = async () => {
    if (!file) return;
    // Upload logic
  };
  
  return (
    <div className="upload-container">
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

// ❌ Avoid
export default function uploadDoc(){
const [File,SetFile]=useState(null)
function HandleUpload(){if(!File)return
}
return <div><button onClick={HandleUpload}>Upload</button></div>
}
```

**Rules:**
- Use PascalCase for components
- Use camelCase for functions and variables
- 2 spaces indentation
- Use functional components with hooks
- Destructure props

### CSS Style Guidelines

```css
/* ✅ Good */
.upload-button {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.upload-button:hover {
  transform: translateY(-2px);
}

/* ❌ Avoid */
.UploadButton{padding:1rem 2rem;background:#667eea;border-radius:8px}
.UploadButton:hover{transform:translateY(-2px)}
```

---

## 📝 Commit Messages

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
# Feature
feat(upload): add drag-and-drop file upload

# Bug fix
fix(api): resolve CORS issue for document upload

# Documentation
docs(readme): update installation instructions

# Refactoring
refactor(service): simplify document upload logic

# Multiple changes
feat(frontend): redesign document list UI

- Add responsive table design
- Implement file type icons
- Add owner avatars
- Improve loading states
```

---

## ✅ Checklist Before Submitting PR

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated and passing
- [ ] Changes tested locally
- [ ] Branch is up to date with main
- [ ] Commit messages follow convention
- [ ] PR description is clear

---

## 🧪 Testing Guidelines

### Backend Tests

```java
@Test
void shouldUploadDocument() throws Exception {
    // Arrange
    MockMultipartFile file = new MockMultipartFile(
        "file", "test.pdf", "application/pdf", "test data".getBytes()
    );
    
    // Act
    Document result = documentService.upload(file, "John Doe");
    
    // Assert
    assertNotNull(result);
    assertEquals("test.pdf", result.getFileName());
}
```

### Frontend Tests

```javascript
test('renders upload button', () => {
  render(<UploadDoc />);
  const buttonElement = screen.getByText(/Upload Document/i);
  expect(buttonElement).toBeInTheDocument();
});
```

---

## 📚 Additional Resources

- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [React Documentation](https://reactjs.org/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Git Best Practices](https://git-scm.com/book/en/v2)

---

## ❓ Questions?

Feel free to open an issue with the label `question` or reach out to the maintainers.

---

<div align="center">

**Thank you for contributing to DocuFlow! 🎉**

</div>
