<?php
/**
 * Created by PhpStorm.
 * User: Loic Dupil
 * Date: 15/03/2018
 * Time: 17:49
 */

namespace App\Helpers;

use Illuminate\Http\Request;

class APIClientAppHelper
{

    public static function getClientWebAppToken()
    {
        return env('CLIENT_WEB_APP');
    }

    public static function getHttp(Request $request)
    {
        if ($request->secure()) {
            return 'https://';
        } else
            return 'http://';
    }

    public static function getApiUri()
    {
        return (env("API_DOMAIN"));
    }
}