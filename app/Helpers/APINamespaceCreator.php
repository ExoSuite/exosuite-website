<?php
/**
 * Created by PhpStorm.
 * User: Loic Dupil
 * Date: 12/03/2018
 * Time: 16:42
 */

namespace App\Helpers;


class APINamespaceCreator
{

    public static function create($controller)
    {
        return "App\Http\Controllers\API\\" . $controller;
    }
}