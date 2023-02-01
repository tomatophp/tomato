<x-splade-modal>
    <h1 class="text-2xl font-bold mb-4">{{trans('tomato-admin::global.crud.view')}} Role #{{$model->id}}</h1>

    <div class="flex flex-col space-y-4">

          <div class="flex justify-between">
              <div>
                  <h3 class="text-lg font-bold">
                      {{trans('tomato-roles::global.roles.name')}}
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
                      {{trans('tomato-roles::global.roles.guard_name')}}
                  </h3>
              </div>
              <div>
                  <h3 class="text-lg">
                      {{ $model->guard_name}}
                  </h3>
              </div>
          </div>

    </div>
</x-splade-modal>
