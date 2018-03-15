<?php

namespace App\Models;

use App\Models\Traits\Tokens;
use App\Models\Traits\Uuids;
use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\ApiTokenType;
use Webpatser\Uuid\Uuid;


/**
 * Class ApiToken
 * @package App\Models
 * @property string token_type
 * @property string token
 * @property string client_name
 * @property Uuid id
 */
class ApiToken extends Model
{
    use ApiTokenType;
    use Uuids;
    use Tokens;

    public $incrementing = false;

    /**
     * @var array
     */
    protected $fillable = [
      'token_type', 'client_name', 'token'
    ];

    protected $hidden = [
        'id'
    ];
}