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

Route::get('/', 'SimpleViewController@home');

Route::get('/language/{locale}', 'LanguageController@language');

Route::group(['prefix' => 'contact'], function () {
    Route::get('/', 'ContactController@index');
    Route::post('/', 'ContactController@contact');
});

Route::get('exosuite', 'SimpleViewController@exosuite');

Route::get('exorun', 'SimpleViewController@exorun');

Route::get('exofun', 'SimpleViewController@exofun');

Route::get('pricing', 'SimpleViewController@pricing');

Route::get('about', 'SimpleViewController@about');

Route::get('team', 'SimpleViewController@team');

Route::get('blog', 'SimpleViewController@comingsoon');

Route::get('social', 'SimpleViewController@social');

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
});

Route::get('logout', 'Auth\LoginController@logout');
