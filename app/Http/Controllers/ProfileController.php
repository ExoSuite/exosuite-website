<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Facades\API;
use Carbon\Carbon;

class ProfileController extends Controller
{
    private const userFields = array("first_name", "last_name", "nick_name");

    private const profileFields = array("city", "birthday", "description");

    public function editMyProfileView()
    {
        $access_token = session()->get('access_token');
        $response = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $access_token]);
        $userId = Auth::id();
        $pictureToken = session()->get('view-picture')['accessToken'];
        $groups = API::get('/user/me/groups', [], ['Authorization' => 'Bearer ' . $access_token]);
        if ($response['profile']->birthday != null) {
            $response['profile']->birthday = Carbon::createFromFormat('Y-m-d', $response['profile']->birthday)->format('d/m/Y');
        }
        return view('social.editprofile')->with(array('profile' => $response, 'userId' => $userId, 'pictureToken' => $pictureToken, 'groups' => $groups['data']));
    }

    public function profileView($id)
    {
        $user = Auth::user();
        return view('profile')->with(array('user' => $user, 'id' => $id));
    }

    public function editMyProfile(Request $request)
    {
        $access_token = session()->get('access_token');
        $inputs = $request->all();
        if ($inputs['datetimepicker'] != null) {
            $inputs['birthday'] = Carbon::createFromFormat('d/m/Y', $inputs['datetimepicker'])->format('Y-m-d');
            unset($inputs['datetimepicker']);
        }
        $collection = collect($inputs)->filter();
        $userFields = $collection->only(self::userFields);
        $userProfile = $collection->only(self::profileFields);

        if ($userFields->isNotEmpty()) {
            API::patch('/user/me/profile', $userProfile->all(), ['Authorization' => 'Bearer ' . $access_token]);
        }
        if ($userProfile->isNotEmpty()) {
            API::patch('/user/me', $userFields->all(), ['Authorization' => 'Bearer ' . $access_token]);
        }
        return redirect('profile/edit');
    }

    public function friendsView()
    {
        return view('social.friends');
    }

    public function uploadAvatar(Request $request)
    {
        $access_token = session()->get('access_token');
        API::postPicture("/user/me/profile/picture/avatar", $request->file('picture'), ['Authorization' => "Bearer $access_token"]);
        return redirect('/profile');
    }


    public function addpostView(Request $request)
    {
        $access_token = session()->get('access_token');
        $user_id = Auth::id();
        $postContent = $request["postText"];
        $response = API::Post("/user/$user_id/dashboard/posts", ["content" => $postContent], ['Authorization' => 'Bearer ' . $access_token]);
        return redirect(route('get_newsfeed'));
    }

    public function updatepostView(Request $request)
    {
        $access_token = session()->get('access_token');
        $user_id = Auth::id();
        $pcontent = $request["editText"];
        $postId = $request['postId'];
        $response = API::patch("user/$user_id/dashboard/posts/$postId", ['content' => $pcontent], ['Authorization' => 'Bearer ' . $access_token]);
        return redirect(route('get_profile'));

    }

    public function deletepostView(Request $request)
    {
        $access_token = session()->get('access_token');
        $user_id = Auth::id();
        $postId = $request['id'];
        $response = API::delete("/user/$user_id/dashboard/posts/$postId", [], ['Authorization' => 'Bearer ' . $access_token]);
        return redirect(route('get_profile'));
    }

    public function getpostfromdashboard(Request $request)
    {
        $access_token = session()->get('access_token');
        $user_id = Auth::id();
        $posts = API::get("user/$user_id/dashboard/posts", [], ['Authorization' => 'Bearer ' . $access_token]);
        $all_posts = $posts['data'];
        dd($all_posts);
        //return ($all_posts);
        return redirect(route('get_newsfeed'));
    }

    public function getRuns()
    {
        $accessToken = session()->get('access_token');
        $userId = Auth::id();
        $pictureToken = session()->get('view-picture')['accessToken'];
        $profile = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $accessToken]);
        $groups = API::get('/user/me/groups', [], ['Authorization' => 'Bearer ' . $accessToken]);
        $runs = API::get('/user/me/run', [], ['Authorization' => 'Bearer ' . $accessToken]);
        return view('social.runs')->with(array('profile' => $profile, 'groups' => $groups['data'], 'pictureToken' => $pictureToken, 'userId' => $userId, 'runs' => $runs['data']));
    }
}
