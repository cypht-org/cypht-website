---
title: Install
exclude: true
nocontainer: true
loadScriptAfter: /js/install.js
---

<!-- Hero Section -->
<div class="">
    <section class="install-hero-section">
        <div class="install-hero-container">
            <div class="install-hero-content w-50">
                <div class="chip">
                    <i class="bi bi-download"></i>
                    <span>Installation Guide</span>
                </div>
                <h1 class="install-hero-title">
                    Install <span class="text-primary">Cypht</span> 
                    <br>in Minutes
                </h1>
                <p class="install-hero-subtitle">
                    Get your secure, self-hosted email client running quickly with our comprehensive installation guide. Multiple deployment options available.
                </p>
                <div class="install-hero-stats">
                    <div class="stat-item">
                    <div class="stat-number">5min</div>
                    <div class="stat-label">Setup Time</div>
                    </div>
                    <div class="stat-divider"></div>
                    <div class="stat-item">
                    <div class="stat-number">4</div>
                    <div class="stat-label">Install Methods</div>
                    </div>
                    <div class="stat-divider"></div>
                    <div class="stat-item">
                    <div class="stat-number">100%</div>
                    <div class="stat-label">Open Source</div>
                    </div>
                </div>
                <div class="install-hero-actions">
                    <a href="#quick-install" class="btn-primary-hero">
                    <i class="bi bi-rocket-takeoff"></i>
                    Quick Install
                    </a>
                    <a href="#installation-methods" class="btn-secondary-hero">
                    <i class="bi bi-list-ul"></i>
                    View All Methods
                    </a>
                </div>
            </div>
            <div class="install-hero-visual flex-1">
                <div class="terminal-window">
                    <div class="terminal-header">
                        <div class="terminal-buttons">
                            <span class="terminal-btn terminal-btn-red"></span>
                            <span class="terminal-btn terminal-btn-yellow"></span>
                            <span class="terminal-btn terminal-btn-green"></span>
                        </div>
                        <div class="terminal-title">cypht-install</div>
                    </div>
                    <div class="terminal-body">
                        <div class="terminal-line">
                            <span class="terminal-prompt">$</span>
                            <span class="terminal-command typing-animation">git clone https://github.com/jasonmunro/cypht.git</span>
                        </div>
                        <div class="terminal-line terminal-output">
                            <span class="terminal-success">✓ Cloning into 'cypht'...</span>
                        </div>
                        <div class="terminal-line">
                            <span class="terminal-prompt">$</span>
                            <span class="terminal-command">cd cypht && ./install.sh</span>
                        </div>
                        <div class="terminal-line terminal-output">
                            <span class="terminal-success">✓ Installation completed successfully!</span>
                        </div>
                        <div class="terminal-line">
                            <span class="terminal-prompt">$</span>
                            <span class="terminal-command">docker run -p 8080:80 cypht/cypht:latest</span>
                        </div>
                        <div class="terminal-line terminal-output">
                            <span class="terminal-info">🚀 Cypht is running on http://localhost:8080</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="installation-methods">
        <div class="install-methods-container">
            <div class="install-methods-header">
                <span class="chip">
                    <i class="bi bi-download"></i>
                    <span>Methods</span>
                </span>
                    <h1>Choose installation method</h1>
                 <p class="install-methods-subtitle text-center">Choose the installation path that aligns with your experience and technical environment.</p>
            </div>
            <div class="install-methods-types flex my-3 gap-3">
                <div class="install-method-btn">
                       <button data-method="manual" class=" i-method-active ">Manual Install</button>
                </div>
                <div class="install-method-btn">
                       <button data-method="docker" class="btn-primary">using Docker</button>
                </div>
                <div class="install-method-btn">
                       <button data-method="yunohost" class="btn-primary">YunoHost server</button>
                </div>
                <div class="install-method-btn">
                       <button data-method="tiki" class="btn-primary">within Tiki</button>
                </div>
            </div>
            <div id="i-methods-list">
                <!-- manual install -->
            <div id="manual" class="install-methods-content">
                <div class="i-content-left">
                    <div class="i-content-left-img">
                        <img src="/img/i-manuel.png" alt="">
                    </div>
                </div>
                <div class="i-content-right">
                    <!-- header -->
                    <div class="i-content-right-header">
                        <h2>Manual Install</h2>
                        <p>Contrôle total sur l'installation et la configuration de Cypht</p>
                    </div>
                    <!-- content -->
                   <div class="features">
                        <div class="feature">
                            <i class="bi bi-check-circle"></i>
                            <span>Personnalisation avancée</span>
                        </div>
                        <div class="feature">
                            <i class="bi bi-check-circle"></i>
                            <span>Accès serveur direct</span>
                        </div>
                        <div class="feature">
                            <i class="bi bi-check-circle"></i>
                            <span>Performance optimale</span>
                        </div>
                        </div>
                        <div class="card-actions">
                        <a href="#manual-guide" class="btn primary-btn">Guide Complet</a>
                    </div>
                </div>
            </div>
            <!-- Docker -->
            <div id="docker" class="install-methods-content">
                <div class="i-content-left">
                    <div class="i-content-left-img">
                        <img src="/img/docker.png" alt="">
                    </div>
                    <div class="i-type-details">
                        <span>Docker is  lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        <a href="#docker-guide" class="btn primary-btn">Learn more about Docker</a>
                    </div>
                </div>
                <div class="i-content-right">
                    <!-- header -->
                    <div class="i-content-right-header">
                        <h2>Docker Install</h2>
                        <p>L'installation la plus simple avec conteneurisation. Parfait pour un démarrage rapide.</p>
                    </div>
                    <!-- content -->
                   <div class="features">
                        <div class="feature">
                            <i class="bi bi-check-circle"></i>
                            <span>Configuration minimale</span>
                        </div>
                        <div class="feature">
                            <i class="bi bi-check-circle"></i>
                            <span>Environnement isolé</span>
                        </div>
                        <div class="feature">
                            <i class="bi bi-check-circle"></i>
                            <span>Mises à jour simplifiées</span>
                        </div>
                        <div class="code-preview">
                        <code>docker run -p 8080:80 cypht/cypht:latest</code>
                        <button class="copy-btn" data-clipboard-text="docker run -p 8080:80 cypht/cypht:latest">
                            <i class="bi bi-clipboard"></i>
                        </button>
                        </div>
                        <div class="card-actions">
                            <a href="#docker-guide" class="btn primary-btn">Guide Complet</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- YunoHost Card  -->
            <div id="yunohost" class="install-methods-content">
                <div class="i-content-left">
                    <div class="i-content-left-img">
                        <img src="/img/yuno_host.png" alt="">
                    </div>
                     <div class="i-type-details">
                        <span>YunoHost is  lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        <a href="#yunohost-guide" class="btn primary-btn">Learn more about YunoHost</a>
                    </div>
                </div>
                <div class="i-content-right">
                    <!-- header -->
                    <div class="i-content-right-header">
                        <h2>YunoHost Install</h2>
                        <p>Installation de Cypht sur YunoHost.</p>
                    </div>
                    <!-- content -->
                   <div class="features">
                        <div class="feature">
                            <i class="bi bi-check-circle"></i>
                            <span>Configuration minimale</span>
                        </div>
                        <div class="feature">
                            <i class="bi bi-check-circle"></i>
                            <span>Environnement isolé</span>
                        </div>
                        <div class="feature">
                            <i class="bi bi-check-circle"></i>
                            <span>Mises à jour simplifiées</span>
                        </div>
                        <div class="code-preview">
                        <code>docker run -p 8080:80 cypht/cypht:latest</code>
                        <button class="copy-btn" data-clipboard-text="docker run -p 8080:80 cypht/cypht:latest">
                            <i class="bi bi-clipboard"></i>
                        </button>
                        </div>
                        <div class="card-actions">
                            <a href="#docker-guide" class="btn primary-btn">Guide Complet</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Tiki Integration Card  -->
            <div id="tiki" class="install-methods-content">
                <div class="i-content-left">
                    <div class="i-content-left-img">
                        <img src="/img/tiki_logo.png" alt="">
                    </div>
                     <div class="i-type-details">
                        <span>Tiki is  lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        <a href="#tiki-guide" class="btn primary-btn">Learn more about Tiki</a>
                    </div>
                </div>
                <div class="i-content-right">
                    <!-- header -->
                    <div class="i-content-right-header">
                        <h2>Tiki Integration</h2>
                        <p>Intégration de Cypht dans TikiWiki.</p>
                    </div>
                    <!-- content -->
                   <div class="features">
                        <div class="feature">
                            <i class="bi bi-check-circle"></i>
                            <span>Configuration minimale</span>
                        </div>
                        <div class="feature">
                            <i class="bi bi-check-circle"></i>
                            <span>Environnement isolé</span>
                        </div>
                        <div class="feature">
                            <i class="bi bi-check-circle"></i>
                            <span>Mises à jour simplifiées</span>
                        </div>
                        <div class="code-preview">
                        <code>docker run -p 8080:80 cypht/cypht:latest</code>
                        <button class="copy-btn" data-clipboard-text="docker run -p 8080:80 cypht/cypht:latest">
                            <i class="bi bi-clipboard"></i>
                        </button>
                        </div>
                        <div class="card-actions">
                            <a href="#docker-guide" class="btn primary-btn">Guide Complet</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="guide" class="guide-section">
        <div class="d-flex flex-row guide-container">
            <div class="guide-left">
                  <ul id="guide_left_list">
                    <li data-method="manual">
                        <a href="#manual" class="">Manual Installation</a>
                    </li>
                    <li data-method="docker">
                        <a href="#docker" class="">Docker Installation</a>
                    </li>
                    <li data-method="yuno">
                        <a href="#yuno" class="">YunoHost Installation</a>
                    </li>
                    <li data-method="tiki">
                        <a href="#tiki" class="">Tiki Integration</a>
                    </li>
                </ul>
            </div>
            <div id="guide-content" class="guide-right">
            </div>
        </div>
    </section>

</div>
