<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

trait ApiTokenType {
    public static $RefreshToken = 'refresh_token';
    public static $AccessToken = 'access_token';
    public static $Token = 'token';
}

class ApiToken extends Model
{
    use ApiTokenType;

    protected $fillable = [
      'token_type'
    ];
}