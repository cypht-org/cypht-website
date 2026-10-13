all: data/configOptions.json

# Regenerate search records for client-side content (modules, events, config generator)
.PHONY: search-data
search-data:
	@if command -v node >/dev/null 2>&1; then \
		node scripts/build-search-data.js; \
	else \
		echo "[search-data] WARNING: node not found, keeping the committed data/searchExtra.json."; \
		echo "[search-data] Install Node.js to refresh it after editing module.js, event.js or the config generator."; \
	fi

.PHONY: build
build: search-data
	php cecil.phar build

# Production build: render the site, then unify all CSS into ONE minified
# file (cascade preserved). Preview with: php -S localhost:8080 -t _site
.PHONY: prod
prod: search-data
	php cecil.phar build
	php scripts/bundle-css.php

# Demo/staging build: identical to `prod`, but the base URL comes from Cecil's
# native CECIL_BASEURL env override (not cecil.yml), so the social-share tags
# (og:image, og:url, canonical) resolve on the deploy domain.
#
# The domain is NOT hard-coded. Override it per deploy without editing this file:
#   CECIL_BASEURL=https://your-new-domain.example/ make demo
# The same variable works with any build command (e.g. in CI):
# CECIL_BASEURL=https://your-new-domain.example/ make prod
.PHONY: demo
demo: search-data
	CECIL_BASEURL="$${CECIL_BASEURL:-https://cypht.org/}" php cecil.phar build
	php scripts/bundle-css.php

# Preview the production build locally WITH working <video> (Range support,
# which `php -S` alone lacks). Run `make prod` first. → http://127.0.0.1:8080
.PHONY: preview
preview:
	php -S 127.0.0.1:8080 -t _site scripts/preview-router.php

.PHONY: serve
serve:
	php cecil.phar serve

data/configOptions.json:
	php data/fetch.php
