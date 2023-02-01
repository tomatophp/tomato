<x-tomato-admin-layout>
    <x-slot name="header">
        Developer Password
    </x-slot>

    <div class="pb-12">
        <div class="mx-auto">
            <div class="relative text-center">
                <div class="flex items-center justify-center">
                    <div class="flex flex-col items-center justify-center flex-1 p-6 mx-auto space-y-6 text-center bg-white filament-tables-empty-state dark:bg-gray-800 rounded-lg shadow-sm">
                        <div>
                            <i class="bx bx-block bx-lg text-red-600"></i>
                            <h1 class="text-red-600">Please input your developer password to access this feature</h1>
                        </div>
                        <x-splade-form :default="['old' => url()->current()]" method="POST" action="{{route('admin.developer.check')}}">
                            <div class="flex flex-col justify-center space-y-4 ">
                                <x-splade-input type="hidden" name="old"/>
                                <x-splade-input type="password" name="password" label="Password" placeholder="Password" />
                                <x-splade-submit label="Submit" />
                            </div>
                        </x-splade-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-tomato-admin-layout>
