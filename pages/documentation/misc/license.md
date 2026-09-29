---
weight: 20
id: 17
title: License
description: "Cypht licensing information. Understand the LGPL V2.1 license terms, permissions, and obligations for using, modifying, and distributing Cypht in your projects."
layout: section/documentation
format: md
toc_labels:
  overview: License Overview
  lgpl_explanation: Understanding LGPL
  third_party_libraries: Third-Party Libraries
  license_compliance: Compliance
  additional_resources: Resources
nav_prev:
  label: Get Help
  url: /documentation/misc/help
---

## Cypht License Overview {#overview}

Cypht source code is distributed under the LGPL V2.1 license. Cypht will always be both free and Open Source. Learn
about our licensing terms and the third-party libraries we use.

:::grid
- **LGPL V2.1 License**
  Cypht is licensed under the GNU Lesser General Public License v2.1
:::

:::actions
[View Full License](https://github.com/cypht-org/cypht/blob/master/LICENSE)
[Detailed License Page](/license)
:::

## Understanding LGPL V2.1 {#lgpl_explanation}

The GNU Lesser General Public License is a free software license that allows you to use, modify, and distribute Cypht
under certain conditions.

### Key Permissions {#key_permissions}

**What You Can Do**

- Use Cypht for commercial purposes
- Modify the source code
- Distribute modified versions
- Use it in proprietary applications
- Charge for distribution and support

**Requirements**

- Provide access to source code
- Include license notices
- State changes made to the code
- Allow users to reverse engineer
- Keep modifications under LGPL

:::tip
**Why LGPL?** We chose LGPL v2.1 because it balances freedom for users with flexibility for developers. You can use
Cypht in commercial projects while ensuring the core remains Open Source.
:::

## Third-Party Libraries {#third_party_libraries}

Cypht uses a handful of third party libraries both indirectly and directly. Compatible versions of direct dependencies
are always included in the Cypht source or installed via PHP composer.

### Directly Used Libraries {#directly_used}

These libraries are directly integrated into Cypht and are essential for core functionality :

:::grid
- **HTMLPurifier**
  A comprehensive HTML filter written in PHP that removes malicious code while preserving valid markup. Essential for
  email security.
  [Visit Website](http://htmlpurifier.org/)
- **Cash**
  A compact jQuery compatible JavaScript library that provides core DOM manipulation and event handling features.
  [Documentation](http://kenwheeler.github.io/cash/)
- **Html2Text**
  HTML to text converter in PHP that extracts textual content from HTML emails for better compatibility and
  readability.
  [GitHub](https://github.com/mtibben/html2text)
- **KindEditor**
  Lightweight JavaScript WYSIWYG editor for composing HTML messages with built-in rich text editing features.
  [View Demo](http://kindeditor.net/demo.php)
- **Forge**
  JavaScript cryptography library providing secure encryption, digital signatures, and key generation capabilities.
  [GitHub](https://github.com/digitalbazaar/forge)
- **Random Compat**
  Cryptographically secure random number generator library for PHP, ensuring the safety of sensitive operations.
  [GitHub](https://github.com/paragonie/random_compat)
- **Base32**
  Base32 encoding library used by the two-factor authentication (2FA) module to generate secure QR codes.
  [GitHub](https://github.com/ChristianRiesen/base32)
- **Barcode**
  PNG QR code generator for PHP, used by the 2FA module to create secure visual authentication codes.
  [GitHub](https://github.com/codeitnowin/barcode-generator)
- **Libsodium**
  Optional NIST-compliant cryptography library offering modern, secure encryption algorithms for sensitive operations.
  [Documentation](https://download.libsodium.org/doc/)
- **Push**
  JavaScript library for easy desktop notifications, used by the desktop notification module to alert users about new
  emails.
  [Website](https://pushjs.org/)
- **Editor**
  JavaScript Markdown editor for composing messages with a modern UI and advanced editing features.
  [Website](https://lepture.com/)
- **Parsedown**
  PHP library to convert Markdown to HTML, enabling message and documentation formatting with simple, readable syntax.
  [Website](http://parsedown.org/)
:::

### Indirectly Used Libraries {#indirectly_used}

These libraries are used during development and testing but are not required for running Cypht :

:::grid-sm
- **PHPUnit**
  Program that runs unit tests and builds coverage reports for PHP
  [Website](https://phpunit.de/)
- **ApiGen**
  PHP app to generate documentation from source code
  [Website](http://www.apigen.org/)
- **Selenium**
  Automated browser testing framework
  [Website](https://www.selenium.dev/)
:::

## License Compliance {#license_compliance}

Understanding your obligations when using and distributing Cypht.

### Distribution Requirements {#distribution_requirements}

When distributing Cypht or modified versions, you must :

**Compliance Checklist**

- Include a copy of the LGPL v2.1 license
- Provide copyright notices for all components
- Make source code available to recipients
- Allow users to modify and redistribute
- Keep modifications under LGPL license
- Document changes made to the original code

### Commercial Use {#commercial_use}

Yes, you can use Cypht in commercial applications! The LGPL allows commercial use as long as you comply with the
license terms. You can :

**Allowed**

- Sell commercial products using Cypht
- Use in proprietary software
- Charge for support and services
- Create custom modules

**Requirements**

- Provide source for Cypht components
- Allow users to replace Cypht parts
- Include license notices
- Document modifications

## Additional Resources {#additional_resources}

More information about Open Source licensing and Cypht.

**License Resources**

- [Official LGPL v2.1 Text](https://www.gnu.org/licenses/lgpl-2.1.html)
- [Why Use LGPL?](https://www.gnu.org/licenses/why-lgpl.html)
- [GPL/LGPL FAQ](https://www.gnu.org/licenses/gpl-faq.html)

**Related Links**

- [Detailed License Page](/license)
- [GitHub Repository](https://github.com/cypht-org/cypht)
- [Contributing Guide](/contribute)
