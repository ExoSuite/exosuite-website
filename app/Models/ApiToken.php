<?php

namespace App\Models;

use App\Models\Traits\Tokens;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;


/**
 * Class ApiToken
 * @package App\Models
 * @property string token_type
 * @property string token
 * @property Uuid id
 * @property Uuid user_id
 */
class ApiToken extends Model
{
    use Tokens;

    public $incrementing = false;
    public $timestamps = false;

    /**
     * @var array
     */
    protected $fillable = [
      'token_type', 'token', 'user_id'
    ];

    protected $hidden = [
        'id'
    ];
}