---
weight: 10
id: 2
title: Getting Started
description: "Get started with Cypht. Learn about the architecture, system requirements, installation steps, and initial configuration to set up your self-hosted email client."
layout: section/documentation
format: md
toc_labels:
  architecture: Architecture
  prerequisites: Prerequisites
  setup: Configuration
  modules: Module Ecosystem
nav_prev:
  label: Introduction
  url: /documentation/overview/introduction
nav_next:
  label: Interfaces
  url: /documentation/setup/interfaces
---

## The Architecture of Digital Freedom {#architecture}

Welcome to the **Cypht** ecosystem. If you're reading this, you've chosen to reclaim control over your data. Unlike
traditional email clients (Outlook, Thunderbird) or centralized webmails (Gmail), Cypht was designed as a
**server-side modular aggregator**.

This means Cypht doesn't just "read" your emails; it synthesizes, organizes, and presents them in a unified interface
without permanently storing your messages on its own server (unless configured otherwise). It's an ultra-lightweight
gateway between you and your multiple digital identities.

## Step Zero : Environment Setup {#prerequisites}

Before exploring the interface, Cypht must be deployed on a web server (Apache/Nginx) with PHP. This process is
technical and requires specific prerequisites.

:::warning
**Haven't installed Cypht yet?** Don't attempt to configure your accounts now. Follow our step-by-step installation
protocol first : [Access Technical Installation Guide](/install)
:::

## Detailed Configuration : Your First Steps {#setup}

Follow these steps to get your Cypht instance configured and ready to use.

### 1. First Connection {#first_connection}

Once installation is complete, you'll land on the profile creation page. Here, privacy is paramount : the password you
choose encrypts your settings in the local database. If you lose this password, no one can recover your linked account
access, we don't offer "email resets" for security reasons.

### 2. Adding Data Sources (Accounts) {#adding_accounts}

To bring your interface to life, go to the **"Settings"** menu then **"Accounts"**. Cypht excels in versatility :

- **SMPT/IMAP/JMAP (Servers)**
- **Feed RSS**
- **EWS Server**
- **LDAP/Server**

For some service providers (Gmail, Outlook, Office365), specific information is required in your configuration file
(.env for Cypht 2.x.x or hm3.ini for Cypht 1.4.x). How to get them page missing.

`SERVICE_CLIENT_ID`
: Your application client ID

`SERVICE_CLIENT_SECRET`
: Your application client secret

`SERVICE_CLIENT_URI`
: Your application redirect URI

## The Module Ecosystem {#modules}

Cypht is "Lean" by default minimalist. To extend it, explore the [modules](/modules) tab. You can activate various
modules to enhance functionality in your `.env` file.

- **Notes Module :** Keep quick memos and reminders
- **Advanced Search Module :** Complex queries on email headers
- **Themes Module :** Adapt the interface (Dark Mode, compact themes, etc.)
