<?php

namespace App\Http\Controllers\API;

use App\Jobs\AccessTokenKiller;
use App\Models\ApiToken;
use App\Models\User;
use App\Rules\APITokenRule;
use Illuminate\Http\Request;
use Validator;

class APITokenController extends APIBaseController
{

    public function __construct()
    {
        ApiToken::InitTokensTypes();
    }

    private function createUserRefreshToken(string $user_id)
    {
        return ApiToken::create([
            'token_type' => ApiToken::$RefreshToken->type,
            'user_id' => $user_id
        ]);
    }

    private function createUserAccessToken(string $user_id)
    {
        return ApiToken::create([
            'token_type' => ApiToken::$AccessToken->type,
            'user_id' => $user_id
        ]);
    }

    public function grantUserRefreshToken(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|uuid|exists:users'
        ]);

        if ($validator->fails()) {
            return $this->response->errorBadRequest($validator->errors()->toJson());
        }

        $user_id = $request->get('user_id');
        $refresh_token = ApiToken::where('token_type', ApiToken::$RefreshToken->type)->where('user_id', $user_id);
        if ($refresh_token->exists()) {
            $refresh_token->delete();
            ApiToken::where('token_type', ApiToken::$AccessToken->type)->where('user_id', $user_id)->delete();
        }

        $refresh_token = $this->createUserRefreshToken($user_id)->token;
        User::find($user_id)->update(['refresh_token' => $refresh_token]);

        return [
            'refresh_token' => $refresh_token,
            'access_token' => $this->createUserAccessToken($user_id)->token
        ];
    }

    public function grantUserAccessToken(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'bail|required|uuid|exists:users',
            'refresh_token' => ['required', new APITokenRule($request->get('user_id'), ApiToken::$RefreshToken->type)]
        ]);

        if ($validator->fails()) {
            return $this->response->errorBadRequest($validator->errors()->toJson());
        }

        $user_id = $request->get('user_id');
        $accessToken = ApiToken::where('token_type', ApiToken::$AccessToken->type)->where('user_id', $user_id);
        if ($accessToken->exists())
            $accessToken->delete();

        $accessToken = $this->createUserAccessToken($user_id);
        $accessTokenKiller = new AccessTokenKiller($accessToken->id);
        $accessTokenKiller->delay(now()->addMinutes(ApiToken::$AccessToken->expirationTime));
        $this->dispatch($accessTokenKiller);

        return ['access_token' => $accessToken->token];
    }

}
