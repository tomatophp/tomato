<div
        v-cloak
        v-show="data.makeMenuHide"
        @click.prevent="$helpers.setStorage('makeMenuHide', 'toggle', true); data.makeMenuHide = !data.makeMenuHide"
        class="fixed inset-0 z-20 w-full h-full filament-sidebar-close-overlay bg-gray-900/50 lg:hidden"
>

</div>
<aside
        :class="{
            'hidden': !data.makeMenuHide,
            'w-24': data.makeMenuMin,
            'w-80': !data.makeMenuMin
        }"
        class="
                    lg:flex
                    filament-sidebar-open
                    translate-x-0
                    max-w-[20em]
                    lg:max-w-[var(--sidebar-width)]
                    filament-sidebar
                    fixed
                    inset-y-0
                    left-0
                    rtl:left-auto
                    rtl:right-0
                    z-20
                    flex
                    flex-col
                    h-screen
                    overflow-hidden
                    shadow-2xl
                    transition-all
                    bg-white
                    lg:border-r
                    rtl:lg:border-r-0
                    rtl:lg:border-l
                    lg:z-0
                    dark:bg-gray-800
                    dark:border-gray-700
                    filament-sidebar-open
                    translate-x-0
                    max-w-[20em]
                    lg:max-w-[var(--sidebar-width)]
                ">

    <header
            class="
                filament-sidebar-header
                border-b
                h-[4rem]
                shrink-0
                px-6 flex items-center dark:border-gray-700"
    >

        <Link
                href="{{route('admin')}}"
                class="block w-full font-bold"
                v-show="true"
                data-turbo="false"
                style=""
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="block h-9 w-auto fill-current text-primary-500" width="102" height="86" viewBox="0 0 102 86" fill="none">
                <g clip-path="url(#clip0_7_79)">
                    <path d="M43.6688 34.276L36.6433 29.561L45.2265 19.2558L32.864 15.5516L35.4985 7.87738L47.2547 12.7903L46.6483 -0.00521851H55.3622L54.7558 12.7903L66.512 7.87738L69.1465 15.5516L56.784 19.2558L65.2993 29.561L58.2738 34.2083L50.9765 23.2987L43.6792 34.276H43.6688Z" fill="#009D4C"/>
                    <path d="M102 57.2048C100.28 57.3246 98.8009 57.533 97.5673 57.8196C96.3336 58.1113 95.3404 58.5438 94.5877 59.1221C93.7879 59.7264 93.2129 60.5339 92.8627 61.5499C92.5125 62.5658 92.3347 63.8579 92.3347 65.4261V71.0423C92.3347 75.726 90.5575 79.3678 87.0081 81.9623C83.4588 84.5568 78.5086 85.9062 72.1627 86L71.5092 77.5235C75.069 77.4505 77.7454 76.7941 79.5436 75.5489C81.3365 74.3037 82.2304 72.4907 82.2304 70.0993V63.6859C82.2304 61.0549 82.8368 58.872 84.0495 57.1475C85.2622 55.423 87.1493 54.2195 89.7211 53.5422V53.1098C87.395 52.6045 85.5654 51.4687 84.2325 49.7078C82.8995 47.9468 82.2304 45.7118 82.2304 43.0078V36.5215C82.2304 34.1562 81.3365 32.3483 79.5436 31.1084C77.7506 29.8632 75.0743 29.2172 71.5092 29.1703L72.1627 20.6938C78.2943 20.7667 83.187 22.0744 86.8461 24.622C90.5052 27.1697 92.3347 30.8218 92.3347 35.5785V41.1218C92.3347 42.6431 92.502 43.9091 92.8418 44.9251C93.1816 45.941 93.7252 46.7589 94.4779 47.3893C95.2307 47.9937 96.2343 48.4574 97.4941 48.7856C98.7538 49.1138 100.254 49.3483 102 49.4941V57.21V57.2048Z" fill="#F01E19"/>
                    <path d="M0 49.4889C1.74591 49.3431 3.24614 49.1086 4.50592 48.7804C5.76569 48.4522 6.76933 47.9885 7.52206 47.3841C8.27479 46.7589 8.81843 45.9358 9.1582 44.9198C9.49798 43.9039 9.66525 42.6379 9.66525 41.1166C9.66525 40.2726 9.66525 39.3557 9.66525 38.3658V35.5785C9.66525 30.8218 11.4948 27.1697 15.1539 24.622C18.813 22.0744 23.7057 20.7667 29.8373 20.6938L30.4908 29.1703C26.931 29.2172 24.2546 29.8632 22.4564 31.1084C20.6635 32.3535 19.7696 34.1562 19.7696 36.5215V39.512C19.7696 40.6373 19.7696 41.7991 19.7696 43.0078C19.7696 45.7118 19.1005 47.9468 17.7675 49.7078C16.4346 51.4687 14.605 52.6045 12.2789 53.1098V53.5422C14.8455 54.2195 16.7378 55.4178 17.9505 57.1475C19.1632 58.872 19.7696 61.0549 19.7696 63.6859C19.7696 65.2072 19.7696 66.3795 19.7696 67.1974V70.0941C19.7696 72.4855 20.6635 74.3037 22.4564 75.5437C24.2494 76.7889 26.9257 77.4453 30.4908 77.5183L29.8373 85.9948C23.4914 85.8958 18.5412 84.5516 14.9919 81.9571C11.4425 79.3626 9.66525 75.7208 9.66525 71.0371C9.66525 70.1671 9.66525 69.2241 9.66525 68.2134V65.4261C9.66525 63.8579 9.49275 62.5658 9.13729 61.5499C8.78706 60.5339 8.21206 59.7264 7.41229 59.1221C6.65956 58.5438 5.66638 58.1061 4.43274 57.8196C3.1991 57.5278 1.71978 57.3246 0 57.2048V49.4889Z" fill="#F01E19"/>
                </g>
                <defs>
                    <clipPath id="clip0_7_79">
                        <rect width="102" height="86" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </Link>
    </header>

    <nav class="flex-1 py-6 overflow-y-auto filament-sidebar-nav">
        <div>
            @include('tomato-admin::layouts.includes.menu')
        </div>
        {{--        <div v-for="(item, key) in dashboardMenu" :key="key">--}}
        {{--            <button @click.prevent="layoutStore.setAsideMenuGroup(item.label)"--}}
        {{--                    v-show="!layoutStore.isAsideLgActive && (item && (item.label!=='main'))"--}}
        {{--                    class="flex items-center justify-between w-full px-6">--}}
        {{--                <div class="flex items-center gap-4 text-gray-600 dark:text-gray-300">--}}
        {{--                    <p class="flex-1 text-xs font-bold tracking-wider uppercase">--}}
        {{--                        {{trans(item.label)}}--}}
        {{--                    </p>--}}
        {{--                </div>--}}

        {{--                <svg v-show="!layoutStore.AsideMenuGroup[item.label]"--}}
        {{--                     class="w-3 h-3 text-gray-600 transition-all dark:text-gray-300" xmlns="http://www.w3.org/2000/svg"--}}
        {{--                     fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">--}}
        {{--                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>--}}
        {{--                </svg>--}}
        {{--                <svg v-show="layoutStore.AsideMenuGroup[item.label]"--}}
        {{--                     class="w-3 h-3 text-gray-600 transition-all rotate-180 dark:text-gray-300"--}}
        {{--                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"--}}
        {{--                     aria-hidden="true">--}}
        {{--                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>--}}
        {{--                </svg>--}}
        {{--            </button>--}}
        {{--            <div v-if="item.label==='main'">--}}
        {{--                <ul class="mx-3 mt-2 space-y-1 text-sm">--}}
        {{--                    <li class="filament-sidebar-item " v-for="(menuItem, index) in item.menu" :key="index">--}}
        {{--                        <Link :href="route(menuItem.route)" :class="{--}}
        {{--                                'bg-primary-500 text-white': route(menuItem.route).replace(usePage().props.value.data.appUrl, '') === usePage().url.value,--}}
        {{--                                'hover:bg-gray-500/5 focus:bg-gray-500/5 dark:text-gray-300 dark:hover:bg-gray-700': route(menuItem.route).replace(usePage().props.value.data.appUrl, '') !== usePage().url.value--}}
        {{--                            }"--}}
        {{--                              class="flex items-center justify-center gap-3 px-3 py-2 font-medium transition rounded-lg ">--}}

        {{--                            <i class="w-5 h-5 shrink-0" :class="menuItem.icon" style="font-size: 20px"></i>--}}

        {{--                            <div class="flex flex-1" v-show="!layoutStore.isAsideLgActive" style="">--}}
        {{--                                <span>--}}
        {{--                                    {{ trans(menuItem.label) }}--}}
        {{--                                </span>--}}
        {{--                                <span v-if="menuItem.badge"--}}
        {{--                                      class="inline-flex items-center justify-center ml-auto rtl:ml-0 rtl:mr-auto min-h-4 px-2 py-0.5 text-xs font-medium tracking-tight rounded-xl whitespace-normal text-primary-700 bg-primary-500/10 dark:text-primary-500">--}}
        {{--                                    {{ menuItem.badge }}--}}
        {{--                                </span>--}}
        {{--                            </div>--}}
        {{--                        </Link>--}}
        {{--                    </li>--}}
        {{--                </ul>--}}
        {{--            </div>--}}
        {{--            <div v-else>--}}
        {{--                <ul class="mx-3 mt-2 space-y-1 text-sm"--}}
        {{--                    v-show="layoutStore.AsideMenuGroup[item.label] || layoutStore.isAsideLgActive ">--}}
        {{--                    <li class="filament-sidebar-item " v-for="(menuItem, index) in item.menu" :title="trans(menuItem.label)">--}}
        {{--                        <Link :href="route(menuItem.route)" :class="{--}}
        {{--                                'bg-primary-500 text-white': route(menuItem.route).replace(usePage().props.value.data.appUrl, '') === usePage().url.value,--}}
        {{--                                'hover:bg-gray-500/5 focus:bg-gray-500/5 dark:text-gray-300 dark:hover:bg-gray-700': route(menuItem.route).replace(usePage().props.value.data.appUrl, '') !== usePage().url.value--}}
        {{--                            }"--}}
        {{--                              class="flex items-center justify-center w-full gap-3 px-3 py-2 font-medium transition rounded-lg ">--}}

        {{--                            <i class="w-5 h-5 shrink-0" :class="menuItem.icon" style="font-size: 20px"></i>--}}

        {{--                            <div class="flex flex-1" v-show="!layoutStore.isAsideLgActive" style="">--}}
        {{--                                <span>--}}
        {{--                                    {{ trans(menuItem.label) }}--}}
        {{--                                </span>--}}
        {{--                                <span v-if="menuItem.badge"--}}
        {{--                                      class="inline-flex items-center justify-center ml-auto rtl:ml-0 rtl:mr-auto min-h-4 px-2 py-0.5 text-xs font-medium tracking-tight rounded-xl whitespace-normal text-primary-700 bg-primary-500/10 dark:text-primary-500">--}}
        {{--                                    {{ menuItem.badge }}--}}
        {{--                                </span>--}}
        {{--                            </div>--}}
        {{--                        </Link>--}}
        {{--                    </li>--}}
        {{--                </ul>--}}
        {{--            </div>--}}

        {{--            <div class="my-6 ml-6 border-t rtl:ml-auto rtl:mr-6 dark:border-gray-700"--}}
        {{--                 v-if="item.label !== dashboardMenu[dashboardMenu.length-1]"></div>--}}
        {{--        </div>--}}
    </nav>
</aside>
