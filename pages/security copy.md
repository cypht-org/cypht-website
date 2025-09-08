---
title: Security
weight: 15
---
<h2>Have a question about security?</h2>
<h3>Found a flaw in Cypht? We want to hear from you!</h3>
<p> Drop by the Cypht Gitter channel.
    We take security seriously. Cypht is an entirely volunteer effort, so
    we can't afford a bounty program. We can however promise that any security issue reported to us before release
    will receive a quick response, a thorough review, a sincere thanks, and an honorable mention on this page</p>
<hr>
<h3 class="top">In the browser</h3>
<ul>
    <li>
        By default all cookies are session level, HTTP only, and have the secure flag, path, and domain values set
        (except one cookie used to pass user notices to the javascript)
    </li>
    <li>
        HTTP request header fingerprinting, CSRF token protection, and target/source origin mismatch blocking
    </li>
    <li>
        Security related HTTP headers like X-XSS-Protection, X-Content-Type-Options, X-Frame-Options, and
        Content-Security-Policy
    </li>
    <li>
        Subresource Integrity for the 2 primary includes (site.js and site.css)
    </li>
    <li>
        Configurable idle timeout module set that ends a session after a predetermined amount of time
    </li>
    <li>
        Support for 2 factor authentication with any TOTP compatible authentication application
    </li>
    <li>
        Optional AES encrypted AJAX responses
    </li>
    <li>
        Optional AES encrypted local session storage cache
    </li>
    <li>
        <a href="https://www.google.com/recaptcha/intro/index.html">reCAPTCHA</a> support for the login form
    </li>
</ul>
<hr>
<h3>On the server</h3>
<ul>
    <li>
        TLS/STARTTLS support for IMAP, LDAP, and SMTP connections
    </li>
    <li>
        Oauth2 over IMAP/SMTP supported (currently only Gmail and Outlook support this feature)
    </li>
    <li>
        Session level data is encrypted with a long random string generated on login. Data is stored server side,
        and the key is stored in a session level secure cookie
    </li>
    <li>
        Persistent data stored between logins is encrypted with a key derived from your clear text password, which
        is obviously not stored anywhere
    </li>
    <li>
        All encryption is done with libsodium if available, otherwise with AES-256-CBC, encrypt-then-MAC, and PBKDF2
        key derivation using OpenSSL (NOT Mcrypt)
    </li>
    <li>
        PHP ini settings are tightened up at runtime for extra security, including open basedir and session best
        practices (ones writable at runtime)
    </li>
    <li>
        No writable files or directories are used inside the web-server document root, and only 3 files need to be
        inside the document root to run the program. Module sets may include additional assets, such as the HTML
        editor for outbound mail
    </li>
    <li>
        Optional local DB based authentication using a salt and PBKDF2 (or libsodium using Argon2 if available)
    </li>
    <li>
        HTML formatted E-Mail is filtered through HTMLPurifier with all external resources removed before being
        rendered
    </li>
    <li>
        Perfect score from the "Email Privacy Tester" at <a
            href="https://emailprivacytester.com/">https://emailprivacytester.com/</a>
</ul>
<hr>
<h3> During development</h3>
<ul>
    <li>
        Easy output escaping inside modules for potentially dangerous content
    </li>
    <li>
        Development is done with PHP's "E_ALL" and "E_STRICT" error reporting
    </li>
    <li>
        Module design enforces a separation of input processing and output formatting, and encourages concise
        methods, which makes the code easier to debug and audit
    </li>
    <li>
        Only white-listed and typed/sanitized input is allowed. Modules must pre-define input in order to have
        access
    </li>
    <li>
        Modules can't reference PHP super-globals, and there are no globally scoped variables at all (there are a
        few static class instances with private data structures that use getter/setter methods)
    </li>
    <li>
        <a href="http://cypht.org/docs/test_coverage/index.html">~98% unit test coverage with PHPUnit</a> for the
        application framework and core module set
    </li>
    <li>
        UI tests using Selenium with python bindings (currently at 64 tests)
    <li>
        Continuous Integration for UI tests, unit tests, and static code analysis done with <a
            href="https://travis-ci.org">Travis CI</a>. You can read more info about our testing process at the <a
            href="tests.html">testing page</a>
    </li>
</ul>