<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'SimpleViewController@home')->name('get_home');

Route::get('/language/{locale}', 'LanguageController@language');

Route::group(['prefix' => 'contact'], function () {
    Route::get('/', 'ContactController@index')->name('get_contact');
    Route::post('/', 'ContactController@contact');
});

Route::get('exosuite', 'SimpleViewController@exosuite')->name('get_exosuite');

Route::get('exorun', 'SimpleViewController@exorun')->name('get_exorun');

Route::get('exofun', 'SimpleViewController@exofun')->name('get_exofun');

Route::get('pricing', 'SimpleViewController@pricing')->name('get_pricing');

Route::get('team', 'SimpleViewController@team')->name('get_team');

Route::get('blog', 'SimpleViewController@comingsoon')->name('get_blog');

Route::get('social', 'SimpleViewController@social')->name('get_social');

/*Route::get('/departures', function () {
    return view('departures');
});*/

/*Route::get('survey', 'SurveyController@index');
Route::post('survey', 'SurveyController@postSurvey');*/

/*Route::group(["prefix" => "register"], function () {
    Route::get('/', "Auth\RegisterController@registerView")->name('register');
    Route::post('/', 'Auth\RegisterController@register')->name('registerAPI');
});*/

Route::post('/register', 'Auth\RegisterController@register')->name('registerAPI');

Route::group(["prefix" => "login"], function () {
    Route::get('/', 'Auth\LoginController@loginView')->name('login');
    Route::post('/', 'Auth\LoginController@login')->name('loginAPI');
    Route::get('/recover', 'Auth\LoginController@recoverView')->name('recover');
});

Route::group(['middleware' => 'auth'], function () {
    Route::group(["prefix" => "profile"], function () {
        Route::get('/', 'ProfileController@myProfileView')->name('profile');
        Route::get('/edit', 'ProfileController@editMyProfileView');
        Route::post('/edit', 'ProfileController@editMyProfile');
    });
    Route::group(["prefix" => "user"], function () {
        Route::get('/{id}', 'ProfileController@profileView');
    });
    Route::get('/token', 'UserSessionController@getUserToken');
    Route::patch('/token', 'UserSessionController@setUserToken');
});

Route::get('logout', 'Auth\LoginController@logout')->name('get_logout');
