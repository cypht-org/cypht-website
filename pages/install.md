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
                    <!-- <i class="bi bi-download"></i> -->
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
                    <a href="#guide_content" class="action-btn cypht-primary-btn">
                    <i class="bi bi-rocket-takeoff"></i>
                    Quick Install
                    </a>
                    <a href="#installation_methods" class="action-btn cypht-secondary-btn">
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
                        <div class="terminal-line step-1">
                            <span class="terminal-prompt">$</span>
                            <span class="cmd">git clone https://github.com/cypht-org/cypht</span>
                        </div>
                        <!-- Output 1 -->
                        <div class="terminal-line output step-1-out">
                            <span class="terminal-success">✓ Cloning into 'cypht'...</span>
                        </div>
                        <!-- Commande 2 -->
                        <div class="terminal-line step-2">
                            <span class="terminal-prompt">$</span>
                            <span class="cmd">cd cypht</span>
                        </div>
                        <!-- Output 2 (empty) -->
                        <div class="terminal-line output step-2-out"></div>
                        <!-- Commande 3 -->
                        <div class="terminal-line step-3">
                            <span class="terminal-prompt">$</span>
                            <span class="cmd">cp .env.example .env</span>
                        </div>
                        <!-- Output 3 -->
                        <div class="terminal-line output step-3-out">
                            <span class="terminal-success">✓ Configuration file created successfully!</span>
                        </div>
                        <!-- Commande 4 -->
                        <div class="terminal-line step-4">
                            <span class="terminal-prompt">$</span>
                            <span class="cmd">php -S localhost:7777</span>
                        </div>
                        <!-- Output 4 -->
                        <div class="terminal-line output step-4-out">
                            <span class="terminal-info-server">[<span id="sec-today"></span>] PHP 8.3.9 Development Server (http://localhost:7777) started</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

<!--  -->

    <section >
        <div id="installation_methods" class="imth-container">
           <div class="imth-header">
                <span class="home-overline">
                    Methods
                </span>
                <div>
                    <h3>Choose installation method</h3>
                    <p class="install-methods-subtitle text-center">Choose the installation path that aligns with your experience and technical environment.</p>
                </div>
            </div>
            <div class="imth-content">
                <div class="imth-card" data-method="manual" role="button" tabindex="0" aria-label="Manual Install - click to view guide">
                    <div class="imth-card-header">
                        <div class="imth-card-header-icon imth-icon-manual">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path stroke-linecap="round" d="M3.661 10.64c.473.296.777.802.777 1.36s-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605c.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.617 1.617 0 0 1 1.567.008c.483.28.77.795.79 1.353c.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863c.02-.558.307-1.074.79-1.353a1.617 1.617 0 0 1 1.567-.008c.336.178.58.276.82.308a2 2 0 0 0 1.478-.396c.315-.242.548-.646 1.014-1.453c.208-.36.369-.639.489-.873m-.81-2.766a1.617 1.617 0 0 1-.777-1.36c0-.559.304-1.065.777-1.362c.321-.202.528-.363.676-.555a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605c-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.617 1.617 0 0 1-1.566-.008a1.617 1.617 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083C13.398 2 12.932 2 12 2c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.483-.143.863a1.617 1.617 0 0 1-.79 1.353a1.617 1.617 0 0 1-1.567.008c-.336-.178-.58-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7c-.208.36-.369.639-.489.873"/></g></svg>
                        </div>
                    </div>
                    <div class="imth-card-body">
                        <h3 class="imth-card-title">Manual Install</h3>
                        <p class="imth-card-description">Full control over installing and configuring Cypht. Perfect for advanced users who want complete customization.</p>
                    </div>
                </div>
                <div class="imth-card" data-method="docker" role="button" tabindex="0" aria-label="Docker Install - click to view guide">
                    <div class="imth-card-header">
                        <div class="imth-card-header-icon imth-icon-docker">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.984 10c-.037-1.311-.161-2.147-.581-2.86c-.598-1.015-1.674-1.58-3.825-2.708l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-2 1.05C4.271 5.56 3.195 6.125 2.597 7.14C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801c.598 1.015 1.674 1.58 3.825 2.709l2 1.049C10.178 21.539 11.056 22 12 22s1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.42-.713.544-1.549.581-2.86M21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5"/></svg>
                        </div>
                    </div>
                    <div class="imth-card-body">
                        <h3 class="imth-card-title">Docker Install</h3>
                        <p class="imth-card-description">The simplest installation with containerization. Get up and running in minutes with minimal configuration.</p>
                    </div>
                </div>
                <div class="imth-card" data-method="yuno" role="button" tabindex="0" aria-label="YunoHost Install - click to view guide">
                    <div class="imth-card-header">
                        <div class="imth-card-header-icon imth-icon-yuno">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none"><path fill="currentColor" d="M10 3.75a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zm-1 19.5a.75.75 0 0 0 0-1.5zm-9.828-1.922l.53-.53zM20.828 4.172l-.53.53zM21.25 13a.75.75 0 0 0 1.5 0zM14 12.75a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zM2.75 13v-1h-1.5v1zm0-1v-1h-1.5v1zM13 20.25h-3v1.5h3zM21.25 11v1h1.5v-1zm-20 2c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM10 20.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zm4-16.5c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812l1.06-1.06c-.748-.75-1.697-1.081-2.869-1.239c-1.15-.155-2.625-.153-4.489-.153zM22.75 11c0-1.864.002-3.338-.153-4.489c-.158-1.172-.49-2.121-1.238-2.87l-1.06 1.06c.422.424.676 1.004.811 2.01c.138 1.028.14 2.382.14 4.289zM10 2.25c-1.864 0-3.338-.002-4.489.153c-1.172.158-2.121.49-2.87 1.238l1.06 1.06c.424-.422 1.004-.676 2.01-.811c1.028-.138 2.382-.14 4.289-.14zM2.75 11c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 7.661 1.25 9.136 1.25 11zm18.5 1v1h1.5v-1zM2 12.75h12v-1.5H2zm16 0h4v-1.5h-4z"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13.5 7.5H18m-12 10v-2m0-7v-2m3 11v-2m0-7v-2m10.333 10.385a1.898 1.898 0 0 1 1.321-.004m-3.863.972a1.431 1.431 0 0 0-.291-.03c-.828 0-1.5.712-1.5 1.589S15.672 21 16.5 21H20c1.105 0 2-.948 2-2.118c0-.927-.562-1.714-1.346-2.001m-3.863.972a2.224 2.224 0 0 1-.124-.735c0-1.17.895-2.118 2-2.118c1.029 0 1.876.823 1.987 1.88m-3.863.973c.197.041.38.123.542.238"/></g></svg>
                        </div>
                    </div>
                    <div class="imth-card-body">
                        <h3 class="imth-card-title">YunoHost Server</h3>
                        <p class="imth-card-description">Install Cypht on YunoHost with one click. Ideal for self-hosting enthusiasts using YunoHost platform.</p>
                    </div>
                </div>
                <div class="imth-card" data-method="tiki" role="button" tabindex="0" aria-label="Tiki Integration - click to view guide">
                    <div class="imth-card-header">
                        <div class="imth-card-header-icon imth-icon-tiki">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M9.451 1.25h5.098c1.602 0 2.872 0 3.876.119c1.03.122 1.88.377 2.588.96c.24.197.461.417.659.658c.582.709.837 1.557.96 2.588c.118 1.004.118 2.274.118 3.876v.098c0 1.602 0 2.872-.119 3.876c-.122 1.03-.377 1.88-.96 2.588c-.197.24-.417.461-.658.659c-.789.647-1.752.892-2.948.996a.75.75 0 1 1-.13-1.494c.776-.068 1.304-.192 1.704-.39l-6.086-4.681l-10.052-7.18l-.013.015c-.326.398-.525.924-.63 1.813c-.107.906-.108 2.087-.108 3.749s.001 2.843.108 3.749c.105.889.304 1.415.63 1.813a3.3 3.3 0 0 0 .45.45c.443.364 1.044.567 2.127.662a.75.75 0 1 1-.13 1.494c-1.196-.104-2.16-.349-2.948-.996a4.751 4.751 0 0 1-.659-.659c-.582-.709-.837-1.557-.96-2.588c-.118-1.005-.118-2.274-.118-3.876V9.45c0-1.602 0-2.872.119-3.876c.122-1.03.377-1.88.96-2.588a4.75 4.75 0 0 1 .658-.659c.709-.582 1.557-.837 2.588-.96C6.58 1.25 7.85 1.25 9.451 1.25M4.837 3.033l9.062 6.473l5.809-6.255c-.354-.19-.81-.316-1.46-.393c-.905-.107-2.086-.108-3.748-.108h-5c-1.662 0-2.843.001-3.749.108a5.61 5.61 0 0 0-.914.175M20.763 4.32l-5.653 6.088l5.624 4.327c.198-.357.329-.82.408-1.485c.107-.906.108-2.087.108-3.749s-.001-2.843-.108-3.749c-.075-.633-.197-1.082-.38-1.432m-8.79 10.448c-.05.036-.134.117-.258.295c-.255.365-.543.937-.976 1.803l-1.335 2.671c-.262.522-.439.878-.55 1.145c-.087.21-.1.293-.103.304a.33.33 0 0 0 .246.265c.012-.002.096-.01.311-.082a20.189 20.189 0 0 0 1.236-.49c.338-.14.596-.247.867-.303c.389-.08.79-.08 1.178 0c.271.056.53.163.867.303l.055.023c.54.224.908.376 1.18.467c.216.072.3.08.312.082a.33.33 0 0 0 .246-.265c-.003-.011-.016-.094-.103-.304a20.9 20.9 0 0 0-.55-1.145l-1.335-2.671c-.433-.866-.72-1.438-.976-1.803a1.249 1.249 0 0 0-.258-.295a.173.173 0 0 0-.027-.017a.173.173 0 0 0-.027.017M12 14.75h-.003zm-1.515-.547c.33-.473.798-.953 1.515-.953c.717 0 1.185.48 1.515.953c.326.467.662 1.14 1.06 1.936l1.376 2.753c.245.49.447.892.58 1.213c.125.3.255.67.21 1.044a1.83 1.83 0 0 1-1.47 1.577c-.368.072-.747-.032-1.055-.135c-.33-.11-.746-.283-1.252-.493l-.027-.01c-.417-.174-.537-.22-.652-.244a1.41 1.41 0 0 0-.57 0c-.115.024-.235.07-.652.243l-.027.011c-.506.21-.922.383-1.252.493c-.308.103-.687.206-1.056.135A1.83 1.83 0 0 1 7.26 21.15c-.045-.373.085-.743.21-1.044c.133-.32.335-.724.58-1.213l1.376-2.753c.398-.796.734-1.469 1.06-1.936" clip-rule="evenodd"/></svg>
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
