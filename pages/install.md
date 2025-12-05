---
title: Install
loadScriptAfter: /js/install.js
---

<!-- Hero Section -->
<div class="install-container">
    <section class="hs-container install-hero-container">
        <div class="hs-content">
            <div class="hs-text-content">
                <div class="hs-chip">
                    <i class="bi bi-download"></i>
                    <span>Installation Guide</span>
                </div>
                <h1 class="display-5 fw-bold">
                    Install <span class="text-primary">Cypht</span> 
                    <br>in Minutes
                </h1>
                <p class="hs-subtitle">
                    Get your secure, self-hosted email client running quickly with our comprehensive installation guide. Multiple deployment options available.
                </p>
                <div class="hs-stats-content">
                    <div class="hs-hs-stat-item">
                        <div class="hs-stat-number">5min</div>
                        <div class="hs-stat-label">Setup Time</div>
                    </div>
                    <div class="hs-stat-divider"></div>
                    <div class="hs-stat-item">
                        <div class="hs-stat-number">4</div>
                        <div class="hs-stat-label">Install Methods</div>
                    </div>
                    <div class="hs-stat-divider"></div>
                        <div class="hs-stat-item">
                        <div class="hs-stat-number">100%</div>
                    <div class="hs-stat-label">Open Source</div>
                    </div>
                </div>
                <div class="hs-actions-content">
                    <a href="#guide-content" class="action-btn cypht-primary-btn">
                    <i class="bi bi-rocket-takeoff"></i>
                    Quick Install
                    </a>
                    <a href="#installation-methods" class="action-btn cypht-secondary-btn">
                    <i class="bi bi-list-ul"></i>
                    View All Methods
                    </a>
                </div>
            </div>
            <div class="install-hero-visual d-none d-lg-flex align-items-center">
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
                    <!-- Commande 1 -->
                    <div class="terminal-line line-step-1">
                        <span class="terminal-prompt">$</span>
                        <span class="cmd step-1">git clone https://github.com/jasonmunro/cypht.git</span>
                    </div>
                    <!-- Output 1 -->
                    <div class="terminal-line output line-step-1-out step-1-out">
                        <span class="terminal-success">✓ Cloning into 'cypht'...</span>
                    </div>
                    <!-- Commande 2 -->
                    <div class="terminal-line line-step-2">
                        <span class="terminal-prompt">$</span>
                        <span class="cmd step-2">cd cypht && ./install.sh</span>
                    </div>
                    <!-- Output 2 -->
                    <div class="terminal-line output line-step-2-out step-2-out">
                        <span class="terminal-success">✓ Installation completed successfully!</span>
                    </div>
                    <!-- Commande 3 -->
                    <div class="terminal-line line-step-3">
                        <span class="terminal-prompt">$</span>
                        <span class="cmd step-3">docker run -p 8080:80 cypht/cypht:latest</span>
                    </div>
                    <!-- Output 3 -->
                    <div class="terminal-line output line-step-3-out step-3-out">
                        <span class="terminal-info">🚀 Cypht is running on http://localhost:8080</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
