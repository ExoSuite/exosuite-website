<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Models\User;
use App\Rules\LoginPasswordRule;
use Validator;

class APIAuthController extends APIBaseController
{

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => "required|email|exists:users",
            'password' =>
                ["required", new LoginPasswordRule($request->get('password'), $request->get('email'))]
        ]);
        if ($validator->fails())
            return $this->response->errorUnauthorized($validator->errors()->toJson());
        return User::where("email", $request->get('email'))->first();
    }
}
