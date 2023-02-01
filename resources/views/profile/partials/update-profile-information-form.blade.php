<section>
    <header>
        <h2 class="text-lg font-medium text-gray-900">
            {{ trans('tomato-admin::global.profile.information') }}
        </h2>

        <p class="mt-1 text-sm text-gray-600">
            {{ trans('tomato-admin::global.profile.information-description') }}
        </p>
    </header>

    <x-splade-form method="patch" :action="route('admin.profile.update')" :default="$user" class="mt-6 space-y-6">
        <x-splade-input id="name" name="name" type="text" :label="trans('tomato-admin::global.profile.information-name')" required autofocus autocomplete="name" />
        <x-splade-input id="email" name="email" type="email" :label="trans('tomato-admin::global.profile.information-email')" required autocomplete="email" />

        @if ($user instanceof \Illuminate\Contracts\Auth\MustVerifyEmail && ! $user->hasVerifiedEmail())
            <div>
                <p class="text-sm mt-2 text-gray-800">
                    {{ trans('tomato-admin::global.profile.email-unverified') }}

                    <Link method="post" href="{{ route('verification.send') }}" class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        {{ trans('tomato-admin::global.profile.email-re-send') }}
                    </Link>
                </p>

                @if (session('status') === 'verification-link-sent')
                    <p class="mt-2 font-medium text-sm text-green-600">
                        {{ trans('tomato-admin::global.profile.email-address') }}
                    </p>
                @endif
            </div>
        @endif

        <div class="flex items-center gap-4">
            <x-splade-submit :label="trans('tomato-admin::global.save')" />

            @if (session('status') === 'profile-updated')
                <p class="text-sm text-gray-600">
                    {{ trans('tomato-admin::global.saved') }}
                </p>
            @endif
        </div>
    </x-splade-form>
</section>
