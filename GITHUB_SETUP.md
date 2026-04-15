# Configuration GitHub

## Étapes pour ajouter GitHub

### 1. Créer un nouveau repo sur GitHub

1. Accédez à [github.com](https://github.com)
2. Cliquez sur **+** → **New repository**
3. Nommez-le **monportfolio**
4. **Ne pas** initialiser avec README (on a déjà un repo local)
5. Cliquez **Create repository**

### 2. Ajouter GitHub comme remote

Après la création du repo GitHub, Copier l'URL HTTPS

```bash
cd c:\xampp\htdocs\monportfolio

# Mettre à jour l'URL du remote github
git remote set-url github https://github.com/VOTRE_USERNAME/monportfolio.git

# Ou si le remote n'existe pas, l'ajouter
git remote add github https://github.com/VOTRE_USERNAME/monportfolio.git

# Vérifier que c'est correct
git remote -v
```

### 3. Pousser le code vers GitHub

```bash
git push github main
```

### 4.Configuration SSH (optionnel mais recommandé)

Pour éviter d'entrer vos credentials à chaque fois:

```bash
# Générer une clé SSH
ssh-keygen -t ed25519 -C "pacomesinwilly@gmail.com"

# Copier la clé publique (suivre les instructions)
cat ~/.ssh/id_ed25519.pub

# Ajouter la clé à GitHub:
# Paramètres → SSH and GPG keys → New SSH key
# Pâster la clé et nommer-la "Portfolio Machine"
```

Puis modifier les URLs des remotes:

```bash
git remote set-url origin git@gitlab.com:pacomesinwilly/monportfolio.git
git remote set-url github git@github.com:VOTRE_USERNAME/monportfolio.git
```

### 5. Synchronisation future

Pour pousser les changements sur les deux remotes:

```bash
# Pousser sur les deux remotes
git push origin main && git push github main

# Ou utiliser le script PowerShell
.\sync-portfolio.ps1
```

---

## Synchronisation bidirectionnelle (Opcional)

Si vous voulez que GitLab et GitHub se synchronisent automatiquement:

### Option 1: Mirror sur GitLab
1. Aller aux **Settings** → **Integrations** sur GitLab
2. Ajouter GitHub comme mirror externe

### Option 2: GitHub Actions
1. Créer un `.github/workflows/sync-gitlab.yml`
2. Ajouter un token GitLab dans **Settings** → **Secrets**

---

## Protéger les branches

### Sur GitLab:
1. **Settings** → **Repository** → **Protected branches**
2. Protéger la branche `main`
3. Activer "Require code reviews"

### Sur GitHub:
1. **Settings** → **Branches**
2. Ajouter une règle de protection pour `main`
3. Activer "Require status checks"

---

## Déploiement sur GitHub Pages

```bash
# Construire le projet
npm run build

# Installer ghpages
npm install -D gh-pages

# Ajouter le script de déploiement dans package.json
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# Déployer
npm run deploy
```

Votre portfolio sera accessible à: `https://VOTRE_USERNAME.github.io/monportfolio/`

---

## Troubleshooting GitHub

**Q: "fatal: repository not found"**  
A: Vérifiez l'URL du remote et assurez-vous que le repo existe

**Q: "Permission denied (publickey)"**  
A: Configurez SSH ou utilisez HTTPS avec un token personnel

**Q: "couldn't resolve host"**  
A: Vérifiez votre connexion Internet

---

**Une fois configuré, vous pourrez synchroniser automatiquement sur les deux plateformes!** 🎉
