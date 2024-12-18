# cypht-website
This is the source of the [cypht.org](https://cypht.org/) website. It's a HTML site statically generated with [cecil](https://cecil.app/), with no non-vendor
JavaScript. Cypht (pronounced "sift") is like a news reader, but for E-mail. Cypht does not replace your existing accounts - it combines them into one. And it's also a news reader.

As of 2024-02-14, www.cypht.org updates from https://github.com/cypht-org/cypht-website/ on a daily cron job.

## How-to
### Build locally
This requires git & PHP 8 to be installed.
```bash
git clone https://github.com/cypht-org/cypht-website.git
cd cypht-website

# Build to _site/
php cecil.phar build  # alt: make build

# Serve/develop on localhost:8000
php cecil.phar serve  # alt: make serve
```

Nix users can use `nix-shell -p php81 gnumake git` to get all requirements to build.

### Update config generator options
```bash
# In project root
rm data/configOptions.json
make
```
