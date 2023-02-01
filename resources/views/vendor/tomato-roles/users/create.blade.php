<x-splade-modal class="font-main">
    <h1 class="text-2xl font-bold mb-4">{{trans('tomato-admin::global.crud.create')}} {{ trans('tomato-roles::global.users.single') }}</h1>

    <x-splade-form class="flex flex-col space-y-4" action="{{route('admin.users.store')}}" method="post">

          <x-splade-input name="name" type="text"  :placeholder="trans('tomato-roles::global.users.name')" />
          <x-splade-input name="email" type="email"  :placeholder="trans('tomato-roles::global.users.email')" />
          <x-splade-input name="password" type="password"  :placeholder="trans('tomato-roles::global.users.password')" />
          <x-splade-input name="password_confirmation" type="password"  :placeholder="trans('tomato-roles::global.users.password_confirmation')" />
            <x-splade-select :placeholder="trans('tomato-roles::global.users.roles')" name="roles[]" :options="$roles" option-label="name" option-value="id" choices relation multiple/>

        <x-splade-submit label="{{trans('tomato-admin::global.crud.create-new')}} {{trans('tomato-roles::global.users.single')}}" :spinner="true" />
    </x-splade-form>
</x-splade-modal>
