# ZinZ1-web-test

<p align="center">
  <img src="public/icon.svg" alt="ZinZ1-Web Logo" width="80"/>
</p>

<h1 align="center">ZinZ1-Web</h1>

<p align="center">
  <strong>Panneau de contrôle serveur automatisé</strong>
</p>

<p align="center">
  <a href="# Installation">Installation</a> ·
  <a href="# Installation manuelle">Installation manuelle</a> ·
  <a href="# Systèmes d'exploitation">Systèmes d'exploitation</a> ·
  <a href="# Conditions d'utilisation">Conditions d'utilisation</a> ·
  <a href="# Contact">Contact</a>
</p>

<br />

## 🦖 À propos

**ZinZ1-Web** est un panneau de contrôle serveur automatisé avec une interface inspirée de **Pterodactyl**. Il permet de gérer facilement vos projets d'hébergement sur votre propre machine.

Ce projet a été créé par **mth92340** pour un usage personnel, mais il est partageable. Il tourne sous **npm** (Node.js requis) et offre une alternative légère aux panneaux commerciaux.

---

## 📚 Documentation officielle

- [Site web](https://zinz1-dev.fr)
- [Dépôt GitHub](https://github.com/mth92340/Zinz1-Web)

---

## ✅ Avant de commencer

Vous devez avoir :

- 🐧 un serveur Linux avec accès `root` ou `sudo` ;
- 🧠 des bases solides en administration Linux ;
- 📦 Node.js et npm installés ;
- 💾 un espace disque libre d'au moins 500 Mo.

ZinZ1-Web ne fonctionne pas sous Windows pour le panel. Les environnements avec très peu de mémoire posent parfois problème.

Pour vérifier votre configuration :

```bash
node --version
npm --version
```

Si la version de Node est inférieure à 18, merci de la mettre à jour avant de continuer.

---

## 📦 Dépendances principales

Pour le **Panel** :

- **Next.js 16** + **React 19** - Interface utilisateur
- **Tailwind CSS v4** - Theme orange/gris Pterodactyl
- **TypeScript** - Types complets et sécurité
- **Lucide-react** - Icônes

Pour le **Panel Features** :

- 🐧 Système d'exploitation : Debian, Ubuntu, CentOS, Alpine
- 🔧 Serveur : Nginx ou Apache au choix
- 🛡️ Firewall : UFW configuré automatiquement (ports 22, 80, 443)
- 📊 phpMyAdmin inclus
- 👤 Utilisateurs SSH automatiques avec identifiants uniques
- 📊 Ports uniques par projet (pas de conflits entre projets)
- 📊 Statistiques en temps réel (CPU, Mémoire, Disk)

---

## 🖥️ Installation officielle

### 1. 📦 Installation via npm

```bash
# Cloner le dépôt
git clone https://github.com/mth92340/Zinz1-Web.git

# Installer les dépendances
npm install

# Lancer le panel
npm run dev
```

Le panel sera accessible sur `http://localhost:3000` (ou sur votre IP locale sur le réseau local).

### 2. 🐧 Installation manuelle

Si vous préférez installer les composants vous-même :

```bash
# Installer Nginx ou Apache selon votre choix
# Configurer le firewall UFW (ports 22, 80, 443)
# Installer phpMyAdmin
# Créer un utilisateur SSH avec mot de passe

# Les détails dépendent de votre système d'exploitation (Debian, Ubuntu, CentOS, Alpine)
# et de vos préférences de configuration.
```

---

## 🧩 Systèmes d'exploitation supportés

D'après les tests effectués, les distributions suivantes fonctionnent avec ZinZ1-Web :

| Système | Version | Notes |
| --- | --- | --- |
| **Ubuntu** | 22.04 LTS | Recommandé pour une utilisation quotidienne. |
| **Debian** | 12 (Bookworm) | Stable et idéale pour la production. |
| **CentOS** | 9 Stream | Pour les environnements d'entreprise. |
| **Alpine** | 3.19 | Pour les petites ressources, VPS avec peu de mémoire. |

Chaque OS fonctionne avec **Nginx** ou **Apache** au choix. J'ai inclus les deux car certains préfèrent l'un, d'autres l'autre.

---

## 🪽 Installation officielle de Wings (optionnelle)

Wings doit être installé uniquement si vous voulez gérer des serveurs de jeux via le panel.

```bash
# Installation pas à pas :
# 1. Installer Docker : curl -sSL https://get.docker.com/ | CHANNEL=stable bash
# 2. Télécharger Wings : curl -L -o /usr/local/bin/wings "https://github.com/pterodactyl/wings/releases/latest/download/wings_linux_$([[ "$(uname -m)" == "x86_64" ]] && echo "amd64" || echo "arm64")"
# 3. Chmod : sudo chmod u+x /usr/local/bin/wings
# 4. Configurer le panel : suivre l'interface d'administration
# 5. Créer un node dans le panel et copier la config dans /etc/pterodactyl/config.yml
```

*Note : Cette section s'applique si vous voulez utiliser le panel pour gérer des serveurs de jeux, comme Pterodactyl.*

---

## ⚡ Option rapide : script communautaire

```bash
bash <(curl -s https://raw.githubusercontent.com/mth92340/Zinz1-Web/main/install.sh)
```

Ce script automatise une partie de l'installation. Avant de l'utiliser, lisez le script, comprenez ce qu'il modifie sur votre serveur et vérifiez qu'il supporte votre distribution.

---

## 📬 Contact

Si vous avez des questions, des bugs, ou juste envie de dire bonjour :

**Email :** contact@zinz1-dev.fr

**GitHub :** [zinz1-dev](https://github.com/zinz1-dev)

Ou ouvrez une issue sur GitHub. J'y réponds quand je peux.

---

## 👨‍💻 À propos de l'auteur

**mth92340** a créé ce panneau pour gérer ses propres projets d'hébergement. C'est un projet personnel partagé au cas où ça puisse servir à d'autres. Aucun blabla marketing, pas de "révolutionner le monde" - c'est simplement un outil utile.

**Site web :** [zinz1-dev.fr](https://zinz1-dev.fr)

---

## 📄 Licence

Ce projet est sous licence **MIT**. Voir le fichier `LICENSE` pour plus de détails.

Réalisé par **mth92340**, 2026

---

<p align="center">
  <strong>Stars ⭐ sur GitHub sont les bienvenus !</strong>
</p>