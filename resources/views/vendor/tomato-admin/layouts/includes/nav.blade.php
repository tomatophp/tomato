<header class="
                    filament-main-topbar
                    sticky
                    top-0
                    z-10
                    flex
                    h-16
                    w-full
                    shrink-0
                    items-center
                    border-b
                    bg-white
                    dark:bg-gray-800
                    dark:border-gray-700
                ">
    <div class="flex items-center w-full px-2 sm:px-4 md:px-6 lg:px-8">
        <!-- hide button -->
        <button
                class="
                            filament-sidebar-open-button
                            shrink-0
                            flex
                            items-center
                            justify-center
                            w-10
                            h-10
                            transition
                            text-primary-500
                            rounded-full
                            hover:bg-gray-500/5
                            focus:bg-primary-500/10
                            focus:outline-none
                            lg:z-10
                            lg:hover:bg-white
                            lg:focus:bg-white
                            lg:hover:text-gray-600
                            lg:focus:text-gray-600
                            lg:-ml-[44px]
                            lg:w-6
                            lg:h-6
                            lg:text-gray-500
                            lg:bg-white
                            lg:shadow
                            lg:dark:bg-gray-900
                            lg:dark:hover:text-gray-400
                            lg:dark:focus:text-gray-400
                            lg:mr-4
                            rtl:lg:ml-4
                            rtl:lg:-mr-[44px]

                        "

        >
            <div
                    @click.prevent="$helpers.setStorage('makeMenuMin', 'toggle', true); data.makeMenuMin = !data.makeMenuMin"
                    class="relative lg:absolute invisible lg:visible"
            >
                @if(app()->getLocale() === 'ar')
                    <x-heroicon-o-arrow-small-right class="w-4 h-4 text-primary-500" v-if="!data.makeMenuMin" />
                    <x-heroicon-o-arrow-small-left class="w-4 h-4 text-primary-500" v-else/>
                @else
                    <x-heroicon-o-arrow-small-left class="w-4 h-4 text-primary-500" v-if="!data.makeMenuMin" />
                    <x-heroicon-o-arrow-small-right class="w-4 h-4 text-primary-500" v-else/>
                @endif
            </div>

            <div
                    class="relative lg:absolute visible lg:invisible"
                    @click.prevent="$helpers.setStorage('makeMenuHide', 'toggle', true); data.makeMenuHide = !data.makeMenuHide"
            >
                <x-heroicon-o-bars-3 class="w-6 h-6"/>
            </div>
        </button>
        <div class="flex items-center justify-between flex-1">

            <!-- breadcrumbs -->
            <div class="filament-breadcrumbs flex-1">
                {{--                <div class="hidden gap-4 items-center font-medium text-sm lg:flex dark:text-white" v-if="layoutStore.Breadcrumbs.length">--}}
                {{--                    <div v-for="(item, key) in layoutStore.Breadcrumbs" :key="key">--}}
                {{--                        <div class="flex justify-start">--}}
                {{--                            <Link :href="item.route" class="dark:text-gray-400 my-auto" :class="{'text-gray-500':key === layoutStore.Breadcrumbs.length-1}">--}}
                {{--                                {{item.label}}--}}
                {{--                            </Link>--}}
                {{--                            <div class="h-6 border-gray-300 -skew-x-12 dark:border-gray-500 ml-4" :class="{'border-r': key !== layoutStore.Breadcrumbs.length-1}"></div>--}}
                {{--                        </div>--}}
                {{--                    </div>--}}
                {{--                </div>--}}
            </div>

            <!-- Search -->
            <div class="filament-global-search flex items-center ml-4">
                <div class="relative">
                    <div class="filament-global-search-input">
                        <label for="globalSearchInput" class="sr-only">
                            Global search
                        </label>

                        <div class="relative group max-w-md">
                            <span class="absolute inset-y-0 left-0 flex items-center justify-center w-10 h-10 text-gray-500 pointer-events-none group-focus-within:text-primary-500 dark:text-gray-400">
                                <svg  class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                                <svg v-if="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="animate-spin w-5 h-5">
                                    <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"></path>
                                    <path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="currentColor"></path>
                                </svg>
                            </span>

                            <input  id="globalSearchInput" placeholder="{{trans('tomato-admin::global.search')}}" type="search" autocomplete="off" class="block w-full h-10 pl-10 bg-gray-400/10 placeholder-gray-500 border-transparent transition duration-75 rounded-lg focus:bg-white focus:placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-inset focus:ring-primary-500 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400">
                        </div>
                    </div>
                </div>
            </div>

            @if(class_exists(\Queents\TomatoNotifications\Models\UserNotification::class))
            <!-- Notifications -->
            <div>
                <div class="filament-notifications pointer-events-none fixed inset-4 z-50 mx-auto flex justify-end gap-3 items-end flex-col-reverse" role="status">
                </div>

                <!-- Notifications -->
                <div>
                    <!-- Open Notification Modal -->
                    <Link slideover href="/admin/notifications" class="inline-block">
                        <button
                            title="filament::layout.database_notifications"
                            type="button"
                            class="filament-icon-button flex items-center justify-center rounded-full relative hover:bg-gray-500/5 focus:outline-none text-primary-500 focus:bg-primary-500/10 dark:hover:bg-gray-300/5 w-10 h-10 ml-4 -mr-1">
                            <span class="sr-only">

                            </span>

                            <svg class="filament-icon-button-icon w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                            </svg>
                            <span class="filament-icon-button-indicator absolute rounded-full text-xs inline-block w-4 h-4 -top-0.5 -right-0.5 bg-primary-500/10">
                                {{
                                    \Queents\TomatoNotifications\Models\UserNotification::where('model_type',User::class)
                                            ->where('model_id', auth()->user()->id)
                                            ->orWhere('model_id', null)
                                            ->get()->count()
                                }}
                            </span>
                        </button>
                    </Link>
                </div>

                <div></div>
            </div>
            @endif

            <x-tomato-admin-profile-dropdown />
        </div>
    </div>
</header>
