#!/usr/bin/env bash

PORT=$(shuf -i 40000-50000 -n 1)

export PHANTOM_JS_PORT=${PORT}

./tests/bin/phantomjs --webdriver=${PORT} > /dev/null 2>&1 & > /dev/null 2>&1

php artisan dusk

lsof -i tcp:${PORT} | awk 'NR!=1 {print $2}' | xargs kill