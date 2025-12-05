---
title: License
weight: 25
css: /assets/doc/license.css
---

<!-- Hero Section -->
<section class="license-hero">
  <div class="license-hero-content">
     <!-- <div class=""> -->
        <span class="hs-chip">📄 Open Source License</span>
      <!-- </div> -->
      <h1 class="display-5 fw-bold">
        Cypht License & Dependencies
      </h1>
      <p class="license-subtitle home-hs-subtitle">
        Cypht is distributed under the LGPL V2.1 license and will always remain free and open source. 
        Learn about our licensing terms and the third-party libraries we use.
      </p>
    <div class="home-hero-actions">
      <a href="#libraries" class="action-btn cypht-primary-btn" target="_blank" rel="noopener">
       View Dependencies
      </a>
      <a  href="https://github.com/cypht-org/cypht/blob/master/LICENSE"  class="action-btn cypht-secondary-btn">
       View Full License
      </a>
    </div>
  </div>
</section>
<!--  -->
<section class="license-content">
  <div class="license-container">
    <!-- <div class="license-stats-content">
        <div class="l-stats-text">
          <p class="l-stats-title">Cypht source code is distributed under the LGPL V2.1 license</p>
          <div class="l-stats-underline"></div>
        </div>
        <div class="l-stats-overview">
          <div class="stat-card">
            <span class="stat-number">12</span>
            <span class="stat-label">Directly Used</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">3</span>
            <span class="stat-label">Indirectly Used</span>
          </div>
        </div>
    </div> -->
    <!--  -->
    <ul id="libraries" class="lc-list mb-5">
      <li class="mb-4">
        <div class="lc-item-conetent">
          <div class="ls-item-header">
            <div class="ls-item-header-text">
              <h3><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.984 10c-.037-1.311-.161-2.147-.581-2.86c-.598-1.015-1.674-1.58-3.825-2.708l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-2 1.05C4.271 5.56 3.195 6.125 2.597 7.14C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801c.598 1.015 1.674 1.58 3.825 2.709l2 1.049C10.178 21.539 11.056 22 12 22s1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.42-.713.544-1.549.581-2.86M21 7.5L12 12m0 0L3 7.5m9 4.5v9.5"/></svg>Directly Used Libraries</h3>
              <p>These libraries are directly integrated into Cypht and are essential for core functionality.</p>
            </div>
          </div>
          <!--  -->
          <div class="line-top-indicator"></div>
          <div class="libraries-grid">
            <div class="library-card">
              <div class="library-name">
                <i class="bi bi-shield-check"></i>HTMLPurifier</div>
                <p class="library-description">
                  A comprehensive HTML filter written in PHP that removes malicious code while preserving valid markup. Essential for email security.
                </p>
                <div class="library-footer">
                  <a href="http://htmlpurifier.org/" class="library-btn secondary" target="_blank" rel="noopener">
                    Visit website
                      <i class="bi bi-arrow-right-short library-btn-icon"></i>
                  </a>
                </div>
              </div>
              <div class="library-card">
                <div class="library-name"><i class="bi bi-code-slash"></i>Cash</div>
                <div class="library-description">A lightweight JavaScript library compatible with jQuery that provides core DOM manipulation and event handling features.</div>
                <div class="library-footer">
                  <a href="http://kenwheeler.github.io/cash/" class="library-btn secondary" target="_blank" rel="noopener">
                    Documentation
                    <i class="bi bi-arrow-right-short library-btn-icon"></i>
                  </a>
                </div>
              </div>

              <div class="library-card">
                <div class="library-name"><i class="bi bi-file-text"></i>Html2Text</div>
                <div class="library-description">An HTML-to-text converter in PHP that extracts textual content from HTML emails for better compatibility and readability.</div>
                <div class="library-footer">
                  <a href="https://github.com/mtibben/html2text" class="library-btn secondary" target="_blank" rel="noopener">
                    GitHub Repository
                    <i class="bi bi-arrow-right-short library-btn-icon"></i>
                  </a>
                </div>
              </div>

              <div class="library-card">
                <div class="library-name"><i class="bi bi-pencil-square"></i>KindEditor</div>
                <div class="library-description">Lightweight JavaScript WYSIWYG editor for composing HTML messages with built-in rich text editing features.</div>
                <div class="library-footer">
                  <a href="http://kindeditor.net/demo.php" class="library-btn secondary" target="_blank" rel="noopener">
                    View demo
                    <i class="bi bi-arrow-right-short library-btn-icon"></i>
                  </a>
                </div>
              </div>

              <div class="library-card">
                <div class="library-name"><i class="bi bi-shield-lock"></i>Forge</div>
                <div class="library-description">JavaScript cryptography library providing secure encryption, digital signatures, and key generation capabilities.</div>
                <div class="library-footer">
                  <a href="https://github.com/digitalbazaar/forge" class="library-btn secondary" target="_blank" rel="noopener">
                    GitHub Repository
                    <i class="bi bi-arrow-right-short library-btn-icon"></i>
                  </a>
                </div>
              </div>

              <div class="library-card">
                <div class="library-name"><i class="bi bi-shield-lock"></i>Random Compat</div>
                <div class="library-description">Cryptographically secure random number generator library for PHP, ensuring the safety of sensitive operations.</div>
                <div class="library-footer">
                  <a href="https://github.com/paragonie/random_compat" class="library-btn outline" target="_blank" rel="noopener">
                    GitHub Repository
                    <i class="bi bi-arrow-right-short library-btn-icon"></i>
                  </a>
                </div>
              </div>

              <div class="library-card">
                <div class="library-name"><i class="bi bi-code-slash"></i>Base32</div>
                <div class="library-description">Base32 encoding library used by the two-factor authentication (2FA) module to generate secure QR codes.</div>
                <div class="library-footer">
                  <a href="https://github.com/ChristianRiesen/base32" class="library-btn secondary" target="_blank" rel="noopener">
                    GitHub Repository
                    <i class="bi bi-arrow-right-short library-btn-icon"></i>
                  </a>
                </div>
              </div>

              <div class="library-card">
                <div class="library-name"><i class="bi bi-qr-code"></i>Barcode</div>
                <div class="library-description">PNG QR code generator for PHP, used by the 2FA module to create secure visual authentication codes.</div>
                <div class="library-footer">
                  <a href="https://github.com/codeitnowin/barcode-generator" class="library-btn secondary" target="_blank" rel="noopener">
                    GitHub Repository
                    <i class="bi bi-arrow-right-short library-btn-icon"></i>
                  </a>
                </div>
              </div>

              <div class="library-card">
                <div class="library-name"><i class="bi bi-shield-lock"></i>Libsodium</div>
                <div class="library-description">Optional NIST-compliant cryptography library offering modern, secure encryption algorithms for sensitive operations.</div>
                <div class="library-footer">
                  <a href="https://download.libsodium.org/doc/" class="library-btn outline" target="_blank" rel="noopener">
                    Documentation
                    <i class="bi bi-arrow-right-short library-btn-icon"></i>
                  </a>
                </div>
              </div>

              <div class="library-card">
                <div class="library-name"><i class="bi bi-bell"></i>Push</div>
                <div class="library-description">JavaScript library for simple desktop notifications, used by the notifications module to alert users about new emails.</div>
                <div class="library-footer">
                  <a href="https://pushjs.org/" class="library-btn secondary" target="_blank" rel="noopener">
                    Visit website
                    <i class="bi bi-arrow-right-short library-btn-icon"></i>
                  </a>
                </div>
              </div>

              <div class="library-card">
                <div class="library-name"><i class="bi bi-pencil-square"></i>Editor</div>
                <div class="library-description">JavaScript Markdown editor for composing messages with a modern UI and advanced editing features.</div>
                <div class="library-footer">
                  <a href="https://lepture.com/" class="library-btn secondary" target="_blank" rel="noopener">
                    Visit website
                    <i class="bi bi-arrow-right-short library-btn-icon"></i>
                  </a>
                </div>
              </div>

              <div class="library-card">
                <div class="library-name"><i class="bi bi-file-text"></i>Parsedown</div>
                <div class="library-description">PHP library for converting Markdown to HTML, enabling message and documentation formatting with simple, readable syntax.</div>
                <div class="library-footer">
                  <a href="http://parsedown.org/" class="library-btn outline" target="_blank" rel="noopener">
                    Visit website
                    <i class="bi bi-arrow-right-short library-btn-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          <div class="line-bottom-indicator"></div>
        </div>
      </li>
      <!-- item 2 -->
      <li class="">
        <div class="lc-item-conetent">
          <div class="ls-item-header">
            <!-- <div> <div class="ls-item-header-card"> <img src="/img/folder_2.png"/> </div></div> -->
             <div class="ls-item-header-text">
              <h3><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.984 10c-.037-1.311-.161-2.147-.581-2.86c-.598-1.015-1.674-1.58-3.825-2.708l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-2 1.05C4.271 5.56 3.195 6.125 2.597 7.14C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801c.598 1.015 1.674 1.58 3.825 2.709l2 1.049C10.178 21.539 11.056 22 12 22s1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.42-.713.544-1.549.581-2.86M21 7.5L12 12m0 0L3 7.5m9 4.5v9.5"/></svg>Indirectly Used Libraries</h3>
              <p>These libraries are directly integrated into Cypht and are essential for core functionality.</p>
            </div>
          </div>
          <!--  -->
          <div class="line-top-indicator"></div>
          <div class="libraries-grid">
            <div class="library-card">
              <div class="library-name"><i class="bi bi-shield-check"></i>HTMLPurifier</div>
              <div class="library-description">A comprehensive HTML filter written in PHP that removes malicious code while preserving valid markup. Essential for email security.</div>
              <div class="library-footer">
                <a href="http://htmlpurifier.org/" class="library-btn secondary" target="_blank" rel="noopener">
                  Visit website
                  <i class="bi bi-arrow-right-short library-btn-icon"></i>
                </a>
              </div>
            </div>

            <div class="library-card">
              <div class="library-name"><i class="bi bi-code-slash"></i>Cash</div>
              <div class="library-description">A lightweight JavaScript library compatible with jQuery that provides core DOM manipulation and event handling features.</div>
              <div class="library-footer">
                <a href="http://kenwheeler.github.io/cash/" class="library-btn secondary" target="_blank" rel="noopener">
                  Documentation
                  <i class="bi bi-arrow-right-short library-btn-icon"></i>
                </a>
              </div>
            </div>

            <div class="library-card">
              <div class="library-name"><i class="bi bi-file-text"></i>Html2Text</div>
              <div class="library-description">An HTML-to-text converter in PHP that extracts textual content from HTML emails for better compatibility and readability.</div>
              <div class="library-footer">
                <a href="https://github.com/mtibben/html2text" class="library-btn secondary" target="_blank" rel="noopener">
                  GitHub Repository
                  <i class="bi bi-arrow-right-short library-btn-icon"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="line-bottom-indicator"></div>
        </div>
      </li>
    </ul>

  </div>
</section>
