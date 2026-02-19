---
id: 14
title: Reporting Bugs
layout: section/documentation
---

<div class="doc-content-left col mx-xl-3">
    <div class="doc-page-header">
        <h3>Reporting Bugs</h3>
    </div>

    <div id="overview" class="doc-section">
        <div class="doc-section-header">
            <a href="#overview">Bug Reporting Overview</a>
        </div>
        <span class="doc-section-text">
            Help us improve Cypht by reporting bugs and issues you encounter. Your feedback is essential for maintaining the quality and reliability of this Open Source email client.
        </span>
        <span class="doc-section-text">
            Cypht is an entirely volunteer effort, and we rely on community contributions to identify and fix issues. Every bug report helps make Cypht better for everyone.
        </span>
    </div>

    <div id="before_reporting" class="doc-section">
        <div class="doc-section-header">
            <a href="#before_reporting">Before Reporting</a>
        </div>
        <span class="doc-section-text">
            Follow these steps to ensure your bug report is effective and helps us resolve the issue quickly.
        </span>

        <div class="doc-subsection-header">
            <a href="#check_existing">Check Existing Issues</a>
        </div>
        <p>Before creating a new report, search the <a href="https://github.com/cypht-org/cypht/issues" target="_blank" class="text-link">GitHub issues</a> to see if the bug has already been reported.</p>

        <div class="doc-subsection-header">
            <a href="#reproduce_issue">Reproduce the Issue</a>
        </div>
        <p>Try to reproduce the bug consistently. Note the exact steps that trigger the problem and any patterns you observe.</p>

        <div class="doc-subsection-header">
            <a href="#gather_info">Gather System Information</a>
        </div>
        <p>Collect relevant details about your environment that might help diagnose the problem.</p>

        <div class="doc-grid-content">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-info-circle"></i> Helpful Information</h6>
                    <ul>
                        <li>Cypht version</li>
                        <li>PHP version</li>
                        <li>Web server (Apache/Nginx)</li>
                        <li>Browser and version</li>
                        <li>Operating system</li>
                        <li>Email provider(s) affected</li>
                    </ul>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-clock"></i> When to Report</h6>
                    <p>Report issues that are reproducible and affect functionality. Minor UI improvements or feature requests should use the contribution guidelines instead.</p>
                </div>
            </div>
        </div>
    </div>

    <div id="security_issues" class="doc-section">
        <div class="doc-section-header">
            <a href="#security_issues">Security Issues</a>
        </div>
        <span class="doc-section-text">
            We take security seriously. If you discover a security vulnerability, please report it responsibly.
        </span>

        <div class="tip-card tip-warning">
            <span class="tip-warning-text"><i class="bi bi-shield-exclamation"></i> Security Reporting</span>
            <p class="mb-0">For security issues, <strong>do not</strong> use public GitHub issues. Instead, report them privately through our security channels.</p>
        </div>

        <div class="doc-subsection-header">
            <a href="#how_to_report_security">How to Report Security Issues</a>
        </div>
        <ol>
            <li>Visit the <a href="https://www.cypht.org/security" target="_blank" class="text-link">Cypht Security page</a></li>
            <li>Follow the private reporting instructions</li>
            <li>Provide detailed information about the vulnerability</li>
            <li>Include steps to reproduce if possible</li>
        </ol>

        <div class="tip-card tip-info mt-3">
            <span class="tip-info-text"><i class="bi bi-award"></i> Security Recognition</span>
            <p>Security issues reported before release receive a quick response, thorough review, sincere thanks, and honorable mention on our security page.</p>
        </div>
    </div>

    <div id="reporting_channels" class="doc-section">
        <div class="doc-section-header">
            <a href="#reporting_channels">Reporting Channels</a>
        </div>
        <span class="doc-section-text">
            Choose the appropriate channel based on your issue type and urgency.
        </span>

        <div class="doc-grid-content">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-github"></i> GitHub Issues</h6>
                    <p><strong>Best for:</strong> Bug reports, feature requests, technical issues</p>
                    <p>Submit detailed issues with reproduction steps and system information.</p>
                    <a href="https://github.com/cypht-org/cypht/issues" target="_blank" class="doc-btn-card btn-sm btn-success mt-2">Submit Issue</a>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-chat-dots"></i> Gitter Chat</h6>
                    <p><strong>Best for:</strong> Quick questions, general discussions, community support</p>
                    <p>Real-time chat with developers and community members.</p>
                    <a href="https://gitter.im/cypht-org/community" target="_blank" class="doc-btn-card btn-sm mt-2">Join Chat</a>
                </div>
            </div>
        </div>
    </div>

    <div id="bug_report_template" class="doc-section">
        <div class="doc-section-header">
            <a href="#bug_report_template">Bug Report Template</a>
        </div>
        <span class="doc-section-text">
            Use this template to ensure your bug report includes all necessary information for effective troubleshooting.
        </span>

        <div class="doc-subsection-header">
            <a href="#issue_description">Issue Description</a>
        </div>
        <p>Provide a clear and concise description of the problem:</p>
        <pre><code class="code-bash">**Bug Description**

