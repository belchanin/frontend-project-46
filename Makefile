install:
	npm ci

gendiff-help:
	node bin/gendiff.js -h

publish:
	npm publish --dry-run