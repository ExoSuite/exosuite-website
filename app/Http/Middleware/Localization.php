<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cookie;

class Localization
{
    public static $locales = ['fr', 'en'];
    public static $key = 'locale';

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        dd(App::getLocale());
        $locale = Cookie::get(self::$key);
        if (!$locale) {
            $locale =  $request->getPreferredLanguage(self::$locales);
        }

        app()->setLocale($locale);
        return $next($request);
    }
}
