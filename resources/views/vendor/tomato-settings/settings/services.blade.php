<x-tomato-admin-layout>
    <x-slot name="header">
        {{trans('tomato-settings::global.services.title')}}
    </x-slot>

    <div class="flex flex-col gap-4 mb-4">
        <div>
            <x-tomato-settings-card :title="trans('tomato-settings::global.services.sections.sms.title')" :description="trans('tomato-settings::global.services.sections.sms.description')">
                <x-splade-form method="post" action="{{route('admin.settings.services.store')}}" class="mt-6 space-y-6" :default="$settings">
                    <div>
                        <x-splade-checkbox id="sms_active" name="sms_active"  :label="trans('tomato-settings::global.services.sections.sms.sms_active')" autofocus />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('sms_active')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-tomato-repeater :options="[
                        'vendor',
                        'api_key',
                        'secret_key',
                        'email'
                    ]" v-if="form.sms_active" id="sms_vendors" name="sms_vendors" type="text" :label="trans('tomato-settings::global.services.sections.sms.sms_vendors')">
                            <div class="flex flex-col space-y-4">
                                <x-splade-input name="vendor" v-model="repeater.main[key].vendor" id="vendor" :placeholder="trans('tomato-settings::global.services.sections.sms.vendor')" required/>
                                <x-splade-input name="api_key" v-model="repeater.main[key].api_key" id="api_key" :placeholder="trans('tomato-settings::global.services.sections.sms.api_key')" required/>
                                <x-splade-input name="secret_key" v-model="repeater.main[key].secret_key" id="secret_key" :placeholder="trans('tomato-settings::global.services.sections.sms.secret_key')" required/>
                                <x-splade-input name="email" v-model="repeater.main[key].email" id="email" :placeholder="trans('tomato-settings::global.services.sections.sms.email')" />
                            </div>
                        </x-tomato-repeater>
                        @if(config('tomato-settings.helpers'))
                            <div v-if="form.sms_active" class="p-1">
                                <small class="text-red-500"><code>setting('sms_vendors')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-splade-input v-if="form.sms_active" id="sms_gate" name="sms_gate" type="text" :label="trans('tomato-settings::global.services.sections.sms.sms_gate')"  />
                        @if(config('tomato-settings.helpers'))
                            <div v-if="form.sms_active" class="p-1">
                                <small class="text-red-500"><code>setting('sms_gate')</code></small>
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
            <x-tomato-settings-card :title="trans('tomato-settings::global.services.sections.shipping.title')" :description="trans('tomato-settings::global.services.sections.shipping.description')">
                <x-splade-form method="post" action="{{route('admin.settings.services.store')}}" class="mt-6 space-y-6" :default="$settings">
                    <div>
                        <x-splade-checkbox id="shipping_active" name="shipping_active"  :label="trans('tomato-settings::global.services.sections.shipping.shipping_active')" autofocus />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('shipping_active')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-tomato-repeater :options="[
                        'vendor',
                        'api_key',
                        'secret_key',
                        'email'
                    ]" v-if="form.shipping_active" id="shipping_vendors" name="shipping_vendors" type="text" :label="trans('tomato-settings::global.services.sections.shipping.shipping_vendors')">
                            <div class="flex flex-col space-y-4">
                                <x-splade-input name="vendor" v-model="repeater.main[key].vendor" id="vendor" :placeholder="trans('tomato-settings::global.services.sections.shipping.vendor')" required/>
                                <x-splade-input name="api_key" v-model="repeater.main[key].api_key" id="api_key" :placeholder="trans('tomato-settings::global.services.sections.shipping.api_key')" required/>
                                <x-splade-input name="secret_key" v-model="repeater.main[key].secret_key" id="secret_key" :placeholder="trans('tomato-settings::global.services.sections.shipping.secret_key')" required/>
                                <x-splade-input name="email" v-model="repeater.main[key].email" id="email" :placeholder="trans('tomato-settings::global.services.sections.shipping.email')"/>
                            </div>
                        </x-tomato-repeater>
                        @if(config('tomato-settings.helpers'))
                            <div v-if="form.shipping_active" class="p-1">
                                <small class="text-red-500"><code>setting('shipping_vendors')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-splade-input v-if="form.shipping_active" id="shipping_gate" name="shipping_gate" type="text" :label="trans('tomato-settings::global.services.sections.shipping.shipping_gate')"  />
                        @if(config('tomato-settings.helpers'))
                            <div v-if="form.shipping_active" class="p-1">
                                <small class="text-red-500"><code>setting('shipping_gate')</code></small>
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
            <x-tomato-settings-card :title="trans('tomato-settings::global.services.sections.facebook.title')" :description="trans('tomato-settings::global.services.sections.facebook.description')">
                <x-splade-form method="post" action="{{route('admin.settings.services.store')}}" class="mt-6 space-y-6" :default="$settings">
                    <div>
                        <x-splade-input id="facebook_pixcel" name="facebook_pixcel" type="text" :label="trans('tomato-settings::global.services.sections.facebook.facebook_pixcel')"  />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('facebook_pixcel')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-splade-input id="facebook_chat" name="facebook_chat" type="text" :label="trans('tomato-settings::global.services.sections.facebook.facebook_chat')"  />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('facebook_chat')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-splade-input id="facebook_app" name="facebook_app" type="text" :label="trans('tomato-settings::global.services.sections.facebook.facebook_app')"  />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('facebook_app')</code></small>
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
            <x-tomato-settings-card :title="trans('tomato-settings::global.services.sections.addthis.title')" :description="trans('tomato-settings::global.services.sections.addthis.description')">
                <x-splade-form method="post" action="{{route('admin.settings.services.store')}}" class="mt-6 space-y-6" :default="$settings">
                    <div>
                        <x-splade-input id="addthis_key" name="addthis_key" type="text" :label="trans('tomato-settings::global.services.sections.addthis.addthis_key')"  />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('addthis_key')</code></small>
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
