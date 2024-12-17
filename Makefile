all: .cache-config-generator

.PHONY: build
build:
	php cecil.phar build

.PHONY: serve
serve:
	make .cache-config-generator
	php cecil.phar serve

.cache-config-generator:
	php data.php
