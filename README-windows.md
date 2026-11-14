# ZinZ1-Web Windows Installation

## 📦 Installation rapide sur Windows

Bienvenue dans l'assistant d'installation de ZinZ1-Web pour Windows.

Ce guide vous aidera à installer le panneau de contrôle serveur ZinZ1-Web sur votre machine Windows (10 ou 11).

### Prérequis

- Windows 10 ou Windows 11
- Connexion Internet requise

### Installation automatique (recommandé)

Exécutez le script d'installation Windows :

```powershell
# Télécharger le script
iwr https://raw.githubusercontent.com/mth92340/Zinz1-Web/main/install-windows.ps1 | iex

# Ou exécutez localement
.\install-windows.ps1
```

Le script effectuera automatiquement :

1. **Vérification de Node.js** - Si non installé, téléchargement et installation automatique depuis le site officiel
2. **Clonage du dépôt** - Récupération de ZinZ1-Web depuis GitHub
3. **Installation des dépendances** - `npm install` complet
4. **Lancement du panel** - Démarrage du serveur sur http://localhost:3000

### Installation manuelle

Si vous préférez installer vous-même les composants :

#### 1. Installer Node.js

Téléchargez Node.js LTS depuis : https://nodejs.org/

- Version recommandée : ≥ 18.0.0
- L'installeur inclut npm

#### 2. Cloner le dépôt

Ouvrez PowerShell ou Invite de commandes :

```powershell
git clone https://github.com/mth92340/Zinz1-Web.git
cd Zinz1-Web
```

#### 3. Installer les dépendances

```powershell
npm install
```

#### 4. Lancer le panel

```powershell
npm run dev
```

Le panel sera accessible sur http://localhost:3000

### Configuration après installation

#### Sélection de la langue

Au premier démarrage, vous pouvez sélectionner votre langue préférée :

- **Français** (`fr`)
- **English** (`en`)

La sélection est sauvegardée dans `localStorage` et persiste entre les sessions.

#### Système d'exploitation

ZinZ1-Web supporte les systèmes d'exploitation suivants :

- **Debian 12 (Bookworm)** - Recommandé pour la production
- **Ubuntu 22.04 LTS** - Idéal si vous connaissez déjà Ubuntu
- **CentOS 9 Stream** - Environnements d'entreprise
- **Alpine Linux 3.19** - Pour les ressources limitées

Choisissez Nginx ou Apache selon vos préférences.

### Dossiers et fichiers importants

- `public/locales/fr/messages.json` - Traductions françaises
- `public/locales/en/messages.json` - Traductions anglaises
- `next.config.mjs` - Configuration i18n
- `install-windows.ps1` - Script d'installation Windows

### Dépannage

#### Node.js non détecté

Si vous rencontrez des erreurs liées à Node.js :

1. Redémarrez votre ordinateur après l'installation
2. Vérifiez que `node -v` et `npm -v` fonctionnent
3. Réinstallez Node.js si nécessaire

#### Port déjà utilisé

Si le port 3000 est déjà utilisé :

```powershell
# Trouver ce qui utilise le port 3000
Get-NetTcpConnection -Port 3000

# Arrêter le processus
Stop-Process -Id <PID> -Force
```

### Assistance

En cas de problème :

- **Documentation** : https://github.com/mth92340/Zinz1-Web
- **Issues GitHub** : https://github.com/mth92340/Zinz1-Web/issues
- **Email** : contact@zinz1-dev.fr

### Licence

Ce projet est sous licence **MIT**. Voir le fichier LICENSE pour plus de détails.

Réalisé par mth92340, 2026

Site web : zinz1-dev.fr
Pseudo GitHub : zinz1-dev