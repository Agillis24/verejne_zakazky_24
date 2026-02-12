@echo off
echo.
echo ========================================
echo   Verejne zakazky 24 - Quick Setup
echo ========================================
echo.

:: Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js neni nainstalovany!
    echo Stahněte a nainstalujte z: https://nodejs.org/
    pause
    exit /b 1
)

echo [OK] Node.js je nainstalovany
node --version
echo.

:: Check if npm is available
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] npm neni dostupny!
    pause
    exit /b 1
)

echo [OK] npm je dostupny
npm --version
echo.

:: Install dependencies
echo ========================================
echo   Instalace zavislosti...
echo ========================================
echo.

if not exist "node_modules" (
    echo Spoustim npm install...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] npm install selhal!
        pause
        exit /b 1
    )
) else (
    echo [OK] node_modules jiz existuje
)

echo.
echo ========================================
echo   Kontrola obrazku...
echo ========================================
echo.

set IMAGES_DIR=public\images
set MISSING=0

if not exist "%IMAGES_DIR%" (
    echo [WARNING] Slozka %IMAGES_DIR% neexistuje!
    echo Vytvarim...
    mkdir "%IMAGES_DIR%"
)

:: Check each required image
set "IMAGES=logo.png hero.png jan-musil.jpg dominik-zlebek.jpg why-follow.png tenderix.png"

for %%i in (%IMAGES%) do (
    if exist "%IMAGES_DIR%\%%i" (
        echo [OK] %%i
    ) else (
        echo [MISSING] %%i
        set /a MISSING+=1
    )
)

echo.
if %MISSING% gtr 0 (
    echo [WARNING] Chybi %MISSING% obrazku!
    echo Prectete si IMAGE_SETUP.md pro instrukce.
) else (
    echo [OK] Vsechny obrazky jsou na miste!
)

echo.
echo ========================================
echo   Test build...
echo ========================================
echo.

call npm run build
if %errorlevel% neq 0 (
    echo [ERROR] Build selhal!
    pause
    exit /b 1
)

echo.
echo [OK] Build uspesny!
echo.

:: Summary
echo ========================================
echo   Shrnuti
echo ========================================
echo.

if %MISSING% equ 0 (
    echo [OK] Projekt je PRIPRAVEN k deployu!
    echo.
    echo Dalsi kroky:
    echo 1. Vytvorte GitHub repository
    echo 2. git init
    echo 3. git add .
    echo 4. git commit -m "Initial commit"
    echo 5. git remote add origin YOUR_REPO_URL
    echo 6. git push -u origin main
    echo 7. npm run deploy
) else (
    echo [WARNING] Projekt NENI UPLNE pripraven
    echo.
    echo Chybejici kroky:
    echo 1. Pridejte chybejici obrazky do public/images/
    echo    (viz IMAGE_SETUP.md)
    echo 2. Spustte tento script znovu
)

echo.
echo Dalsi informace:
echo - README.md
echo - DEPLOYMENT.md
echo - DEPLOY_CHECKLIST.md
echo - IMAGE_SETUP.md
echo.

pause
