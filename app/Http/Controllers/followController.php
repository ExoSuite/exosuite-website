<?php


namespace App\Http\Controllers;


use App\Facades\API;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Carbon\Carbon;


class followController
{
    public function deleteaFollow($id){
        $accessToken = session()->get('access_token');
        $userId = $id;
        $
        API::delete("user/me/follows/$userId",  [], ['Authorization' => 'Bearer ' . $accessToken]);
        return redirect(route('get_user_profile', $id));
    }
    public function checkIfIamFollowing(){
        $accessToken = session()->get('access_token');
        $userId = Auth::id();
        API::get("user/$userId/follows/",  [], ['Authorization' => 'Bearer ' . $accessToken]);

    }
    public function getFollowers($id){
        $accessToken = session()->get('access_token');
        $userId = $id;
        API::get("user/$userId/follows/followers/",  [], ['Authorization' => 'Bearer ' . $accessToken]);
    }

    public function getMyFollowers(){
        $accessToken = session()->get('access_token');
        $userId = Auth::id();
        API::get("user/me/follows/followers/",  [], ['Authorization' => 'Bearer ' . $accessToken]);
    }
    public function getFollowersCount($id){
        $accessToken = session()->get('access_token');
        $userId = $id;
        API::get("user/$userId/follows/followers/count/",  [], ['Authorization' => 'Bearer ' . $accessToken]);
    }
    public function getMyFollowersCount(){
        $accessToken = session()->get('access_token');
        $userId = Auth::id();
        API::get("user/me/follows/followers/count/",  [], ['Authorization' => 'Bearer ' . $accessToken]);
    }
    public function getFollows($id){
        $accessToken = session()->get('access_token');
        $userId =$id;
        API::get("user​/$userId/follows/following/",  [], ['Authorization' => 'Bearer ' . $accessToken]);
    }
    public function getMyFollows(){
        $accessToken = session()->get('access_token');
        $userId = Auth::id();
        API::get("user/me/follows/following/",  [], ['Authorization' => 'Bearer ' . $accessToken]);
    }
    public function getFollowsUsersCount($id){
        $accessToken = session()->get('access_token');
        $userId = $id;
        API::get("user/$userId/follows/following/count/",  [], ['Authorization' => 'Bearer ' . $accessToken]);
    }
    public function getMyFollowsCount(){
        $accessToken = session()->get('access_token');
        $userId = Auth::id();
        API::get("user/me/follows/following/count/",  [], ['Authorization' => 'Bearer ' . $accessToken]);
    }

    public function createaFollow($id){
        $accessToken = session()->get('access_token');
        $userId = $id;
        API::post("user/$userId/follows/",  [], ['Authorization' => 'Bearer ' . $accessToken]);
        return redirect(route('get_user_profile', $id));
    }


}
