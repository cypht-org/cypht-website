---
weight: 50
id: 8
title: Screen Emails
description: "Learn how to screen emails in Cypht. Mark messages as favorites, automatically group them into folders, and quickly access important emails for better inbox organization."
layout: section/documentation
format: md
toc_labels:
  dislike: Dislike an Email
  like: Like an Email
  proceeding: How to Proceed
  result: Behavior
nav_prev:
  label: Sieve Filters
  url: /documentation/features/sieve-filters
nav_next:
  label: Tags & Folders
  url: /documentation/features/tags
---

## Overview {#overview}

This feature allows you to filter emails in your inbox in a semi-automatic way. It enables you to perform two main
actions :

## Dislike an Email {#dislike}

This action moves the selected emails to a dedicated folder named "Screen Emails" (default label). As a side effect,
the senders of those emails are automatically added to the Block List, which is managed by
[Filters](/documentation/features/search-filters).

:::info
**Note.** This action affects all emails from the selected sender and will result in all existing emails from that
sender being moved to the screening folder.
:::

## Like an Email {#like}

Liking an email places the sender on the White List, which removes them from the Block List if they were previously
listed there.

## How to Proceed {#proceeding}

To screen emails :

1. Go to the Inbox folder of any mailbox.
2. Click the "Screen" button.

![Screen button location in the inbox toolbar](/img/screen_button.webp)

3. Select one or more emails, then choose an action (Like or Dislike).

![Selecting emails to screen with Like or Dislike action](/img/selecting_emails_to_screen.webp)

## Behavior {#result}

- **Liked emails** remain in the inbox, and their senders are white-listed.
- **Disliked emails** are moved to the "Screen Emails" folder, where you can decide what to do next (e.g., delete,
  mark as spam, archive, flag, etc.).

:::info
**Note.** You do not need to manually create the "Screen Emails" folder. It will be automatically created the first
time you dislike emails in a mailbox.
:::
