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

use Dingo\Api\Routing\Router;

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', function (Router $api) {
    $api->group(['middleware' => 'client_app', 'prefix' => 'api'], function (Router $api) {

        $api->group(['prefix' => 'authenticate'], function (Router $api)
        {
            $api->post('/login',  APINamespaceCreator::create('APIAuthController@login'));
            $api->post('/register', APINamespaceCreator::create("APIUserController@create"));
        });

        $api->group(['prefix' => 'oauth'], function (Router $api) {
            $api->group(['prefix' => 'user'], function (Router $api) {
                $api->group(['prefix' => '/grant'], function (Router $api) {
                    $api->post('/accessToken', APINamespaceCreator::create('APITokenController@grantUserAccessToken'));
                    $api->post('/refreshToken', APINamespaceCreator::create('APITokenController@grantUserRefreshToken'));
                });
            });
        });

        $api->group(['prefix' => 'v1', 'middleware' => 'ApiToken'], function (Router $api) {
            $api->group(['prefix' => 'users'], function (Router $api) {
                $api->get('/all', APINamespaceCreator::create('APIUserController@getAllUsers'));
                $api->group(['prefix' => 'from'], function (Router $api) {
                    $api->get('/uuid/{uuid}', APINamespaceCreator::create('APIUserController@getUserByUuid'));
                    $api->get('/email/{email}', APINamespaceCreator::create('APIUserController@getUserByEmail'));
                    $api->get('/name/{name}', APINamespaceCreator::create('APIUserController@getUserByName'));
                });
            });
        });
    });
});
