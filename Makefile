all: data/configOptions.json

.PHONY: build
build:
	php cecil.phar build

# Production build: render the site, then unify all CSS into ONE minified
# file (cascade preserved). Preview with: php -S localhost:8080 -t _site
.PHONY: prod
prod:
	php cecil.phar build
	php scripts/bundle-css.php

# Demo/staging build: identical to `prod`, but the base URL comes from Cecil's
# native CECIL_BASEURL env override (not cecil.yml), so the social-share tags
# (og:image, og:url, canonical) resolve on the deploy domain.
#
# The domain is NOT hard-coded. Override it per deploy without editing this file:
#   CECIL_BASEURL=https://your-new-domain.example/ make demo
# The same variable works with any build command (e.g. in CI):
#   CECIL_BASEURL=https://your-new-domain.example/ make prod
.PHONY: demo
demo:
	CECIL_BASEURL="$${CECIL_BASEURL:-https://demo.cypht.lab15.evoludata.com/}" php cecil.phar build
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
