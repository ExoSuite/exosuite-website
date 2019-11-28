<?php


namespace App\Http\Controllers;


use App\Facades\API;
use Illuminate\Support\Facades\Auth;


class widgetlibraryController
{
    public function home()
    {
        $accessToken = session()->get('access_token');
        $userId = Auth::id();
        $pictureToken = session()->get('view-picture')['accessToken'];
        $profile = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $accessToken]);
        $groups = API::get('/user/me/groups', [], ['Authorization' => 'Bearer ' . $accessToken]);
        $allusers = API::get("/user/search", ["text" => "*"], ['Authorization' => 'Bearer ' . $accessToken])['data'];
        return view('social.widgetslibrary')->with(array('profile' => $profile, 'groups' => $groups['data'], 'pictureToken' => $pictureToken, 'userId' => $userId, 'allusers' => $allusers));
    }

    public function togglebuttonevent(){
      
    }
}