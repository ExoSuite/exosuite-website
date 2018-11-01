<?php
/**
 * Created by PhpStorm.
 * User: Yassir
 * Date: 01/11/2018
 * Time: 11:32
 */

namespace App\Http\Controllers;


class LanguageController extends Controller
{
    public function language($locale)
    {
        if (in_array($locale, \App\Http\Middleware\Localization::$locales))
            \Illuminate\Support\Facades\Cookie::queue(\App\Http\Middleware\Localization::$key, $locale);
        return redirect()->back();
    }
}