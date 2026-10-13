---
id: 1
title: Cypht on Cloudron
description: "Install Cypht on Cloudron from the community app store: add the repository URL, install the app and sign in with your existing Cloudron mailbox credentials."
layout: section/integration
format: md
nav_prev:
  label: Tiki
  url: /integration/tiki
nav_next:
  label: YunoHost
  url: /integration/yunohost
---

## Cypht on Cloudron: overview {#overview}

[Cloudron](https://cloudron.io) turns a server into an app store : it handles TLS certificates, backups, updates, user
accounts and email for the apps it runs. Since Cloudron already provides mailboxes, adding Cypht gives those mailboxes
a webmail that can also aggregate external accounts and feeds.

Cypht is not in the official Cloudron catalogue, instead is published as a
**[community app](https://docs.cloudron.io/apps/#community-app)** by [Felix Bartels](https://9wd.eu), whose packaging
sources are at [git.9wd.eu/apps/cloudron-cypht](https://git.9wd.eu/apps/cloudron-cypht). You add the community app
once, then install and update Cypht like any other Cloudron app.

:::info
**Community maintained.** Packaging issues go to the package maintainer; problems in Cypht itself belong on the
[Cypht issue tracker](https://github.com/cypht-org/cypht/issues).
:::

## Install it {#install_it}

1. Open your Cloudron dashboard and go to the **App Store**.
2. Select **Community apps** and add this app URL :

   ```text
   https://git.9wd.eu/apps/cloudron-cypht/raw/branch/release/CloudronVersions.json
   ```

3. You will now see a detailed listing of the app where you can select "Install Cypht" to pick the domain.
4. Open the app from the dashboard once the installation finishes.

The app listing, with its changelog, can be found in the
[Cloudron Community Appstore](https://ca.cloudron.io/app/cypht). Plan for around 512 MB of memory for the app.

## Sign in {#sign_in}

The package authenticates against Cloudron's email addon, so there is no IMAP host to type in : log in with your
existing Cloudron email address and its password.

Once inside, you can add any number of additional IMAP, SMTP or RSS/Atom sources from Cypht itself, exactly as in a
standalone installation.

## Good to know {#good_to_know}

Cypht prioritises security over out-of-the-box convenience : remote images are blocked by default, for instance. That
is intentional, and the behaviour can be relaxed in the settings.

The packaging history and troubleshooting reports live in the
[Cloudron forum thread](https://forum.cloudron.io/topic/1070/cypht-lightweight-open-source-webmail-application-written-in-php-and-javascript).
