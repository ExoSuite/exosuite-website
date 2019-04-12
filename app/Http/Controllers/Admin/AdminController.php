<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\CreateUser;
use App\Models\Commentary;
use App\Models\Group;
use App\Models\Like;
use App\Models\Message;
use App\Models\User;
use App\Http\Controllers\Controller;
use App\Facades\API;
use Exception;

class AdminController extends Controller
{
    public function home()
    {
        $accessToken = session()->get('access_token');
        $profile = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $accessToken]);
        $users = User::orderBy('created_at', 'desc')->take(8)->get();
        $totalUsers = User::count();
        $pictureToken = session()->get('view-picture')['accessToken'];
        $likes = Like::count();
        $commentary = Commentary::count();
        $messages = Message::count();
        $groups = Group::count();
        return view('admin.admin')->with(array("profile" => $profile, "users" => $users, "pictureToken" => $pictureToken, "totalUsers" => $totalUsers, "likes" => $likes, "commentary" => $commentary, "messages" => $messages, 'groups' => $groups));
    }

    public function allUserView()
    {
        $accessToken = session()->get('access_token');
        $profile = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $accessToken]);
        $users = User::all();
        $pictureToken = session()->get('view-picture')['accessToken'];
        return view('admin.listUser')->with(array("profile" => $profile, "users" => $users, "pictureToken" => $pictureToken));
    }

    public function createUser(CreateUser $request)
    {
        API::post('/auth/register', $request->all(), []);
        return redirect(route('get_users'));
    }

    public function userProfile($userId)
    {
        $access_token = session()->get('access_token');
        $profile = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $access_token]);
        $pictureToken = session()->get('view-picture')['accessToken'];
        $userProfile = API::get("/user/$userId/profile", [], ['Authorization' => 'Bearer ' . $access_token]);
        $followers = API::get("/user/$userId/follows/followers", [], ['Authorization' => "Bearer $access_token"]);
        $friends = API::get("/user/$userId/friendship", [], ['Authorization' => "Bearer $access_token"]);
        $posts = API::get("/user/$userId/dashboard/posts", [], ['Authorization' => 'Bearer ' . $access_token])['data'];
        return view('admin.userProfile', array("profile" => $profile, "userProfile" => $userProfile, 'pictureToken' => $pictureToken, 'followers' => $followers, 'friends' => $friends, 'posts' => $posts));
    }
}
