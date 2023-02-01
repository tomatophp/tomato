<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

class ThemesSettings extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('themes.theme_name', 'main');
        $this->migrator->add('themes.theme_path', 'themes.main');
        $this->migrator->add('themes.theme_namespace', '');
        $this->migrator->add('themes.theme_main_color', '');
        $this->migrator->add('themes.theme_secandry_color', '');
        $this->migrator->add('themes.theme_sub_color', '');
        $this->migrator->add('themes.theme_css', '');
        $this->migrator->add('themes.theme_js', '');
        $this->migrator->add('themes.theme_header', '');
        $this->migrator->add('themes.theme_footer', '');
        $this->migrator->add('themes.theme_copyright', '');
    }
};
