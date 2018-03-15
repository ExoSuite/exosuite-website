<?php

namespace App\Models\Traits;

use App\Models\TokenTypes\AccessToken;
use App\Models\TokenTypes\RefreshToken;
use App\Models\TokenTypes\Token;

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
     * @var Token
     */
    public static $Token;

    /**
     * @var bool
     */
    private static $Initialized = false;


    /**
     *
     */
    private static function init() {
        ApiTokenType::$RefreshToken = RefreshToken::getInstance(RefreshToken::class);
        ApiTokenType::$AccessToken = AccessToken::getInstance(AccessToken::class);
        ApiTokenType::$Token = Token::getInstance(Token::class);
        self::$Initialized = true;
    }

    /**
     * ApiTokenType constructor.
     */
    public function __construct() {
        if (!self::$Initialized) {
            self::init();
        }
    }
}
