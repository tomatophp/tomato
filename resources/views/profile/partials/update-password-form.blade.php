<section>
    <header>
        <h2 class="text-lg font-medium text-gray-900">
            {{ trans('tomato-admin::global.profile.password-title') }}
        </h2>

        <p class="mt-1 text-sm text-gray-600">
            {{ trans('tomato-admin::global.profile.password-description') }}
        </p>
    </header>

    <x-splade-form method="put" :action="route('admin.profile.password')" class="mt-6 space-y-6">
        <x-splade-input id="current_password" name="current_password" type="password" :label="trans('tomato-admin::global.profile.password-current')" autocomplete="current-password" />
        <x-splade-input id="password" name="password" type="password" :label="trans('tomato-admin::global.profile.password-new')" autocomplete="new-password" />
        <x-splade-input id="password_confirmation" name="password_confirmation" type="password" :label="trans('tomato-admin::global.profile.password-confirmation')" autocomplete="new-password" />

        <div class="flex items-center gap-4">
            <x-splade-submit :label="trans('tomato-admin::global.save')" />

            @if (session('status') === 'password-updated')
                <p class="text-sm text-gray-600">{{ trans('tomato-admin::global.saved') }}</p>
            @endif
        </div>
    </x-splade-form>
</section>
