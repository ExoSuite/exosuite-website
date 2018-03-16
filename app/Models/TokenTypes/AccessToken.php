<?php

namespace App\Models\TokenTypes;

use App\Models\AClasses\AbstractApiToken;

class AccessToken extends AbstractApiToken
{
    private static $_instance;


    private function __construct()
    {
        $this->expirationTime = 15;
        $this->type = 'access_token';
    }

    public static function getInstance()
    {

        if (is_null(self::$_instance)) {
            self::$_instance = new AccessToken();
        }

        return self::$_instance;
    }
}