@echo off
echo ========================================
echo    DocuFlow - GitHub Upload Script
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed!
    echo Please install Git from https://git-scm.com/downloads
    pause
    exit /b 1
)

echo Step 1: Initializing Git repository...
git init
if errorlevel 1 (
    echo Git repository already exists.
)

echo.
echo Step 2: Configuring Git user (if needed)...
git config user.name >nul 2>&1
if errorlevel 1 (
    set /p USERNAME="Enter your name: "
    set /p EMAIL="Enter your email: "
    git config user.name "%USERNAME%"
    git config user.email "%EMAIL%"
    echo User configured successfully!
) else (
    echo User already configured.
)

echo.
echo Step 3: Adding all files to Git...
git add .
echo Files added successfully!

echo.
echo Step 4: Creating initial commit...
git commit -m "Initial commit: DocuFlow Document Management System"
if errorlevel 1 (
    echo Nothing to commit or commit failed.
)

echo.
echo Step 5: Setting default branch to 'main'...
git branch -M main

echo.
echo ========================================
echo   Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Create a new repository on GitHub
echo 2. Copy the repository URL
echo 3. Run: git remote add origin YOUR_GITHUB_URL
echo 4. Run: git push -u origin main
echo.
echo Or use the following command:
echo git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
echo git push -u origin main
echo.
echo See GITHUB_UPLOAD_GUIDE.md for detailed instructions!
echo.
pause
