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
    $api->group(['middleware' => 'client_app', 'prefix' => 'api'], function (Dingo\Api\Routing\Router $api) {
        $api->group(['prefix' => 'users'], function (Dingo\Api\Routing\Router $api) {
            $api->post('/', APINamespaceCreator::create("APIUserController@create"));
            $api->get('/all', APINamespaceCreator::create('APIUserController@getAllUsers'));
            $api->group(['prefix' => 'from'], function (Dingo\Api\Routing\Router $api) {
                $api->get('/uuid/{uuid}', APINamespaceCreator::create('APIUserController@getUserByUuid'));
                $api->get('/email/{email}', APINamespaceCreator::create('APIUserController@getUserByEmail'));
                $api->get('/name/{name}', APINamespaceCreator::create('APIUserController@getUserByName'));
            });
            $api->group(['prefix' => 'oauth'], function (Dingo\Api\Routing\Router $api) {
                $api->get('/authorize', APINamespaceCreator::create('APITokenController@authorizeToken'));
            });
        });
    });
});
