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

Route::get('/', function () {
    \App\Facades\API::post('oauth/tokens', []);
    return view('welcome');
});

Route::get('contact', 'ContactController@index');
Route::post('contact', 'ContactController@contact');

Route::get('exosuite', function() {
    return view('exosuite');
});

Route::get('exorun', function() {
    return view('exorun');
});

Route::get('exofun', function () {
   return view('exofun');
});
Route::get('survey', function() {
    return view('survey');
});

Route::get('pricing', function () {
   return view('pricing');
});

Route::get('about', function () {
   return view('about')->with(array('mark' => true));
});

Route::get('/departures', function () {
    return view('departures');
});

Route::post('survey', 'SurveyController@postSurvey');

Route::group(["prefix" => "register"], function() {
   Route::get('/', "Auth\RegisterController@registerView")->name('register');
   Route::post('/', 'Auth\RegisterController@register')->name('registerAPI');
});

Route::group(["prefix" => "login"], function() {
    Route::get('/', 'Auth\LoginController@loginView')->name('login');
    Route::post('/', 'Auth\LoginController@login')->name('loginAPI');
    Route::get('/recover', 'Auth\LoginController@recoverView')->name('recover');
});

Route::group(['middleware' => 'auth'], function () {
    Route::group(["prefix" => "profile"], function () {
        Route::get('/', 'ProfileController@profileView')->name('profile');
        Route::get('/edit', 'ProfileController@editProfileView');
        Route::post('/edit', 'ProfileController@editProfile');
    });
});

Route::get('logout', 'Auth\LoginController@logout');
