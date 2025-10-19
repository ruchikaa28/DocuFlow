# 🚀 GitHub Upload Guide

Follow these steps to upload your DocuFlow project to GitHub.

## Prerequisites

1. **Create a GitHub account** (if you don't have one)
   - Go to https://github.com/signup

2. **Install Git** (if not already installed)
   - Download from https://git-scm.com/downloads
   - Verify installation: `git --version`

---

## Step 1: Create a New Repository on GitHub

1. Go to https://github.com/new
2. Fill in the repository details:
   - **Repository name:** `docuflow` (or your preferred name)
   - **Description:** "Smart Document Management System with Spring Boot and React"
   - **Visibility:** Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
3. Click **"Create repository"**

---

## Step 2: Initialize Git in Your Project

Open PowerShell or Command Prompt in your project directory:

```powershell
# Navigate to your project root
cd "E:\Ruchika TE\Docuflow"

# Initialize git repository
git init

# Configure your identity (if not done before)
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

---

## Step 3: Add All Files to Git

```powershell
# Add all files to staging
git add .

# Check what will be committed
git status

# Commit with a message
git commit -m "Initial commit: DocuFlow Document Management System"
```

---

## Step 4: Connect to GitHub Repository

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name:

```powershell
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Verify remote was added
git remote -v
```

---

## Step 5: Push to GitHub

```powershell
# Push to GitHub (main branch)
git branch -M main
git push -u origin main
```

If this is your first time pushing, Git may ask for authentication:
- **Option A:** Use GitHub Personal Access Token (recommended)
- **Option B:** Use SSH keys

### Authentication Option A: Personal Access Token

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name (e.g., "DocuFlow")
4. Select scopes: `repo` (full control of private repositories)
5. Click "Generate token"
6. Copy the token (you won't see it again!)
7. When prompted for password, paste the token

### Authentication Option B: SSH Keys

```powershell
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Copy the public key
cat ~/.ssh/id_ed25519.pub

# Add it to GitHub: Settings → SSH and GPG keys → New SSH key

# Change remote URL to SSH
git remote set-url origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git

# Push again
git push -u origin main
```

---

## Step 6: Verify Upload

1. Go to your GitHub repository URL
2. You should see all your files uploaded
3. The README.md will be displayed on the repository home page

---

## 🎉 Success!

Your DocuFlow project is now on GitHub! 

### Next Steps:

1. **Update the README** with your GitHub username:
   ```bash
   # Replace YOUR_USERNAME in README.md
   git clone https://github.com/YOUR_USERNAME/docuflow.git
   ```

2. **Add a repository description** on GitHub

3. **Add topics** to make your repo discoverable:
   - Go to repository → Settings → About
   - Add topics: `spring-boot`, `react`, `mongodb`, `document-management`, `java`, `javascript`

4. **Consider adding:**
   - Repository social preview image (1280x640px)
   - GitHub Actions for CI/CD
   - Issues and pull request templates
   - Wiki documentation

---

## 📝 Making Future Changes

After making changes to your code:

```powershell
# See what changed
git status

# Add changed files
git add .

# Or add specific files
git add backend/src/main/java/com/docuflow/backend/controller/DocumentController.java

# Commit with descriptive message
git commit -m "Add document download functionality"

# Push to GitHub
git push
```

---

## 🌿 Working with Branches

Create feature branches for new features:

```powershell
# Create and switch to new branch
git checkout -b feature/add-authentication

# Make your changes...

# Commit changes
git add .
git commit -m "Implement user authentication"

# Push branch to GitHub
git push -u origin feature/add-authentication

# Create pull request on GitHub
```

---

## 🔄 Keeping Your Fork Updated

If you fork this repository:

```powershell
# Add upstream remote (original repository)
git remote add upstream https://github.com/ORIGINAL_OWNER/docuflow.git

# Fetch updates
git fetch upstream

# Merge updates into your main branch
git checkout main
git merge upstream/main

# Push to your fork
git push origin main
```

---

## ⚠️ Common Issues

### Issue 1: Authentication Failed
**Solution:** Use Personal Access Token instead of password

### Issue 2: Permission Denied
**Solution:** Make sure you own the repository or have write access

### Issue 3: Large Files Error
**Solution:** Files over 100MB need Git LFS
```powershell
git lfs install
git lfs track "*.large"
```

### Issue 4: Merge Conflicts
**Solution:** 
```powershell
# Pull latest changes
git pull origin main

# Fix conflicts in files
# Then commit
git add .
git commit -m "Resolve merge conflicts"
git push
```

---

## 📚 Useful Git Commands

```powershell
# View commit history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard local changes
git checkout -- filename

# Create .gitignore after adding files
git rm -r --cached .
git add .
git commit -m "Apply .gitignore"

# View differences
git diff

# View remote repositories
git remote -v

# Clone your repository
git clone https://github.com/YOUR_USERNAME/docuflow.git
```

---

## 🎓 Learning Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Interactive Git Tutorial](https://learngitbranching.js.org/)

---

## 🆘 Need Help?

If you encounter issues:
1. Check GitHub's [documentation](https://docs.github.com/)
2. Search on [Stack Overflow](https://stackoverflow.com/questions/tagged/git)
3. Ask in the repository issues

---

<div align="center">

**Happy Coding! 🚀**

</div>
