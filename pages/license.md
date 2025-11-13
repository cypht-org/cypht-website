---
title: License
weight: 25
css: /assets/doc/license.css
---

<!-- Hero Section -->
<section class="license-hero">
  <div class="license-hero-content">
     <div class="">
        <span class="chip">📄 Open Source License</span>
      </div>
      <h1 class="license-title">
        Cypht License & Dependencies
      </h1>
      <p class="license-subtitle">
        Cypht is distributed under the LGPL V2.1 license and will always remain free and open source. 
        Learn about our licensing terms and the third-party libraries we use.
      </p>
    <div class="license-buttons">
      <a href="#libraries" class="btn btn-dark" target="_blank" rel="noopener">
       View Dependencies
      </a>
      <a  href="https://github.com/cypht-org/cypht/blob/master/LICENSE"  class="btn btn-light">
       View Full License
      </a>
    </div>
  </div>
</section>
<!--  -->
<section class="license-content">
  <div class="license-container">
    <div class="license-info mb-4">
      <h2>Cypht source code is distributed under the LGPL V2.1 license</h2>
      <p>
        Cypht will always be both free and Open Source. Cypht uses a handful of third party libraries both indirectly
        and directly.
      </p>
      <p>
        Compatible version of direct dependencies are always included in the Cypht source or installed via
        PHP composer.
      </p>
      <div class="license-stats-container">
        <div class="stat-card">
          <span class="stat-number">12</span>
          <span class="stat-label">Directly Used</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">3</span>
          <span class="stat-label">Indirectly Used</span>
        </div>
      </div>
    </div>
    <!--  -->
    <ul id="libraries" class="lc-list mb-5">
      <li class="mb-4">
        <div class="lc-item-conetent">
          <div class="ls-item-header">
            <div> <div class="ls-item-header-card"> <img src="/img/folder_2.png"/> </div></div>
            <div class="ls-item-header-text">
              <h3>Directly Used Libraries</h3>
              <p>These libraries are directly integrated into Cypht and are essential for core functionality.</p>
            </div>
          </div>
          <!--  -->
          <div class="line-top-indicator"></div>
          <div class="libraries-grid">
            <div class="library-card">
              <div class="library-name"><i class="bi bi-shield-check"></i>HTMLPurifier</div>
              <div class="library-description">
                  <p>
                    A comprehensive HTML filter written in PHP that removes malicious code while preserving valid markup. Essential for email security.
                  </p>
              </div>
                <div class="library-footer">
                  <a href="http://htmlpurifier.org/" class="library-btn secondary" target="_blank" rel="noopener">
                    Visit website
                    <i class="bi bi-arrow-right-short lib rary-btn-icon"></i>
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
            <div> <div class="ls-item-header-card"> <img src="/img/folder_2.png"/> </div></div>
             <div class="ls-item-header-text">
              <h3>Indirectly Used Libraries</h3>
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
