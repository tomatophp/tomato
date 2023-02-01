<x-tomato-admin-layout>
    <x-slot name="header">
        Site Settings
    </x-slot>

    <div class="flex flex-col gap-4 mb-4">
        <div>
            <x-tomato-settings-card title="Site SEO" description="About your site seo meta tags">
                <x-splade-form method="post" action="{{route('admin.settings.site.store')}}" class="mt-6 space-y-6" :default="$settings">
                    <x-splade-input id="site_name" name="site_name" type="text" label="Site Name" required autofocus />

                    <div class="flex items-center gap-4">
                        <x-splade-submit :label="trans('tomato-admin::global.save')" />
                    </div>
                </x-splade-form>
            </x-tomato-settings-card>
        </div>
    </div>
</x-tomato-admin-layout>
