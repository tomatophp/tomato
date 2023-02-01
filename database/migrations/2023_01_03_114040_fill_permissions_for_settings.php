<?php

use Carbon\Carbon;
use Illuminate\Config\Repository;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class FillPermissionsForSettings extends Migration
{
    /**
     * @var Repository|mixed
     */
    protected $guardName;
    /**
     * @var array
     */
    protected $permissions;
    /**
     * @var array
     */
    protected $roles;

    /**
     * FillPermissionsForPayment constructor.
     */
    public function __construct()
    {
        $this->guardName = config('tomato-roles.defaults.guard');

        $permissions = collect([
           "admin.settings.site.index",
           "admin.settings.site.store",
           "admin.settings.email.index",
           "admin.settings.email.store",
           "admin.settings.google.index",
           "admin.settings.google.store",
           "admin.settings.services.index",
           "admin.settings.services.store",
           "admin.settings.themes.index",
           "admin.settings.themes.store",
           "admin.settings.payments.index",
           "admin.settings.payments.store",
        ]);

        //Add New permissions
        $this->permissions = $permissions->map(function ($permission) {
            return [
                'name' => $permission,
                'guard_name' => $this->guardName,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ];
        })->toArray();

        //Role should already exists
        $this->roles = [
            [
                'name' => 'admin',
                'guard_name' => $this->guardName,
                'permissions' => $permissions,
            ],
        ];
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        $tableNames = config('permission.table_names', [
            'roles' => 'roles',
            'permissions' => 'permissions',
            'model_has_permissions' => 'model_has_permissions',
            'model_has_roles' => 'model_has_roles',
            'role_has_permissions' => 'role_has_permissions',
        ]);

        DB::transaction(function () use($tableNames) {
            foreach ($this->permissions as $permission) {
                $permissionItem = DB::table($tableNames['permissions'])->where([
                    'name' => $permission['name'],
                    'guard_name' => $permission['guard_name']
                ])->first();
                if ($permissionItem === null) {
                    DB::table($tableNames['permissions'])->insert($permission);
                }
            }

            foreach ($this->roles as $role) {
                $permissions = $role['permissions'];
                unset($role['permissions']);

                $roleItem = DB::table($tableNames['roles'])->where([
                    'name' => $role['name'],
                    'guard_name' => $role['guard_name']
                ])->first();
                if ($roleItem !== null) {
                    $roleId = $roleItem->id;

                    $permissionItems = DB::table($tableNames['permissions'])->whereIn('name', $permissions)->where(
                        'guard_name',
                        $role['guard_name']
                    )->get();
                    foreach ($permissionItems as $permissionItem) {
                        $roleHasPermissionData = [
                            'permission_id' => $permissionItem->id,
                            'role_id' => $roleId
                        ];
                        $roleHasPermissionItem = DB::table($tableNames['role_has_permissions'])->where($roleHasPermissionData)->first();
                        if ($roleHasPermissionItem === null) {
                            DB::table($tableNames['role_has_permissions'])->insert($roleHasPermissionData);
                        }
                    }
                }
            }
        });
        app()['cache']->forget(config('permission.cache.key'));
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        $tableNames = config('permission.table_names', [
            'roles' => 'roles',
            'permissions' => 'permissions',
            'model_has_permissions' => 'model_has_permissions',
            'model_has_roles' => 'model_has_roles',
            'role_has_permissions' => 'role_has_permissions',
        ]);

        DB::transaction(function () use ($tableNames){
            foreach ($this->permissions as $permission) {
                $permissionItem = DB::table($tableNames['permissions'])->where([
                    'name' => $permission['name'],
                    'guard_name' => $permission['guard_name']
                ])->first();
                if ($permissionItem !== null) {
                    DB::table($tableNames['permissions'])->where('id', $permissionItem->id)->delete();
                    DB::table($tableNames['model_has_permissions'])->where('permission_id', $permissionItem->id)->delete();
                }
            }
        });
        app()['cache']->forget(config('permission.cache.key'));
    }
}
