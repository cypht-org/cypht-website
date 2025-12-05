---
title: "Sieve Filters"
section: "advanced-features"
order: 1
---

# Sieve Filters

Automatically organize your emails with server-side filtering.

## Overview

Sieve Filters provide powerful server-side email filtering capabilities to automatically organize and process incoming emails.

![Sieve Filters](/img/sieveFilters.png)

## What are Sieve Filters?

Sieve is a programming language for email filtering that runs on the email server. It allows you to create rules that automatically process emails as they arrive.

### Benefits

- **Server-side processing**: Filters run on the server before emails reach your client
- **Always active**: Works even when your email client is offline
- **Efficient**: Reduces bandwidth and storage on your device
- **Powerful**: Complex filtering logic and conditions

## Creating Sieve Filters

### Basic Filter Structure

```sieve
require ["fileinto", "reject"];

if header :contains "subject" "newsletter" {
    fileinto "Newsletters";
}
```

### Common Filter Types

#### Subject-based Filtering

```sieve
if header :contains "subject" "urgent" {
    fileinto "Urgent";
}
```

#### Sender-based Filtering

```sieve
if address :is "from" "noreply@example.com" {
    fileinto "Automated";
}
```

#### Content-based Filtering

```sieve
if body :contains "unsubscribe" {
    fileinto "Newsletters";
}
```

## Advanced Filtering

### Multiple Conditions

```sieve
if allof (
    header :contains "subject" "invoice",
    header :contains "from" "billing@company.com"
) {
    fileinto "Invoices";
}
```

### Complex Logic

```sieve
if anyof (
    header :contains "subject" "urgent",
    header :contains "subject" "asap"
) {
    fileinto "Priority";
    addflag "\\Flagged";
}
```

### Rejecting Emails

```sieve
if header :contains "from" "spam@example.com" {
    reject "Spam detected";
}
```

## Filter Management

### Creating Filters in Cypht

1. Access Settings → Filters
2. Click "Add New Filter"
3. Define filter conditions
4. Set filter actions
5. Test and activate

### Filter Testing

- Test with sample emails
- Preview filter results
- Validate syntax
- Check server compatibility

### Filter Organization

- Group related filters
- Use descriptive names
- Document complex filters
- Regular filter review

## Common Use Cases

### Email Organization

- Sort by sender
- Categorize by subject
- Organize by content type
- Priority-based sorting

### Spam Protection

- Block known spammers
- Filter suspicious content
- Reject unwanted domains
- Quarantine suspicious emails

### Workflow Automation

- Auto-respond to emails
- Forward to team members
- Archive old emails
- Set up notifications

## Best Practices

### Filter Design

- Start with simple filters
- Test thoroughly
- Use descriptive names
- Document complex logic
- Regular maintenance

### Performance Considerations

- Order filters by frequency
- Use efficient conditions
- Avoid overly complex logic
- Monitor filter performance
- Regular optimization

### Troubleshooting

- Check filter syntax
- Verify server support
- Test with sample emails
- Review server logs
- Contact server administrator
