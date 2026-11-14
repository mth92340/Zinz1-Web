'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  Activity, ArrowDownRight, ArrowUpRight, Bell, ChevronDown, CircleHelp, Cloud, Code2, Cpu, Database, ExternalLink, FileCode2, Globe2, HardDrive, LayoutDashboard, LifeBuoy, LockKeyhole, Lock, Menu, MoreHorizontal, Plus, Search, Server, Settings2, ShieldCheck, Users, X, TrendingDown, TrendingUp 
} from 'lucide-react'

type ServerType = 'nginx' | 'apache'

type Project = {
  id: string
  name: string
  status: 'online' | 'offline' | 'error'
  stack: ServerType
  phpVersion: string | null
  sftp: string | null
  ftp: string | null
  error: string | null
  os: 'debian' | 'ubuntu' | 'centos' | 'alpine'
  osVersion: string
  ram: number
  cpu: number
  disk: number
  // Réseau - port unique par projet
  port: number | null  // portPanel ou HTTP
  domain: string | null  // si domaine personnalisé
  // Tableau de ports utilisés pour éviter les collisions
  usedPorts: number[]
}

type User = {
  sshUser: string
  sshPassword: string
  createdAt: string
}

// Générateur de ports aléatoires uniques
const generateUniquePort = (usedPorts: number[], min = 8000, max = 9999): number => {
  let port: number
  let isUnique = false
  while (!isUnique) {
    port = Math.floor(Math.random() * (max - min + 1)) + min
    if (!usedPorts.includes(port)) {
      isUnique = true
    }
  }
  return port
}

