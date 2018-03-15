<?php

namespace App\Models\TokenTypes;

use App\Models\AClasses\AbstractApiToken;

class AccessToken extends AbstractApiToken {

    private function __construct() {
        $this->expirationTime = null;
        $this->type = 'access_token';
    }
}