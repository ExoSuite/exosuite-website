<?php

namespace App\Http\Controllers\API;

use App\Models\ApiToken;
use Illuminate\Http\Request;

class APITokenController extends APIBaseController
{

    public function __construct()
    {
        ApiToken::InitTokensTypes();
    }

    public function authorizeToken() {
        return ApiToken::$RefreshToken->expirationTime;
    }

    public function getToken() {
        return ApiToken::$Token->expirationTime;
    }
}
