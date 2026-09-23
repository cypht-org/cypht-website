---
weight: 20
id: 1
title: Version
description: "Cypht release notes, versioning policy and lifecycle. The 2.x branch is the current, supported branch; 1.4.x is End of Life. See highlights here and the full changelog on GitHub."
layout: section/documentation
format: md
toc_labels:
  versioning_policy: Versioning & Lifecycle
  recent_versions: Release Highlights
nav_prev:
  label: Introduction
  url: /documentation/overview/introduction
nav_next:
  label: Getting Started
  url: /documentation/setup/getting-started
---

## Versioning & Lifecycle {#versioning_policy}

Cypht is a lightweight Open Source webmail aggregator, written in PHP and JavaScript. It supports IMAP/SMTP, JMAP and
EWS, allowing you to centralize multiple email accounts in a single modern and modular interface.

- **Versioning :** Cypht follows a semantic versioning approach [learn more](https://semver.org/).
- **2.x - current branch :** actively maintained and **recommended for all installations**, new and existing. It brings
  EWS, Sieve filters, SPA navigation and ongoing security updates. Requires PHP 8.0+.
- **1.4.x - End of Life :** no longer maintained; it receives no further releases or security fixes (last supported on
  PHP 7.2+). See the [lifecycle policy](https://github.com/cypht-org/cypht/wiki/Lifecycle).

:::warning
**Which version should I use?**
- **Always use the 2.x branch.** It is the only supported branch and the only one receiving security updates.
- **Still on 1.4.x?** Plan an upgrade to 2.x - 1.4.x is End of Life and unsupported.
- **Stay current :** always run the latest release within the 2.x branch.
:::

## Release Highlights {#recent_versions}

Highlights from recent Cypht 2.x releases. For the complete, always up-to-date changelog, see the
[releases on GitHub](https://github.com/cypht-org/cypht/releases).

### v2.9.0 - latest stable (May 2025) {#v2.9.0}

- **New features :** scheduled messages view, brute force login lockout, MTA-STS/TLS-RPT support, contacts page
  redesign, flagged message search across folders, auto BCC exclusion option.
- **Bug fixes :** EWS folder manipulation, SCRAM authentication, SPA navigation inline message clicks, advanced search
  mobile CSS, message read-on-open setting, mailbox cache clearing.
- **Improvements :** php-ews upgraded to >=0.11.2, Sieve filter unit tests, PHP 7.x deprecation removals.

### v2.5.0 - v2.5.1 (October-November 2024) {#v2.5.0}

- **v2.5.0 :** EWS support, browser history API navigation (no page reloads), sidebar redesign, scheduled send, snooze
  feature, BEC detection, concurrent message loading, drag-and-drop on touchscreens, settings search.
- **v2.5.1 :** fix on site.js generation comments.

### v2.4.0 - v2.4.2 (2023-2024) {#v2.4.0}

- **v2.4.0 :** bulk CSV account import, multibyte character fixes, IMAP quota handling, searchbar/form UI corrections,
  Docker config updates.
- **v2.4.2 :** HTML sanitizer for external background images, security fixes for request parameters.

### v2.3.0 (August 2022) {#v2.3.0}

- **New features :** email screening, reply-to-new-contact warning, Autocrypt auto-encryption.
- **Bug fixes :** email display security, database connection errors, profiles page, Selenium tests.
- **Improvements :** Sieve filter rules handling, Bootstrap icons in Docker, php-sieve-manager update.

### v2.2.0 (2024) {#v2.2.0}

- **New features :** GitHub repo querying, IMAP quota display, forward-as-attachment, zh-TW translations, labels/tags,
  server capabilities display, custom headers support.
- **Bug fixes :** contact autocomplete, special folders save, Sieve filter mailbox listing, IMAP TLS/STARTTLS, cookie
  SameSite settings, profile duplication.
- **Improvements :** Unicode/multibyte support, PHP 8.2+ compatibility, reply-all recipient management, 2.x branch
  stabilization.

### 1.4.x Branch - End of Life {#v1.4.x}

- The 1.4.x branch has reached **End of Life** : it is no longer maintained and will not receive new features or
  security fixes.
- If you are still running 1.4.x, upgrade to the 2.x branch. See the
  [lifecycle policy](https://github.com/cypht-org/cypht/wiki/Lifecycle) and the
  [1.4.x release history](https://github.com/cypht-org/cypht/releases) on GitHub.
