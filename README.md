# ZinZ1-web-test

<p align="center">
  <img src="public/icon.svg" alt="ZinZ1-Web Logo" width="80"/>
</p>

<h1 align="center">ZinZ1-Web</h1>

<p align="center">
  <strong>Automated Server Control Panel</strong>
</p>

<br />

## 🌐 Language / Langue

<select id="language-select" onchange="changeLanguage(this.value)" style="padding: 8px 16px; border: 1px solid #ccc; border-radius: 6px;">
  <option value="fr" selected>Français</option>
  <option value="en">English</option>
</select>

<script>
function changeLanguage(lang) {
  // Simple language switch - stores preference in localStorage
  localStorage.setItem('userLanguage', lang);
  location.reload();
}

// Check for saved language preference
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('userLanguage');
  if (savedLang) {
    document.getElementById('language-select').value = savedLang;
  }
});
</script>

<br />

## 📊 About

**ZinZ1-Web** is an automated server control panel with a **Pterodactyl-style** interface. It allows you to easily manage your hosting projects on your own machine.

This project was created by **mth92340** for personal use, but it is shareable. It runs under **npm** (Node.js required) and offers a lightweight alternative to commercial panels.

---

## 📚 Official Documentation

- [Website](https://zinz1-dev.fr)
- [GitHub Repository](https://github.com/mth92340/Zinz1-web-test)

---

## ✅ Before You Begin

You will need:

- 🐧 A Linux server with `root` or `sudo` access;
- 🌐 A domain name pointing to your server, especially if you enable HTTPS;
- 🧠 Solid Linux administration basics;
- 📦 Docker-compatible hosting, ideally KVM or a dedicated server;
- 💾 A backup of your important data before any installation.

ZinZ1-Web does not work under Windows for Wings. OpenVZ, OVZ, Virtuozzo, or some LXC environments often have problems with Docker.

To check virtualization:

```bash
systemd-detect-virt
```

If the result indicates `openvz` or `lxc`, ask your hoster for confirmation before continuing.

---

## 🧩 Supported Systems

According to current official documentation, the Panel and Wings work on the following distributions.

| System | Supported Versions | Notes |
| --- | --- | --- |
| **Ubuntu** | 22.04, 24.04 | Ubuntu 22.04 requires additional PHP repositories. |
| **Debian** | 11, 12, 13 | Officially documented Debian dependencies. |
| **RHEL / Rocky Linux / AlmaLinux** | 8, 9 | Additional repositories may be needed. |

Wings also mentions Ubuntu 20.04 as supported, but for a complete new installation it is better to start with a recent and maintained version.

---

## 📦 Main Dependencies

For the **Panel**:

- **PHP `8.2` or `8.3`** recommended;
- PHP extensions: `cli`, `openssl`, `gd`, `mysql`, `PDO`, `mbstring`, `tokenizer`, `bcmath`, `xml`, `dom`, `curl`, `zip`, and `fpm` with NGINX;
- **MySQL `5.7.22+` or MySQL `8`, or MariaDB `10.2+`**;
- **Redis**;
- **A web server**: NGINX, Apache or Caddy;
- **`curl`, `tar`, `unzip`, `git`**;
- **Composer v2**.

For **Wings**:

- **Docker**;
- **`curl`**;
- A Linux kernel compatible with Docker;
- An SSL certificate if the Panel uses HTTPS.

---

## 🖥️ Official Panel Installation

The exact commands may vary depending on the distribution. Always consult the official page before running them.

### 1. 📦 Install Dependencies

Example for a Debian/Ubuntu base:

```bash
apt update
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg tar unzip git redis-server nginx mariadb-server
```

Then install PHP `8.2` or `8.3` and the necessary extensions according to your system. The official documentation gives a complete example for Ubuntu with adapted PHP repositories.

Install Composer:

```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

### 2. ⬇️ Download the Panel

```bash
mkdir -p /var/www/pterodactyl
cd /var/www/pterodactyl

curl -Lo panel.tar.gz https://github.com/pterodactyl/panel/releases/latest/download/panel.tar.gz
tar -xzvf panel.tar.gz
chmod -R 755 storage/* bootstrap/cache/
```

### 3. 🗄️ Prepare the Database

Connect to MariaDB or MySQL:

```bash
mariadb -u root -p
```

Create the user and database, replacing `solid_password` with a unique password:

```sql
CREATE USER 'pterodactyl'@'127.0.0.1' IDENTIFIED BY 'solid_password';
CREATE DATABASE panel;
GRANT ALL PRIVILEGES ON panel.* TO 'pterodactyl'@'127.0.0.1' WITH GRANT OPTION;
exit
```

...

### 4. 🗝️ Generate the Panel Key

```bash
php artisan key:generate
```

Without this key, some encrypted data becomes irrecoverable, even with a database backup.

...

### 5. 🚀 Run Migrations

```bash
php artisan migrate --seed --force
php artisan p:user:make
```

...

## ⚡ Quick Option: Community Script

```bash
bash <(curl -s https://pterodactyl-installer.se)
```

This script is not the official Pterodactyl method. Before using it, read its repository, understand what it modifies on your server, and verify it supports your distribution: pterodactyl-installer.

For a Panel + Wings installation via this script, the usually used option is the combined Panel and Wings installation. Answer carefully the questions about the database, domain, firewall, HTTPS and Let's Encrypt.

---

## 📬 Contact

If you have questions, bugs, or just want to say hello:

**Email :** contact@zinz1-dev.fr

**GitHub :** [zinz1-dev](https://github.com/zinz1-dev)

Or open an issue on GitHub. I answer when I can.

---

## 👨‍💻 About the Author

**mth92340** created this panel to manage his own hosting projects. It is a personal project shared in case it might be useful to others. No marketing hype, no "revolutionizing the world" - it's just a useful tool.

**Website :** zinz1-dev.fr

---

## 📄 License

This project is under the **MIT** License. See the `LICENSE` file for more details.

Made by **mth92340**, 2026

---

<p align="center">
  <strong>Stars ⭐ on GitHub are welcome!</strong>
</p>