---
weight: 10
id: 12
title: Security
description: "Overview of Cypht's security architecture. Learn about browser protections, server-side encryption, secure authentication, input validation, and development best practices."
layout: section/documentation
format: md
toc_labels:
  introduction: Introduction
  reporting_security: Report Flaws
  browser_security: Browser Security
  server_security: Server Security
  development_security: Dev Security
  security_best_practices: Best Practices
nav_prev:
  label: Calendar
  url: /documentation/features/calendar
nav_next:
  label: Dev Docs
  url: /documentation/developer/dev-docs
---

## Introduction {#introduction}

Cypht takes security seriously at every level - from browser interactions to server-side operations and development
practices. Learn about our comprehensive security measures and how we protect your data.

:::info
**Security First Approach.** Multi-layered security protecting your email communications and personal data.
:::

## Found a Flaw in Cypht? {#reporting_security}

We want to hear from you! Help us keep Cypht secure by reporting any security issues you discover.

:::warning
**Security Reporting.** **Do NOT** use public GitHub issues for security reports. Contact us privately through secure
channels.
:::

### How to Report Security Issues {#how_to_report}

Drop by the Cypht Gitter channel or use our private security reporting channels. We take security seriously and
promise :

:::grid

- **Quick Response**
  Any security issue reported before release will receive a prompt response from our team.
- **Thorough Review**
  Every report is carefully analyzed and validated by our security team.
- **Sincere Thanks**
  We appreciate your contribution to keeping Cypht secure for everyone.
- **Honorable Mention**
  Security researchers receive recognition on this page for their valuable contributions.
  :::

:::grid

- **Volunteer Project**
  Cypht is an entirely volunteer effort, so we can't afford a bounty program. However, we're committed to maintaining
  the highest security standards and value every security report.
  [Report Security Issue](https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3ASecurity)
  :::

## In the Browser {#browser_security}

Client-side security measures that protect users during their web sessions and prevent common browser-based attacks.

### Session & Cookie Protection {#session_protection}

:::grid

- **Secure Cookies**
  By default, all cookies are session level, HTTP only, and have the secure flag, path, and domain values set (except
  one cookie used to pass user notices to JavaScript).
- **Idle Timeout**
  Configurable idle timeout module set that automatically ends a session after a predetermined amount of inactivity.
  :::

### Request & Attack Protection {#request_protection}

:::grid

- **Request Fingerprinting**
  HTTP request header fingerprinting to detect and prevent suspicious requests.
- **CSRF Protection**
  CSRF token protection and target/source origin mismatch blocking prevent cross-site request forgery attacks.
  :::

### Security Headers {#security_headers}

Comprehensive security-related HTTP headers are implemented :

- **X-XSS-Protection :** Enables browser cross-site scripting filters
- **X-Content-Type-Options :** Prevents MIME-type sniffing attacks
- **X-Frame-Options :** Protects against clickjacking attacks
- **Content-Security-Policy :** Defines approved content sources

### Integrity Verification {#integrity_verification}

:::grid

- **Subresource Integrity (SRI)**
  Ensures site.js and site.css files haven't been tampered with by verifying their cryptographic hashes match expected
  values.
- **reCAPTCHA Support**
  Google reCAPTCHA support for the login form prevents automated attacks and brute force attempts.
  :::

### Authentication Security {#authentication_security}

:::grid

- **2FA Support**
  Support for 2-factor authentication with any TOTP compatible authentication application for enhanced login security.
- **Encrypted Communications**
  Optional AES encrypted AJAX responses and encrypted local session storage cache protect data in transit.
  :::

## On the Server {#server_security}

Server-side security measures that protect data at rest, secure communications, and prevent unauthorized access.

### Secure Connections {#secure_connections}

:::grid

- **TLS/STARTTLS Support**
  TLS/STARTTLS support for IMAP, LDAP, and SMTP connections ensures encrypted email communications.
