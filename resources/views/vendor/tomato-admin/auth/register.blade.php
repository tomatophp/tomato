<x-tomato-admin-guest-layout>
    <x-slot name="header">
        {{trans('tomato-admin::global.auth.register')}}
    </x-slot>
    <x-splade-form action="{{ route('admin.register') }}" class="space-y-4">
        <x-splade-input id="name" type="text" name="name" :label="trans('tomato-admin::global.auth.name')" required autofocus />
        <x-splade-input id="email" type="email" name="email" :label="trans('tomato-admin::global.auth.email')" required />
        <x-splade-input id="password" type="password" name="password" :label="trans('tomato-admin::global.auth.password')" required autocomplete="new-password" />
        <x-splade-input id="password_confirmation" type="password" name="password_confirmation" :label="trans('tomato-admin::global.auth.password-confirmation')" required />

        <div class="flex items-center justify-between">
            <Link class="underline text-sm text-gray-600 hover:text-gray-900" href="{{ route('admin.login') }}">
                {{ trans('tomato-admin::global.auth.already-registered') }}
            </Link>

            <x-splade-submit class="ml-4" :label="trans('tomato-admin::global.auth.register-button')" />
        </div>
    </x-splade-form>
</x-tomato-admin-guest-layout>
