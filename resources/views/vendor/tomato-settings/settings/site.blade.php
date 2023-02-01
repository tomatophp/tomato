<x-tomato-admin-layout>
    <x-slot name="header">
        {{trans('tomato-settings::global.site.title')}}
    </x-slot>

    <div class="flex flex-col gap-4 mb-4">
        <div>
            <x-tomato-settings-card :title="trans('tomato-settings::global.site.sections.seo.title')" :description="trans('tomato-settings::global.site.sections.seo.description')">
                <x-splade-form method="post" action="{{route('admin.settings.site.store')}}" class="mt-6 space-y-6" :default="$settings">
                    <div>
                        <x-splade-input id="site_name" name="site_name" type="text" :label="trans('tomato-settings::global.site.sections.seo.site_name')" required autofocus />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('site_name')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-splade-input id="site_author" name="site_author" type="text" :label="trans('tomato-settings::global.site.sections.seo.site_author')" required  />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('site_author')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-splade-textarea id="site_description" name="site_description" :label="trans('tomato-settings::global.site.sections.seo.site_description')" required  />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('site_description')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-splade-textarea id="site_keywords" name="site_keywords" :label="trans('tomato-settings::global.site.sections.seo.site_keywords')" required  />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('site_keywords')</code></small>
                            </div>
                        @endif
                    </div>
                    <div class="flex items-center gap-4">
                        <x-splade-submit :label="trans('tomato-admin::global.save')" />
                    </div>
                </x-splade-form>
            </x-tomato-settings-card>
        </div>
        <div>
            <x-tomato-settings-card :title="trans('tomato-settings::global.site.sections.media.title')" :description="trans('tomato-settings::global.site.sections.media.description')">
                <x-splade-form method="post" action="{{route('admin.settings.site.store')}}" class="mt-6 space-y-6" :default="$settings">
                    <div>
                        <x-splade-file id="site_profile" name="site_profile" :label="trans('tomato-settings::global.site.sections.media.site_profile')"  filepond preview required  />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('site_profile')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-splade-file id="site_logo" name="site_logo" :label="trans('tomato-settings::global.site.sections.media.site_logo')" filepond preview required  />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('site_logo')</code></small>
                            </div>
                        @endif
                    </div>
                    <div class="flex items-center gap-4">
                        <x-splade-submit :label="trans('tomato-admin::global.save')" />
                    </div>
                </x-splade-form>
            </x-tomato-settings-card>
        </div>
        <div>
            <x-tomato-settings-card :title="trans('tomato-settings::global.site.sections.contact.title')" :description="trans('tomato-settings::global.site.sections.contact.description')">
                <x-splade-form method="post" action="{{route('admin.settings.site.store')}}" class="mt-6 space-y-6" :default="$settings">
                    <div>
                        <x-splade-textarea id="site_address" name="site_address" :label="trans('tomato-settings::global.site.sections.contact.site_address')" required  />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('site_address')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-splade-input id="site_email" name="site_email" type="text" :label="trans('tomato-settings::global.site.sections.contact.site_email')" required  />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('site_email')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-splade-input id="site_phone" name="site_phone" type="text" :label="trans('tomato-settings::global.site.sections.contact.site_phone')" required  />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('site_phone')</code></small>
                            </div>
                        @endif
                    </div>
                    <div class="flex items-center gap-4">
                        <x-splade-submit :label="trans('tomato-admin::global.save')" />
                    </div>
                </x-splade-form>
            </x-tomato-settings-card>
        </div>
        <div>
            <x-tomato-settings-card :title="trans('tomato-settings::global.site.sections.location.title')" :description="trans('tomato-settings::global.site.sections.location.description')">
                <x-splade-form method="post" action="{{route('admin.settings.site.store')}}" class="mt-6 space-y-6" :default="$settings">
                    <div>
                        <x-splade-input id="site_phone_code" name="site_phone_code" type="text" :label="trans('tomato-settings::global.site.sections.location.site_phone_code')" required  />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('site_phone_code')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-splade-input id="site_location" name="site_location" type="text" :label="trans('tomato-settings::global.site.sections.location.site_location')" required  />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('site_location')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-splade-input id="site_currency" name="site_currency" type="text" :label="trans('tomato-settings::global.site.sections.location.site_currency')" required  />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('site_currency')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-splade-input id="site_language" name="site_language" type="text" :label="trans('tomato-settings::global.site.sections.location.site_language')" required  />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('site_language')</code></small>
                            </div>
                        @endif
                    </div>
                    <div class="flex items-center gap-4">
                        <x-splade-submit :label="trans('tomato-admin::global.save')" />
                    </div>
                </x-splade-form>
            </x-tomato-settings-card>
        </div>
        <div>
            <x-tomato-settings-card :title="trans('tomato-settings::global.site.sections.interface.title')" :description="trans('tomato-settings::global.site.sections.interface.description')">
                <x-splade-form method="post" action="{{route('admin.settings.site.store')}}" class="mt-6 space-y-6" :default="$settings">
                    <div>
                        <x-tomato-repeater :options="['network','url']" id="site_social" name="site_social" type="repeater" :label="trans('tomato-settings::global.site.sections.interface.site_social')"  required>
                            <x-splade-input class="my-2" v-model="repeater.main[key].network" type="text" :placeholder="trans('tomato-settings::global.site.sections.interface.site_social_network')"  required />
                            <x-splade-input class="my-2" v-model="repeater.main[key].url" type="text" :placeholder="trans('tomato-settings::global.site.sections.interface.site_social_url')"  required />
                        </x-tomato-repeater>
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('site_social')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-tomato-repeater :options="['label','icon', 'url', 'route','target']" type="repeater" id="site_menu" name="site_menu" :label="trans('tomato-settings::global.site.sections.interface.site_menu')" required>
                            <x-splade-input class="my-2" v-model="repeater.main[key].label" type="text" :placeholder="trans('tomato-settings::global.site.sections.interface.site_menu_label')"   required  />
                            <x-splade-input class="my-2" v-model="repeater.main[key].icon" type="text" :placeholder="trans('tomato-settings::global.site.sections.interface.site_menu_icon')"   required  />
                            <x-splade-input class="my-2" v-model="repeater.main[key].url" type="text" :placeholder="trans('tomato-settings::global.site.sections.interface.site_menu_url')"   required  />
                            <x-splade-input class="my-2" v-model="repeater.main[key].route" type="text" :placeholder="trans('tomato-settings::global.site.sections.interface.site_menu_route')"   required  />
                            <x-splade-input class="my-2" v-model="repeater.main[key].target" type="text" :placeholder="trans('tomato-settings::global.site.sections.interface.site_menu_target')"   required  />
                        </x-tomato-repeater>
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('site_menu')</code></small>
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
