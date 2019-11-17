<?php


namespace App\Http\Controllers;


use App\Facades\API;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class friendsgeneralController
{
    public function home()
    {
        $accessToken = session()->get('access_token');
        $userId = Auth::id();
        $pictureToken = session()->get('view-picture')['accessToken'];
        $profile = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $accessToken]);
        $groups = API::get('/user/me/groups', [], ['Authorization' => 'Bearer ' . $accessToken]);
        $friends = API::get("user/$userId/friendship/", [], ['Authorization' => 'Bearer ' . $accessToken])['data'];
        $allusers = API::get("/user/search", ["text" => "*"], ['Authorization' => 'Bearer ' . $accessToken])['data'];
        return view('social.friends')->with(array('profile' => $profile, 'groups' => $groups['data'], 'pictureToken' => $pictureToken, 'userId' => $userId, 'friends' => $friends, 'allusers' => $allusers));
    }

    public function getmyfriendshome(){
        $accessToken = session()->get('access_token');
        $userId = Auth::id();
        $pictureToken = session()->get('view-picture')['accessToken'];
        $profile = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $accessToken]);
        $groups = API::get('/user/me/groups', [], ['Authorization' => 'Bearer ' . $accessToken]);
        $friends = API::get("user/$userId/friendship/", [], ['Authorization' => 'Bearer ' . $accessToken])['data'];
        $allusers = API::get("/user/search", ["text" => "*"], ['Authorization' => 'Bearer ' . $accessToken])['data'];
        return view('social.friends')->with(array('profile' => $profile, 'groups' => $groups['data'], 'pictureToken' => $pictureToken, 'userId' => $userId, 'friends' => $friends, 'allusers' => $allusers));
    }

    public function getfriendsrequestshome(){
        $accessToken = session()->get('access_token');
        $userId = Auth::id();
        $pictureToken = session()->get('view-picture')['accessToken'];
        $profile = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $accessToken]);
        $groups = API::get('/user/me/groups', [], ['Authorization' => 'Bearer ' . $accessToken]);
        $friends = API::get("user/$userId/friendship/", [], ['Authorization' => 'Bearer ' . $accessToken])['data'];
        $allusers = API::get("/user/search", ["text" => "*"], ['Authorization' => 'Bearer ' . $accessToken])['data'];
        return view('social.friends')->with(array('profile' => $profile, 'groups' => $groups['data'], 'pictureToken' => $pictureToken, 'userId' => $userId, 'friends' => $friends, 'allusers' => $allusers));
    }

    public function togglebuttonevent(){

    }

    public function getUserProfile($id){
        $access_token = session()->get('access_token');
        $userId = $id;
        $response = API::get("/user/" . $id . "/profile", [], ['Authorization' => 'Bearer ' . $access_token]);
        $chimf =  API::get("user/". $id ."/follows/",  [], ['Authorization' => 'Bearer ' . $access_token]);
        $pictureToken = session()->get('view-picture')['accessToken'];
        $groups = API::get('/user/me/groups', [], ['Authorization' => 'Bearer ' . $access_token]);
        if ($response['profile']->birthday != null) {
            $response['profile']->birthday = Carbon::createFromFormat('Y-m-d', $response['profile']->birthday)->format('d/m/Y');
        }

      //  dd($chimf);
        $allusers = API::get("/user/search", ["text" => "*"],  ['Authorization' => 'Bearer ' . $access_token]);
        return view('social.friendProfile')->with(array('profile' => $response, 'userId' => $userId, 'pictureToken' => $pictureToken, 'groups' => $groups['data'], 'allusers' => $allusers, 'chmf ' => $chimf));
    }

    public function getFriendships($id){
        $accessToken = session()->get('access_token');
        $userId = $id;
        API::get("user/$userId/friendship/",  [], ['Authorization' => 'Bearer ' . $accessToken]);
        return redirect(route('get_profile'));
    }

    public function deleteFriendships($id){
        $accessToken = session()->get('access_token');
        $userId = $id;
        API::delete("user/$userId/friendship/",  [], ['Authorization' => 'Bearer ' . $accessToken]);
        return redirect(route('get_profile'));
    }

    public function getMyFriendships(){
        $accessToken = session()->get('access_token');
        $userId = Auth::id();
        API::get("/me/friendship/",  [], ['Authorization' => 'Bearer ' . $accessToken]);
        return redirect(route('get_profile'));
    }

    public function sendFriendshipRequest($id){
        $accessToken = session()->get('access_token');
        $userId = $id;
        API::post("user/$userId/friendship/",  [], ['Authorization' => 'Bearer ' . $accessToken]);
        return redirect(route('get_profile'));
    }

    public function acceptRequest($request){
        $accessToken = session()->get('access_token');
        $userId = Auth::id();
        API::post("/me/friendship/$request/accept/",  [], ['Authorization' => 'Bearer ' . $accessToken]);
    }

    public function declineRequest($request){
        $accessToken = session()->get('access_token');
        $userId = Auth::id();
        $resquest = "";
        API::post("/me/friendship/$request/decline/",  [], ['Authorization' => 'Bearer ' . $accessToken]);
    }

    public function getUser()
    {
        $accessToken = session()->get('access_token');
        API::get("/user/me",  [], ['Authorization' => 'Bearer ' . $accessToken]);
    }

    public function SearchUser(){
        $accessToken = session()->get('access_token');
        API::get("/user/search",  [], ['Authorization' => 'Bearer ' . $accessToken]);
    }

    public function getMyGroups(){
        $accessToken = session()->get('access_token');
        API::get("/user/me/groups",  [], ['Authorization' => 'Bearer ' . $accessToken]);
    }

}
