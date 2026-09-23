---
weight: 20
id: 14
title: Reporting Bugs
description: "Learn how to report bugs in Cypht effectively. Follow our bug reporting guidelines to provide useful details and help the team fix issues quickly."
layout: section/documentation
format: md
toc_labels:
  overview: Bug Reporting Overview
  before_reporting: Before Reporting
  security_issues: Security Issues
  reporting_channels: Reporting Channels
  bug_report_template: Report Template
  feature_requests: Feature Requests
nav_prev:
  label: Dev Docs
  url: /documentation/developer/dev-docs
nav_next:
  label: Join Community
  url: /documentation/developer/join-community
---

## Bug Reporting Overview {#overview}

Help us improve Cypht by reporting bugs and issues you encounter. Your feedback is essential for maintaining the
quality and reliability of this Open Source email client.

Cypht is an entirely volunteer effort, and we rely on community contributions to identify and fix issues. Every bug
report helps make Cypht better for everyone.

## Before Reporting {#before_reporting}

Follow these steps to ensure your bug report is effective and helps us resolve the issue quickly.

### Check Existing Issues {#check_existing}

Before creating a new report, search the [GitHub issues](https://github.com/cypht-org/cypht/issues) to see if the bug
has already been reported.

### Reproduce the Issue {#reproduce_issue}

Try to reproduce the bug consistently. Note the exact steps that trigger the problem and any patterns you observe.

### Gather System Information {#gather_info}

Collect relevant details about your environment that might help diagnose the problem.

**Helpful Information**

- Cypht version
- PHP version
- Web server (Apache/Nginx)
- Browser and version
- Operating system
- Email provider(s) affected

**When to Report**

Report issues that are reproducible and affect functionality. Minor UI improvements or feature requests should use the
contribution guidelines instead.

## Security Issues {#security_issues}

We take security seriously. If you discover a security vulnerability, please report it responsibly.

:::warning
**Security Reporting.** For security issues, **do not** use public GitHub issues. Instead, report them privately
through our security channels.
:::

### How to Report Security Issues {#how_to_report_security}

1. Visit the [Cypht Security page](https://www.cypht.org/security)
2. Follow the private reporting instructions
3. Provide detailed information about the vulnerability
4. Include steps to reproduce if possible

:::info
**Security Recognition.** Security issues reported before release receive a quick response, thorough review, sincere
thanks, and honorable mention on our security page.
:::

## Reporting Channels {#reporting_channels}

Choose the appropriate channel based on your issue type and urgency.

:::grid
- **GitHub Issues**
  **Best for :** Bug reports, feature requests, technical issues. Submit detailed issues with reproduction steps and
  system information.
  [Submit Issue](https://github.com/cypht-org/cypht/issues)
- **Gitter Chat**
  **Best for :** Quick questions, general discussions, community support. Real-time chat with developers and community
  members.
  [Join Chat](https://gitter.im/cypht-org/community)
:::

## Bug Report Template {#bug_report_template}

Use this template to ensure your bug report includes all necessary information for effective troubleshooting.

### Issue Description {#issue_description}

Provide a clear and concise description of the problem :

```text
**Bug Description**

A clear and brief description of what the bug is.

**Expected Behavior**
What you expected to happen.

**Actual Behavior**
What actually happened instead.
```

### Steps to Reproduce {#reproduction_steps}

```text
**To Reproduce**

1.  Go to '...'
2.  Click on '....'
3.  Scroll down to '....'
4.  See error
```

### Environment Information {#environment_info}

```text
**Environment**

- Cypht version: [e.g., 1.3.0]
- PHP version: [e.g., 8.1.0]
- Web server: [e.g., Apache 2.4.41]
- Database: [e.g., MySQL 8.0]
- Browser: [e.g., Chrome 91.0]
- OS: [e.g., Ubuntu 20.04]
```

### Additional Context {#additional_context}

Include any additional information that might help :

- Screenshots or screen recordings
- Error messages from logs
- Browser console errors
- Network requests that failed
- Recent changes to your setup

## Feature Requests {#feature_requests}

Have an idea for improving Cypht? We'd love to hear your suggestions!

### Request Guidelines {#request_guidelines}

- Check if the feature already exists or is planned
- Explain the problem your feature would solve
- Describe the proposed solution clearly
- Consider if it fits Cypht's modular design
- Be open to discussion and feedback

:::info
**Contribution Welcome.** The best way to get a feature implemented is often to contribute it yourself! Check our
[developer documentation](/documentation/developer/dev-docs) to get started.
:::

## Thank You! {#thank_you}

Whether you're reporting a bug, suggesting a feature, or contributing code, your involvement helps make Cypht better
for everyone. We appreciate your support!
