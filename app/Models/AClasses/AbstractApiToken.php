<?php

namespace App\Models\AClasses;

abstract class AbstractApiToken
{
    public $expirationTime;
    public $type;
    public static $length = 255;
}