---
title: Security
weight: 15
loadScriptAfter: /js/security.js
---

<div class="d-flex flex-column justify-content-center gap-4"> 
  <section class="hero-security">
    <div class="hero-container col-10">
      <!-- Text on the left -->
      <div class="hero-content">
        <div >
             <span class="hs-chip">Security in Cypht</span>
          </div>
        <h1 class="display-6 fw-bold pe-lg-3">
          Maximum Security for Your Communications
        </h1>
        <p class="home-hs-subtitle">
          Enterprise-grade encryption, secure authentication, and privacy-first architecture keep your communications safe. Your data stays yours.
        </p>
          <a href="#browser" class="dark-action-btn">
            Explore Security 
          </a>
      </div>
      <!-- Image on Right -->
      <div class="sec-hero-image">
        <img src="/img/security/hero.png" alt="Mail security illustration" loading="eager" decoding="async" />
      </div>
    </div>
  </section>
  <!-- List -->
  <div class="mt-5">
    <!-- tabs menu -->
    <div  class="sec-tabs-container">
      <div  class="d-flex justify-content-center sec-tabs-menu pt-2">
        <ul>
          <li>
            <a href="#browser" class="sec-active">
              <i class="bi bi-browser-chrome me-2"></i>Browser
            </a>
          </li>
          <li>
            <a href="#server">
              <i class="bi bi-server me-2"></i>Server
            </a>
          </li>
          <li>
            <a href="#development">
              <i class="bi bi-code-square me-2"></i>Development
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div id="browser" class="pt-5"></div>
    <!-- tabs content -->
    <div  class="sec-list-content d-flex flex-column gap-5 px-4">
        <!-- 1 -->
        <div class="sec-tab-content column mt-4">
          <div class="sec-tab-details col-12 col-lg-5 relative">
             <div class="sec-tab-line">
                <div class="sec-tab-d-one">
                  <h4 class="fw-bold">Browser Security</h4>
                  <p class="sec-description">Complete browser-level protection with data encryption, tracking protection, and secure cookie management.</p>
                </div>
             </div>
          </div>
          <!--  -->
          <div class="sec-tab-list col-12 col-lg-7">
            <ul class="security-features">
              <li class="security-item" data-category="browser">
                  <div>
                     <div class="security-item-icon">
                        <!-- <img src="/svg/world.svg" alt="Cookie security illustration" loading="eager" decoding="async" /> -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 4.71c.78.711 2.388 2.653 2.575 4.737c.125 1.395.82 2.603 1.925 3.184c.439.23.942.363 1.5.369c.755.008 1.518-.537 1.516-1.292c0-.233-.039-.472-.099-.692A1.414 1.414 0 0 1 13.5 10c.61-1.257 1.81-1.595 2.76-2.278c.421-.303.806-.623.975-.88c.469-.71.937-2.131.703-2.842"/><path stroke-linecap="round" d="M22 13c-.33.931-.562 3.375-4.282 3.414c0 0-.793 0-1.718.22m-2.563 1.642c-.791 1.49-.33 3.103 0 3.724"/><path stroke-linecap="round" d="M7 20.662A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5"/></g></svg>
                     </div>
                  </div>
                  <div class="security-item-content">
                    <h4>Secure Cookie Management</h4>
                    <p>By default all cookies are session level, HTTP only, and have the secure flag, path, and domain values set (except one cookie used to pass user notices to the javascript)</p>
                  </div>
              </li>
              <li class="security-item" data-category="browser">
                  <div>
                     <div class="security-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 4.71c.78.711 2.388 2.653 2.575 4.737c.125 1.395.82 2.603 1.925 3.184c.439.23.942.363 1.5.369c.755.008 1.518-.537 1.516-1.292c0-.233-.039-.472-.099-.692A1.414 1.414 0 0 1 13.5 10c.61-1.257 1.81-1.595 2.76-2.278c.421-.303.806-.623.975-.88c.469-.71.937-2.131.703-2.842"/><path stroke-linecap="round" d="M22 13c-.33.931-.562 3.375-4.282 3.414c0 0-.793 0-1.718.22m-2.563 1.642c-.791 1.49-.33 3.103 0 3.724"/><path stroke-linecap="round" d="M7 20.662A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5"/></g></svg>
                     </div>
                  </div>
                  <div class="security-item-content">
                    <h4>Request Protection</h4>
                    <p>HTTP request header fingerprinting, CSRF token protection, and target/source origin mismatch blocking</p>
                  </div>
              </li>
              <li class="security-item" data-category="browser">
                  <div>
                     <div class="security-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 4.71c.78.711 2.388 2.653 2.575 4.737c.125 1.395.82 2.603 1.925 3.184c.439.23.942.363 1.5.369c.755.008 1.518-.537 1.516-1.292c0-.233-.039-.472-.099-.692A1.414 1.414 0 0 1 13.5 10c.61-1.257 1.81-1.595 2.76-2.278c.421-.303.806-.623.975-.88c.469-.71.937-2.131.703-2.842"/><path stroke-linecap="round" d="M22 13c-.33.931-.562 3.375-4.282 3.414c0 0-.793 0-1.718.22m-2.563 1.642c-.791 1.49-.33 3.103 0 3.724"/><path stroke-linecap="round" d="M7 20.662A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5"/></g></svg>
                     </div>
                  </div>
                  <div class="security-item-content">
                    <h4>Security Headers</h4>
                    <p>Security related HTTP headers like X-Content-Type-Options, X-Frame-Options, Strict-Transport-Security, and Content-Security-Policy</p>
                  </div>
              </li>
              <li class="security-item" data-category="browser">
                  <div>
                     <div class="security-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 4.71c.78.711 2.388 2.653 2.575 4.737c.125 1.395.82 2.603 1.925 3.184c.439.23.942.363 1.5.369c.755.008 1.518-.537 1.516-1.292c0-.233-.039-.472-.099-.692A1.414 1.414 0 0 1 13.5 10c.61-1.257 1.81-1.595 2.76-2.278c.421-.303.806-.623.975-.88c.469-.71.937-2.131.703-2.842"/><path stroke-linecap="round" d="M22 13c-.33.931-.562 3.375-4.282 3.414c0 0-.793 0-1.718.22m-2.563 1.642c-.791 1.49-.33 3.103 0 3.724"/><path stroke-linecap="round" d="M7 20.662A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5"/></g></svg>
                     </div>
                  </div>
                  <div class="security-item-content">
                    <h4>Resource Integrity</h4>
                    <p>Subresource Integrity for the 2 primary includes (site.js and site.css)</p>
                  </div>
              </li>
              <li class="security-item" data-category="browser">
                  <div>
                     <div class="security-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 4.71c.78.711 2.388 2.653 2.575 4.737c.125 1.395.82 2.603 1.925 3.184c.439.23.942.363 1.5.369c.755.008 1.518-.537 1.516-1.292c0-.233-.039-.472-.099-.692A1.414 1.414 0 0 1 13.5 10c.61-1.257 1.81-1.595 2.76-2.278c.421-.303.806-.623.975-.88c.469-.71.937-2.131.703-2.842"/><path stroke-linecap="round" d="M22 13c-.33.931-.562 3.375-4.282 3.414c0 0-.793 0-1.718.22m-2.563 1.642c-.791 1.49-.33 3.103 0 3.724"/><path stroke-linecap="round" d="M7 20.662A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5"/></g></svg>
                     </div>
                  </div>
                  <div class="security-item-content">
                    <h4>Session Management</h4>
                    <p>Configurable idle timeout module set that ends a session after a predetermined amount of time</p>
                  </div>
              </li>
              <li class="security-item" data-category="browser">
                  <div>
                     <div class="security-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 4.71c.78.711 2.388 2.653 2.575 4.737c.125 1.395.82 2.603 1.925 3.184c.439.23.942.363 1.5.369c.755.008 1.518-.537 1.516-1.292c0-.233-.039-.472-.099-.692A1.414 1.414 0 0 1 13.5 10c.61-1.257 1.81-1.595 2.76-2.278c.421-.303.806-.623.975-.88c.469-.71.937-2.131.703-2.842"/><path stroke-linecap="round" d="M22 13c-.33.931-.562 3.375-4.282 3.414c0 0-.793 0-1.718.22m-2.563 1.642c-.791 1.49-.33 3.103 0 3.724"/><path stroke-linecap="round" d="M7 20.662A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5"/></g></svg>
                     </div>
                  </div>
                  <div class="security-item-content">
                    <h4>Two-Factor Authentication</h4>
                    <p>Support for 2 factor authentication with any TOTP compatible authentication application</p>
                  </div>
              </li>
              <li class="security-item" data-category="browser">
                  <div>
                     <div class="security-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 4.71c.78.711 2.388 2.653 2.575 4.737c.125 1.395.82 2.603 1.925 3.184c.439.23.942.363 1.5.369c.755.008 1.518-.537 1.516-1.292c0-.233-.039-.472-.099-.692A1.414 1.414 0 0 1 13.5 10c.61-1.257 1.81-1.595 2.76-2.278c.421-.303.806-.623.975-.88c.469-.71.937-2.131.703-2.842"/><path stroke-linecap="round" d="M22 13c-.33.931-.562 3.375-4.282 3.414c0 0-.793 0-1.718.22m-2.563 1.642c-.791 1.49-.33 3.103 0 3.724"/><path stroke-linecap="round" d="M7 20.662A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5"/></g></svg>
                     </div>
                  </div>
                  <div class="security-item-content">
                    <h4>Encrypted Communication</h4>
                    <p>Optional AES encrypted AJAX responses and local session storage cache</p>
                  </div>
              </li>
              <li class="security-item" data-category="browser">
                  <div>
                     <div class="security-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 4.71c.78.711 2.388 2.653 2.575 4.737c.125 1.395.82 2.603 1.925 3.184c.439.23.942.363 1.5.369c.755.008 1.518-.537 1.516-1.292c0-.233-.039-.472-.099-.692A1.414 1.414 0 0 1 13.5 10c.61-1.257 1.81-1.595 2.76-2.278c.421-.303.806-.623.975-.88c.469-.71.937-2.131.703-2.842"/><path stroke-linecap="round" d="M22 13c-.33.931-.562 3.375-4.282 3.414c0 0-.793 0-1.718.22m-2.563 1.642c-.791 1.49-.33 3.103 0 3.724"/><path stroke-linecap="round" d="M7 20.662A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5"/></g></svg>
                     </div>
                  </div>
                  <div class="security-item-content">
                    <h4>Bot Protection</h4>
                    <p>Optional <a href="https://www.google.com/recaptcha/intro/index.html" target="_blank">reCAPTCHA</a> support for the login form</p>
                  </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 2 -->

        <div id="server" class="pt-5"></div>
        <div class="sec-tab-content column">
            <div class="sec-tab-details col-12 col-lg-5">
              <div class="sec-tab-line">
                <div class="sec-tab-d-two">
                  <h4 class="fw-bold">Server Security</h4>
                  <p  class="sec-description">Our server infrastructure is reinforced with leading security protocols to protect your data against unauthorized access</p>
                </div>
              </div>
            </div>

