<?php

namespace App\Models\TokenTypes;

use App\Models\AClasses\AbstractApiToken;

class RefreshToken extends AbstractApiToken
{
    private static $_instance;

    private function __construct()
    {
        $this->type = 'refresh_token';
        $this->expirationTime = null;
    }

    public static function getInstance()
    {

        if (is_null(self::$_instance)) {
            self::$_instance = new RefreshToken();
        }

        return self::$_instance;
    }
}