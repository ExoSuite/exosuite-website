<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    public function myProfileView()
    {
        $user = Auth::user();
        return view('profile')->with(array('user' => $user));
    }

    public function editMyProfileView()
    {
        $user = Auth::user();
        return view('social.editprofile')->with(array('user' => $user));
    }

    public function profileView($id)
    {
        $user = Auth::user();
        return view('profile')->with(array('user' => $user, 'id' => $id));
    }

    public function editMyProfile(Request $request)
    {
        $user = Auth::user();
        $inputs = $request->all();
        if (isset($inputs['firstname'])) {
            $user->update(['first_name' => $inputs['firstname']]);
        }
        if (isset($inputs['lastname'])) {
            $user->update(['last_name' => $inputs['lastname']]);
        }
        if (isset($inputs['city'])) {
            $user->update(['city' => $inputs['city']]);
        }
        if (isset($inputs['birthday'])) {
            $user->update(['birthday' => $inputs['birthday']]);
        }
        if (isset($inputs['about'])) {
            $user->update(['about' => $inputs['about']]);
        }
        if (isset($inputs['nickname'])) {
            $user->update(['nickname' => $inputs['nickname']]);
        }
        return redirect('profile');
    }
}
