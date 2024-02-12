#!/bin/bash
set -e

echo "Deployment started ..."

# Enter maintenance mode or return true
# if already is in maintenance mode
(php artisan down) || true

# Pull the latest version of the app
git reset --hard
git pull origin master

# Install composer dependencies
composer install

# Clear the old cache
php8.2 artisan clear-compiled

# Recreate cache
php8.2  artisan optimize

# Compile npm assets
yarn
yarn build

# Run database migrations
php8.2  artisan migrate --force

# Exit maintenance mode
php8.2  artisan up

echo "Deployment finished!"
