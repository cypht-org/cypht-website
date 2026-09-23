---
weight: 40
id: 18
title: Sieve Filters
description: "Set up Sieve email filters in Cypht to automatically sort, move, forward, and flag messages server-side. Create rules that work even when you're offline."
layout: section/documentation
format: md
toc_labels:
  introduction: Introduction
  enable_module: Enable Module
  create_from_settings: From Sieve Filters Page
  create_from_selected: From Selected Messages
  create_from_message: From Opened Message
  troubleshooting: Troubleshooting
  related_work: Related
nav_prev:
  label: Search & Filters
  url: /documentation/features/search-filters
nav_next:
  label: Screen Emails
  url: /documentation/features/screen-emails
---

## What Are Sieve Filters? {#introduction}

Sieve is a server-side mail filtering language supported by many IMAP servers. In Cypht, Sieve filters let you define
rules that **run automatically on every new message as it arrives**, as long as the filter is active.

Because the rules execute on the mail server itself, they work even when you are not logged into Cypht. Messages are
sorted, flagged, forwarded, or discarded before they ever appear in your inbox view.

:::grid
- **Automatic**
  Active filters process every incoming message without manual intervention.
- **Server-side**
  Rules run on the mail server, so they work even when Cypht is closed or your device is off.
- **Flexible**
  Move, copy, flag, discard, redirect, or run custom Sieve scripts on matching messages.
:::

:::warning
**Requirement.** Your mail server must support Sieve or ManageSieve. IMAP support alone is not enough - some providers
do not expose Sieve management even though they support reading mail over IMAP.
:::

## Step 1 : Enable the Sieve Filters Module {#enable_module}

Before you can create any filter, the **sievefilters** module must be activated in your Cypht configuration. If the
Sieve Filters section is already visible under Settings, you can skip this step.

### Cypht 2.x (.env file) {#cypht_2}

Add `sievefilters` to the `CYPHT_MODULES` variable :

```bash
CYPHT_MODULES="core,imap,smtp,sievefilters"
```

### Cypht 1.4.x (hm3.ini file) {#cypht_1}

Add a new module entry :

```ini
modules[]=sievefilters
```

After saving the configuration, reload or redeploy your Cypht instance. The **Filters** menu will then appear under
the Settings tab.

![Settings sidebar showing the Filters menu item](/img/docs/sieve_filters_0.webp)

## Step 2 : Create from the Sieve Filters Page {#create_from_settings}

The most direct way to manage filters is through the dedicated Sieve Filters page in Settings.

### Add a Filter {#add_filter}

1. Open **Settings** in the sidebar.
2. Click **Filters**.

![Filters page showing the selected email account](/img/docs/sieve_filters_1.webp)

3. Select the email account you want to manage.
4. Click **Add Filter**.

![Filter list with Add Filter and Add Script buttons](/img/docs/sieve_filters_2.webp)

5. Enter a filter name and set its priority.

![Empty Add Filter modal with name, priority, conditions and actions fields](/img/docs/sieve_filters_3.webp)

6. Add one or more conditions (sender, subject, recipient, body, etc.).
7. Set the test logic : use **ALLOF** if every condition must match, or **ANYOF** if any single condition is enough.
8. Choose the action : move to folder, copy, flag, discard, redirect, etc.

![Filled Add Filter form with conditions and redirect action](/img/docs/sieve_filters_4.webp)

9. Save the filter.

:::grid
- **Priority order**
  Filters run from the lowest priority value to the highest. Place precise, high-confidence rules at lower numbers and
  broad catch-all rules at higher numbers to avoid conflicts.
:::

### Add a Custom Script {#add_script}

Cypht now includes a **Quick Actions** dropdown in the message list controls so you can create, test, and reuse
advanced filters without leaving the current view.

:::grid
- **Quick Actions dropdown**
  Clicking **Quick Actions** opens a dropdown listing all your saved filters plus a **Create from Selected** entry.
- **Reusable actions**
  All saved filters appear in the Quick Actions dropdown so you can quickly edit them from the message list and DRY
  RUN Test them.
- **Quick editing**
  Selecting an existing filter opens the edit modal directly, which makes it easy to refine the rule before using it
  again.
:::

All saved filters and scripts appear in the list on the Sieve Filters page. Click any entry to open the edit modal
where you can update conditions, change actions, or delete the filter entirely.

## Step 3 : Create from Selected Messages {#create_from_selected}

The **Quick Actions** dropdown in the message list toolbar lets you build filters directly from messages you are
looking at, without navigating to Settings.

