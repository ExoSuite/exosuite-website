<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cookie;

class Localization
{
    public static $locales = ['fr', 'en'];
    const KEY = 'locale';

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (App::environment('testing')) {
            return $next($request);
        }

        $locale = Cookie::get(self::KEY);
        if (!$locale) {
            $locale = $request->getPreferredLanguage(self::$locales);
        }

        app()->setLocale($locale);
        return $next($request);
    }
}
