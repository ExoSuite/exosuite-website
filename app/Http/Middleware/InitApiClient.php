<?php

namespace App\Http\Middleware;

use App\Services\API;
use Closure;
use Illuminate\Http\Response;

class InitApiClient
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        API::initClient();
        if (empty(API::$client_secret) or API::$client_id === 0) {
            abort(Response::HTTP_INTERNAL_SERVER_ERROR, "client_secret or client_id not set.");
        }

        return $next($request);
    }
}
