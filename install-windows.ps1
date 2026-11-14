#!/usr/bin/env pwsh
# ZinZ1-Web Windows Installer
# Auteur : mth92340
# Année : 2026

Write-Host "=== ZinZ1-Web Windows Installer ===" -ForegroundColor Cyan
Write-Host ""

# Vérification de l'administrateur
Write-Host "Vérification des droits administrateur..." -ForegroundColor Yellow
$principal = New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent())
if (-not $principal.IsInRole([Security.Principal.WindowsBuiltinRole]::Administrator)) {
    Write-Error "Ce script nécessite des droits administrateur. Relancez-le en tant qu'administrateur."
    Read-Host "Appuyez sur Entrée pour quitter"
    exit 1
}
Write-Host "Droits administrateur confirmés ✓" -ForegroundColor Green

Write-Host ""

# Étape 1: Vérification de Node.js
Write-Host "=== Étape 1 : Vérification de Node.js ===" -ForegroundColor Cyan

$nodeVersion = (Get-Command node -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Version -ErrorAction SilentlyContinue)
if ($nodeVersion) {
    Write-Host "Node.js détecté : $($nodeVersion.FileVersion)" -ForegroundColor Green
    $npmVersion = (Get-Command npm -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Version -ErrorAction SilentlyContinue)
    if ($npmVersion) {
        Write-Host "npm détecté : $($npmVersion.FileVersion)" -ForegroundColor Green
    }
} else {
    Write-Host "Node.js non détecté. Téléchargement en cours..." -ForegroundColor Yellow
    
    # Téléchargement de Node.js LTS
    $nodeUrl = "https://nodejs.org/dist/v20.18.0/node-v20.18.0-x64.msi"
    $tempPath = "$env:TEMP\node-installer.msi"
    
    Write-Host "Téléchargement de Node.js LTS depuis $nodeUrl" -ForegroundColor Yellow
    try {
        Invoke-WebRequest -Uri $nodeUrl -OutFile $tempPath -ErrorAction Stop
        Write-Host "Téléchargement terminé ✓" -ForegroundColor Green
    } catch {
        Write-Error "Échec du téléchargement de Node.js"
        Read-Host "Appuyez sur Entrée pour quitter"
        exit 1
    }
    
    Write-Host "Lancement de l'installateur Node.js..." -ForegroundColor Yellow
    Start-Process "msiexec.exe" -ArgumentList "/i `"$tempPath`" /quiet" -Wait
    Write-Host "Node.js installé avec succès ✓" -ForegroundColor Green
}

Write-Host ""

# Étape 2: Vérification du répertoire d'installation
Write-Host "=== Étape 2 : Répertoire d'installation ===" -ForegroundColor Cyan

$projectDir = "$env:USERPROFILE\Zinz1-Web"
if (-not (Test-Path $projectDir)) {
    Write-Host "Création du répertoire d'installation : $projectDir" -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $projectDir -Force | Out-Null
    Write-Host "Répertoire créé ✓" -ForegroundColor Green
} else {
    Write-Host "Répertoire existant : $projectDir" -ForegroundColor Green
}

Write-Host ""

# Étape 3: Clonage du dépôt
Write-Host "=== Étape 3 : Clonage du dépôt ===" -ForegroundColor Cyan

if (-not (Test-Path "$projectDir\.git")) {
    Write-Host "Clonage du dépôt GitHub..." -ForegroundColor Yellow
    try {
        git clone "https://github.com/mth92340/Zinz1-Web.git" "$projectDir"
        Write-Host "Dépôt cloné avec succès ✓" -ForegroundColor Green
    } catch {
        Write-Error "Échec du clonage du dépôt"
        Read-Host "Appuyez sur Entrée pour quitter"
        exit 1
    }
} else {
    Write-Host "Dépôt déjà présent dans $projectDir" -ForegroundColor Green
}

Write-Host ""

# Étape 4: Installation des dépendances
Write-Host "=== Étape 4 : Installation des dépendances ===" -ForegroundColor Cyan

Set-Location "$projectDir"
Write-Host "Exécution de 'npm install'..." -ForegroundColor Yellow
try {
    npm install
    Write-Host "Dépendances installées avec succès ✓" -ForegroundColor Green
} catch {
    Write-Error "Échec de l'installation des dépendances"
    Read-Host "Appuyez sur Entrée pour quitter"
    exit 1
}

Write-Host ""

# Étape 5: Lancement du panel
Write-Host "=== Étape 5 : Lancement du panel ===" -ForegroundColor Cyan

Write-Host "Démarrage du panel ZinZ1-Web..." -ForegroundColor Yellow
Write-Host "Le panel sera accessible sur : http://localhost:3000" -ForegroundColor Cyan
Write-Host ""

try {
    npm run dev
} catch {
    Write-Host "Le panel a démarré. Appuyez sur Ctrl+C pour l'arrêter." -ForegroundColor Green
    # Attendre en boucle
    do { Start-Sleep 5 } until (-not (Get-Process -Name "node" -ErrorAction SilentlyContinue))
}

Write-Host ""
Write-Host "=== Installation terminée avec succès ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "Résumé :"
Write-Host "  - Node.js : $(if (Get-Command node -ErrorAction SilentlyContinue) { Write-Host 'installé'; } else { Write-Host 'non installé'; })"
Write-Host "  - Dépôt : cloné dans $projectDir"
Write-Host "  - Dépendances : installées"
Write-Host "  - Panel : accessible sur http://localhost:3000"
Write-Host ""
Write-Host "Pour accéder au panel, ouvrez votre navigateur et allez sur : http://localhost:3000"
Write-Host ""
Write-Host "En cas de problème, consultez : https://github.com/mth92340/Zinz1-Web/issues"
Write-Host ""

Read-Host "Appuyez sur Entrée pour quitter"