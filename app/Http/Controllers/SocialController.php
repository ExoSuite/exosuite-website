<?php

namespace App\Http\Controllers;

use App\Facades\API;

class SocialController extends Controller
{
    public function profile()
    {
        $access_token = session()->get('access_token');
        $response = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $access_token]);
        return view('social.profile')->with(array('profile' => $response));
    }

    public function home()
    {
        $access_token = session()->get('access_token');
        $response = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $access_token]);
        return view('social.newsfeed')->with(array('profile' => $response));
    }
}
