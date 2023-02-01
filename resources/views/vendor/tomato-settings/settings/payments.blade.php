<x-tomato-admin-layout>
    <x-slot name="header">
        {{trans('tomato-settings::global.payments.title')}}
    </x-slot>

    <div class="flex flex-col gap-4 mb-4">
        <div>
            <x-tomato-settings-card :title="trans('tomato-settings::global.payments.sections.gate.title')" :description="trans('tomato-settings::global.payments.sections.gate.description')">
                <x-splade-form method="post" action="{{route('admin.settings.payments.store')}}" class="mt-6 space-y-6" :default="$settings">
                    <div>
                        <x-splade-checkbox id="payment_online" name="payment_online" type="checkbox" :label="trans('tomato-settings::global.payments.sections.gate.payment_online')" :default="0"  />
                        @if(config('tomato-settings.helpers'))
                            <div class="p-1">
                                <small class="text-red-500"><code>setting('payment_online')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-tomato-repeater v-if="form.payment_online" :options="[
                        'vendor', 'api_key', 'secret_key','email'
                    ]"  id="payment_vendors" option-label="name" name="payment_vendors" type="text" :label="trans('tomato-settings::global.payments.sections.gate.payment_vendors')">
                            <div class="flex flex-col space-y-4">
                                <x-splade-input name="vendor" v-model="repeater.main[key].vendor" id="vendor" :placeholder="trans('tomato-settings::global.payments.sections.gate.vendor')" required/>
                                <x-splade-input name="api_key" v-model="repeater.main[key].api_key" id="api_key" :placeholder="trans('tomato-settings::global.payments.sections.gate.api_key')" required/>
                                <x-splade-input name="secret_key" v-model="repeater.main[key].secret_key" id="secret_key" :placeholder="trans('tomato-settings::global.payments.sections.gate.secret_key')" required/>
                                <x-splade-input name="email" v-model="repeater.main[key].email" id="email" :placeholder="trans('tomato-settings::global.payments.sections.gate.email')"/>
                            </div>
                        </x-tomato-repeater>
                        @if(config('tomato-settings.helpers'))
                            <div v-if="form.payment_online" class="p-1">
                                <small class="text-red-500"><code>setting('payment_vendors')</code></small>
                            </div>
                        @endif
                    </div>
                    <div>
                        <x-splade-input v-if="form.payment_online" id="payment_gate" name="payment_gate" :label="trans('tomato-settings::global.payments.sections.gate.payment_gate')" required autofocus />
                        @if(config('tomato-settings.helpers'))
                            <div v-if="form.payment_online" class="p-1">
                                <small class="text-red-500"><code>setting('payment_gate')</code></small>
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
