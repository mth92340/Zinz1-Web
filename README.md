# ZinZ1-web-test

![Project Image](public/icon.svg)

## À propos

Salut, je m'appelle mth92340. J'ai créé ce panneau de contrôle serveur pour gérer mes propres projets d'hébergement. C'est un projet personnel, fait pour fonctionner sur ma machine et que je souhaite partager.

L'idée : avoir un panneau qui ressemble à ceux qu'on voit sur le marché (style Pterodactyl) mais en simple à configurer et à héberger sur n'importe quelle machine Linux.

---

## Qu'est-ce qu'il fait ?

Bon, c'est un panneau qui permet de :
- Lancer automatiquement un serveur (Nginx ou Apache) sur votre machine
- Choisir le système d'exploitation (Debian, Ubuntu, CentOS ou Alpine)
- Obtenir un accès SSH avec un utilisateur et mot de passe créés automatiquement
- Avoir phpMyAdmin installé tout de suite
- Avoir un firewall (UFW) qui configure les ports nécessaires
- Créer des projets isolés avec leurs propres ports d'accès

Chaque projet obtient son propre port (ex: 8086, 8087, 8088...) pour ne pas se marcher dessus. C'est pratique quand on en a plusieurs qui tournent en même temps.

---

## Installation

Le projet tourne sous **npm** (il faut avoir Node.js installé sur votre machine).

```bash
# Cloner ou télécharger
git clone https://github.com/mth92340/ZinZ1-web-test.git

# Installer les dépendances
npm install

# Lancer
npm run dev
```

Le panel sera accessible sur http://localhost:3000 (ou sur votre IP locale sur le réseau local).

---

## Installation manuelle

Si vous préférez installer vous-même les composants :

```bash
# Installer Nginx ou Apache selon votre choix
# Configurer le firewall UFW (ports 22, 80, 443)
# Installer phpMyAdmin
# Créer un utilisateur SSH avec mot de passe

# Les détails dépendent de votre système d'exploitation (Debian, Ubuntu, CentOS, Alpine)
# et de vos préférences de configuration.
```

---

## Systèmes d'exploitation

J'ai testé ces quatre OS sur ma machine. Voici mon avis franc :

- **Debian 12 (Bookworm)** : Mon préféré pour la stabilité. Fonctionne bien en production.
- **Ubuntu 22.04 LTS** : Si vous connaissez déjà Ubuntu ailleurs. Facile à prendre en main.
- **CentOS 9 Stream** : Pour les environnements d'entreprise. Un peu plus complexe à configurer.
- **Alpine Linux 3.19** : Pour les petites ressources, les VPS avec peu de mémoire.

Chaque OS fonctionne avec Nginx ou Apache au choix. J'ai mis les deux car certains préfèrent l'un, d'autres l'autre.

---

## Contact

Si vous avez des questions, des bugs, ou juste envie de dire bonjour :

**Email :** contact@zinz1-dev.fr

Ou ouvrez une issue sur GitHub. J'y réponds quand je peux.

---

## Licence

Ce projet est sous licence MIT. Libre à vous de l'utiliser, de le modifier ou de le redistribuer. C'est la licence que j'ai choisie pour garder les choses simples.

***

Réalisé par mth92340, 2026

Pas de blabla marketing, pas de "révolutionner le monde". C'est juste un outil que j'ai fait pour moi et que je partage au cas où ça puisse servir à d'autres.