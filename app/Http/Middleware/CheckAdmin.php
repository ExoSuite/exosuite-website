<?php

namespace App\Http\Middleware;

use App\Enums\Roles;
use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;

class CheckAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @param string|null $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (!Auth::guard($guard)->check()) {
            return redirect(route('login'));
        }
        /** @var \App\Models\User $user */
        $user = Auth::user();
        if (!$user->inRole(Roles::ADMINISTRATOR)) {
            abort(Response::HTTP_FORBIDDEN, 'Unauthorized action.');
        }
        return $next($request);
    }
}