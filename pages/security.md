---
title: Security
weight: 15
loadJsAfter: /js/security.js
---

<div class="d-flex flex-column justify-content-center gap-4"> 
  <section class="hero-security">
    <div class="hero-container">
      <!-- Texte à gauche -->
      <div class="hero-content">
         <div >
             <span class="chip">🔒 End-to-end Encryption</span>
          </div>
        <h1 class="hero-title">
          Maximum Security for Your Communications
        </h1>
        <p class="hero-subtitle">
          Protect your emails with advanced encryption and guaranteed privacy.
        </p>
        <div class="hero-buttons">
          <a href="#security" class="btn btn-dark">Explore Our Protections</a>
        </div>
      </div>

      <!-- Image à droite -->
      <div class="sec-hero-image">
        <img src="/img/security/hero_i1.png" alt="Mail security illustration" loading="lazy" decoding="async" />
      </div>
    </div>

  </section>
  <!-- List -->
  <div class="mt-5">
  <!-- tabs menu -->
  <div class="sec-tabs-container">
    <div class="d-flex justify-content-center mt-2 pt-4 sec-tabs-menu">
      <ul>
        <li>
          <a href="#browser" class="sec-active">
            <i class="bi bi-browser-chrome me-2"></i>Browser Security
          </a>
        </li>
        <li>
          <a href="#server">
            <i class="bi bi-server me-2"></i>Server Security
          </a>
        </li>
        <li>
          <a href="#development">
            <i class="bi bi-code-square me-2"></i>Development Security
          </a>
        </li>
      </ul>
    </div>
  </div>

    <!-- tabs content -->
    <div class="sec-list-content d-flex flex-column gap-5 px-4">
        <!-- 1 -->
        <div id="browser" class="sec-tab-content column mt-5">
          <div class="sec-tab-details col-5">
            <h2>Browser Security</h2>
            <p>Complete browser-level protection with data encryption, tracking protection, and secure cookie management.</p>
          </div>

          <div class="sec-tab-list col-7">
            <ul class="security-features">
              <li class="security-category">
                <h4>Secure Cookie Management</h4>
                <p>By default all cookies are session level, HTTP only, and have the secure flag, path, and domain values set (except one cookie used to pass user notices to the javascript)</p>
              </li>
              <li class="security-category">
                <h4>Request Protection</h4>
                <p>HTTP request header fingerprinting, CSRF token protection, and target/source origin mismatch blocking</p>
              </li>
              <li class="security-category">
                <h4>Security Headers</h4>
                <p>Security related HTTP headers like X-XSS-Protection, X-Content-Type-Options, X-Frame-Options, and Content-Security-Policy</p>
              </li>
              <li class="security-category">
                <h4>Resource Integrity</h4>
                <p>Subresource Integrity for the 2 primary includes (site.js and site.css)</p>
              </li>
              <li class="security-category">
                <h4>Session Management</h4>
                <p>Configurable idle timeout module set that ends a session after a predetermined amount of time</p>
              </li>
              <li class="security-category">
                <h4>Two-Factor Authentication</h4>
                <p>Support for 2 factor authentication with any TOTP compatible authentication application</p>
              </li>
              <li class="security-category">
                <h4>Encrypted Communication</h4>
                <p>Optional AES encrypted AJAX responses and local session storage cache</p>
              </li>
              <li class="security-category">
                <h4>Bot Protection</h4>
                <p>reCAPTCHA support for the login form</p>
              </li>
            </ul>
          </div>

        </div>
        <!-- 2 -->
        <div id="server" class="sec-tab-content column">
            <div class="sec-tab-details col-5">
              <h2>Server Security</h2>
              <p>Our server infrastructure is reinforced with leading security protocols to protect your data against unauthorized access</p>
            </div>

            <div class="sec-tab-list col-7">
              <ul class="security-features">
                <li class="security-category">
                  <h4>Secure Connections</h4>
                  <p>TLS/STARTTLS support for IMAP, LDAP, and SMTP connections. OAuth2 over IMAP/SMTP is supported (currently only Gmail and Outlook support this feature).</p>
                </li>
                <li class="security-category">
                  <h4>Data Encryption</h4>
                  <p>Session level data is encrypted with a long random string generated on login. Data is stored server side, and the key is stored in a session level secure cookie. Persistent data between logins is encrypted with a key derived from your password, which is never stored.</p>
                </li>
                <li class="security-category">
                  <h4>Encryption Standards</h4>
                  <p>All encryption is done with libsodium if available, otherwise with AES-256-CBC, encrypt-then-MAC, and PBKDF2 key derivation using OpenSSL (NOT Mcrypt).</p>
                </li>
                <li class="security-category">
                  <h4>Server Hardening</h4>
                  <p>PHP ini settings are tightened up at runtime for extra security, including open basedir and session best practices. No writable files or directories are used inside the web-server document root.</p>
                </li>
                <li class="security-category">
                  <h4>Authentication</h4>
                  <p>Optional local DB based authentication using a salt and PBKDF2 (or libsodium using Argon2 if available).</p>
                </li>
                <li class="security-category">
                  <h4>Email Security</h4>
                  <p>HTML formatted E-Mail is filtered through HTMLPurifier with all external resources removed before rendering. Achieves perfect score from the "Email Privacy Tester".</p>
                </li>
              </ul>
            </div>

        </div>
        <!-- 3 -->
        <div id="development"  class="sec-tab-content column">
          <div class="sec-tab-details col-5">
            <h2>Development Security</h2>
            <p>A proactive security approach in development, with code review, penetration testing, and continuous developer training.</p>
          </div>

          <div class="sec-tab-list col-7">
              <ul class="security-features">
                <li class="security-category">
                  <h4>Secure Coding Practices</h4>
                  <p>Easy output escaping inside modules for potentially dangerous content. Development is done with PHP's "E_ALL" and "E_STRICT" error reporting for maximum code quality.</p>
                </li>
                <li class="security-category">
                  <h4>Secure Architecture</h4>
                  <p>Module design enforces separation of input processing and output formatting, with concise methods for better debugging and auditing. No direct access to PHP super-globals.</p>
                </li>
                <li class="security-category">
                  <h4>Input Validation</h4>
                  <p>Only white-listed and typed/sanitized input is allowed. Modules must pre-define input parameters to prevent injection attacks.</p>
                </li>
                <li class="security-category">
                  <h4>Comprehensive Testing</h4>
                  <p>~98% unit test coverage with PHPUnit for the framework and core modules. UI tests using Selenium with Python bindings ensure interface reliability.</p>
                </li>
                <li class="security-category">
                  <h4>Continuous Integration</h4>
                  <p>Automated CI/CD pipeline with Travis CI for running UI tests, unit tests, and static code analysis on every commit.</p>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