<!--  -->

            <div class="sec-tab-list col-12 col-lg-7">
              <ul class="security-features">
                <li class="security-item" data-category="server">
                  <div>
                     <div class="security-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="16" r="2"/><path stroke-linecap="round" d="M11 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1M6 10V8c0-.34.028-.675.083-1m11.728-.5A6.003 6.003 0 0 0 7.528 4"/></g></svg>
                     </div>
                  </div>
                  <div class="security-item-content">
                    <h4>Secure Connections</h4>
                    <p>TLS/STARTTLS support for IMAP, LDAP, and SMTP connections. OAuth2 over IMAP/SMTP is supported (currently only Gmail and Outlook support this feature).</p>
                  </div>
                </li>
                <li class="security-item" data-category="server">
                  <div>
                     <div class="security-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="16" r="2"/><path stroke-linecap="round" d="M11 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1M6 10V8c0-.34.028-.675.083-1m11.728-.5A6.003 6.003 0 0 0 7.528 4"/></g></svg>
                     </div>
                  </div>
                  <div class="security-item-content">
                    <h4>Data Encryption</h4>
                    <p>Session level data is encrypted with a long random string generated on login. Data is stored server side, and the key is stored in a session level secure cookie. Persistent data between logins is encrypted with a key derived from your password, which is never stored.</p>
                  </div>
                </li>
                <li class="security-item" data-category="server">
                  <div>
                     <div class="security-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="16" r="2"/><path stroke-linecap="round" d="M11 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1M6 10V8c0-.34.028-.675.083-1m11.728-.5A6.003 6.003 0 0 0 7.528 4"/></g></svg>
                     </div>
                  </div>
                  <div class="security-item-content">
                    <h4>Encryption Standards</h4>
                    <p>All encryption is done with libsodium if available, otherwise with AES-256-CBC, encrypt-then-MAC, and PBKDF2 key derivation using OpenSSL (NOT Mcrypt).</p>
                  </div>
                </li>
                <li class="security-item" data-category="server">
                  <div>
                     <div class="security-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="16" r="2"/><path stroke-linecap="round" d="M11 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1M6 10V8c0-.34.028-.675.083-1m11.728-.5A6.003 6.003 0 0 0 7.528 4"/></g></svg>
                     </div>
                  </div>
                  <div class="security-item-content">
                    <h4>Server Hardening</h4>
                    <p>PHP ini settings are tightened up at runtime for extra security, including open basedir and session best practices. No writable files or directories are used inside the web-server document root.</p>
                  </div>
                </li>
                <li class="security-item" data-category="server">
                  <div>
                     <div class="security-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="16" r="2"/><path stroke-linecap="round" d="M11 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1M6 10V8c0-.34.028-.675.083-1m11.728-.5A6.003 6.003 0 0 0 7.528 4"/></g></svg>
                     </div>
                  </div>
                  <div class="security-item-content">
                    <h4>Authentication</h4>
                    <p>Optional local DB based authentication using a salt and PBKDF2 (or libsodium using Argon2 if available).</p>
                  </div>
                </li>
                <li class="security-item" data-category="server">
                  <div>
                     <div class="security-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="16" r="2"/><path stroke-linecap="round" d="M11 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1M6 10V8c0-.34.028-.675.083-1m11.728-.5A6.003 6.003 0 0 0 7.528 4"/></g></svg>
                     </div>
                  </div>
                  <div class="security-item-content">
                    <h4>Email Security</h4>
                    <p>HTML formatted E-Mail is filtered through HTMLPurifier with all external resources removed before rendering. Tested against the <a href="https://emailprivacytester.com/" target="_blank">"Email Privacy Tester"</a> for strong privacy protection.</p>
                  </div>
                </li>
              </ul>
            </div>
        </div>
        <!-- 3 -->
        <div id="development" class="pt-5"></div>
        <div class="sec-tab-content column">
          <div class="sec-tab-details col-12 col-lg-5">
            <div class="sec-tab-line">
              <div class="sec-tab-d-three">
                <h4 class="fw-bold">Development Security</h4>
                <p class="sec-description">A proactive security approach in development, with code review, penetration testing, and continuous developer training.</p>
              </div>
            </div>
          </div>
          <div class="sec-tab-list col-12 col-lg-7">
              <ul class="security-features">
                <li class="security-item" data-category="development">
                  <div>
                     <div class="security-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linejoin="round" d="M11.5 16h1a1 1 0 0 0 1-1v-1.401A2.999 2.999 0 0 0 12 8a3 3 0 0 0-1.5 5.599V15a1 1 0 0 0 1 1Z"/><path stroke-linecap="round" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473c.579-.252 1.231-.58 1.899-.994"/></g></svg>
                     </div>
                  </div>
                  <div class="security-item-content">
                    <h4>Secure Coding Practices</h4>
                    <p>Cypht is built with a foundational focus on security. All user input is strictly validated and sanitized, and robust access control governs every request. Internally, it employs safe array access and output encoding to neutralize threats.</p>
                  </div>
                </li>
                <li class="security-item" data-category="development">
                  <div>
                     <div class="security-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linejoin="round" d="M11.5 16h1a1 1 0 0 0 1-1v-1.401A2.999 2.999 0 0 0 12 8a3 3 0 0 0-1.5 5.599V15a1 1 0 0 0 1 1Z"/><path stroke-linecap="round" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473c.579-.252 1.231-.58 1.899-.994"/></g></svg>
                     </div>
                  </div>
                  <div class="security-item-content">
                    <h4>Secure Architecture</h4>
                    <p>Module design enforces separation of input processing and output formatting, with concise methods for better debugging and auditing. No direct access to PHP super-globals.</p>
                  </div>
                </li>
                <li class="security-item" data-category="development">
                  <div>
                     <div class="security-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linejoin="round" d="M11.5 16h1a1 1 0 0 0 1-1v-1.401A2.999 2.999 0 0 0 12 8a3 3 0 0 0-1.5 5.599V15a1 1 0 0 0 1 1Z"/><path stroke-linecap="round" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473c.579-.252 1.231-.58 1.899-.994"/></g></svg>
                     </div>
                  </div>
                  <div class="security-item-content">
                    <h4>Input Validation</h4>
                    <p>Only white-listed and typed/sanitized input is allowed. Modules must pre-define input parameters to prevent injection attacks.</p>
                  </div>
                </li>
                <li class="security-item" data-category="development">
                  <div>
                     <div class="security-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linejoin="round" d="M11.5 16h1a1 1 0 0 0 1-1v-1.401A2.999 2.999 0 0 0 12 8a3 3 0 0 0-1.5 5.599V15a1 1 0 0 0 1 1Z"/><path stroke-linecap="round" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473c.579-.252 1.231-.58 1.899-.994"/></g></svg>
                     </div>
                  </div>
                  <div class="security-item-content">
                    <h4>Comprehensive Testing</h4>
                    <p>High unit <a href="https://coveralls.io/github/cypht-org/cypht?branch=master" target="_blank">test coverage</a> with PHPUnit for the framework and core modules. UI tests using Selenium with Python bindings ensure interface reliability.</p>
                  </div>
                </li>
                <li class="security-item" data-category="development">
                  <div>
                     <div class="security-item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linejoin="round" d="M11.5 16h1a1 1 0 0 0 1-1v-1.401A2.999 2.999 0 0 0 12 8a3 3 0 0 0-1.5 5.599V15a1 1 0 0 0 1 1Z"/><path stroke-linecap="round" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473c.579-.252 1.231-.58 1.899-.994"/></g></svg>
                     </div>
                  </div>
                  <div class="security-item-content">
                    <h4>Continuous Integration</h4>
                    <p>Automated CI/CD pipeline with Travis CI for running UI tests, unit tests, and static code analysis on every commit.</p>
                  </div>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
