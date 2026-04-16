# Script de déploiement local avec Docker (Windows PowerShell)
# Exécution: .\deploy.ps1

$ErrorActionPreference = "Stop"

Write-Host "🐳 Monportfolio - Docker Deployment Script (Windows)" -ForegroundColor Cyan
Write-Host "=====================================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier Docker
try {
    $dockerVersion = docker --version
    Write-Host "[✓] Docker détecté: $dockerVersion" -ForegroundColor Green
} catch {
    Write-Host "[✗] Docker n'est pas installé!" -ForegroundColor Red
    exit 1
}

# Menu principal
Write-Host ""
Write-Host "Que veux-tu faire?" -ForegroundColor Yellow
Write-Host "1) Build l'image Docker"
Write-Host "2) Lancer le conteneur"
Write-Host "3) Arrêter le conteneur"
Write-Host "4) Afficher les logs"
Write-Host "5) Build + Lancer"
Write-Host "6) Nettoyer (supprimer tout)"
Write-Host "7) Afficher l'état"
Write-Host ""

$choice = Read-Host "Choisis une option (1-7)"

switch ($choice) {
    "1" {
        Write-Host "[INFO] Build de l'image Docker..." -ForegroundColor Cyan
        docker build -t monportfolio:latest .
        Write-Host "[✓] Build terminé!" -ForegroundColor Green
    }
    "2" {
        Write-Host "[INFO] Lancement du conteneur..." -ForegroundColor Cyan
        
        $containerExists = docker ps -a --format "{{.Names}}" | Select-String "^monportfolio$"
        
        if ($containerExists) {
            Write-Host "[!] Un conteneur monportfolio existe déjà" -ForegroundColor Yellow
            $remove = Read-Host "Veux-tu le supprimer? (y/n)"
            
            if ($remove -eq "y" -or $remove -eq "Y") {
                docker rm -f monportfolio | Out-Null
            }
        }
        
        docker run -d -p 3000:3000 --name monportfolio monportfolio:latest | Out-Null
        Write-Host "[✓] Conteneur lancé!" -ForegroundColor Green
        Write-Host "[→] Accède à http://localhost:3000" -ForegroundColor Green
    }
    "3" {
        Write-Host "[INFO] Arrêt du conteneur..." -ForegroundColor Cyan
        
        try {
            docker stop monportfolio | Out-Null
            Write-Host "[✓] Conteneur arrêté!" -ForegroundColor Green
        } catch {
            Write-Host "[!] Conteneur pas trouvé" -ForegroundColor Yellow
        }
    }
    "4" {
        Write-Host "[INFO] Affichage des logs (Ctrl+C pour quitter)..." -ForegroundColor Cyan
        docker logs -f monportfolio
    }
    "5" {
        Write-Host "[INFO] Build + Lancement..." -ForegroundColor Cyan
        
        docker build -t monportfolio:latest .
        
        $containerExists = docker ps -a --format "{{.Names}}" | Select-String "^monportfolio$"
        if ($containerExists) {
            docker rm -f monportfolio 2>$null | Out-Null
        }
        
        docker run -d -p 3000:3000 --name monportfolio monportfolio:latest | Out-Null
        
        Write-Host "[✓] Build et lancement terminés!" -ForegroundColor Green
        Write-Host "[→] Accède à http://localhost:3000" -ForegroundColor Green
    }
    "6" {
        Write-Host "[!] Suppression de l'image et du conteneur..." -ForegroundColor Yellow
        
        docker stop monportfolio 2>$null | Out-Null
        docker rm -f monportfolio 2>$null | Out-Null
        docker rmi -f monportfolio:latest 2>$null | Out-Null
        
        Write-Host "[✓] Nettoyage terminé!" -ForegroundColor Green
    }
    "7" {
        Write-Host "[INFO] État du conteneur..." -ForegroundColor Cyan
        docker ps -a --filter "name=monportfolio" --format "table {{.Names}}`t{{.Status}}`t{{.Ports}}"
    }
    default {
        Write-Host "[✗] Option invalide!" -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "[✓] Terminé!" -ForegroundColor Green
