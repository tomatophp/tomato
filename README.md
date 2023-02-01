# Tomato Framework

🍅 TomatoPHP is built to make it easy to develop web apps and API by generating files of CRUD operations and support helpers of tonnes of functions to make it easy to manage and use framework services.

## Installation

```bash
composer create-project tomatophp/tomato
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

## Installed Plugins

- [Splade](https://splade.dev/)
- [Tomato PHP](https://github.com/tomatophp/tomato-php)
- [Tomato Admin](https://github.com/tomatophp/tomato-admin)
- [Tomato Roles](https://github.com/tomatophp/tomato-roles)
- [Laravel Media Library](https://spatie.be/docs/laravel-medialibrary/v10/introduction)
- [Laravel Excel](https://laravel-excel.com/)
- [Laravel Debugbar](https://github.com/barryvdh/laravel-debugbar)
- [Console Helpers](https://github.com/tomatophp/console-helpers)
- [Tomato Settings](https://github.com/tomatophp/tomato-settings)

## More Plugins

- [Tomato Locations](https://github.com/tomatophp/tomato-locations)
- [Tomato Translations](https://github.com/tomatophp/tomato-translations)
- [Tomato Backup](https://github.com/tomatophp/tomato-backup)
- [Tomato Logs](https://github.com/tomatophp/tomato-logs)
- [Tomato Components](https://github.com/tomatophp/tomato-components)
- [Laravel Package Generator](https://github.com/queents/laravel-package-generator)
- [Laravel WebSocket](https://beyondco.de/docs/laravel-websockets/getting-started/introduction)

to install this package you can use this command line

```bash
php artisan tomato:plugins
```

## Support

you can join our discord server to get support [TomatoPHP](https://discord.gg/Xqmt35Uh)

## Docs

you can check docs of this package on [Docs](https://docs.tomatophp.com)

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Credits

- [Fady Mondy](https://github.com/3x1io)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
