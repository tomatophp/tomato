<x-tomato-admin-layout>
    <x-slot name="header">
        {{trans('tomato-settings::global.email.title')}}
    </x-slot>

    <div class="flex flex-col gap-4 mb-4">
        <div>
            <x-tomato-settings-card :title="trans('tomato-settings::global.email.sections.smtp.title')" :description="trans('tomato-settings::global.email.sections.smtp.description')">
                <x-splade-form method="post" action="{{route('admin.settings.email.store')}}" class="mt-6 space-y-6" :default="$settings">
                    <div>
                        <x-splade-input id="mail_mailer" name="mail_mailer" type="text" :label="trans('tomato-settings::global.email.sections.smtp.mail_mailer')" required autofocus />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('mail_mailer')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-splade-input id="mail_host" name="mail_host" type="text" :label="trans('tomato-settings::global.email.sections.smtp.mail_host')" required  />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('mail_host')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-splade-input id="mail_port" name="mail_port" type="number" :label="trans('tomato-settings::global.email.sections.smtp.mail_port')" required  />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('mail_port')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-splade-input id="mail_username" name="mail_username" type="text" :label="trans('tomato-settings::global.email.sections.smtp.mail_username')"  />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('mail_username')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-splade-input id="mail_password" name="mail_password" type="password" :label="trans('tomato-settings::global.email.sections.smtp.mail_password')"  />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('mail_password')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-splade-input id="mail_encryption" name="mail_encryption" type="text" :label="trans('tomato-settings::global.email.sections.smtp.mail_encryption')"  />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('mail_encryption')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-splade-input id="mail_from_address" name="mail_from_address" type="text" :label="trans('tomato-settings::global.email.sections.smtp.mail_from_address')" required  />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('mail_from_address')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-splade-input id="mail_from_name" name="mail_from_name" type="text" :label="trans('tomato-settings::global.email.sections.smtp.mail_from_name')" required  />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('mail_from_name')</code></small>
                            </div>
                        @endif
                    </div>

                    <div class="flex items-center gap-4">
                        <x-splade-submit :label="trans('tomato-admin::global.save')" />
                    </div>
                </x-splade-form>
            </x-tomato-settings-card>
        </div>
    </div>
</x-tomato-admin-layout>
