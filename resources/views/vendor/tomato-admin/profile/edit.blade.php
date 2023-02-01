<x-tomato-admin-layout>
    <x-slot name="header">
        {{ trans('tomato-admin::global.profile.index') }}
    </x-slot>

    <div class="pb-12">
        <div class="mx-auto  space-y-6">
            <div class="dark:bg-gray-800 dark:text-white p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                <div class="max-w-xl" dusk="update-profile-information">
                    @include('tomato-admin::profile.partials.update-profile-information-form')
                </div>
            </div>

            <div class="dark:bg-gray-800 dark:text-white p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                <div class="max-w-xl" dusk="update-password">
                    @include('tomato-admin::profile.partials.update-password-form')
                </div>
            </div>

            <div class="dark:bg-gray-800 dark:text-white p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                <div class="max-w-xl" dusk="delete-user">
                    @include('tomato-admin::profile.partials.delete-user-form')
                </div>
            </div>
        </div>
    </div>
</x-tomato-admin-layout>
