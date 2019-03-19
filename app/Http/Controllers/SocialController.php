<?php

namespace App\Http\Controllers;

use App\Facades\API;

class SocialController extends Controller
{
    public function profile()
    {
        $access_token = session()->get('access_token');
        $profile = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $access_token]);
        $groups = API::get('/user/me/groups', [], ['Authorization' => 'Bearer ' . $access_token]);
        return view('social.profile')->with(array('profile' => $profile, 'groups' => $groups['data']));
    }

    public function home()
    {
        $access_token = session()->get('access_token');
        $profile = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $access_token]);
        $groups = API::get('/user/me/groups', [], ['Authorization' => 'Bearer ' . $access_token]);
        return view('social.newsfeed')->with(array('profile' => $profile, 'groups' => $groups['data']));
    }

    public function achievmentsHome()
    {
        $access_token = session()->get('access_token');
        $profile = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $access_token]);
        $groups = API::get('/user/me/groups', [], ['Authorization' => 'Bearer ' . $access_token]);
        return view('social.achievments')->with(array('profile' => $profile, 'groups' => $groups['data']));
    }
}
