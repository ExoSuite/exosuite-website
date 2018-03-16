<?php

namespace App\Http\Middleware;

use App\Models\ApiToken;
use App\Rules\APITokenRule;
use Closure;
use Validator;

class ApiTokensMiddleware
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
        if ($request->exists('access_token') && $request->exists('user_id')) {
            ApiToken::InitTokensTypes();
            $validator = Validator::make($request->all(),
                [
                    'user_id' => 'bail|required|uuid|exists:users',
                    'access_token' => ['required', new APITokenRule($request->get('user_id'), ApiToken::$AccessToken->type)]
                ]
            );

            if ($validator->fails()) {
                return response($validator->errors()->toJson(), 403);
            }
            return $next($request);
        } else
            return response("Unauthorized", 403);

    }
}
