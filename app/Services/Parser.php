<?php
/**
 * Created by PhpStorm.
 * User: Yassir
 * Date: 15/10/2018
 * Time: 18:04
 */

namespace App\Services;


class Parser
{
    static function parseDomainFromEnv() : string
    {
        $url = env('APP_URL') ? env('APP_URL') : Config::get('app.url');;
        return ('.' . strstr($url, 'e'));
    }
}