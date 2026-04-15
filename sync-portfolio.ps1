# Script pour synchroniser le portfolio sur GitLab et GitHub
# A utiliser après chaque modification

# Variables
$project_path = "c:\xampp\htdocs\monportfolio"
$commit_message = "feat: Update portfolio"

# Naviguer vers le répertoire
cd $project_path

# Ajouter tous les changements
Write-Host "📝 Ajout des fichiers modifiés..." -ForegroundColor Cyan
git add .

# Demander un message de commit
$user_message = Read-Host "📝 Entrez votre message de commit (ou appuyez sur Entrée pour le message par défaut)"
if ($user_message) {
    $commit_message = $user_message
}

# Faire le commit
Write-Host "💾 Création du commit..." -ForegroundColor Cyan
git commit -m "$commit_message"

# Pousser vers GitLab
Write-Host "🚀 Synchronisation avec GitLab..." -ForegroundColor Green
git push origin main
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Synchronisation GitLab réussie!" -ForegroundColor Green
} else {
    Write-Host "❌ Erreur lors de la synchronisation GitLab" -ForegroundColor Red
}

# Pousser vers GitHub (si le remote est configuré)
Write-Host "🚀 Synchronisation avec GitHub..." -ForegroundColor Blue
git push github main 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Synchronisation GitHub réussie!" -ForegroundColor Green
} else {
    Write-Host "⚠️  GitHub n'est pas encore configuré ou le repo n'existe pas" -ForegroundColor Yellow
    Write-Host "   Créez le repo GitHub et mettez à jour le remote avec:" -ForegroundColor Yellow
    Write-Host "   git remote set-url github https://github.com/VOTRE_USERNAME/monportfolio.git" -ForegroundColor Yellow
}

Write-Host "`n✨ Synchronisation terminée!" -ForegroundColor Green
