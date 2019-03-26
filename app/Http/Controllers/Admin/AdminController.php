<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\CreateUser;
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
        $users = User::orderBy('created_at', "desc")->take(8)->get();
        $pictureToken = API::post("/user/me/profile/picture/token", [], ['Authorization' => "Bearer $accessToken"])['access_token'];
        return view('admin.admin')->with(array("profile" => $profile, "users" => $users, "pictureToken" => $pictureToken));
    }

    public function allUserView()
    {
        $accessToken = session()->get('access_token');
        $profile = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $accessToken]);
        $users = User::all();
        $pictureToken = API::post("/user/me/profile/picture/token", [], ['Authorization' => "Bearer $accessToken"])['access_token'];
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
        $userProfile = [];
        $friends = [];
        $followers = [];
        $posts = [];
        $pictureToken = API::post("/user/me/profile/picture/token", [], ['Authorization' => "Bearer $access_token"])['access_token'];
        try {
            $userProfile = API::get("/user/$userId/profile", [], ['Authorization' => 'Bearer ' . $access_token]);
            $followers = API::get("/user/$userId/follows/followers", [], ['Authorization' => "Bearer $access_token"]);
            $friends = API::get("/user/$userId/friendship", [], ['Authorization' => "Bearer $access_token"]);
            $posts = API::get("/user/$userId/dashboard/posts", [], ['Authorization' => 'Bearer ' . $access_token])['data'];
        } catch (Exception $ex) {
            abort(404, 'User not found');
        }
        return view('admin.userProfile', array("profile" => $profile, "userProfile" => $userProfile,
            'pictureToken' => $pictureToken, 'followers' => $followers, 'friends' => $friends, 'posts' => $posts));
    }
}
