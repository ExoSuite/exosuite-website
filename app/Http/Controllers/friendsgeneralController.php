<?php


namespace App\Http\Controllers;


use App\Facades\API;
use Carbon\Carbon;
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
        if($chimf != null){
            $checkfollowbool = true;
        }
        else
            $checkfollowbool = false;
        $getMyFriendshipWith =  API::get("user/". $id ."/friendship/existingFriendship",  [], ['Authorization' => 'Bearer ' . $access_token]);
        $pictureToken = session()->get('view-picture')['accessToken'];
        $groups = API::get('/user/me/groups', [], ['Authorization' => 'Bearer ' . $access_token]);
        if ($response['profile']->birthday != null) {
            $response['profile']->birthday = Carbon::createFromFormat('Y-m-d', $response['profile']->birthday)->format('d/m/Y');
        }
        $getuserfollows =  API::get("user/". $id ."/follows/following/count/",  [], ['Authorization' => 'Bearer ' . $access_token]);
        $getuserfriends =  API::get("/user/" . $id . "/friendship/",  [], ['Authorization' => 'Bearer ' . $access_token]);
        $mypendingrequest =  API::get('/user/me/pending_requests/',  [], ['Authorization' => 'Bearer ' . $access_token])['data'];
        $allusers = API::get("/user/search", ["text" => "*"],  ['Authorization' => 'Bearer ' . $access_token]);
        return view('social.friendProfile')->with(array('profile' => $response, 'userId' => $userId, 'pictureToken' => $pictureToken, 'groups' => $groups['data'], 'allusers' => $allusers['data'], 'chmf ' => $chimf, 'getuserfollows' =>   $getuserfollows, 'getuserfriends' => $getuserfriends, 'mypendingrequest' => $mypendingrequest, 'checkfollowbool' =>  $checkfollowbool, 'getMyFriendshipWith' => $getMyFriendshipWith));
    }

    public function getFriendships($id){
        $accessToken = session()->get('access_token');
        $userId = $id;
        API::get("user/$userId/friendship/",  [], ['Authorization' => 'Bearer ' . $accessToken]);
        return redirect(route('get_profile'));
    }

    public function deleteFriendships($id){
        $accessToken = session()->get('access_token');
        return API::delete("user/me/friendship/$id",  [], ['Authorization' => 'Bearer ' . $accessToken]);
    }

    public function getMyFriendships(){
        $accessToken = session()->get('access_token');
        $userId = Auth::id();
        API::get("/me/friendship/",  [], ['Authorization' => 'Bearer ' . $accessToken]);
        return redirect(route('get_profile'));
    }

    public function existingFriendship($id){
        $accessToken = session()->get('access_token');
        $userId = $id;
        API::get("user/$userId/friendship/existingFriendship",  [], ['Authorization' => 'Bearer ' . $accessToken]);
        return redirect(route('get_profile'));
    }

    public function sendFriendshipRequest($id){
        $accessToken = session()->get('access_token');
        $userId = $id;
        return API::post("user/$userId/friendship/",  [], ['Authorization' => 'Bearer ' . $accessToken]);
    }

    public function acceptRequest($userId){
        $accessToken = session()->get('access_token');
        API::post("user/me/friendship/$userId/accept",  [], ['Authorization' => 'Bearer ' . $accessToken]);
        return back();
    }

    public function declineRequest($userId){
        $accessToken = session()->get('access_token');
        API::post("user/me/friendship/$userId/decline/",  [], ['Authorization' => 'Bearer ' . $accessToken]);
        return redirect(route('get_user_profile', $userId));
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

    public function getmypending(){
        $accessToken = session()->get('access_token');
        API::get("/me/pending_requests/",  [], ['Authorization' => 'Bearer ' . $accessToken]);
    }
    public function getuserspendings($id){
        $accessToken = session()->get('access_token');
        $userId = $id;
        API::get("user/$userId/pending_requests/",  [], ['Authorization' => 'Bearer ' . $accessToken]);
    }
    public function deletepending(){
        $accessToken = session()->get('access_token');
        API::delete("/me/pending_requests/{request}",  [], ['Authorization' => 'Bearer ' . $accessToken]);
    }

}
