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

use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return view('welcome');
});

Route::get('signin', function() {
   return view('signin');
});

Route::get('signup', function() {
   return view('signup');
});

Route::get('contact', function() {
    return view('contact');
});

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


Route::post('survey', 'SurveyController@postSurvey');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
