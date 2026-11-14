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
- **OS supportés** :
  - **Debian 12 (Bookworm)** - Installation recommandée, stabilité maximale
  - **Ubuntu 22.04 LTS** - Interface familière, grand support communautaire
  - **CentOS 9 Stream** - Pour environnements d'entreprise
  - **Alpine Linux 3.19** - Allégé, performant pour petites ressources
- **Ressources** : RAM, CPU, Disk configurables
- **Mode d'installation** :
  - **Domaine personnalisé** : `votre-site.fr` (configure Nginx/Apache avec votre domaine)
  - **IP + Port aléatoire** : Chaque projet obtient un port unique (ex: 8086, 8087, 8088...) via `bash` one-liner

### Panel Features
- ✅ Barre de progression d'installation avec étapes détaillées
- ✅ Firewall UFW configuré automatiquement (ports 22, 80, 443)
- ✅ phpMyAdmin inclus (accès à `votre-ip:port/phpmyadmin`)
- ✅ Utilisateurs SSH automatiques avec identifiants uniques
- ✅ Ports uniques par projet (pas de conflits entre projets)
- ✅ Interface sombre orange/gris typique de Pterodactyl
- ⚡ **Installation en un clic** avec raccourci bash

### Gestion Projets
- Création illimitée de projets
- Cada projet a son propre nom de domaine OU port unique
- Accès SFTP/FTP isolé par projet
- Statistiques en temps réel (CPU, Mémoire, Disk)
- Console interactive avec commandes exécutables

---

## ⚡ Installation Rapide (Bash One-Liner)

### Installation avec domaine personnalisé :
```bash
curl -fsSL https://raw.githubusercontent.com/mth92340/ZinZ1-web-test/main/install.sh | bash -s -- -d votre-domaine.fr
```

### Installation avec IP + port aléatoire :
```bash
curl -fsSL https://raw.githubusercontent.com/mth92340/ZinZ1-web-test/main/install.sh | bash -s -- -i
```

### Options disponibles :
- `-d domaine.fr` : Installer avec domaine personnalisé
- `-i` : Installer avec IP + port aléatoire unique
- `-s type` : Type de serveur (nginx ou apache)
- `-o os` : Système d'exploitation (debian, ubuntu, centos, alpine)

---

## 🐦 Systèmes d'Explication d'Installation

### � Debian 12 (Bookworm) Installation :
**Recommandé pour la stabilité et la sécurité :**
1. Le système installe Debian 12 minimal
2. Configure Nginx/Apache avec vos paramètres
3. Crée utilisateur SSH unique avec mot de passe fort
4. Installe phpMyAdmin automatiquement
5. Configure UFW firewall (ports 22 SSH, 80/443 HTTP/HTTPS)
6. Retourne vos identifiants d'accès

**Idéal pour :** Production, serveurs principaux, sites critiques

### � Ubuntu 22.04 LTS Installation :
**Idéal si vous connaissez déjà Ubuntu :**
1. Installe Ubuntu 22.04 LTS minimal
2. Configuration identiques à Debian ci-dessus
3. Avantage : Familiarité si vous utilisez Ubuntu ailleurs
4. Support communautaire étendu

**Idéal pour :** Développement, transition depuis Ubuntu desktop, communauté large

---

## 📋 Exemple Complet d'Utilisation

### Scénario 1 : Avec domaine personnel
```bash
# Installe avec votre domaine
curl -fsSL https://raw.githubusercontent.com/mth92340/ZinZ1-web-test/main/install.sh | bash -s -- -d mon-site.fr

# Résultat :
# - Serveur Nginx configuré pour mon-site.fr
# - Utilisateur SSH créé
# - phpMyAdmin accessible
# - Firewall UFW configuré
# - Panel accessible sur http://mon-site.fr
```

### Scénario 2 : Sans domaine (IP + port)
```bash
# Installe avec IP + port aléatoire
curl -fsSL https://raw.githubusercontent.com/mth92340/ZinZ1-web-test/main/install.sh | bash -s -- -i

# Résultat :
# - Port unique assigné (ex: 8087)
# - Serveur Nginx/Apache sur ce port
# - Utilisateur SSH créé
# - phpMyAdmin sur le port
# - Panel accessible sur http://IP_du_serveur:8087
```

### Scénario 3 : Avec options avancées
```bash
# Installation complète avec tous les options
curl -fsSL https://raw.githubusercontent.com/mth92340/ZinZ1-web-test/main/install.sh | bash -s -- -s nginx -o debian -d api.mon-entreprise.fr

# Résultat :
# - Serveur Nginx sur Debian 12
# - Domaine api.mon-entreprise.fr
# - Tout le panel complet
```

---

## 🛠️ Technologies Utilisées

- **Next.js 16** + **React 19** - Interface utilisateur
- **Tailwind CSS v4** - Theme orange/gris Pterodactyl
- **TypeScript** - Types complets et sécurité
- **Bash Scripts** - Installation automatisée

---

## 📬 Support et Contact

**📧 Email :** contact@zinz1-dev.fr

- **Problèmes techniques** : Ouvrez une issue sur GitHub
- **Questions d'installation** : Utilisez les commandes bash ci-dessus
- **Demandes de fonctionnalités** : Contactez par email
- **Dépannage** : Voir la documentation ci-dessus

---

## 📄 Licence

Ce projet est sous licence **MIT**. Voir le fichier `LICENSE` pour plus de détails.

---

## 👨‍💻 Auteur

**mth92340** - Panel de contrôle serveur complet et automatisé

---

## 📊 Données Rapides

| OS | Version | Recommandé pour | Statut |
|----|---------|-----------------|--------|
| **Debian** | 12 (Bookworm) | Production, stabilité | 🟢 |
| **Ubuntu** | 22.04 LTS | Développement, familiarité | 🟢 |
| **CentOS** | 9 Stream | Entreprise | 🔴 |
| **Alpine** | 3.19 | Petites ressources | 🔴 |

**Légende** : 🟢 = Recommandé / Testé 🔴 = Configurations spécifiques / Niche

---