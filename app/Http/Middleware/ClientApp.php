<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\ClientApp as ClientAppModel;

class ClientApp
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->header('client-web') != null) {
            if ($request->header('client-web') === env('CLIENT_WEB_APP')) {
                return $next($request);
            }
            else {
                return response("", 401);
            }
        }
        elseif ($request->header('client-app') != null) {
            $client = ClientAppModel::where('client_name', $request->header('client-app'));
            if ($client->exists() && $client->first()->client_uuid === $request->header('client-app-uuid')) {
                return $next($request);
            }
            else
                return response("", 401);
        }
        return response("", 401);
    }
}
