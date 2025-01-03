all: data/configOptions.json

.PHONY: build
build:
	php cecil.phar build

.PHONY: serve
serve:
	php cecil.phar serve

data/configOptions.json:
	php data/fetch.php
