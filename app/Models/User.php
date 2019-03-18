<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Webpatser\Uuid\Uuid;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use App\Pivots\RoleUser;

/**
 * Class User
 * @package App\Models
 * @property string $nick_name
 * @property Uuid $id
 * @property string $email
 * @property string $first_name
 * @property string $last_name
 */
class User extends Authenticatable
{
    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var boolean
     */
    public $incrementing = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'first_name',
        'last_name',
        'nick_name',
        'email',
        'password',
        'remember_token'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['password', 'email_verified_at'];

    /**
     * Checks if the user belongs to role.
     *
     * @param string $roleSlug
     * @return bool
     */
    public function inRole(string $roleSlug): bool
    {
        return $this->roles()->whereSlug(strtolower($roleSlug))->exists();
    }

    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class)->using(RoleUser::class);
    }

    protected $connection = 'pgsql_api';
}
