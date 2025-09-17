---
title: Security
weight: 15
loadScriptAfter: /js/security.js
loadCssAfter: /assets/security.css
---

<div class="security-container">
  <!-- Hero Section -->
  <section class="security-hero bg-warning w-full">
    <div class="bg-danger section-content">
      <div class="row align-items-center">
        <div class="col-lg-8 mx-auto text-center">
          <div class="security-badge">Security First</div>
          <h1>Security at Cypht</h1>
          <p class="lead">We take security seriously at every level of our application</p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Security Tabs -->
  <section class="security-tabs-section">
    <div class="section-content">
      <ul class="nav nav-tabs security-tabs" id="securityTabs" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="browser-tab" data-bs-toggle="tab" data-bs-target="#browser" type="button" role="tab">
            <i class="bi bi-browser-chrome"></i> Browser Security
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="server-tab" data-bs-toggle="tab" data-bs-target="#server" type="button" role="tab">
            <i class="bi bi-server"></i> Server Security
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="development-tab" data-bs-toggle="tab" data-bs-target="#development" type="button" role="tab">
            <i class="bi bi-code-square"></i> Development Security
          </button>
        </li>
      </ul>
      <!--  -->
      <div class="tab-content security-tab-content" id="securityTabContent">
        <!-- Browser Security Tab -->
        <div class="tab-pane fade show active" id="browser" role="tabpanel" aria-labelledby="browser-tab">
          <div class="row">
            <div class="col-12">
              <h3><i class="bi bi-browser-chrome"></i> In the browser</h3>
              <div class="security-features">
                <div class="security-feature">
                  <i class="bi bi-shield-lock feature-icon"></i>
                  <div class="feature-content">
                    <h4>Secure Cookies</h4>
                    <p>By default all cookies are session level, HTTP only, and have the secure flag, path, and domain values set (except one cookie used to pass user notices to the javascript).</p>
                  </div>
                </div>
                <!--  -->
                <div class="security-feature">
                  <i class="bi bi-fingerprint feature-icon"></i>
                  <div class="feature-content">
                    <h4>Request Protection</h4>
                    <p>HTTP request header fingerprinting, CSRF token protection, and target/source origin mismatch blocking.</p>
                  </div>
                </div>
                <!--  -->
                <div class="security-feature">
                  <i class="bi bi-shield-check feature-icon"></i>
                  <div class="feature-content">
                    <h4>Security Headers</h4>
                    <p>Security related HTTP headers like X-XSS-Protection, X-Content-Type-Options, X-Frame-Options, and Content-Security-Policy.</p>
                  </div>
                </div>
                <!--  -->
                <div class="security-feature">
                  <i class="bi bi-check-circle feature-icon"></i>
                  <div class="feature-content">
                    <h4>Resource Integrity</h4>
                    <p>Subresource Integrity for the 2 primary includes (site.js and site.css).</p>
                  </div>
                </div>
                <!--  -->
                <div class="security-feature">
                  <i class="bi bi-clock-history feature-icon"></i>
                  <div class="feature-content">
                    <h4>Idle Timeout</h4>
                    <p>Configurable idle timeout module set that ends a session after a predetermined amount of time.</p>
                  </div>
                </div>
                <!--  -->
                <div class="security-feature">
                  <i class="bi bi-person-lock feature-icon"></i>
                  <div class="feature-content">
                    <h4>2FA Authentication</h4>
                    <p>Support for 2 factor authentication with any TOTP compatible authentication application.</p>
                  </div>
                </div>
                <!--  -->
                <div class="security-feature">
                  <i class="bi bi-lock feature-icon"></i>
                  <div class="feature-content">
                    <h4>Encrypted AJAX</h4>
                    <p>Optional AES encrypted AJAX responses.</p>
                  </div>
                </div>
                <!--  -->
                <div class="security-feature">
                  <i class="bi bi-shield feature-icon"></i>
                  <div class="feature-content">
                    <h4>Encrypted Storage</h4>
                    <p>Optional AES encrypted local session storage cache.</p>
                  </div>
                </div>
                <!--  -->
                <div class="security-feature">
                  <i class="bi bi-robot feature-icon"></i>
                  <div class="feature-content">
                    <h4>reCAPTCHA</h4>
                    <p><a href="https://www.google.com/recaptcha/intro/index.html">reCAPTCHA</a> support for the login form.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Server Security Tab -->
        <div class="tab-pane fade" id="server" role="tabpanel" aria-labelledby="server-tab">
          <div class="row">
            <div class="col-12">
              <h3><i class="bi bi-server"></i> On the server</h3>
              <div class="security-features">
                <div class="security-feature">
                  <i class="bi bi-shield-lock-fill feature-icon"></i>
                  <div class="feature-content">
                    <h4>Secure Connections</h4>
                    <p>TLS/STARTTLS support for IMAP, LDAP, and SMTP connections.</p>
                  </div>
                </div>
                <!--  -->
                <div class="security-feature">
                  <i class="bi bi-google feature-icon"></i>
                  <div class="feature-content">
                    <h4>OAuth2 Support</h4>
                    <p>Oauth2 over IMAP/SMTP supported (currently only Gmail and Outlook support this feature).</p>
                  </div>
                </div>
                <!--  -->
                <div class="security-feature">
                  <i class="bi bi-key feature-icon"></i>
                  <div class="feature-content">
                    <h4>Session Encryption</h4>
                    <p>Session level data is encrypted with a long random string generated on login. Data is stored server side, and the key is stored in a session level secure cookie.</p>
                  </div>
                </div>
                <!--  -->
                <div class="security-feature">
                  <i class="bi bi-lock-fill feature-icon"></i>
                  <div class="feature-content">
                    <h4>Data Encryption</h4>
                    <p>Persistent data stored between logins is encrypted with a key derived from your clear text password, which is obviously not stored anywhere.</p>
                  </div>
                </div>
                <!--  -->
                <div class="security-feature">
                  <i class="bi bi-braces feature-icon"></i>
                  <div class="feature-content">
                    <h4>Advanced Encryption</h4>
                    <p>All encryption is done with libsodium if available, otherwise with AES-256-CBC, encrypt-then-MAC, and PBKDF2 key derivation using OpenSSL (NOT Mcrypt).</p>
                  </div>
                </div>
                <!--  -->
                <div class="security-feature">
                  <i class="bi bi-gear feature-icon"></i>
                  <div class="feature-content">
                    <h4>PHP Security</h4>
                    <p>PHP ini settings are tightened up at runtime for extra security, including open basedir and session best practices (ones writable at runtime).</p>
                  </div>
                </div>
                <!--  -->
                <div class="security-feature">
                  <i class="bi bi-folder feature-icon"></i>
                  <div class="feature-content">
                    <h4>File Security</h4>
                    <p>No writable files or directories are used inside the web-server document root, and only 3 files need to be inside the document root to run the program. Module sets may include additional assets, such as the HTML editor for outbound mail.</p>
                  </div>
                </div>
                <!--  -->
                <div class="security-feature">
                  <i class="bi bi-person-check feature-icon"></i>
                  <div class="feature-content">
                    <h4>Authentication</h4>
                    <p>Optional local DB based authentication using a salt and PBKDF2 (or libsodium using Argon2 if available).</p>
                  </div>
                </div>
                <!--  -->
                <div class="security-feature">
                  <i class="bi bi-envelope-check feature-icon"></i>
                  <div class="feature-content">
                    <h4>Email Security</h4>
                    <p>HTML formatted E-Mail is filtered through HTMLPurifier with all external resources removed before being rendered.</p>
                  </div>
                </div>
                <!--  -->
                <div class="security-feature">
                  <i class="bi bi-award feature-icon"></i>
                  <div class="feature-content">
                    <h4>Email Privacy</h4>
                    <p>Perfect score from the "Email Privacy Tester" at <a href="https://emailprivacytester.com/">https://emailprivacytester.com/</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Development Security Tab -->
        <div class="tab-pane fade" id="development" role="tabpanel" aria-labelledby="development-tab">
          <div class="row">
            <div class="col-12">
              <h3><i class="bi bi-code-square"></i> During development</h3>
              <div class="security-features">
                <div class="security-feature">
                  <i class="bi bi-layout-text-window feature-icon"></i>
                  <div class="feature-content">
                    <h4>Output Escaping</h4>
                    <p>Easy output escaping inside modules for potentially dangerous content.</p>
                  </div>
                </div>
                
                <div class="security-feature">
                  <i class="bi bi-bug feature-icon"></i>
                  <div class="feature-content">
                    <h4>Error Reporting</h4>
                    <p>Development is done with PHP's "E_ALL" and "E_STRICT" error reporting.</p>
                  </div>
                </div>
                
                <div class="security-feature">
                  <i class="bi bi-boxes feature-icon"></i>
                  <div class="feature-content">
                    <h4>Module Design</h4>
                    <p>Module design enforces a separation of input processing and output formatting, and encourages concise methods, which makes the code easier to debug and audit.</p>
                  </div>
                </div>
                
                <div class="security-feature">
                  <i class="bi bi-filter feature-icon"></i>
                  <div class="feature-content">
                    <h4>Input Validation</h4>
                    <p>Only white-listed and typed/sanitized input is allowed. Modules must pre-define input in order to have access.</p>
                  </div>
                </div>
                
                <div class="security-feature">
                  <i class="bi bi-scope feature-icon"></i>
                  <div class="feature-content">
                    <h4>Scope Control</h4>
                    <p>Modules can't reference PHP super-globals, and there are no globally scoped variables at all (there are a few static class instances with private data structures that use getter/setter methods).</p>
                  </div>
                </div>
                
                <div class="security-feature">
                  <i class="bi bi-check2-all feature-icon"></i>
                  <div class="feature-content">
                    <h4>Test Coverage</h4>
                    <p><a href="http://cypht.org/docs/test_coverage/index.html">~98% unit test coverage with PHPUnit</a> for the application framework and core module set.</p>
                  </div>
                </div>
                
                <div class="security-feature">
                  <i class="bi bi-ui-checks feature-icon"></i>
                  <div class="feature-content">
                    <h4>UI Testing</h4>
                    <p>UI tests using Selenium with python bindings (currently at 64 tests).</p>
                  </div>
                </div>
                
                <div class="security-feature">
                  <i class="bi bi-gear-wide-connected feature-icon"></i>
                  <div class="feature-content">
                    <h4>CI/CD</h4>
                    <p>Continuous Integration for UI tests, unit tests, and static code analysis done with <a href="https://travis-ci.org">Travis CI</a>. You can read more info about our testing process at the <a href="tests.html">testing page</a>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
