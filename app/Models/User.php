<?php

namespace App\Models;

use App\Models\Traits\Uuids;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
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
 * @property string refresh_token
 */
class User extends Authenticatable
{
    use Notifiable;
    use Uuids;

    /**
     * @var string
     */
    protected $primaryKey = "user_id";
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
        'first_name', 'last_name', 'nickname', 'email', 'password', "user_id", 'refresh_token'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password'
    ];

    public function courses()
    {
        return $this->hasMany('App\Models\Course', 'user_id');
    }
}
