<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

class GoogleSettings extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('google.google_api_key', '');
        $this->migrator->add('google.google_firebase_cr', '');
        $this->migrator->add('google.google_firebase_database_url', '');
        $this->migrator->add('google.google_firebase_vapid', '');
        $this->migrator->add('google.google_recaptcha_key', '');
        $this->migrator->add('google.google_recaptcha_secret', '');
    }
}
