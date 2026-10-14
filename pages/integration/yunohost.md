---
id: 2
title: Cypht on YunoHost
description: "Cypht is in the YunoHost app catalogue. Install it from the admin dashboard or from the command line, and use it as the webmail of your YunoHost mail server."
layout: section/integration
format: md
nav_prev:
  label: Cloudron
  url: /integration/cloudron
---

## Cypht on YunoHost: overview {#overview}

[YunoHost](https://yunohost.org/en/whatsyunohost) is a Debian-based distribution that simplifies server
administration to democratise self-hosting, while staying reliable, secure, ethical and lightweight. It can be
installed on many kinds of hardware, from an old laptop to a VPS.

A YunoHost server includes its own mail server, and it lets you choose the webmail that goes on top of it. Cypht is
one of those choices, and the one to pick if you want a single interface over several mailboxes rather than one
account at a time.

:::info
**Packaged by the community.** The package is maintained in the [YunoHost-Apps](https://github.com/YunoHost-Apps/cypht_ynh)
organisation, not by the Cypht team, so its version can trail the latest Cypht release.
:::

## Install from the dashboard {#from_dashboard}

1. No server yet? Start with the [YunoHost install guide](https://yunohost.org/install).
2. From the admin dashboard, open **Applications**.
3. Click **Install** and search for **cypht**.
4. Select the Cypht app.
5. Fill the form, or keep the defaults, and make sure the chosen URL is not already used by another app.
6. Wait for the installation to finish, then use **open the app**.
7. Log in with the credentials you provided during the installation and start declaring your email accounts.

## Install from the command line {#from_cli}

The same installation can be done over SSH :

```bash
sudo yunohost app install cypht
```

The catalogue page lists the packaged version and its maintenance status :
[apps.yunohost.org/app/cypht](https://apps.yunohost.org/app/cypht).

## Good to know {#good_to_know}

- Cypht does not replace your YunoHost mailboxes : it reads them over IMAP and can add external accounts next to them.
- Since the package is community maintained, report installation problems to the package repository and Cypht bugs to
  the [Cypht issue tracker](https://github.com/cypht-org/cypht/issues).
- A step-by-step version of this procedure is also available in the [installation guide](/install).
