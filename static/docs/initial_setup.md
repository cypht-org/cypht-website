---
title: "Initial Setup"
section: "getting-started"
order: 1
---

# Initial Setup

Learn how to install and configure Cypht for the first time.

## Step 1: Installation

Download and install Cypht on your server or local machine.

```bash
# Download Cypht
git clone https://github.com/jasonmunro/cypht.git
cd cypht
```

## Step 2: Configuration

Configure your basic settings and preferences.

### Basic Configuration

1. **Server Requirements**

   - PHP 7.4 or higher
   - Web server (Apache/Nginx)
   - MySQL/MariaDB (optional)

2. **Installation Steps**

   ```bash
   # Set permissions
   chmod 755 cypht
   chmod 644 cypht/configs/*

   # Configure web server
   # Point document root to cypht directory
   ```

3. **Initial Configuration**
   - Access the web interface
   - Complete the setup wizard
   - Configure your first email account

## Step 3: First Login

After installation, you can access Cypht through your web browser and begin setting up your email accounts.

### Troubleshooting

If you encounter issues during setup:

- Check PHP version compatibility
- Verify file permissions
- Review web server configuration
- Check error logs for specific issues
