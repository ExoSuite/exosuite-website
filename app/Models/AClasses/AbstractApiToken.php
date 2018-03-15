<?php

namespace App\Models\AClasses;

abstract class AbstractApiToken {
    public $expirationTime;
    public $type;
    protected static $_instance;

    public static function getInstance($TokenType) {

        if(is_null(self::$_instance)) {
            self::$_instance = new $TokenType();
        }

        return self::$_instance;
    }
}