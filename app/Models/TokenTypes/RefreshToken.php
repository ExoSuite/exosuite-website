<?php

namespace App\Models\TokenTypes;

use App\Models\AClasses\AbstractApiToken;

class RefreshToken extends AbstractApiToken {

    private function __construct() {
        $this->type = 'refresh_token';
        $this->expirationTime = 15;
    }
}