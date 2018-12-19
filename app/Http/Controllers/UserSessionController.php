<?php

namespace App\Http\Controllers;

use App\Facades\API;
use App\Http\Requests\PatchUserToken;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use PeterPetrus\Auth\PassportToken;

class UserSessionController extends Controller
{
    public function getUserToken() {
        $token = API::checkAccessToken(null);
        if ($token instanceof PassportToken)
            return Response::json(["access_token" => $token->getToken()]);
        else
            return Response::json($token);
    }

    public function setUserToken(PatchUserToken $request) {
        session($request->validated());
    }
}