1. Select one or more messages in the current mailbox view.

![Inbox with selected messages and toolbar showing Quick Actions](/img/docs/sieve_filters_5.webp)

2. Click the **Quick Actions** button in the toolbar.
3. Click **Create from Selected**.

![Quick Actions dropdown showing Create from Selected option](/img/docs/sieve_filters_6.webp)

4. Review the auto-populated conditions (From addresses and Subject keywords are prefilled from the selected
   messages).

![Setup Filter from selected messages modal with auto-populated From emails and Subject keywords](/img/docs/sieve_filters_7.webp)

5. Adjust the matching options :
   - **From :** Matches / Does Not Match
   - **Subject :** Contains / Does Not Contain / Ignore Subject
6. Choose the action to apply.
7. Click **Dry Run** to test the filter against messages already loaded in the list : matched and unmatched messages
   are shown in a results panel so you can verify the rule before committing.
8. Save the filter.

:::grid
- **Auto-populated conditions**
  Cypht prefills From addresses and Subject keywords from the selected messages so you start from real data instead of
  an empty form.
:::

### Dry Run {#dry_run}

The **Dry Run** button tests the current filter conditions against messages already loaded in the message list and
shows which ones match and which do not, without moving or changing anything. It does not fetch additional messages
from the server.

:::info
**Availability.** Dry Run is only available when creating or editing filters from the message list (e.g. via **Quick
Actions → Create from Selected**). It is not available on the Sieve Filters settings page or when creating a filter
from an opened message, because there is no message list to test against.
:::

1. Create a filter from selected messages or open an existing filter from the Quick Actions dropdown.
2. Adjust the conditions, actions, and match logic.
3. Click **Dry Run** in the modal.
4. Review the matched and unmatched messages in the results panel.
5. Close the results panel, refine the filter, and run it again if needed.
6. Save only when the previewed behavior is correct.

:::grid
- **Preview results**
  Matched and unmatched messages are listed in a dismissible results panel. Refine conditions and run again until the
  preview is correct.
- **Respects filter logic**
  Dry Run uses the same **ALLOF** / **ANYOF** logic as the real filter, so the preview matches real-world behavior.
:::

### Reuse and Edit Quick Actions {#reuse_actions}

Filters created through this workflow are automatically marked as quick actions and appear in the **Quick Actions**
dropdown for future use. Click any existing action in the dropdown to reopen its edit modal, adjust conditions, dry
run it against the current messages, or delete it.

## Step 4 : Create from an Opened Message {#create_from_message}

When you are reading a single email and want to filter similar messages in the future, use the **Filter similar
messages** button.

1. Open the message you want to base the filter on.

![Opened message showing Filter similar messages button in the action bar](/img/docs/sieve_filters_8.webp)

2. Click **Filter similar messages** in the message actions area.
3. Select the fields to match (From, To, Subject, Reply-To) and click **Create filter**.

![Filter similar messages dropdown with From, To, Subject and Reply-To checkboxes](/img/docs/sieve_filters_9.webp)

4. Review the prefilled conditions : Cypht auto-populates the filter name, sender, recipient, and subject from the
   opened message.

![Add Filter for message like this modal with auto-populated conditions and actions](/img/docs/sieve_filters_10.webp)

5. Adjust the conditions and choose the action (move, flag, discard, etc.).
6. Save the filter.

:::grid
- **One-click starting point**
  This is the fastest way to react to a single message. You do not need to go to Settings or select multiple messages
  first, just open the email and create the rule from it.
:::

:::info
**Where does the filter go?** The filter is saved to the same Sieve Filters list on the Settings page. You can edit or
delete it later from there, or reuse it as a custom action.
:::

## Troubleshooting {#troubleshooting}

:::warning
**Filter not appearing?** Verify that the **sievefilters** module is enabled and that your instance has been reloaded
after the configuration change.
:::

:::warning
**Filter saved but not running?** Check whether your provider supports ManageSieve and whether the selected account is
the same mailbox that receives the tested messages.
:::

:::tip
**Best practice.** When debugging, disable or simplify overlapping rules. Two filters that both match the same message
can produce inconsistent behavior when the real issue is rule order.
:::

## Related {#related_work}

- **Issue :** [Configurable custom actions (buttons) #398](https://github.com/cypht-org/cypht/issues/398)
- **Sieve language resources :** [sieve.info](http://sieve.info/),
  [Sieve tutorial](https://p5r.uk/blog/2011/sieve-tutorial.html),
  [Fastmail Sieve docs](https://www.fastmail.com/help/technical/sieve.html)
