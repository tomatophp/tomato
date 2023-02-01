<section class="space-y-6">
    <header>
        <h2 class="text-lg font-medium text-gray-900">
            {{ trans('tomato-admin::global.profile.delete-title') }}
        </h2>

        <p class="mt-1 text-sm text-gray-600">
            {{ trans('tomato-admin::global.profile.delete-description') }}
        </p>
    </header>

    <Link href="#confirm-user-deletion" dusk="open-delete-modal" class="inline-flex rounded-md shadow-sm bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline">
        {{  trans('tomato-admin::global.profile.delete-button') }}
    </Link>

    <x-splade-modal name="confirm-user-deletion">
        <x-splade-form dusk="confirm-user-deletion" method="delete" :action="route('admin.profile.destroy')">
            <h2 class="text-lg font-medium text-gray-900">
                {{ trans('tomato-admin::global.profile.delete-model-title') }}
            </h2>

            <p class="mt-1 text-sm text-gray-600">
                {{ trans('tomato-admin::global.profile.delete-model-description') }}
            </p>

            <div class="mt-6">
                <x-splade-input id="password" name="password" type="password"  :placeholder="trans('tomato-admin::global.profile.delete-model-password')" />
            </div>

            <div class="mt-6 flex justify-end">
                <button type="button" @click.prevent="modal.close" class="inline-flex rounded-md shadow-sm border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 font-bold py-2 px-4 focus:outline-none focus:shadow-outline">
                    {{ trans('tomato-admin::global.cancel') }}
                </button>

                <button dusk="confirm-delete-account" type="submit" class="ml-3 inline-flex rounded-md shadow-sm bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline">
                    {{ trans('tomato-admin::global.profile.delete-model-button') }}
                </button>
            </div>
        </x-splade-form>
        </x-modal>
</section>
