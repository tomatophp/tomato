<x-splade-data
    default="{
        makeMenuHide: $helpers.setStorage('makeMenuHide') ? $helpers.setStorage('makeMenuHide') : false,
        makeMenuMin: $helpers.setStorage('makeMenuMin') ? $helpers.setStorage('makeMenuMin') : false,
        dark: $helpers.setStorage('dark') ? $helpers.setStorage('dark') : false,
        asideMenuGroup: $helpers.setStorage('AsideMenuGroup') ? $helpers.setStorage('AsideMenuGroup') : {} ,
    }"
>

<div class="filament-body bg-gray-100 text-gray-900 dark:text-gray-100 dark:bg-gray-900 font-main" @load="$helpers.setDarkMode(data.dark)">
    <div class="filament-app-layout flex w-full min-h-screen overflow-v-clip">
        <x-tomato-admin-aside />
        <div
                :class="{
                        'lg:pl-24 lg:pl-24 rtl:lg:pr-24 rtl:lg:pl-0': data.makeMenuMin,
                        'lg:pl-80 lg:pl-80 rtl:lg:pr-80 rtl:lg:pl-0': !data.makeMenuMin
                    }"
                class="
                        flex
                        filament-main
                        flex-col
                        gap-y-6
                        w-screen
                        flex-1
                        hidden
                        h-full
                        transition-all
                        filament-main-sidebar-open
                    "
                style="display: flex"
        >

            <x-tomato-admin-navbar />

            <div class="filament-main-content flex-1 w-full px-4 mx-auto md:px-6 lg:px-8 max-w-7xl">
                <header
                        class="mb-4 items-start justify-between space-y-2 filament-header sm:flex sm:space-y-0 sm:space-v-4 sm:rtl:space-v-reverse sm:py-4">
                    <h1 class="text-2xl font-bold tracking-tight md:text-3xl filament-header-heading">
                        {{ $header ?? '' }}
                    </h1>

                    <div>
                        {{ $headerBody ?? '' }}
                    </div>
                </header>

                <!-- SLOT -->
                {{$slot}}
            </div>

            <!-- Footer -->
            <x-tomato-admin-footer />
        </div>
    </div>
</div>
</x-splade-data>