<!--  -->
    <section >
        <div class="imth-container">
           <div class="imth-header">
                <span class="home-overline">
                    Methods
                </span>
                <div>
                    <h1>Choose installation method</h1>
                    <p class="install-methods-subtitle text-center">Choose the installation path that aligns with your experience and technical environment.</p>
                </div>
            </div>
            <div class="imth-content">
                <div class="imth-card">
                    <div class="imth-card-header">
                        <div class="imth-card-header-icon imth-icon-manual">
                            <i class="bi bi-gear-fill"></i>
                        </div>
                    </div>
                    <div class="imth-card-body">
                        <h3 class="imth-card-title">Manual Install</h3>
                        <p class="imth-card-description">Full control over installing and configuring Cypht. Perfect for advanced users who want complete customization.</p>
                    </div>
                </div>
                <div class="imth-card">
                    <div class="imth-card-header">
                        <div class="imth-card-header-icon imth-icon-docker">
                            <i class="bi bi-box-seam"></i>
                        </div>
                    </div>
                    <div class="imth-card-body">
                        <h3 class="imth-card-title">Docker Install</h3>
                        <p class="imth-card-description">The simplest installation with containerization. Get up and running in minutes with minimal configuration.</p>
                    </div>
                </div>
                <div class="imth-card">
                    <div class="imth-card-header">
                        <div class="imth-card-header-icon imth-icon-yuno">
                            <i class="bi bi-server"></i>
                        </div>
                    </div>
                    <div class="imth-card-body">
                        <h3 class="imth-card-title">YunoHost Server</h3>
                        <p class="imth-card-description">Install Cypht on YunoHost with one click. Ideal for self-hosting enthusiasts using YunoHost platform.</p>
                    </div>
                </div>
                <div class="imth-card">
                    <div class="imth-card-header">
                        <div class="imth-card-header-icon imth-icon-tiki">
                            <i class="bi bi-puzzle-fill"></i>
                        </div>
                    </div>
                    <div class="imth-card-body">
                        <h3 class="imth-card-title">Tiki Integration</h3>
                        <p class="imth-card-description">Integrate Cypht seamlessly with TikiWiki. Perfect for teams already using Tiki for collaboration.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
<!--  -->
    <section id="guide" class="guide-section mt-4">
        <div class="mobi-nav-content d-lg-none">
            <span class="mobi-nav-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 10v4c0 1.886 0 2.828.586 3.414C4.172 18 5.114 18 7 18h10c1.886 0 2.828 0 3.414-.586C21 16.828 21 15.886 21 14V9c0-2.828 0-4.243-.879-5.121C19.243 3 17.828 3 15 3H9c-2.828 0-4.243 0-5.121.879c-.49.49-.707 1.146-.803 2.121M22 21h-6M2 21h10m3-6H9"/></svg>
                    Installation Type
            </span>
            <div class="custom-select">
                <button class="select-btn">
                    <span id="selected_text" class="selected-text"></span>
                    <span class="arrow">
                       <i class="bi bi-chevron-down dropdown-arrow"></i>
                    </span>
                </button>
                <ul id="inst_list_menu" class="select-menu">
                    <li data-value="manual">Manual Install</li>
                    <li data-value="docker">using Docker</li>
                    <li data-value="yuno">Yuno Server</li>
                    <li data-value="tiki">within Tiki</li>
                </ul>
            </div>
        </div>
        <div class="guide-container row">
            <div class="guide-nav d-none d-lg-block col-lg-2">
               <div class="guide-nav-content">
                    <div class="guide-nav-header">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21c4.418 0 8-3.356 8-7.496c0-3.741-2.035-6.666-3.438-8.06c-.26-.258-.694-.144-.84.189c-.748 1.69-2.304 4.123-4.293 4.123c-1.232.165-3.112-.888-1.594-6.107c.137-.47-.365-.848-.749-.534C6.905 4.905 4 8.511 4 13.504C4 17.644 7.582 21 12 21"/></svg>
                            <h5>Installation Guide</h5>
                        </div>
                        <div>
                            <p>Choose the method that best fits your workflow</p>
                        </div>
                    </div>
                    <ul id="guide_nav_list">
                        <li data-method="manual" class="install-method-btn">
                         <button data-method="manual" class="guide-menu-active">Manual Install</button>
                        </li>
                        <li data-method="docker" class="install-method-btn">
                        <button data-method="docker" class="btn-primary">using Docker</button>
                        </li>
                        <li data-method="yuno" class="install-method-btn">
                         <button data-method="yuno" class="btn-primary">Yuno Server</button>
                        </li>
                        <li data-method="tiki" class="install-method-btn">
                        <button data-method="tiki" class="btn-primary">within Tiki</button>
                        </li>
                    </ul>
               </div>
            </div>
            <div id="guide_content" class="col col-lg-10 guide-content px-1 row">
            </div>
        </div>
    </section>

</div>
