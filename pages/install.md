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
                    <a href="#guide-content" class="btn-primary-hero">
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
                            <p>Full control over installing and configuring Cypht.</p>
                        </div>
                        <!-- content -->
                    <div class="features">
                            <div class="feature">
                                <i class="bi bi-check-circle"></i>
                                <span>Advanced customization</span>
                            </div>
                            <div class="feature">
                                <i class="bi bi-check-circle"></i>
                                <span>Direct server access</span>
                            </div>
                            <div class="feature">
                                <i class="bi bi-check-circle"></i>
                                <span>Optimal performance</span>
                            </div>
                            </div>
                            <div class="card-actions">
                            <a href="#manual-guide" class="btn primary-btn">Full Guide</a>
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
                            <p>The simplest installation with containerization. Perfect for a quick start.</p>
                        </div>
                        <!-- content -->
                    <div class="features">
                            <div class="feature">
                                <i class="bi bi-check-circle"></i>
                                <span>Minimal configuration</span>
                            </div>
                            <div class="feature">
                                <i class="bi bi-check-circle"></i>
                                <span>Isolated environment</span>
                            </div>
                            <div class="feature">
                                <i class="bi bi-check-circle"></i>
                                <span>Simplified updates</span>
                            </div>
                            <div class="code-preview">
                            <code>docker run -p 8080:80 cypht/cypht:latest</code>
                            <button class="copy-btn" data-clipboard-text="docker run -p 8080:80 cypht/cypht:latest">
                                <i class="bi bi-clipboard"></i>
                            </button>
                            </div>
                            <div class="card-actions">
                                <a href="#docker-guide" class="btn primary-btn">Full Guide</a>
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
                            <p>Install Cypht on YunoHost.</p>
                        </div>
                        <!-- content -->
                    <div class="features">
                            <div class="feature">
                                <i class="bi bi-check-circle"></i>
                                <span>Minimal configuration</span>
                            </div>
                            <div class="feature">
                                <i class="bi bi-check-circle"></i>
                                <span>Isolated environment</span>
                            </div>
                            <div class="feature">
                                <i class="bi bi-check-circle"></i>
                                <span>Simplified updates</span>
                            </div>
                            <div class="code-preview">
                            <code>docker run -p 8080:80 cypht/cypht:latest</code>
                            <button class="copy-btn" data-clipboard-text="docker run -p 8080:80 cypht/cypht:latest">
                                <i class="bi bi-clipboard"></i>
                            </button>
                            </div>
                            <div class="card-actions">
                                <a href="#docker-guide" class="btn primary-btn">Full Guide</a>
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
                            <p>Integrate Cypht with TikiWiki.</p>
                        </div>
                        <!-- content -->
                    <div class="features">
                            <div class="feature">
                                <i class="bi bi-check-circle"></i>
                                <span>Minimal configuration</span>
                            </div>
                            <div class="feature">
                                <i class="bi bi-check-circle"></i>
                                <span>Isolated environment</span>
                            </div>
                            <div class="feature">
                                <i class="bi bi-check-circle"></i>
                                <span>Simplified updates</span>
                            </div>
                            <div class="code-preview">
                            <code>docker run -p 8080:80 cypht/cypht:latest</code>
                            <button class="copy-btn" data-clipboard-text="docker run -p 8080:80 cypht/cypht:latest">
                                <i class="bi bi-clipboard"></i>
                            </button>
                            </div>
                            <div class="card-actions">
                                <a href="#docker-guide" class="btn primary-btn">Full Guide</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="guide" class="guide-section">
        <div class="d-flex flex-row guide-container">
            <div class="guide-left d-none d-md-block">
               <div class="guide-left-content">
                    <div class="guide-left-header">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21c4.418 0 8-3.356 8-7.496c0-3.741-2.035-6.666-3.438-8.06c-.26-.258-.694-.144-.84.189c-.748 1.69-2.304 4.123-4.293 4.123c-1.232.165-3.112-.888-1.594-6.107c.137-.47-.365-.848-.749-.534C6.905 4.905 4 8.511 4 13.504C4 17.644 7.582 21 12 21"/></svg>
                            <h5>Installation Guide</h5>
                        </div>
                        <div>

                            <p>Choose the method that best fits your workflow</p>
                        </div>
                    </div>
                    <ul id="guide_left_list">
                        <li data-method="manual">
                            <a href="#manual" class="guide-menu-active">Manual</a>
                        </li>
                        <li data-method="docker">
                            <a href="#docker" class="">Docker</a>
                        </li>
                        <li data-method="yuno">
                            <a href="#yuno" class="">YunoHost</a>
                        </li>
                        <li data-method="tiki">
                            <a href="#tiki" class="">Tiki Integration</a>
                        </li>
                    </ul>
               </div>
            </div>
            <div id="guide-content">
            </div>
        </div>
    </section>

</div>