export default function PterodactylPanel() {
  const [serverType, setServerType] = useState<ServerType>('nginx')
  const [isInstalling, setIsInstalling] = useState(false)
  const [installProgress, setInstallProgress] = useState(0)
  const [notice, setNotice] = useState<string>('')
  const [projects, setProjects] = useState<Project[]>([])
  const [user, setUser] = useState<User>({
    sshUser: '',
    sshPassword: '',
    createdAt: ''
  })
  const [ufwEnabled, setUfwEnabled] = useState(false)
  const [useDomain, setUseDomain] = useState(false)
  const [domain, setDomain] = useState('')
  const [selectedOs, setSelectedOs] = useState<'debian' | 'ubuntu' | 'centos' | 'alpine'>('debian')
  const [osVersion, setOsVersion] = useState<string>('12.04 LTS')
  const [ram, setRam] = useState(1024)
  const [cpu, setCpu] = useState(2)
  const [disk, setDisk] = useState(20)

  // Ports utilisés globalement dans cette session
  const [usedPortsGlobal, setUsedPortsGlobal] = useState<number[]>([])

  // Simuler l'installation automatique Pterodactyl-style
  useEffect(() => {
    if (isInstalling) {
      const interval = setInterval(() => {
        setInstallProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return Math.min(100, prev + 10)
        })
      }, 150)

      const steps = [
        () => setNotice('Initialisation du panel...'),
        () => setNotice('Sélection du type de serveur...'),
        () => setNotice('Choix du système d\'exploitation : ' + selectedOs),
        () => setNotice('Configuration des ressources : RAM ' + ram + 'MB, CPU ' + cpu + ', Disk ' + disk + 'GB'),
        () => setNotice('Installation de ' + serverType.toUpperCase() + '...'),
        () => {
          setUfwEnabled(confirm('Configurer UFW ?'))
          setNotice('Configuration du firewall Pterodactyl...')
        },
        () => setNotice('Installation de phpMyAdmin (panel mode)...'),
        () => setNotice('Création compte utilisateur SSH...'),
        () => {
          const userName = 'panel-user-' + Math.random().toString(36).substr(2, 6)
          const password = Math.random().toString(36).substr(2, 10)
          setUser({ sshUser: userName, sshPassword: password, createdAt: new Date().toLocaleString() })
          setNotice('Compte créé : ' + userName)
        },
        () => setNotice('Panel prêt !'),
        () => {
          clearInterval(interval)
          setIsInstalling(false)
          setInstallProgress(100)
          setNotice('Installation terminée avec succès !')
          
          // Générer un port unique pour ce nouveau projet
          const newPort = generateUniquePort(usedPortsGlobal)
          setUsedPortsGlobal(prev => [...prev, newPort])
          
          setProjects(prev => [...prev, {
            id: Date().toString(),
            name: useDomain && domain ? domain : 'serveur-' + selectedOs,
            status: 'online',
            stack: serverType,
            os: selectedOs,
            osVersion: osVersion,
            phpVersion: '8.3.1',
            sftp: 'sftp://' + Math.random().toString(36).substr(2, 8) + '.local:2222',
            ftp: 'ftp://' + Math.random().toString(36).substr(2, 8) + '.local:21',
            error: null,
            ram: ram,
            cpu: cpu,
            disk: disk,
            port: newPort,  // Port panel unique
            domain: useDomain && domain ? domain : null,
            usedPorts: [...usedPortsGlobal]
          }])
        }
      ]

      let step = 0
      const timer = setTimeout(() => {
        if (steps[step]) steps[step]()
      }, 200)

      return () => clearInterval(interval)
    }
  }, [isInstalling, serverType, selectedOs, osVersion, useDomain, domain, ufwEnabled, ram, cpu, disk, usedPortsGlobal])

  // Démarrer installation
  const startInstallation = () => {
    if (!useDomain && !domain && confirm('Installer sans domaine (IP + port panel) ?')) {
      setUseDomain(false)
      setDomain('')
    }
    setIsInstalling(true)
    setInstallProgress(0)
    setNotice('Initialisation du panel...')
    setProjects([])
    setUser({ sshUser: '', sshPassword: '', createdAt: '' })
    setUfwEnabled(false)
    setRam(1024)
    setCpu(2)
    setDisk(20)
    // Réinitialiser les ports utilisés pour nouvelle session propre
    setUsedPortsGlobal([])
  }

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-7xl mx-auto p-4">
        
        {/* En-tête Pterodactyl style */}
        <header className="bg-gray-900 border-b border-gray-800 fixed top-0 left-0 right-0 z-50">
          <div className="h-16 flex items-center justify-between px-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center">
                <Server className="text-xs text-gray-950" />
              </div>
              <div>
                <h1 className="font-bold text-xl">Panel de Contrôle</h1>
                <p className="text-sm text-gray-400">Gestion de serveurs automatisée</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Bell className="text-xs text-orange-400" />
              <span className="text-xs text-gray-400">2 nouvelles notifications</span>
            </div>
          </div>
        </header>

        {/* Corps principal */}
        <div className="mt-20">
          
          {/* Statistiques en haut - style Pterodactyl */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-1">Projets</p>
              <p className="font-bold text-2xl"> {projects.length}</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-1">CPU moyen</p>
              <p className="font-bold text-2xl">35%</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-1">Mémoire</p>
              <p className="font-bold text-2xl">8.5/16 Go</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-1">Disque</p>
              <p className="font-bold text-2xl">4.2/50 Go</p>
            </div>
          </div>

          {/* Section Installation */}
          <div className="bg-gray-800 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-8">
            <h2 className="font-bold text-2xl mb-4">Nouveau Serveur</h2>
            
            <div className="space-y-4">
              
              {/* Type de serveur */}
              <div>
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="radio"
                    value="nginx"
                    checked={serverType === 'nginx'}
                    onChange={() => setServerType('nginx')}
                    className="w-4 h-4 rounded bg-orange-500 border-2 border-gray-700 mt-1 me-2 hover:scale-110 transition-transform"
                  />
                  <span className="text-gray-300">Nginx</span>
                </label>
                <label className="flex items-center cursor-pointer select-none ml-4">
                  <input
                    type="radio"
                    value="apache"
                    checked={serverType === 'apache'}
                    onChange={() => setServerType('apache')}
                    className="w-4 h-4 rounded bg-orange-500 border-2 border-gray-700 mt-1 me-2 hover:scale-110 transition-transform"
                  />
                  <span className="text-gray-300">Apache</span>
                </label>
              </div>

              {/* Système d'exploitation */}
              <div>
                <p className="text-sm text-gray-400 mb-2">Système d'exploitation</p>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center cursor-pointer select-none">
                    <input
                      type="radio"
                      value="debian"
                      checked={selectedOs === 'debian'}
                      onChange={() => setSelectedOs('debian')}
                      className="w-3 h-3 rounded bg-yellow-500 border-gray-600 mt-1 me-2"
                    />
                    <span className="ml-2 text-sm">Debian</span>
                  </label>
                  <label className="flex items-center cursor-pointer select-none">
                    <input
                      type="radio"
                      value="ubuntu"
                      checked={selectedOs === 'ubuntu'}
                      onChange={() => setSelectedOs('ubuntu')}
                      className="w-3 h-3 rounded bg-yellow-500 border-gray-600 mt-1 me-2"
                    />
                    <span className="ml-2 text-sm">Ubuntu</span>
                  </label>
                  <label className="flex items-center cursor-pointer select-none">
                    <input
                      type="radio"
                      value="centos"
                      checked={selectedOs === 'centos'}
                      onChange={() => setSelectedOs('centos')}
                      className="w-3 h-3 rounded bg-yellow-500 border-gray-600 mt-1 me-2"
                    />
                    <span className="ml-2 text-sm">CentOS</span>
                  </label>
                  <label className="flex items-center cursor-pointer select-none">
                    <input
                      type="radio"
                      value="alpine"
                      checked={selectedOs === 'alpine'}
                      onChange={() => setSelectedOs('alpine')}
                      className="w-3 h-3 rounded bg-yellow-500 border-gray-600 mt-1 me-2"
                    />
                    <span className="ml-2 text-sm">Alpine</span>
                  </label>
                </div>
                <p className="text-xs text-gray-400 mt-2">Version : {osVersion}</p>
              </div>

              {/* Ressources */}
              <div>
                <p className="text-sm text-gray-400 mb-3">Ressources</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-300 text-sm mb-1">RAM</p>
                    <div className="bg-gray-700 rounded-full h-2.5 mb-2">
                      <div 
        className="h-full bg-orange-500 rounded-full transition-width" 
        style={{ width: (ram/64)*100 + '%' }} 
        aria-valuemin="0" 
        aria-valuemax="64" 
      /></div>
      <p className="text-xs text-gray-400">{ram} MB</p>
    </div>
    <div>
      <p className="text-gray-300 text-sm mb-1">CPU</p>
      <div className="bg-gray-700 rounded-full h-2.5 mb-2">
        <div
          className="h-full bg-orange-500 rounded-full transition-width"
          style={{ width: (cpu/8)*100 + '%' }}
          aria-valuemin="0"
          aria-valuemax="8"
        ></div>
      </div>
      <p className="text-xs text-gray-400">{cpu} cores</p>
    </div>
    <div>
      <p className="text-gray-300 text-sm mb-1">Stockage</p>
      <div className="bg-gray-700 rounded-full h-2.5 mb-2">
        <div
          className="h-full bg-orange-500 rounded-full transition-width"
          style={{ width: (disk/500)*100 + '%' }}
          aria-valuemin="0"
          aria-valuemax="500"
        ></div>
      </div>
      <p className="text-xs text-gray-400">{disk} GB</p>
    </div>
  </div>

  {/* Domaine / Port */}
  <div>
    <p className="text-sm text-gray-400 mb-2">Mode d'installation & Réseau</p>
    <div className="flex gap-2">
      <label className="flex-1 flex items-center justify-center rounded bg-gray-700 px-3 py-2">
        <input
          type="radio"
          name="install-mode"
          value="ip"
          checked={!useDomain}
          onChange={() => setUseDomain(false)}
          className="w-3 h-3 rounded bg-gray-600 border-gray-600 mt-1 me-2 hover:scale-110 transition-transform"
        />
        <span className="text-xs">IP + Port Panel</span>
      </label>
      <label className="flex-1 flex items-center justify-center rounded bg-gray-700 px-3 py-2">
        <input
          type="radio"
          name="install-mode"
          value="domain"
          checked={useDomain}
          onChange={() => setUseDomain(true)}
          className="w-3 h-3 rounded bg-gray-600 border-gray-600 mt-1 me-2 hover:scale-110 transition-transform"
        />
        <span className="text-xs">Domaine personnalisé</span>
      </label>
    </div>
    {useDomain && (
      <div className="mt-2">
        <input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="votre-domaine.fr"
          className="mt-1 block w-full rounded bg-gray-700 px-3 py-2 text-sm border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label="Domaine"
        />
      </div>
    )}
    {!useDomain && (
      <p className="mt-2 text-xs text-gray-400">
        Chaque projet obtient un port panel unique (ex: 8086, 8087, 8088...)
      </p>
    )}
  </div>

  {/* Bouton installer */}
  <div>
    <button
      onClick={startInstallation}
      className="w-full bg-orange-600 text-gray-950 font-bold py-3 px-4 rounded-lg text-lg hover:bg-orange-500 hover:text-gray-950 transition-colors"
      disabled={isInstalling}
    >
      {isInstalling 
        ? 'Installation en cours...' 
        : 'Créer le Serveur Panel'}
    </button>
  </div>

</div>

</div>

{/*** Graphiques stats latéraux ***/
<aside className="hidden md:block w-64 bg-gray-800 h-fit rounded-lg fixed right-0 top-20 bottom-0 border-l border-gray-700">
  <div className="p-4 border-b border-gray-700">
    <h3 className="font-semibold text-xs text-gray-400 uppercase tracking-wider">Statistiques Panel</h3>
  </div>
  <div className="h-64 overflow-y-auto">
    <div className="h-4 bg-gray-700 rounded-t-md">
      <div
        className="h-full bg-gradient-to-b from-orange-500 to-orange-400 rounded-t-md w-32"
        style={{ width: '40%' }}
      ></div>
    </div>
    <p className="text-xs text-gray-400 text-center pt-2">CPU</p>
    <div className="h-4 bg-gray-700 rounded-b-md">
      <div
        className="h-full bg-gradient-to-t from-orange-500 to-orange-400 rounded-b-md w-32"
        style={{ width: '65%' }}
      ></div>
    </div>
    <p className="text-xs text-gray-400 text-center pt-2">Mémoire</p>
  </div>
</aside>

        {/* Liste projets - avec ports uniques */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-800 rounded-2xl p-5 hover:bg-gray-700 transition-colors cursor-pointer"
              onClick={() => setNotice('Ouverture : ' + project.name)}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded bg-gray-700 flex items-center justify-center flex-shrink-0">
                  <Server className="text-orange-400 text-sm" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-200 line-clamp-1">{project.name}</p>
                  <p className="text-xs text-gray-400 line-clamp-1">{project.os} {project.osVersion}</p>
                </div>
              </div>
              {/* Infos réseau : port et domain */}
              <div className="mt-3 text-sm">
                {project.domain ? (
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">🌐</span>
                    <span>{project.domain}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">🖥️</span>
                    <span>IP Panel:Port {project.port}</span>
                  </div>
                )}
                  <div className="mt-1">
                    <span className="text-gray-500 text-xs">SFTP:</span>
                    <span className="text-gray-300 text-sm ml-1">{project.sftp}</span>
                  </div>
                  <div className="mt-1">
                    <span className="text-gray-500 text-xs">FTP:</span>
                    <span className="text-gray-300 text-sm ml-1">{project.ftp}</span>
                  </div>
                )}
              </div>
              {/* Ressources */}
              <div className="mt-3 flex items-center gap-4">
                <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-300 rounded-full transition-width"
                    style={{ width: (project.ram/64)*100 + '%' }}
                  ></div>
                </div>
                <span className="text-orange-400 text-sm">{project.ram}MB</span>
                <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full transition-width"
                    style={{ width: (project.cpu/8)*100 + '%' }}
                  ></div>
                </div>
                <span className="text-yellow-400 text-sm">{project.cpu}CPU</span>
                <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 to-green-300 rounded-full transition-width"
                    style={{ width: (project.disk/500)*100 + '%' }}
                  ></div>
                </div>
                <span className="text-green-400 text-sm">{project.disk}GB</span>
              </div>
            </div>
          ))}
        </div>

        {/* Notice */}
        {notice && (
          <div className="bg-orange-500/20 border border-orange-500/50 text-orange-400 rounded-lg p-4 mt-6 text-center">
            {notice}
          </div>
        )}

      </div>
    </main>
  )
}