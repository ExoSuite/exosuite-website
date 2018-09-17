<?php

use App\Helpers\APINamespaceCreator;

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

/*$api->version('v1', function (Router $api) {
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

        $api->group(['middleware' => 'ApiToken'], function (Router $api) {
            $api->group(['prefix' => 'users'], function (Router $api) {
                $api->get('/all', APINamespaceCreator::create('APIUserController@getAllUsers'));
                $api->get('/courses/{uuid}', APINamespaceCreator::create('APIUserController@getUserCourses'));
                $api->group(['prefix' => 'from'], function (Router $api) {
                    $api->get('/uuid/{uuid}', APINamespaceCreator::create('APIUserController@getUserByUuid'));
                    $api->get('/email/{email}', APINamespaceCreator::create('APIUserController@getUserByEmail'));
                    $api->get('/name/{name}', APINamespaceCreator::create('APIUserController@getUserByName'));
                });

            });
            $api->group(['prefix' => 'courses'], function (Router $api) {
                $api->get('/all', APINamespaceCreator::create('APICourseController@getAllCourses'));
                $api->get('/title/{title}', APINamespaceCreator::create('APICourseController@getCoursesByTitle'));
                $api->post('/new', APINamespaceCreator::create('APICourseController@create'));
                $api->get('/user/{user_id}', APINamespaceCreator::create('APICourseController@getUserByCourseUserId'));
                $api->group(['prefix' => 'uptimes'], function (Router $api) {
                    $api->post('/newTime', APINamespaceCreator::create('APICheckpointsTimesController@create'));
                    $api->get('/all/course_id/{course_id}', APINamespaceCreator::create('APICheckpointsTimesController@getAllCourseTimes'));
                    $api->get('/finalCourseTime/course_id/{course_id}', APINamespaceCreator::create('APICheckpointsTimesController@getFinalCourseTime'));
                });

            });
        });

    });

});*/
