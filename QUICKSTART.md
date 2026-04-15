# 🚀 GUIDE DE DÉMARRAGE RAPIDE

## Installation rapide

```bash
cd c:\xampp\htdocs\monportfolio
npm install
npm run dev
```

Le portfolio sera accessible à: **http://localhost:5173**

---

## 📋 Commandes disponibles

### Développement
```bash
npm run dev          # Lancer le serveur de développement (HMR activé)
```

### Production
```bash
npm run build        # Construire pour la production
npm run preview      # Prévisualiser la build de production
```

### Linting
```bash
npm run lint         # Vérifier le code avec ESLint
```

---

## 🎯 Tâches courantes

### Ajouter une nouvelle page/section

1. **Créer le composant** dans `src/components/`
```jsx
// src/components/MaSection.jsx
import { motion } from 'framer-motion';

export default function MaSection() {
  return (
    <section className="min-h-screen py-20">
      {/* Contenu */}
    </section>
  );
}
```

2. **L'importer dans App.jsx**
```jsx
import MaSection from './components/MaSection';
```

3. **L'ajouter au tableau sections**
```jsx
const sections = [
  // ...
  { id: 'ma-section', label: 'Ma Section' },
];
```

4. **L'afficher conditionnellement**
```jsx
{activeSection === 'ma-section' && <MaSection />}
```

### Modifier les compétences

Éditer `src/components/Competences.jsx` - modifier l'objet `competences`

### Modifier les informations de contact

Éditer `src/components/Contact.jsx` - modifier le tableau `contactInfo`

---

## 🌐 Déploiement sur Vercel (recommandé)

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter (première fois)
vercel login

# Déployer
vercel
```

Votre portfolio sera accessible via un lien Vercel automatiquement !

---

## 📦 Dépendances principales

- **react**: UI library
- **react-dom**: DOM rendering
- **framer-motion**: Animations fluides
- **tailwindcss**: Styling CSS
- **react-icons**: Icônes SVG
- **vite**: Build tool ultra-rapide

---

## 🔄 Synchronisation Git

Pour pousser vers GitLab ET GitHub à la fois:

```bash
# Option 1: Commandes séparées
git push origin main    # GitLab
git push github main    # GitHub

# Option 2: Script PowerShell (Windows)
.\sync-portfolio.ps1
```

---

## 💡 Tips & Tricks

### Hot Module Replacement (HMR)
Les changements dans les fichiers sont appliqués automatiquement sans rechargement !

### Mode sombre dans le navigateur
Le portfolio adapte automatiquement la couleur selon vos préférences système.

### Mobile-friendly
Testez sur mobile avec: `npm run dev` puis ouvrez `http://[VOTRE_IP]:5173` sur votre téléphone

### Améliorer les performances
```bash
npm run build     # Voir la taille réelle des bundles
```

---

## ❓ Dépannage

**Q: HMR ne fonctionne pas ?**  
A: Redémarrez le serveur: `Ctrl+C` puis `npm run dev`

**Q: Les styles Tailwind ne s'appliquent pas ?**  
A: Vérifiez que les fichiers sont listés dans `tailwind.config.js`

**Q: La build est trop volumineuse ?**  
A: Vérifiez les imports inutilisés et utilisez le tree-shaking de Vite

---

## 📞 Support

- 🐛 Problèmes ? Vérifiez la console du navigateur
- 📖 Documentation: https://vitejs.dev/, https://react.dev/
- 💬 Questions ? Créez une issue sur GitLab

---

**Bon développement! 🎉**
