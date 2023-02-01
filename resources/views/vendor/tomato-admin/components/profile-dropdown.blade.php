<div class="filament-dropdown">
    <x-splade-toggle>
        <div class="filament-dropdown-trigger cursor-pointer ml-4" @click.prevent="toggle">
            <!-- Profile -->
            <div class="w-10 h-10 rounded-full bg-gray-200 bg-cover bg-center dark:bg-gray-900" style="background-image: url('https://avatars.dicebear.com/api/initials/{{auth()->user()->name}}.svg')">
            </div>
        </div>

        <x-splade-transition
            show="toggled"
            enter="transition-opacity duration-75"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity duration-150"
            leave-from="opacity-100"
            leave-to="opacity-0"
        >

            <div
                v-show="toggled"
                class="
                                filament-dropdown-panel
                                right-16
                                top-[59.5px]
                                rtl:left-16
                                rtl:right-auto
                                absolute z-10 w-full rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition dark:bg-gray-800 dark:ring-white/10 max-w-[14rem]"
            >

                <ul class="py-1 space-y-1">
                    <!-- Toggle Theme -->
                    <div>
                        <div>
                            <Link
                                @click="setToggle(false);"
                                href="{{route('admin.profile.edit')}}"
                                type="button" class="filament-dropdown-item flex items-center w-full h-8 px-3 text-sm font-medium group whitespace-nowrap focus:outline-none hover:text-white focus:text-white hover:bg-primary-600 focus:bg-primary-700"
                            >
                                <x-heroicon-s-user class="mr-2 -ml-1 w-5 h-5 flex-shrink-0 rtl:ml-2 rtl:-mr-1 group-hover:text-white group-focus:text-white text-primary-500"/>

                                <span class="truncate">
                                    {{auth()->user()->name}}
                                </span>

                            </Link>
                        </div>
                    </div>

                    <!-- Toggle Theme -->
                    <div>
                        <div>
                            <button

                                @click.prevent="setToggle(false); $helpers.setDarkMode()"
                                type="button"
                                class="filament-dropdown-item flex items-center w-full h-8 px-3 text-sm font-medium group whitespace-nowrap focus:outline-none hover:text-white focus:text-white hover:bg-primary-600 focus:bg-primary-700"
                            >

                                <svg v-if="data.dark" class="mr-2 -ml-1 w-5 h-5 flex-shrink-0 rtl:ml-2 rtl:-mr-1 group-hover:text-white group-focus:text-white text-primary-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                </svg>
                                <svg v-else class="mr-2 -ml-1 w-5 h-5 flex-shrink-0 rtl:ml-2 rtl:-mr-1 group-hover:text-white group-focus:text-white text-primary-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
                                </svg>
                                <span class="truncate">
                                    {{trans('tomato-admin::global.dark') }}
                                </span>

                            </button>
                        </div>

                    </div>

                    <!-- Lang -->
                    <div>
                        <div>
                            <Link
                                href="{{ route('admin.lang') }}"
                                method="POST"
                                @click="setToggle(false); $helpers.langSwitch()"
                                type="button"
                                class="filament-dropdown-item flex items-center w-full h-8 px-3 text-sm font-medium group whitespace-nowrap focus:outline-none hover:text-white focus:text-white hover:bg-primary-600 focus:bg-primary-700"
                            >
                                <svg class="mr-2 -ml-1 w-5 h-5 flex-shrink-0 rtl:ml-2 rtl:-mr-1 group-hover:text-white group-focus:text-white text-primary-500"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                                </svg>
                                <span class="truncate">
                                    {{trans('tomato-admin::global.translation') }}
                                </span>
                            </Link>
                        </div>
                    </div>

                    <!-- Logout Dropdown -->
                    <div>
                        <Link href="{{route('admin.logout')}}"  method="POST" class="filament-dropdown-item flex items-center w-full h-8 px-3 text-sm font-medium group whitespace-nowrap focus:outline-none hover:text-white focus:text-white hover:bg-primary-600 focus:bg-primary-700">
                            <svg class="mr-2 -ml-1 w-5 h-5 flex-shrink-0 rtl:ml-2 rtl:-mr-1 group-hover:text-white group-focus:text-white text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="truncate">
                                {{trans('tomato-admin::global.logout')}}
                            </span>

                        </Link>
                    </div>
                </ul>
            </div>
        </x-splade-transition>
    </x-splade-toggle>
</div>
