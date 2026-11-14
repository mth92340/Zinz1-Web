# ZinZ1-web-test

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/mth92340/ZinZ1-web-test?style=social)](https://github.com/mth92340/ZinZ1-web-test)
[![GitHub forks](https://img.shields.io/github/forks/mth92340/ZinZ1-web-test?style=social)](https://github.com/mth92340/ZinZ1-web-test)

## 📊 Panneau de Contrôle Serveur - Pterodactyl Style

Un panneau de gestion serveur complet et automatisé avec interface style **Pterodactyl**. Déployé en un clic avec `npm`.

---

## 🚀 Fonnalités

### Installation Automatisée
- **Serveur** : Choix Nginx ou Apache
- **OS** : Debian 12, Ubuntu 22.04, CentOS 9, Alpine 3.19
- **Ressources** : RAM, CPU, Disk configurables
- **Mode** : Domaine personnalisé OU IP + port aléatoire unique par projet

### Panel Features
- ✅ Barre de progression d'installation
- ✅ Firewall UFW configuré automatiquement
- ✅ phpMyAdmin inclus
- ✅ Utilisateurs SSH automatiques avec identifiants uniques
- ✅ Ports uniques par projet (pas de conflits)
- ✅ Interface sombre orange/gris typique de Pterodactyl

### Gestion Projets
- Création illimitée de projets
- Cada projet a son propre nom de domaine ou port
- Accès SFTP/FTP isolé par projet
- Statistiques en temps réel
- Console interactive avec commandes

---

## 🛠️ Déploiement

```bash
# Installation
npm install

# Lancement
npm run dev
```

Le panel sera accessible sur `http://localhost:3000`

---

## 📦 Technologies

- **Next.js 16** + **React 19**
- **Tailwind CSS v4** - Theme orange/gris Pterodactyl
- **TypeScript** - Types complets
- **Lucide-react** - Icônes

---

## 📁 Structure

```
project/
├── app/page.tsx       # Panneau principal (19KB)
├── tailwind.config.js # Theme orange/gris
├── package.json       # Dépendances npm
├── tsconfig.json      # TypeScript config
└── public/            # Assets statiques
```

---

## 🎯 Cas d'usage

- Hébergement de plusieurs sites/webapps
- Panel de contrôle personnel
- Formation à la gestion serveur
- Déploiement d'applications Node.js
- Gestion de serveurs de jeux (style Pterodactyl)

---

## 📄 Licence

Ce projet est sous licence **MIT**. Voir le fichier `LICENSE` pour plus de détails.

---

## 👨‍💻 Auteur

**mth92340** - Panel de contrôle serveur complet et automatisé

---

## 📞 Support

- Ouvrez une issue sur GitHub
- Contact : support@zinz1web.fr