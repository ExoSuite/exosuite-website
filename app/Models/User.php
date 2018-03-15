<?php

namespace App\Models;

use App\Models\Traits\Uuids;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Webpatser\Uuid\Uuid;

/**
 * Class User
 * @package App\Models
 * @property string password
 * @property string nickname
 * @property Uuid uuid
 * @property string email
 * @property string first_name
 * @property string last_name
 */
class User extends Authenticatable
{
    use Notifiable;
    use Uuids;

    /**
     * @var string
     */
    protected $primaryKey = "uuid";
    /**
     * @var bool
     */
    public $incrementing = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'nickname', 'email', 'password', "uuid"
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password'
    ];
}
