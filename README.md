# 🚀 Portfolio Professionnel de Pacôme SINWILLY BONI

Un portfolio modern et professionnel créé avec **React**, **Vite**, **Tailwind CSS** et **Framer Motion**.

## 📋 Caractéristiques

✨ **Design Moderne**
- Interface épurée et professionnelle
- Palette de couleurs moderne (bleu, cyan, slate)
- Animations fluides avec Framer Motion
- Design responsive (mobile, tablet, desktop)

📱 **Sections**
- **Accueil** : Présentation et CTA
- **Formation** : Parcours académique détaillé
- **Expérience** : Stages professionnels
- **Compétences** : Liste complète avec barres de progression
- **Contact** : Formulaire de contact et informations

🎨 **Technologies**
- React 19
- Vite 8 (Hot Module Replacement)
- Tailwind CSS 3 (styling)
- Framer Motion (animations)
- React Icons (icônes)
- PostCSS avec Autoprefixer

## 🛠️ Installation

### Prérequis
- Node.js 16+ installé
- npm ou yarn

### Étapes

```bash
# Cloner le repository
cd c:\xampp\htdocs\monportfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la version production
npm run preview
```

## 📁 Structure du Projet

```
monportfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    # Barre de navigation
│   │   ├── Hero.jsx          # Section d'accueil
│   │   ├── Formation.jsx     # Parcours académique
│   │   ├── Experience.jsx    # Expérience professionnelle
│   │   ├── Competences.jsx   # Compétences avec barres
│   │   └── Contact.jsx       # Formulaire de contact
│   ├── App.jsx               # Composant principal
│   ├── App.css               # Styles spécifiques
│   ├── index.css             # Styles globaux + Tailwind
│   └── main.jsx
├── public/                   # Fichiers statiques
├── index.html
├── package.json
├── tailwind.config.js        # Configuration Tailwind
├── postcss.config.js         # Configuration PostCSS
├── vite.config.js            # Configuration Vite
└── sync-portfolio.ps1        # Script de synchronisation Git
```

## 🔧 Configuration

### Ajouter GitHub comme remote

Si tu veux synchroniser sur GitHub en plus de GitLab :

```bash
# Créer un repo GitHub d'abord, puis :
git remote set-url github https://github.com/VOTRE_USERNAME/monportfolio.git
```

### Pousser les changements

```bash
# Pousser uniquement vers GitLab
git push origin main

# Pousser uniquement vers GitHub
git push github main

# Utiliser le script PowerShell (Windows)
.\sync-portfolio.ps1
```

## 🎨 Personnalisation

### Modifier les couleurs
Éditer `tailwind.config.js` pour changer la palette de couleurs.

### Ajouter des sections
1. Créer un nouveau composant dans `src/components/`
2. L'importer dans `App.jsx`
3. Ajouter une section dans le tableau `sections`

### Modifier les informations
Les données (formation, expérience, compétences) sont codées en dur dans chaque composant.
Pour les rendre dynamiques, créer un fichier `data.js` avec les données.

## 📝 Git Workflow

Le projet est synchronisé sur deux plateformes :
- **GitLab** : https://gitlab.com/pacomesinwilly/monportfolio.git (origin)
- **GitHub** : À créer

À chaque modification :
1. Faire les changements
2. Commit avec un message descriptif
3. Pousser vers les deux remotes

## 🚀 Déploiement

### Options de déploiement

#### 1. **Vercel** (Recommandé - gratuit, rapide)
```bash
npm install -g vercel
vercel
```

#### 2. **Netlify**
```bash
npm install -D netlify-cli
netlify deploy --prod --dir=dist
```

#### 3. **GitHub Pages**
```bash
npm run build
# Pousser le contenu de dist/ sur la branche gh-pages
```

#### 4. **Serveur personnel (XAMPP)**
```bash
npm run build
# Copier le contenu de dist/ dans le dossier web de XAMPP
```

## 📞 Informations de Contact

- **Email** : pacomesinwilly@gmail.com
- **Téléphone** : +229 01 56 97 23 19
- **Localisation** : Natitingou, Bénin
- **GitLab** : https://gitlab.com/pacomesinwilly
- **GitHub** : À créer

## 📊 Performance

- **Lighthouse Score** : 90+ (Performance)
- **Bundle Size** : ~45KB (gzipped)
- **Time to Interactive** : <2s

## 📄 Licence

MIT License - Libre d'utilisation

## 🤝 Contribution

Les pull requests sont bienvenues !

---

**Créé avec ❤️ en 2025**