A clear and brief description of what the bug is.

**Expected Behavior**
What you expected to happen.

**Actual Behavior**
What actually happened instead.</code></pre>

        <div class="doc-subsection-header">
            <a href="#reproduction_steps">Steps to Reproduce</a>
        </div>
        <pre><code class="code-bash">**To Reproduce**

1.  Go to '...'
2.  Click on '....'
3.  Scroll down to '....'
4.  See error</code></pre>

        <div class="doc-subsection-header">
            <a href="#environment_info">Environment Information</a>
        </div>
        <pre><code class="code-bash">**Environment**

- Cypht version: [e.g., 1.3.0]
- PHP version: [e.g., 8.1.0]
- Web server: [e.g., Apache 2.4.41]
- Database: [e.g., MySQL 8.0]
- Browser: [e.g., Chrome 91.0]
- OS: [e.g., Ubuntu 20.04]</code></pre>

        <div class="doc-subsection-header">
            <a href="#additional_context">Additional Context</a>
        </div>
        <p>Include any additional information that might help:</p>
        <ul>
            <li>Screenshots or screen recordings</li>
            <li>Error messages from logs</li>
            <li>Browser console errors</li>
            <li>Network requests that failed</li>
            <li>Recent changes to your setup</li>
        </ul>

    </div>

    <div id="feature_requests" class="doc-section">
        <div class="doc-section-header">
            <a href="#feature_requests">Feature Requests</a>
        </div>
        <span class="doc-section-text">
            Have an idea for improving Cypht? We'd love to hear your suggestions!
        </span>

        <div class="doc-subsection-header">
            <a href="#request_guidelines">Request Guidelines</a>
        </div>
        <ul>
            <li>Check if the feature already exists or is planned</li>
            <li>Explain the problem your feature would solve</li>
            <li>Describe the proposed solution clearly</li>
            <li>Consider if it fits Cypht's modular design</li>
            <li>Be open to discussion and feedback</li>
        </ul>

        <div class="tip-card tip-info mt-3">
            <span class="tip-info-text"><i class="bi bi-lightbulb"></i> Contribution Welcome</span>
            <p class="mb-0">The best way to get a feature implemented is often to contribute it yourself! Check our <a href="/documentation/dev-docs">developer documentation</a> to get started.</p>
        </div>

    </div>
    <div class="doc-section">
        <h6><i class="bi bi-heart me-2"></i> Thank You!</h6>
        <p>Whether you're reporting a bug, suggesting a feature, or contributing code, your involvement helps make Cypht better for everyone. We appreciate your support!</p>
    </div>

  <nav-pagination
        prev-label="Dev Docs"
        prev-url="/documentation/dev-docs"
        next-label="Join Community"
        next-url="/documentation/join-community">
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
                <li><a href="#overview" class="active">Bug Reporting Overview</a></li>
                <li><a href="#before_reporting">Before Reporting</a></li>
                <li><a href="#security_issues">Security Issues</a></li>
                <li><a href="#reporting_channels">Reporting Channels</a></li>
                <li><a href="#bug_report_template">Report Template</a></li>
                <li><a href="#feature_requests">Feature Requests</a></li>
            </ul>
        </nav>
    </div>
</div>
