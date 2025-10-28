---
title: Install
exclude: true
nocontainer: true
loadScriptAfter: /js/install.js
---

<!-- Hero Section -->
<div class="install-content">
    <section class="install-hero-section">
        <div class="install-hero-container">
            <div class="hero-background-effects">
                <div class="floating-element floating-element-1"></div>
                <div class="floating-element floating-element-2"></div>
                <div class="floating-element floating-element-3"></div>
            </div>
            <!--  -->
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
                    <div class="stat-number">3</div>
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
            <!--  -->
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
    
    </section>

</div>
