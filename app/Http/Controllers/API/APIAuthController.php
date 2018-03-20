<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use App\Rules\LoginPasswordRule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
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
            return $this->response->errorForbidden($validator->errors()->toJson());
        $user = User::where("email", $request->get('email'))->first();
        return [
            'user_id' => $user->user_id,
            'email' => $user->email,
            'password' => Hash::createArgonDriver()->make($user->password)
        ];
    }
}