- **OAuth2 Support**
  OAuth2 over IMAP/SMTP supported (currently Gmail and Outlook) for secure token-based authentication. Set it up with
  the [Gmail](/documentation/setup/account-setup#gmail_oauth) and guides.
  [Outlook & Office 365](/documentation/setup/account-setup#outlook_oauth)
  :::

### Data Encryption {#data_encryption}

:::grid

- **Session Data Protection**
  Session data encrypted with a secure random string at login. Data stays server-side; key stored in a secure,
  HTTP-only cookie.
- **Persistent Storage**
  Data between sessions encrypted with a password-derived key. Uses PBKDF2/Argon2 for key derivation. Password never
  stored.
  :::

### Encryption Methods {#encryption_methods}

All cryptographic operations follow these standards :

- Primary : **libsodium** when available (preferred implementation)
- Fallback : **AES-256-CBC** with encrypt-then-MAC
- Key Derivation : **PBKDF2** via OpenSSL (Mcrypt is never used)
- For local DB authentication : **PBKDF2** with salt, or **Argon2** when using libsodium

### Server Hardening {#server_hardening}

:::grid

- **PHP Security Settings**
  PHP ini settings are tightened up at runtime for extra security, including open basedir and session best practices
  (ones writable at runtime).
- **Minimal Web Root**
  No writable files or directories are used inside the web-server document root, and only 3 files need to be inside
  the document root to run the program.
  :::

### Authentication Methods {#authentication_methods}

:::grid

- **Local Authentication DB**
  Optional local DB based authentication using a salt and PBKDF2 (or libsodium using Argon2 if available) for secure
  password storage.
- **IMAP/SMTP Security**
  IMAP/SMTP connections are encrypted using TLS/STARTTLS.
  :::

### Privacy Verification {#privacy_score}

:::grid

- **Perfect Privacy Score**
  Achieves a perfect score from the "Email Privacy Tester" at emailprivacytester.com
  [Test Privacy Score](https://emailprivacytester.com/)
  :::

## During Development {#development_security}

Security-focused development practices that ensure code quality and prevent vulnerabilities from being introduced.

### Secure Coding Practices {#secure_coding}

:::grid

- **Easy Output Escaping**
  Easy output escaping inside modules for potentially dangerous content prevents XSS attacks.
- **Strict Error Reporting**
  Development is done with PHP's "E_ALL" and "E_STRICT" error reporting to catch potential issues early.
  :::

### Secure Architecture {#architecture_security}

:::grid

- **Separation of Concerns**
  Module design enforces a separation of input processing and output formatting, and encourages concise methods, which
  makes the code easier to debug and audit.
- **Input Validation**
  Only white-listed and typed/sanitized input is allowed. Modules must pre-define input in order to have access.
  :::

### Global Security Measures {#global_security}

:::grid

- **No Global Variables**
  Modules can't reference PHP super-globals, and there are no globally scoped variables at all (there are a few static
  class instances with private data structures that use getter/setter methods).
  :::

### Testing & Coverage {#testing_coverage}

:::grid

- **98% Unit Test Coverage**
  ~98% unit test coverage with PHPUnit for the application framework and core module set.
- **UI Testing**
  UI tests using Selenium with python bindings (currently at 64 tests).
- **Continuous Integration**
  Continuous Integration for UI tests, unit tests, and static code analysis done with Travis CI.
  [Travis CI](https://travis-ci.org)
  :::

## Security Best Practices {#security_best_practices}

Recommendations for users and administrators to maintain optimal security when using Cypht.

### For Users {#user_recommendations}

:::grid

- **Enable 2FA**
  Always enable two-factor authentication when available to add an extra layer of security to your account.
- **Regular Logout**
  Log out when finished and configure appropriate idle timeouts to prevent unauthorized access.
  :::

### For Administrators {#administrator_recommendations}

:::grid

- **Keep Updated**
  Always run the latest version of Cypht to ensure you have the latest security patches and improvements.
- **Secure Server Configuration**
  Ensure your web server, PHP, and database are properly configured with security best practices.
  :::
