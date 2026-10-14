---
id: 0
title: Cypht in Tiki
description: "Cypht has been the webmail of Tiki Wiki CMS Groupware since Tiki 20. Use it as the Webmail screen or embed it in a wiki page with PluginCypht."
layout: section/integration
format: md
nav_next:
  label: Cloudron
  url: /integration/cloudron
---

## Cypht in Tiki Wiki: overview {#overview}

[Tiki Wiki CMS Groupware](https://tiki.org) is an all-in-one web application : wiki, CMS, trackers (its database
engine), calendars, forums and file galleries in a single codebase. Starting with Tiki 20, Cypht replaced the webmail
Tiki had carried for more than ten years, and it has been the webmail of Tiki ever since.

Because Cypht runs inside Tiki, mail stops being a silo : a message can be moved in and out of trackers, and it lives
next to the documents, contacts and calendars of the same site. Cypht keeps doing what it does best, aggregating mail
accounts, while Tiki adds the groupware layer around it.

:::info
**No separate installation.** Cypht is a Composer dependency of Tiki, so it comes with the Tiki installation you
already run.
:::

![Cypht running as Tiki Webmail, showing the email folders of the home page](/img/integration/tiki-webmail.webp "Tiki Webmail: the screen served by a Tiki site, with the mail folders of every configured account in the left column.")

## How to use it {#how_to_use_it}

Tiki exposes Cypht in two different ways, which can be combined on the same site :

- **Webmail** : the standard webmail screen, where users read and send their mail.
  See [doc.tiki.org/Webmail](https://doc.tiki.org/Webmail).
- **PluginCypht** : embeds the webmail inside a wiki page, next to other content.
  See [doc.tiki.org/PluginCypht](https://doc.tiki.org/PluginCypht).

The feature has to be enabled in the Tiki administration first, and each user then declares their own accounts. The
procedure depends on the Tiki version, so follow the Tiki documentation.

## Learn more {#learn_more}

Everything about the integration, from the features Tiki adds on top of the webmail to the version by version history,
is documented by the Tiki project itself. Start at [doc.tiki.org/Cypht](https://doc.tiki.org/Cypht).

Developers working on the integration will find the notes and the roadmap on
[dev.tiki.org/Cypht-integration](https://dev.tiki.org/Cypht-integration).
