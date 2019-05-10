<?php

namespace App\Http\Controllers;

use App\Facades\API;
use Illuminate\Support\Facades\Auth;

class SocialController extends Controller
{
    public function profile()
    {
        $access_token = session()->get('access_token');
        $user_id = Auth::id();
        $response = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $access_token]);
        $posts = API::get("user/$user_id/dashboard/posts", [], ['Authorization' => 'Bearer ' . $access_token]);
        return view('social.profile')->with(array('profile' => $response, 'posts' => array_reverse($posts['data'])));
    }

    public function home()
    {
        $access_token = session()->get('access_token');
        $response = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $access_token]);
        return view('social.newsfeed')->with(array('profile' => $response));
    }
}
