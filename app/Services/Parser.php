<?php
/**
 * Created by PhpStorm.
 * User: Yassir
 * Date: 15/10/2018
 * Time: 18:04
 */

namespace App\Services;


/**
 * Class Parser
 * @package App\Services
 */
class Parser
{
    /**
     * @return string
     */
    public static function getDomain() : string
    {
        $parsed_url = parse_url(env('APP_URL') ?? config('app.url'));
        return $parsed_url['host'];
    }

    public static function getDomainForSession(): string
    {
        return '.' . self::getDomain();
    }
}