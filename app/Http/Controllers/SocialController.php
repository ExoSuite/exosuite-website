<?php

namespace App\Http\Controllers;

use App\Facades\API;
use Illuminate\Support\Facades\Auth;

class SocialController extends Controller
{
    public function profile()
    {
        $accessToken = session()->get('access_token');
        $userId = Auth::id();
        $pictureToken = API::post("/user/me/profile/picture/token", [], ['Authorization' => "Bearer $accessToken"])['access_token'];
        $profile = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $accessToken]);
        $groups = API::get('/user/me/groups', [], ['Authorization' => 'Bearer ' . $accessToken]);
        return view('social.profile')->with(array('profile' => $profile, 'groups' => $groups['data'], 'pictureToken' => $pictureToken, 'userId' => $userId));
    }

    public function home()
    {
        $accessToken = session()->get('access_token');
        $userId = Auth::id();
        $pictureToken = API::post("/user/me/profile/picture/token", [], ['Authorization' => "Bearer $accessToken"])['access_token'];
        $profile = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $accessToken]);
        $groups = API::get('/user/me/groups', [], ['Authorization' => 'Bearer ' . $accessToken]);
        return view('social.newsfeed')->with(array('profile' => $profile, 'groups' => $groups['data'], 'pictureToken' => $pictureToken, 'userId' => $userId));
    }

    public function achievmentsHome()
    {
        $accessToken = session()->get('access_token');
        $userId = Auth::id();
        $pictureToken = API::post("/user/me/profile/picture/token", [], ['Authorization' => "Bearer $accessToken"])['access_token'];
        $profile = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $accessToken]);
        $groups = API::get('/user/me/groups', [], ['Authorization' => 'Bearer ' . $accessToken]);
        return view('social.achievments')->with(array('profile' => $profile, 'groups' => $groups['data'], 'pictureToken' => $pictureToken, 'userId' => $userId));
    }
}
