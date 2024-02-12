<div class="h-screen flex flex-col justify-center items-center gap-4 bg-gray-900">
    <x-splade-link :href="route('login')">
        <x-tomato-application-logo class="w-16 h-16" />
    </x-splade-link>
    <div class="text-center">
        <h1 class="font-bold text-3xl text-white">{{ config('app.name') }}</h1>
        <p class="text-gray-400 text-lg"> <b>Laravel</b> v{{ Illuminate\Foundation\Application::VERSION }} (PHP v{{ PHP_VERSION }})</p>
        <p class="text-gray-400"><b>Tomato</b> v{{ \Composer\InstalledVersions::getVersion('tomatophp/tomato-admin') }} | <a target="_blank" href="https://docs.tomatophp.com" class="underline"><i class="bx bx-file text-md text-green-500"></i> Docs</a> | <a target="_blank" href="https://discord.gg/VZc8nBJ3ZU" class="underline"><i class="bx bxl-discord text-md  text-primary-500"></i> Discord</a> | <a target="_blank" href="https://github.com/sponsors/3x1io" class="underline"><i class="bx bxs-heart text-danger-500 text-md"></i> Sponsor</a> | <a target="_blank" href="https://github.com/tomatophp" class="underline"><i class="bx bxl-github text-white text-md"></i> GitHub</a></p>
    </div>
</div>
