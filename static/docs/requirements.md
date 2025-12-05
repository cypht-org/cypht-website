---
title: "System Requirements"
css: /assets/doc/requirements.css
---

# System Requirements

Before installing Cypht, ensure your system meets the following requirements for optimal performance and security.

<div class="server-requirements">
## Server Requirements
</div>

### Minimum Requirements

- **PHP**: Version 7.4 or higher
- **Web Server**: Apache 2.4+ or Nginx 1.18+
- **Memory**: 512 MB RAM minimum
- **Storage**: 100 MB free disk space
- **Network**: Stable internet connection

### Recommended Requirements

- **PHP**: Version 8.0 or higher
- **Web Server**: Apache 2.4+ or Nginx 1.20+
- **Memory**: 1 GB RAM or more
- **Storage**: 1 GB free disk space
- **Network**: High-speed internet connection

<div class="php-extensions">
## PHP Extensions

### Required Extensions

</div>

- **curl**: For HTTP requests and API calls
- **json**: For JSON data processing
- **mbstring**: For multi-byte string handling
- **openssl**: For SSL/TLS encryption
- **session**: For user session management
- **xml**: For XML processing

### Recommended Extensions

- **gd**: For image processing and thumbnails
- **imap**: For direct IMAP connections
- **ldap**: For LDAP authentication
- **zip**: For archive handling
- **intl**: For internationalization support

<div class="database-section">
## Database Requirements

### Optional Database Support

</div>

- **MySQL**: Version 5.7+ or MariaDB 10.3+
- **PostgreSQL**: Version 10+ (experimental)
- **SQLite**: Version 3.8+ (lightweight option)

### Database Features

- **User Profiles**: Store user preferences and settings
- **Session Storage**: Persistent session management
- **Cache System**: Improved performance with caching
- **Logging**: System and error logging

<div class="email-compatibility">
## Email Server Compatibility

### IMAP/SMTP Servers

</div>

- **Gmail**: Full support with OAuth2
- **Outlook/Hotmail**: IMAP/SMTP and EWS support
- **Yahoo Mail**: IMAP/SMTP support
- **Apple iCloud**: IMAP/SMTP support
- **Custom Servers**: Any IMAP/SMTP compatible server

### Exchange Support

- **Exchange Server**: 2010+ with EWS
- **Office 365**: Full EWS integration
- **Exchange Online**: Complete support
- **Hybrid Deployments**: On-premises and cloud

### Protocol Support

- **IMAP**: Version 4rev1 with extensions
- **SMTP**: RFC 5321 compliant
- **EWS**: Exchange Web Services
- **CalDAV/CardDAV**: Calendar and contacts

<div class="security-requirements">
## Security Requirements

### SSL/TLS Support

</div>

- **TLS 1.2+**: Minimum encryption standard
- **TLS 1.3**: Recommended for new installations
- **Certificate Validation**: Proper SSL certificate handling
- **Perfect Forward Secrecy**: Enhanced security

### Authentication Methods

- **Password Authentication**: Traditional username/password
- **OAuth2**: Google, Microsoft, and other providers
- **Two-Factor Authentication**: TOTP and SMS support
- **LDAP**: Enterprise directory integration

<div class="browser-compatibility">
## Browser Compatibility

### Supported Browsers

</div>

- **Chrome**: Version 80+ (recommended)
- **Firefox**: Version 75+
- **Safari**: Version 13+
- **Edge**: Version 80+
- **Opera**: Version 67+

### Required Features

- **JavaScript**: ES6+ support required
- **CSS3**: Modern CSS features
- **HTML5**: Local storage and APIs
- **WebSockets**: Real-time updates (optional)

<div class="performance-considerations">
## Performance Considerations

### Server Performance

</div>

- **CPU**: Multi-core processor recommended
- **Memory**: More RAM improves concurrent user support
- **Storage**: SSD recommended for better I/O performance
- **Network**: Low latency connection to email servers

### Optimization Tips

- **PHP OPcache**: Enable for better performance
- **Web Server Caching**: Configure appropriate caching
- **Database Indexing**: Optimize database queries
- **CDN**: Use CDN for static assets

<div class="installation-requirements">
## Installation Requirements

### File Permissions

</div>

- **Web Root**: Readable by web server
- **Config Directory**: Writable by web server
- **Cache Directory**: Writable by web server
- **Log Directory**: Writable by web server

### Directory Structure

```
cypht/
├── configs/          # Configuration files
├── cache/            # Cache directory
├── logs/             # Log files
├── modules/          # Custom modules
└── static/           # Static assets
```

<div class="network-requirements">
## Network Requirements

### Port Requirements

</div>

- **HTTP**: Port 80 (standard)
- **HTTPS**: Port 443 (recommended)
- **IMAP**: Port 143 (standard) or 993 (SSL)
- **SMTP**: Port 25, 587, or 465 (SSL)

### Firewall Configuration

- **Outbound HTTPS**: For OAuth and API calls
- **Outbound IMAP/SMTP**: For email server connections
- **Inbound HTTP/HTTPS**: For web access

<div class="monitoring-section">
## Monitoring & Maintenance

### System Monitoring

</div>

- **Disk Space**: Monitor available storage
- **Memory Usage**: Track RAM consumption
- **CPU Usage**: Monitor processor load
- **Network I/O**: Track bandwidth usage

### Log Files

- **Error Logs**: PHP and web server errors
- **Access Logs**: Web server access logs
- **Application Logs**: Cypht-specific logs
- **Email Logs**: Email server connection logs

<div class="troubleshooting-section">
## Troubleshooting

### Common Issues

</div>

- **PHP Version**: Ensure correct PHP version
- **Extensions**: Verify all required extensions
- **Permissions**: Check file and directory permissions
- **Network**: Test connectivity to email servers

### Diagnostic Tools

- **System Check**: Built-in system requirements checker
- **Connection Test**: Email server connectivity test
- **Performance Monitor**: Built-in performance monitoring
- **Error Reporter**: Automatic error reporting

<div class="upgrade-requirements">
## Upgrade Requirements

### Before Upgrading

</div>

- **Backup**: Create full system backup
- **Dependencies**: Update PHP and extensions
- **Database**: Backup database if used
- **Configuration**: Document current settings

### Post-Upgrade

- **Testing**: Verify all functionality
- **Performance**: Monitor system performance
- **Security**: Review security settings
- **Documentation**: Update configuration docs

Meeting these requirements ensures a smooth installation and optimal performance of your Cypht email client.
