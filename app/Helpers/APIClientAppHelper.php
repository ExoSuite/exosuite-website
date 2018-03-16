<?php
/**
 * Created by PhpStorm.
 * User: Loic Dupil
 * Date: 15/03/2018
 * Time: 17:49
 */

namespace App\Helpers;

use Illuminate\Support\Request;

class APIClientAppHelper
{

    public static function getClienWebAppToken() {
        return env('CLIENT_WEB_APP');
    }

    public static function getHttp(Request $request) {
        $request->secure();
    }

}