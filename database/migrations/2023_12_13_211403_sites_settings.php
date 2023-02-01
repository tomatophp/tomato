<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

class SitesSettings extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('sites.site_name', '3x1');
        $this->migrator->add('sites.site_description', 'Creative Solutions');
        $this->migrator->add('sites.site_keywords', 'Graphics, Marketing, Programming');
        $this->migrator->add('sites.site_profile', 'placeholder.webp');
        $this->migrator->add('sites.site_logo', 'placeholder.webp');
        $this->migrator->add('sites.site_author', 'Fady Mondy');
        $this->migrator->add('sites.site_address', 'Cairo, Egypt');
        $this->migrator->add('sites.site_email', 'info@3x1.io');
        $this->migrator->add('sites.site_phone', '+201207860084');
        $this->migrator->add('sites.site_phone_code', '+2');
        $this->migrator->add('sites.site_location', 'Egypt');
        $this->migrator->add('sites.site_currency', 'EGP');
        $this->migrator->add('sites.site_language', 'English');
        $this->migrator->add('sites.site_social', []);
        $this->migrator->add('sites.site_menu', []);
    }
}
