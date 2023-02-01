<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

class ServicesSettings extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('services.sms_vendors', []);
        $this->migrator->add('services.sms_gate', 'messagebird');
        $this->migrator->add('services.sms_active', false);
        $this->migrator->add('services.shipping_vendors', []);
        $this->migrator->add('services.shipping_gate', 'posta');
        $this->migrator->add('services.shipping_active', false);
        $this->migrator->add('services.fmc_key', '');
        $this->migrator->add('services.fmc_secret', '');
        $this->migrator->add('services.recap_key', '');
        $this->migrator->add('services.recap_secret', '');
        $this->migrator->add('services.google_search', '');
        $this->migrator->add('services.google_an', '');
        $this->migrator->add('services.facebook_pixcel', '');
        $this->migrator->add('services.facebook_chat', '');
        $this->migrator->add('services.facebook_app', '');
        $this->migrator->add('services.addthis_key', '');
    }
}
