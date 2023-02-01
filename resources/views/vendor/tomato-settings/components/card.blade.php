<div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
    <div>
        @if((isset($title) && $title)|| (isset($description) && $description))
        <header>
            <h2 class="text-lg font-medium text-gray-900 dark:text-white">
                {{ $title?? null }}
            </h2>

            <p class="mt-1 text-sm text-gray-600  dark:text-gray-300">
                {{ $description?? null }}
            </p>
        </header>
        @endif

        {{$slot}}
    </div>
</div>
