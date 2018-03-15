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

Route::get('princing', function () {
   return view('princing');
});

Route::get('about', function () {
   return view('about');
});


Route::post('survey', 'SurveyController@postSurvey');

Auth::routes();

