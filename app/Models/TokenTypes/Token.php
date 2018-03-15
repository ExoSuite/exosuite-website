<?php

namespace App\Models\TokenTypes;

use App\Models\AClasses\AbstractApiToken;

class Token extends AbstractApiToken {

    private static $_instance;

    private function __construct() {
        $this->expirationTime = 5;
        $this->type = 'token';
    }

    public static function getInstance() {

        if(is_null(self::$_instance)) {
            self::$_instance = new Token();
        }

        return self::$_instance;
    }
}