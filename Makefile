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
