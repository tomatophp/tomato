# Tomato Framework

🍅 Tomato Admin Dashboard Build With FilamentPHP Theme for [Laravel Splade](https://splade.dev/)

## Installation

```bash
composer create-project queents/tomato
```

after install you can get an error because database connection, it's normal just copy .env

```bash
cp .env.example .env
```
create a new database and add your database credentials to .env file

```.env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=tomato-kit
DB_USERNAME=root
DB_PASSWORD=26111995
```

change the main url in .env file

```.env
APP_URL=https://tomato-kit.test
APP_HOST=tomato-kit.test
```

and generate a key

```bash
php artisan key:generate
php artisan config:cache
```

and run the migration

```bash
php artisan migrate
```

now you app is ready login `admin/login`

```dotenv
EMAIL=admin@admin.com
PASSWORD=QTS@2022
```

enjoy it 🍅

## Packages

- [Splade](https://splade.dev/)
- [Tomato PHP](https://github.com/queents/tomato-php)
- [Tomato Admin](https://github.com/queents/tomato-admin)
- [Tomato Roles](https://github.com/queents/tomato-roles)
- [Tomato Locations](https://github.com/queents/tomato-locations)
- [Tomato Translations](https://github.com/queents/tomato-translations)
- [Tomato Backup](https://github.com/queents/tomato-backup)
- [Tomato Logs](https://github.com/queents/tomato-logs)
- [Tomato Settings](https://github.com/queents/tomato-settings)
- [Tomato Components](https://github.com/queents/tomato-components)
- [Console Helpers](https://github.com/queents/console-helpers)
- [Laravel Debugbar](https://github.com/barryvdh/laravel-debugbar)
- [Laravel Package Generator](https://github.com/queents/laravel-package-generator)
- [Laravel Media Library](https://spatie.be/docs/laravel-medialibrary/v10/introduction)
- [Laravel Excel](https://laravel-excel.com/)
- [Laravel WebSocket](https://beyondco.de/docs/laravel-websockets/getting-started/introduction)

## Docs

look to the new docs of v1.00 on my website [Docs](https://queents.gitbook.io/tomato-admin/)

## Support

you can join our discord server to get support [VILT Admin](https://discord.gg/HUNYbgKDdx)

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Credits

- [Queen Tech Solutions](https://github.com/queents)
- [Fady Mondy](https://github.com/3x1io)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
