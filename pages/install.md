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
    <!-- Installation Methods Section -->
    <section class="install-methods-section">
        <div class="in-content d-flex flex-column gap-2 justify-content-center">
            <div class="in-content-header">
                <div class="chip">
                     <i class="bi bi-tools"></i>
                     <span>Installation Options</span>
                </div>
                <!--  -->
                <div class="content-header-title">
                    <h2 >Choose Your Installation Method
                    <span>
                    Cypht has four different installation ways to fit your technical expertise and deployment need
                    </span>
                    </h2>
                 <!-- <p class="content-header-subtitle">Cypht has four different installation ways to fit your technical expertise and deployment needs</p> -->
                </div>
            </div>

            <div class="in-methodes-grid">
                <div class="install-method-card">
                    <div class="floating-element"></div>
                        <div class="method-header">
                            <div class="method-icon manual-icon">
                                    <i class="bi bi-gear-fill"></i>
                            </div>
                            <div class="method-number">01</div>
                        </div>
                        <h3 class="method-title">Manual Installation</h3>
                        <p class="method-description">Full control over your installation with step-by-step configuration. Best for custom setups and advanced users.</p>

                        <div class="method-features">
                            <div class="feature-item">
                                <i class="bi bi-check-circle-fill"></i>
                                <span>Full customization</span>
                            </div>
                            <div class="feature-item">
                                <i class="bi bi-check-circle-fill"></i>
                                <span>Direct server access</span>
                            </div>
                            <div class="feature-item">
                                <i class="bi bi-check-circle-fill"></i>
                                <span>Optimal performance</span>
                            </div>
                        </div>

                        <div class="method-code-preview">
                            <code>./install.sh --config production</code>
                        </div>

                        <a href="#manual-guide" class="method-btn btn-secondary">
                            <i class="bi bi-arrow-right"></i>
                            Manual Setup
                        </a>
                    </div>
                </div>
                <!-- 2 -->
                <div class="install-method-card">
                     <div class="floating-element"></div>
                     <div class="method-header">
                         <div class="method-icon tiki-icon">
                             <i class="bi bi-puzzle-fill"></i>
                         </div>
                         <div class="method-number">02</div>
                     </div>
                     <h3 class="method-title">Installation within Tiki</h3>
                     <p class="method-description">Integrate Cypht seamlessly within your Tiki CMS installation for a unified content management experience.</p>

                     <div class="method-features">
                         <div class="feature-item">
                             <i class="bi bi-check-circle-fill"></i>
                             <span>CMS Integration</span>
                         </div>
                         <div class="feature-item">
                             <i class="bi bi-check-circle-fill"></i>
                             <span>Unified interface</span>
                         </div>
                         <div class="feature-item">
                             <i class="bi bi-check-circle-fill"></i>
                             <span>Easy management</span>
                         </div>
                     </div>

                     <div class="method-code-preview">
                         <code>tiki-install cypht-module</code>
                     </div>

                     <a href="#tiki-guide" class="method-btn btn-secondary">
                         <i class="bi bi-arrow-right"></i>
                         Tiki Setup
                     </a>
                 </div>
                 <!-- 3 -->
                 <!-- Docker Installation -->
                 <div class="install-method-card featured-method">
                     <div class="floating-element"></div>
                     <div class="method-header">
                         <div class="method-icon docker-icon">
                             <i class="bi bi-box-fill"></i>
                         </div>
                         <div class="method-number">03</div>
                         <div class="method-badge">Recommended</div>
                     </div>
                     <h3 class="method-title">Docker Installation</h3>
                     <p class="method-description">The fastest and most reliable way to get Cypht running using Docker. Perfect for development and production environments.</p>

                     <div class="method-features">
                         <div class="feature-item">
                             <i class="bi bi-check-circle-fill"></i>
                             <span>One-command setup</span>
                         </div>
                         <div class="feature-item">
                             <i class="bi bi-check-circle-fill"></i>
                             <span>Isolated environment</span>
                         </div>
                         <div class="feature-item">
                             <i class="bi bi-check-circle-fill"></i>
                             <span>Easy updates</span>
                         </div>
                     </div>

                     <div class="method-code-preview">
                         <code>docker run -p 8080:80 cypht/cypht:latest</code>
                     </div>

                     <a href="#docker-guide" class="method-btn btn-primary">
                         <i class="bi bi-arrow-right"></i>
                         Start with Docker
                     </a>
                 </div>
            <!-- </div> -->
        </div>
    </section>
    <!--  -->
    <section id="installation-methods" class="install-methods-section">
         <div class="container-fluid">
             <div class="section-header text-center">
                 <div class="section-badge">
                     <i class="bi bi-tools"></i>
                     <span>Installation Options</span>
                 </div>
                 <h2 class="section-title">Choose Your Installation Method</h2>
                 <p class="section-subtitle">Cypht has four different installation ways to fit your technical expertise and deployment needs</p>
             </div>

             <div class="install-methods-grid">
                 <!-- Manual Installation -->
                 <div class="install-method-card">
                     <div class="floating-element"></div>
                     <div class="method-header">
                         <div class="method-icon manual-icon">
                             <i class="bi bi-gear-fill"></i>
                         </div>
                         <div class="method-number">01</div>
                     </div>
                     <h3 class="method-title">Manual Installation</h3>
                     <p class="method-description">Full control over your installation with step-by-step configuration. Best for custom setups and advanced users.</p>

                     <div class="method-features">
                         <div class="feature-item">
                             <i class="bi bi-check-circle-fill"></i>
                             <span>Full customization</span>
                         </div>
                         <div class="feature-item">
                             <i class="bi bi-check-circle-fill"></i>
                             <span>Direct server access</span>
                         </div>
                         <div class="feature-item">
                             <i class="bi bi-check-circle-fill"></i>
                             <span>Optimal performance</span>
                         </div>
                     </div>

                     <div class="method-code-preview">
                         <code>./install.sh --config production</code>
                     </div>

                     <a href="#manual-guide" class="method-btn btn-secondary">
                         <i class="bi bi-arrow-right"></i>
                         Manual Setup
                     </a>
                 </div>

                 <!-- Tiki Installation -->
                 <div class="install-method-card">
                     <div class="floating-element"></div>
                     <div class="method-header">
                         <div class="method-icon tiki-icon">
                             <i class="bi bi-puzzle-fill"></i>
                         </div>
                         <div class="method-number">02</div>
                     </div>
                     <h3 class="method-title">Installation within Tiki</h3>
                     <p class="method-description">Integrate Cypht seamlessly within your Tiki CMS installation for a unified content management experience.</p>

                     <div class="method-features">
                         <div class="feature-item">
                             <i class="bi bi-check-circle-fill"></i>
                             <span>CMS Integration</span>
                         </div>
                         <div class="feature-item">
                             <i class="bi bi-check-circle-fill"></i>
                             <span>Unified interface</span>
                         </div>
                         <div class="feature-item">
                             <i class="bi bi-check-circle-fill"></i>
                             <span>Easy management</span>
                         </div>
                     </div>

                     <div class="method-code-preview">
                         <code>tiki-install cypht-module</code>
                     </div>

                     <a href="#tiki-guide" class="method-btn btn-secondary">
                         <i class="bi bi-arrow-right"></i>
                         Tiki Setup
                     </a>
                 </div>

                 <!-- Docker Installation -->
                 <div class="install-method-card featured-method">
                     <div class="floating-element"></div>
                     <div class="method-header">
                         <div class="method-icon docker-icon">
                             <i class="bi bi-box-fill"></i>
                         </div>
                         <div class="method-number">03</div>
                         <div class="method-badge">Recommended</div>
                     </div>
                     <h3 class="method-title">Docker Installation</h3>
                     <p class="method-description">The fastest and most reliable way to get Cypht running using Docker. Perfect for development and production environments.</p>

                     <div class="method-features">
                         <div class="feature-item">
                             <i class="bi bi-check-circle-fill"></i>
                             <span>One-command setup</span>
                         </div>
                         <div class="feature-item">
                             <i class="bi bi-check-circle-fill"></i>
                             <span>Isolated environment</span>
                         </div>
                         <div class="feature-item">
                             <i class="bi bi-check-circle-fill"></i>
                             <span>Easy updates</span>
                         </div>
                     </div>

                     <div class="method-code-preview">
                         <code>docker run -p 8080:80 cypht/cypht:latest</code>
                     </div>

                     <a href="#docker-guide" class="method-btn btn-primary">
                         <i class="bi bi-arrow-right"></i>
                         Start with Docker
                     </a>
                 </div>

                 <!-- YunoHost Installation -->
                 <div class="install-method-card">
                     <div class="floating-element"></div>
                     <div class="method-header">
                         <div class="method-icon yunohost-icon">
                             <i class="bi bi-server"></i>
                         </div>
                         <div class="method-number">04</div>
                     </div>
                     <h3 class="method-title">YunoHost Server</h3>
                     <p class="method-description">Install Cypht on a YunoHost server for a complete self-hosted solution with automatic SSL and domain management.</p>

                     <div class="method-features">
                         <div class="feature-item">
                             <i class="bi bi-check-circle-fill"></i>
                             <span>Auto SSL</span>
                         </div>
                         <div class="feature-item">
                             <i class="bi bi-check-circle-fill"></i>
                             <span>Domain management</span>
                         </div>
                         <div class="feature-item">
                             <i class="bi bi-check-circle-fill"></i>
                             <span>One-click install</span>
                         </div>
                     </div>

                     <div class="method-code-preview">
                         <code>yunohost app install cypht</code>
                     </div>

                     <a href="#yunohost-guide" class="method-btn btn-secondary">
                         <i class="bi bi-arrow-right"></i>
                         YunoHost Setup
                     </a>
                 </div>
             </div>
         </div>
     </section>

    <!-- Quick Install Section -->
    <section id="quick-install" class="quick-install-section">
    <div class="container-fluid">
        <div class="quick-install-content">
        <div class="quick-install-header">
            <h2>Quick Install (Docker)</h2>
            <p>Get Cypht running in under 5 minutes with Docker</p>
        </div>

        <div class="install-steps">
            <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-content">
                <h4>Prerequisites</h4>
                <p>Make sure you have Docker installed on your system</p>
                <div class="code-block">
                <div class="code-header">
                    <span>Terminal</span>
                    <button class="copy-btn" onclick="copyCode(this)">
                    <i class="bi bi-clipboard"></i>
                    </button>
                </div>
                <code>docker --version</code>
                </div>
            </div>
    </div>

            <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-content">
                <h4>Pull and Run</h4>
                <p>Download and start Cypht with a single command</p>
                <div class="code-block">
                <div class="code-header">
                    <span>Terminal</span>
                    <button class="copy-btn" onclick="copyCode(this)">
                    <i class="bi bi-clipboard"></i>
                    </button>
                </div>
                <code>docker run -d -p 8080:80 --name cypht cypht/cypht:latest</code>
                </div>
            </div>
            </div>

            <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-content">
                <h4>Access Cypht</h4>
                <p>Open your browser and navigate to your Cypht instance</p>
                <div class="access-link">
                <a href="http://localhost:8080" target="_blank" class="btn-link">
                    <i class="bi bi-box-arrow-up-right"></i>
                    http://localhost:8080
                </a>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>

</div>
