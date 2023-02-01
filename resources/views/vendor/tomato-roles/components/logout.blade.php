<x-splade-form :default="['old' => url()->current()]" method="POST" action="{{route('admin.developer.logout')}}">
    <x-splade-input type="hidden" name="old"/>
    <button type="submit"  class="filament-button inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset dark:focus:ring-offset-0 min-h-[2.25rem] px-4 text-sm text-white shadow focus:ring-white border-transparent bg-red-600 hover:bg-red-500 focus:bg-red-700 focus:ring-offset-red-700 filament-page-button-action">
        Logout Developer Mode
    </button>
</x-splade-form>
