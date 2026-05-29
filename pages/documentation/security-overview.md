---
id: 12
title: Security
description: "Overview of Cypht's security architecture. Learn about browser protections, server-side encryption, secure authentication, input validation, and development best practices."
layout: section/documentation
---

<div class="doc-content-left col mx-xl-3">
    <div class="doc-page-header">
        <h3>Security</h3>
    </div>

    <div id="introduction" class="doc-section">
        <div class="doc-section-header">
            <a href="#introduction">Introduction</a>
        </div>
        <span class="doc-section-text">
            Cypht takes security seriously at every level - from browser interactions to server-side operations and development practices. Learn about our comprehensive security measures and how we protect your data.
        </span>

        <div class="tip-card tip-info">
            <span class="tip-info-text"><i class="bi bi-shield-check"></i> Security First Approach</span>
            <p>Multi-layered security protecting your email communications and personal data</p>
        </div>
    </div>

    <div id="reporting_security" class="doc-section">
        <div class="doc-section-header">
            <a href="#reporting_security">Found a Flaw in Cypht?</a>
        </div>
        <span class="doc-section-text">
            We want to hear from you! Help us keep Cypht secure by reporting any security issues you discover.
        </span>

        <div class="tip-card tip-warning">
            <span class="tip-warning-text"><i class="bi bi-shield-exclamation"></i> Security Reporting</span>
            <p class="mb-0"><strong>Do NOT</strong> use public GitHub issues for security reports. Contact us privately through secure channels.</p>
        </div>

        <div class="doc-subsection-header">
            <a href="#how_to_report">How to Report Security Issues</a>
        </div>
        <p>Drop by the Cypht Gitter channel or use our private security reporting channels. We take security seriously and promise:</p>

        <div class="doc-section-grid">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-clock"></i> Quick Response</h6>
                    <p>Any security issue reported before release will receive a prompt response from our team.</p>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-search"></i> Thorough Review</h6>
                    <p>Every report is carefully analyzed and validated by our security team.</p>
                </div>
            </div>
        </div>

        <div class="doc-section-grid">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-heart"></i> Sincere Thanks</h6>
                    <p>We appreciate your contribution to keeping Cypht secure for everyone.</p>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-award"></i> Honorable Mention</h6>
                    <p>Security researchers receive recognition on this page for their valuable contributions.</p>
                </div>
            </div>
        </div>

        <div class="feature-card mt-3">
            <h6><i class="bi bi-info-circle"></i> Volunteer Project</h6>
            <p>Cypht is an entirely volunteer effort, so we can't afford a bounty program. However, we're committed to maintaining the highest security standards and value every security report.</p>
            <a href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3ASecurity" target="_blank" class="doc-btn-card btn-sm btn-success">Report Security Issue</a>
        </div>
    </div>

    <div id="browser_security" class="doc-section">
        <div class="doc-section-header">
            <a href="#browser_security">In the Browser</a>
        </div>
        <span class="doc-section-text">
            Client-side security measures that protect users during their web sessions and prevent common browser-based attacks.
        </span>

        <div class="doc-subsection-header">
            <a href="#session_protection">Session & Cookie Protection</a>
        </div>
        <div class="doc-section-grid">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-shield-lock"></i> Secure Cookies</h6>
                    <p>By default, all cookies are session level, HTTP only, and have the secure flag, path, and domain values set (except one cookie used to pass user notices to JavaScript).</p>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-clock-history"></i> Idle Timeout</h6>
                    <p>Configurable idle timeout module set that automatically ends a session after a predetermined amount of inactivity.</p>
                </div>
            </div>
        </div>

        <div class="doc-subsection-header">
            <a href="#request_protection">Request & Attack Protection</a>
        </div>
        <div class="doc-section-grid">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-fingerprint"></i> Request Fingerprinting</h6>
                    <p>HTTP request header fingerprinting to detect and prevent suspicious requests.</p>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-shield-exclamation"></i> CSRF Protection</h6>
                    <p>CSRF token protection and target/source origin mismatch blocking prevent cross-site request forgery attacks.</p>
                </div>
            </div>
        </div>

        <div class="doc-subsection-header">
            <a href="#security_headers">Security Headers</a>
        </div>
        <p>Comprehensive security-related HTTP headers are implemented:</p>
        <ul>
            <li><strong>X-XSS-Protection :</strong> Enables browser cross-site scripting filters</li>
            <li><strong>X-Content-Type-Options :</strong> Prevents MIME-type sniffing attacks</li>
            <li><strong>X-Frame-Options :</strong> Protects against clickjacking attacks</li>
            <li><strong>Content-Security-Policy :</strong> Defines approved content sources</li>
        </ul>

        <div class="doc-subsection-header">
            <a href="#integrity_verification">Integrity Verification</a>
        </div>
        <div class="doc-section-grid">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-shield-check"></i> Subresource Integrity (SRI)</h6>
                    <p>Ensures site.js and site.css files haven't been tampered with by verifying their cryptographic hashes match expected values.</p>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-recaptcha"></i> reCAPTCHA Support</h6>
                    <p>Google reCAPTCHA support for the login form prevents automated attacks and brute force attempts.</p>
                </div>
            </div>
        </div>

        <div class="doc-subsection-header">
            <a href="#authentication_security">Authentication Security</a>
        </div>
        <div class="doc-section-grid">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-phone"></i> 2FA Support</h6>
                    <p>Support for 2-factor authentication with any TOTP compatible authentication application for enhanced login security.</p>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-lock"></i> Encrypted Communications</h6>
                    <p>Optional AES encrypted AJAX responses and encrypted local session storage cache protect data in transit.</p>
                </div>
            </div>
        </div>
    </div>

    <div id="server_security" class="doc-section">
        <div class="doc-section-header">
            <a href="#server_security">On the Server</a>
        </div>
        <span class="doc-section-text">
            Server-side security measures that protect data at rest, secure communications, and prevent unauthorized access.
        </span>

        <div class="doc-subsection-header">
            <a href="#secure_connections">Secure Connections</a>
        </div>
        <div class="doc-section-grid">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-shield-lock"></i> TLS/STARTTLS Support</h6>
                    <p>TLS/STARTTLS support for IMAP, LDAP, and SMTP connections ensures encrypted email communications.</p>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-key"></i> OAuth2 Support</h6>
                    <p>OAuth2 over IMAP/SMTP supported (currently Gmail and Outlook) for secure token-based authentication.</p>
                </div>
            </div>
        </div>

        <div class="doc-subsection-header">
            <a href="#data_encryption">Data Encryption</a>
        </div>
        <div class="doc-section-grid">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-shield-lock"></i> Session Data Protection</h6>
                    <p>Session data encrypted with a secure random string at login. Data stays server-side; key stored in a secure, HTTP-only cookie.</p>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-database-lock"></i> Persistent Storage</h6>
                    <p>Data between sessions encrypted with a password-derived key. Uses PBKDF2/Argon2 for key derivation. Password never stored.</p>
                </div>
            </div>
        </div>

        <div class="doc-subsection-header">
            <a href="#encryption_methods">Encryption Methods</a>
        </div>
        <div class="feature-card">
            <h6><i class="bi bi-shield-check"></i> Encryption Implementation</h6>
            <p>All cryptographic operations follow these standards:</p>
            <ul>
                <li>Primary: <strong>libsodium</strong> when available (preferred implementation)</li>
                <li>Fallback: <strong>AES-256-CBC</strong> with encrypt-then-MAC</li>
                <li>Key Derivation: <strong>PBKDF2</strong> via OpenSSL (Mcrypt is never used)</li>
                <li>For local DB authentication: <strong>PBKDF2</strong> with salt, or <strong>Argon2</strong> when using libsodium</li>
            </ul>
        </div>

        <div class="doc-subsection-header">
            <a href="#server_hardening">Server Hardening</a>
        </div>
        <div class="doc-grid-content">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-gear"></i> PHP Security Settings</h6>
                    <p>PHP ini settings are tightened up at runtime for extra security, including open basedir and session best practices (ones writable at runtime).</p>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-folder-x"></i> Minimal Web Root</h6>
                    <p>No writable files or directories are used inside the web-server document root, and only 3 files need to be inside the document root to run the program.</p>
                </div>
            </div>
        </div>

        <div class="doc-subsection-header">
            <a href="#authentication_methods">Authentication Methods</a>
        </div>
        <div class="doc-grid-content">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-database"></i> Local Authentication DB</h6>
                    <p>Optional local DB based authentication using a salt and PBKDF2 (or libsodium using Argon2 if available) for secure password storage.</p>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-envelope-check"></i> IMAP/SMTP Security</h6>
                    <p>IMAP/SMTP connections are encrypted using TLS/STARTTLS.</p>
                </div>
            </div>
        </div>

        <div class="doc-subsection-header">
            <a href="#privacy_score">Privacy Verification</a>
        </div>
        <div class="feature-card text-center">
            <h6><i class="bi bi-award"></i> Perfect Privacy Score</h6>
            <p>Achieves a perfect score from the "Email Privacy Tester" at emailprivacytester.com</p>
            <a href="https://emailprivacytester.com/" target="_blank" class="doc-btn-card btn-sm">Test Privacy Score</a>
        </div>
    </div>

    <div id="development_security" class="doc-section">
        <div class="doc-section-header">
            <a href="#development_security">During Development</a>
        </div>
        <span class="doc-section-text">
            Security-focused development practices that ensure code quality and prevent vulnerabilities from being introduced.
        </span>

        <div class="doc-subsection-header">
            <a href="#secure_coding">Secure Coding Practices</a>
        </div>
        <div class="doc-grid-content">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-code-slash"></i> Easy Output Escaping</h6>
                    <p>Easy output escaping inside modules for potentially dangerous content prevents XSS attacks.</p>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-exclamation-triangle"></i> Strict Error Reporting</h6>
                    <p>Development is done with PHP's "E_ALL" and "E_STRICT" error reporting to catch potential issues early.</p>
                </div>
            </div>
        </div>

        <div class="doc-subsection-header">
            <a href="#architecture_security">Secure Architecture</a>
        </div>
        <div class="doc-grid-content">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-layers"></i> Separation of Concerns</h6>
                    <p>Module design enforces a separation of input processing and output formatting, and encourages concise methods, which makes the code easier to debug and audit.</p>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-shield-check"></i> Input Validation</h6>
                    <p>Only white-listed and typed/sanitized input is allowed. Modules must pre-define input in order to have access.</p>
                </div>
            </div>
        </div>

        <div class="doc-subsection-header">
            <a href="#global_security">Global Security Measures</a>
        </div>
        <div class="feature-card">
            <h6><i class="bi bi-globe"></i> No Global Variables</h6>
            <p>Modules can't reference PHP super-globals, and there are no globally scoped variables at all (there are a few static class instances with private data structures that use getter/setter methods).</p>
        </div>

        <div class="doc-subsection-header">
            <a href="#testing_coverage">Testing & Coverage</a>
        </div>
        <div class="doc-grid-content">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-check-circle text-success"></i> 98% Unit Test Coverage</h6>
                    <p>~98% unit test coverage with PHPUnit for the application framework and core module set.</p>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-browser-chrome"></i> UI Testing</h6>
                    <p>UI tests using Selenium with python bindings (currently at 64 tests).</p>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-arrow-repeat"></i> Continuous Integration</h6>
                    <p>Continuous Integration for UI tests, unit tests, and static code analysis done with Travis CI.</p>
                    <a href="https://travis-ci.org" target="_blank" class="doc-btn-card btn-sm">Travis CI</a>
                </div>
            </div>
        </div>

        <!-- <div class="feature-card mt-3">
            <h6><i class="bi bi-book"></i> Testing Process</h6>
            <p>Read more about our comprehensive testing process and security validation on our testing page.</p>
            <a href="https://www.cypht.org/security/tests.html" target="_blank" class="btn btn-outline-primary">View Testing Documentation</a>
        </div> -->
    </div>

    <div id="security_best_practices" class="doc-section">
        <div class="doc-section-header">
            <a href="#security_best_practices">Security Best Practices</a>
        </div>
        <span class="doc-section-text">
            Recommendations for users and administrators to maintain optimal security when using Cypht.
        </span>

        <div class="doc-subsection-header">
            <a href="#user_recommendations">For Users</a>
        </div>
        <div class="doc-grid-content">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-phone"></i> Enable 2FA</h6>
                    <p>Always enable two-factor authentication when available to add an extra layer of security to your account.</p>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-clock"></i> Regular Logout</h6>
                    <p>Log out when finished and configure appropriate idle timeouts to prevent unauthorized access.</p>
                </div>
            </div>
        </div>

        <div class="doc-subsection-header">
            <a href="#administrator_recommendations">For Administrators</a>
        </div>
        <div class="doc-grid-content">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-arrow-repeat"></i> Keep Updated</h6>
                    <p>Always run the latest version of Cypht to ensure you have the latest security patches and improvements.</p>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-server"></i> Secure Server Configuration</h6>
                    <p>Ensure your web server, PHP, and database are properly configured with security best practices.</p>
                </div>
            </div>
        </div>
    </div>

    <nav-pagination
        prev-label="Calendar"
        prev-url="/documentation/calendar"
        next-label="Dev Docs"
        next-url="/documentation/dev-docs">
    </nav-pagination>

</div>

<div class="doc-content-right d-none d-xl-flex col-xl-2">
    <div class="dc-ctr-content">
        <div class="dc-ctr-header">
            <p class="dc-ctr-header-title">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5h12M4 12h16M4 19h8" color="currentColor"/></svg>
                On this page
            </p>
        </div>
        <nav>
            <ul id="dc-ctr-nav">
                <li><a href="#introduction" class="active">Introduction</a></li>
                <li><a href="#reporting_security">Report Flaws</a></li>
                <li><a href="#browser_security">Browser Security</a></li>
                <li><a href="#server_security">Server Security</a></li>
                <li><a href="#development_security">Dev Security</a></li>
                <li><a href="#security_best_practices">Best Practices</a></li>
            </ul>
        </nav>
    </div>
</div>
