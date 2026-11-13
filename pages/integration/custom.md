---
id: 3
title: Integrate Cypht into your app
description: "A blueprint for embedding Cypht in another application, covering packaging, authentication, sessions, storage, routing, rendering and testing."
layout: section/integration
format: md
nav_prev:
  label: YunoHost
  url: /integration/yunohost
---

## Integration blueprint {#integration_blueprint}

Cypht can run as a standalone webmail application or be integrated into a host application. Integration is more than
displaying the interface: the host and Cypht need a clear boundary for identity, sessions, user settings, requests,
assets and permissions.

This guide walks through the decisions and implementation stages for a PHP host. The exact extension points depend on
the Cypht version you package, so pin that version and verify its configuration before implementing an adapter.

## Plan the integration {#plan_the_integration}

Before writing code, answer these questions:

1. Will Cypht run at its own URL, in an iframe, or be dispatched by the host and rendered inside a host page?
2. Is the user authenticated independently by Cypht, or does the host own login and logout?
3. Where will per-user Cypht settings, sessions and cache entries be stored?
4. Which host route will receive Cypht's forms and asynchronous requests?
5. Which application enforces access, and does that protection apply to every request, including AJAX?

Write down the chosen user identifier, settings owner and request route. These become the integration's boundaries and
should stay consistent across page loads, background requests, logout and account switching.

## 1. Choose how Cypht runs {#choose_how_cypht_runs}

There are two common deployment models:

- **Separate application**: run Cypht at its own URL. Users access and sign in to Cypht there.
- **Embedded application**: integrate Cypht into a host page or plugin. The host must handle the requests Cypht needs
  to work.

An iframe is one way to display the separate Cypht application inside a host page:

```html
<iframe
  src="https://mail.example.test/"
  title="Webmail"
  loading="lazy"
  referrerpolicy="same-origin"
  allow="clipboard-read; clipboard-write"
></iframe>
```

Configure Cypht's web server to allow the host page to display it in an iframe.
