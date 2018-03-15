<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Validator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class APIUserController extends APIBaseController
{
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|unique:users|email',
            'first_name' => 'required|max:50|alpha',
            'last_name' => 'required|max:50|alpha',
            'nickname' => 'max:50',
            'password' => 'required|max:255|confirmed'
        ]);
        if ($validator->fails()) {
            return $this->response->errorBadRequest($validator->errors()->toJson());
        }

        $infos = $request->all();
        $infos['password'] = Hash::make($infos['password']);
        User::create($infos);

        return $this->response->created();
    }

    public function getAllUsers() {
        return  User::all();
    }

    public function getUserByUuid($uuid) {
        return User::find($uuid);
    }

    public function getUserByEmail($email) {
        return User::where('email', $email)->first();
    }

    public function getUserByName($name) {
        return User::where('first_name', 'like', $name.'%')->orWhere('last_name', 'like', $name.'%')->get();
    }
}
