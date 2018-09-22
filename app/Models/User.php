<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Webpatser\Uuid\Uuid;

/**
 * Class User
 * @package App\Models
 * @property string nick_name
 * @property Uuid id
 * @property string email
 * @property string first_name
 * @property string last_name
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
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [ 'password' ];

    protected $connection = 'pgsql_api';
}
