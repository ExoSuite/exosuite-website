<?php

namespace App\Http\Middleware;

use App\Models\ApiToken;
use App\Rules\APITokenRule;
use Closure;
use Validator;
use Illuminate\Http\Response;

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
        if ($request->headers->has('access-token') && $request->headers->has('user-id')) {
            ApiToken::InitTokensTypes();
            $credentials = [
                'user_id' => $request->header('user-id'),
                'access_token' => $request->header('access-token')
            ];
            $validator = Validator::make(
                $credentials,
                [
                    'user_id' => 'bail|required|uuid|exists:users',
                    'access_token' => ['required',
                        new APITokenRule($request->headers->get('user-id'), ApiToken::$AccessToken->type)
                    ]
                ]
            );

            if ($validator->fails()) {
                return response($validator->errors()->toJson(), Response::HTTP_FORBIDDEN);
            }
            return $next($request);
        } else {
            return response("Unauthorized", Response::HTTP_FORBIDDEN);
        }
    }
}
