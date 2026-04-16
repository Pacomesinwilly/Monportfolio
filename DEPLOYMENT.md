# Guide de Déploiement - Monportfolio

## 📋 Prérequis

- Docker et Docker Compose installés
- Node.js 18+ (pour développement local)
- Git configuré
- Compte Render ou Railway (pour production)

## 🚀 Déploiement Local avec Docker

### 1. Build l'image Docker

```bash
docker build -t monportfolio:latest .
```

### 2. Lance le conteneur

```bash
docker run -d -p 3000:3000 --name monportfolio monportfolio:latest
```

### 3. Accède à l'application

Ouvre [http://localhost:3000](http://localhost:3000)

### 4. Arrête le conteneur

```bash
docker stop monportfolio
docker rm monportfolio
```

## 🐳 Déploiement avec Docker Compose

### 1. Lance tous les services

```bash
docker-compose up -d
```

### 2. Affiche les logs

```bash
docker-compose logs -f monportfolio
```

### 3. Arrête les services

```bash
docker-compose down
```

## 🔴 Déploiement sur Render

### 1. Prépare les variables

Copie `.env.example` vers `.env` et configure les variables.

### 2. Connecte à GitHub/GitLab

1. Va sur [https://render.com](https://render.com)
2. Crée un compte ou connecte-toi
3. Clique sur "New +"
4. Sélectionne "Web Service"
5. Connecte ton dépôt GitHub/GitLab

### 3. Configure le service

- **Name:** `monportfolio`
- **Environment:** `Docker`
- **Region:** Choisis ta région
- **Plan:** `Free`
- **Branch:** `main`

### 4. Variables d'environnement

Ajoute dans Render:
```
NODE_ENV=production
PORT=3000
```

### 5. Deploy

Clique sur "Create Web Service"

**URL de déploiement:** `https://monportfolio.onrender.com`

## 🚂 Déploiement sur Railway

### 1. Crée un compte

Va sur [https://railway.app](https://railway.app) et crée un compte.

### 2. Crée un nouveau projet

Clique sur "+ New Project"

### 3. Connecte ton dépôt

- Sélectionne "Deploy from GitHub/GitLab"
- Autorise Railway à accéder à tes dépôts
- Choisis `Pacomesinwilly/Monportfolio`

### 4. Configure le service

Railway détectera automatiquement le Dockerfile.

- Clique sur le service
- Va dans "Settings"
- Ajoute les variables d'environnement:

```
NODE_ENV=production
PORT=3000
```

### 5. Deploy

Railway déploiera automatiquement après détection du Dockerfile.

**URL de déploiement:** `https://monportfolio-prod.railway.app`

## 📊 Monitoring

### Render

1. Va dans ton dashboard Render
2. Clique sur ton service
3. Consulte les logs en temps réel
4. Vérifie l'état du déploiement

### Railway

1. Va dans ton dashboard Railway
2. Sélectionne le projet `monportfolio`
3. Consulte les logs
4. Vérifie les métriques

## 🔧 Dépannage

### Le conteneur ne démarre pas

```bash
docker logs monportfolio
```

### Port déjà utilisé

```bash
# Ferme le processus sur le port 3000
# Sur Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Sur macOS/Linux:
lsof -i :3000
kill -9 <PID>
```

### Build échoue

1. Vérifie que Node.js 18+ est utilisé
2. Supprime `node_modules` et `package-lock.json`
3. Réinstalle: `npm ci`
4. Rebuild: `npm run build`

### Application lente sur Render/Railway

- Render/Railway utilisent des machines partagées
- L'application peut mettre 30-60s au démarrage sur la version gratuite
- Considère une upgrade du plan si nécessaire

## 📲 Configuration de domaine personnalisé

### Sur Render

1. Va dans "Settings"
2. Clique sur "Add Custom Domain"
3. Rentre ton domaine (ex: portfolio.com)
4. Suis les instructions pour les enregistrements DNS

### Sur Railway

1. Va dans "Settings"
2. Clique sur "Add Custom Domain"
3. Rentre ton domaine
4. Configure les DNS

## 🔐 Secrets et Variables

Ne committe jamais `.env` directement !

Utilise:
- `.env.example` pour les variables de template
- Ajoute les vraies variables dans le dashboard Render/Railway

## 📝 CI/CD Automatique

Le fichier `.github/workflows/deploy.yml` configure:

- ✅ Build automatique à chaque push sur `main`
- ✅ Tests (si configurés)
- ✅ Déploiement automatique sur Render/Railway

### Ajoute les secrets GitHub

1. Va dans "Settings" du dépôt
2. Clique sur "Secrets"
3. Ajoute:
   - `RENDER_API_KEY`
   - `RENDER_SERVICE_ID`
   - `RAILWAY_TOKEN`

## 🎉 Post-déploiement

Après déploiement:

1. Visite l'URL de l'application
2. Teste tous les sections (Formation, Expérience, etc.)
3. Teste l'espace admin avec le mot de passe
4. Teste l'envoi de messages
5. Vérifie les liens sociaux

## 📞 Support

Si tu rencontres des problèmes:

1. Consulte les logs (Render ou Railway)
2. Vérifie que le Dockerfile builte correctement
3. Vérifie les variables d'environnement
4. Redéploie si nécessaire

Bon déploiement! 🚀
