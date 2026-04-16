#!/bin/bash
# Script de déploiement local avec Docker

set -e

echo "🐳 Monportfolio - Docker Deployment Script"
echo "=========================================="

# Couleurs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Fonction pour afficher les messages
info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Vérifier Docker
if ! command -v docker &> /dev/null; then
    error "Docker n'est pas installé!"
    exit 1
fi

info "Docker détecté: $(docker --version)"

# Menu principal
echo ""
echo "Que veux-tu faire?"
echo "1) Build l'image Docker"
echo "2) Lancer le conteneur"
echo "3) Arrêter le conteneur"
echo "4) Afficher les logs"
echo "5) Build + Lancer"
echo "6) Nettoyer (supprimer tout)"
echo "7) Afficher l'état"
echo ""
read -p "Choisis une option (1-7): " choice

case $choice in
    1)
        info "Build de l'image Docker..."
        docker build -t monportfolio:latest .
        info "Build terminé! ✓"
        ;;
    2)
        info "Lancement du conteneur..."
        if docker ps -a --format '{{.Names}}' | grep -q '^monportfolio$'; then
            warn "Un conteneur monportfolio existe déjà"
            read -p "Veux-tu le supprimer? (y/n): " -r
            if [[ $REPLY =~ ^[Yy]$ ]]; then
                docker rm -f monportfolio
            fi
        fi
        docker run -d -p 3000:3000 --name monportfolio monportfolio:latest
        info "Conteneur lancé! ✓"
        info "Accède à http://localhost:3000"
        ;;
    3)
        info "Arrêt du conteneur..."
        docker stop monportfolio 2>/dev/null || warn "Conteneur pas trouvé"
        info "Conteneur arrêté! ✓"
        ;;
    4)
        info "Affichage des logs (Ctrl+C pour quitter)..."
        docker logs -f monportfolio
        ;;
    5)
        info "Build + Lancement..."
        docker build -t monportfolio:latest .
        if docker ps -a --format '{{.Names}}' | grep -q '^monportfolio$'; then
            docker rm -f monportfolio
        fi
        docker run -d -p 3000:3000 --name monportfolio monportfolio:latest
        info "Build et lancement terminés! ✓"
        info "Accède à http://localhost:3000"
        ;;
    6)
        warn "Suppression de l'image et du conteneur..."
        docker stop monportfolio 2>/dev/null || true
        docker rm -f monportfolio 2>/dev/null || true
        docker rmi -f monportfolio:latest 2>/dev/null || true
        info "Nettoyage terminé! ✓"
        ;;
    7)
        info "État du conteneur..."
        docker ps -a --filter "name=monportfolio" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
        ;;
    *)
        error "Option invalide!"
        exit 1
        ;;
esac

echo ""
info "Terminé!"
