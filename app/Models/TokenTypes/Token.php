<?php

namespace App\Models\TokenTypes;

use App\Models\AClasses\AbstractApiToken;

class Token extends AbstractApiToken {

    private function __construct() {
        $this->expirationTime = 5;
        $this->type = 'token';
    }
}