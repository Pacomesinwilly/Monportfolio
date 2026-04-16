# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm ci

# Copier le code source
COPY . .

# Build de l'application
RUN npm run build

# Stage 2: Production
FROM node:20-alpine

WORKDIR /app

# Installer un serveur Web léger pour servir les fichiers SPA
RUN npm install -g serve

# Copier le build depuis l'étape précédente
COPY --from=builder /app/dist ./dist

# Copier package.json pour les métadonnées
COPY package.json ./

# Exposer le port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Commande de démarrage
CMD ["serve", "-s", "dist", "-l", "3000"]
