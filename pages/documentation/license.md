---
id: 17
title: License
layout: section/documentation
---

<div class="doc-content-left col mx-xl-3">
    <div class="doc-page-header">
        <h3>License</h3>
    </div>

    <div id="overview" class="doc-section">
        <div class="doc-section-header">
            <a href="#overview">Cypht License Overview</a>
        </div>
        <span class="doc-section-text">
            Cypht source code is distributed under the LGPL V2.1 license. Cypht will always be both free and Open Source. Learn about our licensing terms and the third-party libraries we use.
        </span>

        <div class="feature-card text-center">
            <h6><i class="bi bi-shield-check"></i> LGPL V2.1 License</h6>
            <p>Cypht is licensed under the GNU Lesser General Public License v2.1</p>
            <div class="d-flex gap-2 justify-content-center flex-wrap">
                <a href="https://github.com/cypht-org/cypht/blob/master/LICENSE" target="_blank" class="doc-btn-card btn-dm btn-success">View Full License</a>
                <a href="/license" class="doc-btn-card btn-sm">Detailed License Page</a>
            </div>
        </div>
    </div>

    <div id="lgpl_explanation" class="doc-section">
        <div class="doc-section-header">
            <a href="#lgpl_explanation">Understanding LGPL V2.1</a>
        </div>
        <span class="doc-section-text">
            The GNU Lesser General Public License is a free software license that allows you to use, modify, and distribute Cypht under certain conditions.
        </span>

        <div class="doc-subsection-header">
            <a href="#key_permissions">Key Permissions</a>
        </div>
        <div class="doc-grid-content">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-check-circle"></i> What You Can Do</h6>
                    <ul>
                        <li>Use Cypht for commercial purposes</li>
                        <li>Modify the source code</li>
                        <li>Distribute modified versions</li>
                        <li>Use it in proprietary applications</li>
                        <li>Charge for distribution and support</li>
                    </ul>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-info-circle"></i> Requirements</h6>
                    <ul>
                        <li>Provide access to source code</li>
                        <li>Include license notices</li>
                        <li>State changes made to the code</li>
                        <li>Allow users to reverse engineer</li>
                        <li>Keep modifications under LGPL</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="tip-card tip-info">
            <span class="tip-info-text"><i class="bi bi-lightbulb"></i> Why LGPL?</span>
            <p class="mb-0">We chose LGPL v2.1 because it balances freedom for users with flexibility for developers. You can use Cypht in commercial projects while ensuring the core remains Open Source.</p>
        </div>
    </div>

    <div id="third_party_libraries" class="doc-section">
        <div class="doc-section-header">
            <a href="#third_party_libraries">Third-Party Libraries</a>
        </div>
        <span class="doc-section-text">
            Cypht uses a handful of third party libraries both indirectly and directly. Compatible versions of direct dependencies are always included in the Cypht source or installed via PHP composer.
        </span>

        <div class="doc-subsection-header">
            <a href="#directly_used">Directly Used Libraries</a>
        </div>
        <p>These libraries are directly integrated into Cypht and are essential for core functionality:</p>

        <div class="doc-grid-content">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-shield-check"></i> HTMLPurifier</h6>
                    <p>A comprehensive HTML filter written in PHP that removes malicious code while preserving valid markup. Essential for email security.</p>
                    <a href="http://htmlpurifier.org/" target="_blank" class="doc-btn-card btn-sm">Visit Website</a>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-code-slash"></i> Cash</h6>
                    <p>A compact jQuery compatible JavaScript library that provides core DOM manipulation and event handling features.</p>
                    <a href="http://kenwheeler.github.io/cash/" target="_blank" class="doc-btn-card btn-sm">Documentation</a>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-file-text"></i> Html2Text</h6>
                    <p>HTML to text converter in PHP that extracts textual content from HTML emails for better compatibility and readability.</p>
                    <a href="https://github.com/mtibben/html2text" target="_blank" class="doc-btn-card btn-sm">GitHub</a>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-pencil-square"></i> KindEditor</h6>
                    <p>Lightweight JavaScript WYSIWYG editor for composing HTML messages with built-in rich text editing features.</p>
                    <a href="http://kindeditor.net/demo.php" target="_blank" class="doc-btn-card btn-sm">View Demo</a>
                </div>
            </div>
            <!--  -->
             <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-shield-lock"></i> Forge</h6>
                    <p>JavaScript cryptography library providing secure encryption, digital signatures, and key generation capabilities.</p>
                    <a href="https://github.com/digitalbazaar/forge" target="_blank" class="doc-btn-card btn-sm">GitHub</a>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-dice-3"></i> Random Compat</h6>
                    <p>Cryptographically secure random number generator library for PHP, ensuring the safety of sensitive operations.</p>
                    <a href="https://github.com/paragonie/random_compat" target="_blank" class="doc-btn-card btn-sm">GitHub</a>
                </div>
            </div>
            <!--  -->
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-code-slash"></i> Base32</h6>
                    <p>Base32 encoding library used by the two-factor authentication (2FA) module to generate secure QR codes.</p>
                    <a href="https://github.com/ChristianRiesen/base32" target="_blank" class="doc-btn-card btn-sm">GitHub</a>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-qr-code"></i> Barcode</h6>
                    <p>PNG QR code generator for PHP, used by the 2FA module to create secure visual authentication codes.</p>
                    <a href="https://github.com/codeitnowin/barcode-generator" target="_blank" class="doc-btn-card btn-sm">GitHub</a>
                </div>
            </div>
            <!--  -->
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-shield-lock"></i> Libsodium</h6>
                    <p>Optional NIST-compliant cryptography library offering modern, secure encryption algorithms for sensitive operations.</p>
                    <a href="https://download.libsodium.org/doc/" target="_blank" class="doc-btn-card btn-sm">Documentation</a>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-bell"></i> Push</h6>
                    <p>JavaScript library for easy desktop notifications, used by the desktop notification module to alert users about new emails.</p>
                    <a href="https://pushjs.org/" target="_blank" class="doc-btn-card btn-sm">Website</a>
                </div>
            </div>
            <!--  -->
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-pencil-square"></i> Editor</h6>
                    <p>JavaScript Markdown editor for composing messages with a modern UI and advanced editing features.</p>
                    <a href="https://lepture.com/" target="_blank" class="doc-btn-card btn-sm">Website</a>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-file-text"></i> Parsedown</h6>
                    <p>PHP library to convert Markdown to HTML, enabling message and documentation formatting with simple, readable syntax.</p>
                    <a href="http://parsedown.org/" target="_blank" class="doc-btn-card btn-sm">Website</a>
                </div>
            </div>
        </div>

        <div class="doc-subsection-header">
            <a href="#indirectly_used">Indirectly Used Libraries</a>
        </div>
        <p>These libraries are used during development and testing but are not required for running Cypht:</p>

        <div class="doc-grid-second-content">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-vial"></i> PHPUnit</h6>
                    <p>Program that runs unit tests and builds coverage reports for PHP</p>
                    <a href="https://phpunit.de/" target="_blank" class="doc-btn-card btn-sm">Website</a>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-book"></i> ApiGen</h6>
                    <p>PHP app to generate documentation from source code</p>
                    <a href="http://www.apigen.org/" target="_blank" class="doc-btn-card btn-sm">Website</a>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-browser-chrome"></i> Selenium</h6>
                    <p>Automated browser testing framework</p>
                    <a href="https://www.selenium.dev/" target="_blank" class="doc-btn-card btn-sm">Website</a>
                </div>
            </div>
        </div>
    </div>

    <div id="license_compliance" class="doc-section">
        <div class="doc-section-header">
            <a href="#license_compliance">License Compliance</a>
        </div>
        <span class="doc-section-text">
            Understanding your obligations when using and distributing Cypht.
        </span>

        <div class="doc-subsection-header">
            <a href="#distribution_requirements">Distribution Requirements</a>
        </div>
        <p>When distributing Cypht or modified versions, you must:</p>

        <div class="feature-card">
            <h6><i class="bi bi-clipboard-check"></i> Compliance Checklist</h6>
            <ul>
                <li>✅ Include a copy of the LGPL v2.1 license</li>
                <li>✅ Provide copyright notices for all components</li>
                <li>✅ Make source code available to recipients</li>
                <li>✅ Allow users to modify and redistribute</li>
                <li>✅ Keep modifications under LGPL license</li>
                <li>✅ Document changes made to the original code</li>
            </ul>
        </div>

        <div class="doc-subsection-header">
            <a href="#commercial_use">Commercial Use</a>
        </div>
        <p>Yes, you can use Cypht in commercial applications! The LGPL allows commercial use as long as you comply with the license terms. You can:</p>

        <div class="doc-grid-content">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-check-circle text-success"></i> Allowed</h6>
                    <ul>
                        <li>Sell commercial products using Cypht</li>
                        <li>Use in proprietary software</li>
                        <li>Charge for support and services</li>
                        <li>Create custom modules</li>
                    </ul>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-info-circle text-info"></i> Requirements</h6>
                    <ul>
                        <li>Provide source for Cypht components</li>
                        <li>Allow users to replace Cypht parts</li>
                        <li>Include license notices</li>
                        <li>Document modifications</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- <div id="contributing_license" class="doc-section">
        <div class="doc-section-header">
            <a href="#contributing_license">Contributing & License</a>
        </div>
        <span class="doc-section-text">
            When contributing to Cypht, you agree to license your contributions under the same terms.
        </span>

        <div class="feature-card">
            <h6><i class="bi bi-code-slash"></i> Contributor License Agreement</h6>
            <p>By submitting code to Cypht, you agree that your contribution will be licensed under LGPL v2.1, the same license as the rest of the project. This ensures the entire codebase remains under consistent licensing.</p>
            <div class="d-flex gap-2 flex-wrap">
                <a href="/documentation/join-community" class="btn btn-outline-primary">Join Community</a>
                <a href="/documentation/dev-docs" class="btn btn-outline-secondary">Developer Docs</a>
            </div>
        </div>
    </div> -->

    <div id="additional_resources" class="doc-section">
        <div class="doc-section-header">
            <a href="#additional_resources">Additional Resources</a>
        </div>
        <span class="doc-section-text">
            More information about Open Source licensing and Cypht.
        </span>

        <div class="doc-grid-content">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-book"></i> License Resources</h6>
                    <ul>
                        <li><a href="https://www.gnu.org/licenses/lgpl-2.1.html" target="_blank" class="text-link">Official LGPL v2.1 Text</a></li>
                        <li><a href="https://www.gnu.org/licenses/why-lgpl.html" target="_blank" class="text-link">Why Use LGPL?</a></li>
                        <li><a href="https://www.gnu.org/licenses/gpl-faq.html" target="_blank" class="text-link">GPL/LGPL FAQ</a></li>
                    </ul>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-link"></i> Related Links</h6>
                    <ul>
                        <li><a href="/license" target="_blank" class="text-link">Detailed License Page</a></li>
                        <li><a href="https://github.com/cypht-org/cypht" target="_blank" class="text-link">GitHub Repository</a></li>
                        <li><a href="/documentation/contributing" target="_blank" class="text-link">Contributing Guide</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <nav-pagination
        prev-label="Get Help"
        prev-url="/documentation/help">
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
                <li><a href="#overview" class="active">License Overview</a></li>
                <li><a href="#lgpl_explanation">Understanding LGPL</a></li>
                <li><a href="#third_party_libraries">Third-Party Libraries</a></li>
                <li><a href="#license_compliance">Compliance</a></li>
                <!-- <li><a href="#contributing_license">Contributing</a></li> -->
                <li><a href="#additional_resources">Resources</a></li>
            </ul>
        </nav>
    </div>
</div>
