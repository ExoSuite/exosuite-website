<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Facades\API;
use Carbon\Carbon;

class ProfileController extends Controller
{
    public function myProfileView()
    {
        $user = Auth::user();
        return view('profile')->with(array('user' => $user));
    }

    public function editMyProfileView()
    {
        $access_token = session()->get('access_token');
        $response = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $access_token]);
        if ($response['profile']->birthday != null)
            $response['profile']->birthday = Carbon::createFromFormat('Y-m-d', $response['profile']->birthday)->format('d/m/Y');
        return view('social.editprofile')->with(array('profile' => $response));
    }

    public function profileView($id)
    {
        $user = Auth::user();
        return view('profile')->with(array('user' => $user, 'id' => $id));
    }

    public function editMyProfile(Request $request)
    {
        $access_token = session()->get('access_token');
        $inputs = $request->all();
        $inputs['birthday'] = Carbon::createFromFormat('d/m/Y', $inputs['datetimepicker'])->format('Y-m-d');
        unset($inputs['datetimepicker']);
        array_filter($inputs);
        API::patch('/user/me/profile', $inputs, ['Authorization' => 'Bearer ' . $access_token]);
        API::patch('/user/me', $inputs, ['Authorization' => 'Bearer ' . $access_token]);
        return redirect('profile/edit');
    }

    public function friendsView()
    {
        return view('social.friends');
    }
}
