<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

class EmailSettings extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('email.mail_mailer', 'smtp');
        $this->migrator->add('email.mail_host', '0.0.0.0');
        $this->migrator->add('email.mail_port', '1025');
        $this->migrator->add('email.mail_username', '');
        $this->migrator->add('email.mail_password', '');
        $this->migrator->add('email.mail_encryption', '');
        $this->migrator->add('email.mail_from_address', 'hello@example.com');
        $this->migrator->add('email.mail_from_name', '3x1');
    }
}
