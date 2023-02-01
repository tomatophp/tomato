<x-splade-modal class="font-main">
    <h1 class="text-2xl font-bold mb-4">{{trans('tomato-admin::global.crud.view')}} {{ trans('tomato-roles::global.users.single') }} #{{$model->id}}</h1>

    <div class="flex flex-col space-y-4">

          <div class="flex justify-between">
              <div>
                  <h3 class="text-lg font-bold">
                      {{trans('tomato-roles::global.users.name')}}
                  </h3>
              </div>
              <div>
                  <h3 class="text-lg">
                      {{ $model->name}}
                  </h3>
              </div>
          </div>

          <div class="flex justify-between">
              <div>
                  <h3 class="text-lg font-bold">
                      {{trans('tomato-roles::global.users.email')}}
                  </h3>
              </div>
              <div>
                  <h3 class="text-lg">
                      {{ $model->email}}
                  </h3>
              </div>
          </div>

        <div class="flex justify-between">
            <div>
                <h3 class="text-lg font-bold">
                    {{trans('tomato-roles::global.users.roles')}}
                </h3>
            </div>
            <div>
                <h3 class="text-lg">
                    {{ $model->roles->pluck('name')->implode(', ') }}
                </h3>
            </div>
        </div>


    </div>
</x-splade-modal>
