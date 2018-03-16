<?php

namespace App\Models\Traits;

use App\Models\TokenTypes\AccessToken;
use App\Models\TokenTypes\RefreshToken;

/**
 * Trait ApiTokenType
 * @package App\Models\Traits
 */
trait ApiTokenType {

    /**
     * @var RefreshToken
     */
    public static $RefreshToken;

    /**
     * @var AccessToken
     */
    public static $AccessToken;

    /**
     *
     */
    public static function InitTokensTypes() {
        self::$RefreshToken = RefreshToken::getInstance();
        self::$AccessToken = AccessToken::getInstance();
    }
}
