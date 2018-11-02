<?php
/**
 * Created by PhpStorm.
 * User: Yassir
 * Date: 01/11/2018
 * Time: 11:32
 */

namespace App\Http\Controllers;

use App\Http\Middleware\Localization;
use Illuminate\Support\Facades\Cookie;

class LanguageController extends Controller
{
    public function language($locale)
    {
        if (in_array($locale, Localization::$locales))
            Cookie::queue(Localization::KEY, $locale);
        return redirect()->back();
    }
}