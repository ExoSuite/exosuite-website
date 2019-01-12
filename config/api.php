<?php
/**
 * Created by PhpStorm.
 * User: loiclopez
 * Date: 2019-01-12
 * Time: 00:34
 */

return [
    "client_secret" => env("WEBSITE_CLIENT_SECRET"),
    "client_id" => env("WEBSITE_CLIENT_ID_API"),
    'domain' => env('API_DOMAIN', 'https://api.exosuite.fr/'),
];