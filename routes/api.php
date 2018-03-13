<?php

use \App\Helpers\APINamespaceCreator;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', function (Dingo\Api\Routing\Router $api) {
    $api->group(['prefix' => 'api'], function (Dingo\Api\Routing\Router $api) {
        $api->group(['prefix' => 'users'], function (Dingo\Api\Routing\Router $api) {
            $api->post('/', APINamespaceCreator::create("APIUserController@create"));
            $api->get('/all', APINamespaceCreator::create('APIUserController@getAllUsers'));
        });
    });
});
