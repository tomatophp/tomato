<x-tomato-admin-layout>
    <x-slot name="header">
        {{trans('tomato-admin::global.crud.create')}} {{trans('tomato-roles::global.roles.single')}}
    </x-slot>
    <x-splade-form class="flex flex-col space-y-4 mb-4" action="{{route('admin.roles.store')}}" method="post" >

          <div class="flex justify-between">
              <x-splade-input class="w-full mr-2 rtl:ml-2" name="name" type="text"  placeholder="{{trans('tomato-roles::global.roles.name')}}" />
              <x-splade-input class="w-full" name="guard_name" type="text"  placeholder="{{trans('tomato-roles::global.roles.guard_name')}}" />
          </div>

          <TomatoRoles :lang="@js([
                "selectAll" => trans('tomato-roles::global.roles.selectAll'),
                "enableAll" => trans('tomato-roles::global.roles.enableAll'),
                "enable" => trans('tomato-roles::global.roles.enable'),
                "forRole" => trans('tomato-roles::global.roles.forRole'),
                "permissions" => trans('tomato-roles::global.roles.permissions'),
            ])" :perm="@js($perm)" v-model="form.roles" name="{{trans('tomato-roles::global.roles.permissions')}}" />

          <x-splade-submit label="{{trans('tomato-admin::global.crud.create-new')}} {{trans('tomato-roles::global.roles.single')}}" :spinner="true" />
    </x-splade-form>

</x-tomato-admin-layout>
