<?php

namespace App\Http\Controllers;

use App\Facades\API;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SocialController extends Controller
{
    public function profile()
    {
        $accessToken = session()->get('access_token');
        $userId = Auth::id();
        $pictureToken = session()->get('view-picture')['accessToken'];
        $profile = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $accessToken]);
        $groups = API::get('/user/me/groups', [], ['Authorization' => 'Bearer ' . $accessToken]);
        $posts = API::get("/user/$userId/dashboard/posts", [], ['Authorization' => 'Bearer ' . $accessToken])['data'];
        foreach ($posts as $post) {
            $post->likes = API::get("/user/$userId/dashboard/posts/$post->id/likes", [], ['Authorization' => 'Bearer ' . $accessToken]);
            foreach ($post->likes as $struct) {
                if ($userId === $struct->liker_id)
                    $post->isMyLike = $struct;
                else
                    $post->isMyLike = null;
            }
        }
        $friends = API::get("user/$userId/friendship/", [], ['Authorization' => 'Bearer ' . $accessToken])['data'];
        $allusers = API::get("/user/search", ["text" => "*"], ['Authorization' => 'Bearer ' . $accessToken])['data'];
        $getmyfollows = API::get("user/me/follows/following/count/", [], ['Authorization' => 'Bearer ' . $accessToken]);
        $getmyfriends = API::get("user/me/friendship/", [], ['Authorization' => 'Bearer ' . $accessToken]);
        $mypendingrequest = API::get('/user/me/pending_requests/', [], ['Authorization' => 'Bearer ' . $accessToken])['data'];
        return view('social.profile')->with(array('profile' => $profile, 'groups' => $groups['data'], 'pictureToken' => $pictureToken, 'userId' => $userId, 'posts' => $posts, 'friends' => $friends, 'allusers' => $allusers, 'getmyfollow' => $getmyfollows, 'getmyfriend' => $getmyfriends, 'mypendingrequest' => $mypendingrequest));
    }

    public function likePost($postId)
    {
        $accessToken = session()->get('access_token');
        $userId = Auth::id();
        return API::post("/user/$userId/dashboard/posts/$postId/likes", [], ['Authorization' => 'Bearer ' . $accessToken]);
    }

    public function unlikePost($postId)
    {
        $accessToken = session()->get('access_token');
        $userId = Auth::id();
        return API::delete("/user/$userId/dashboard/posts/$postId/likes", [], ['Authorization' => 'Bearer ' . $accessToken]);
    }

    public function home()
    {
        $accessToken = session()->get('access_token');
        $userId = Auth::id();
        $pictureToken = session()->get('view-picture')['accessToken'];
        $profile = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $accessToken]);
        $groups = API::get('/user/me/groups', [], ['Authorization' => 'Bearer ' . $accessToken]);
        $posts = API::get("/user/$userId/dashboard/posts", [], ['Authorization' => 'Bearer ' . $accessToken])['data'];
        $allusers = API::get("/user/search", ["text" => "*"], ['Authorization' => 'Bearer ' . $accessToken])['data'];
        $mypendingrequest = API::get('/user/me/pending_requests/', [], ['Authorization' => 'Bearer ' . $accessToken])['data'];
        foreach ($posts as $post)
            $post->likes = API::get("/user/$userId/dashboard/posts/$post->id/likes", [], ['Authorization' => 'Bearer ' . $accessToken]);
        return view('social.newsfeed')->with(array('profile' => $profile, 'groups' => $groups['data'], 'pictureToken' => $pictureToken, 'userId' => $userId, 'posts' => $posts, 'allusers' => $allusers, 'mypendingrequest' => $mypendingrequest));
    }

    public function achievmentsHome()
    {
        $accessToken = session()->get('access_token');
        $userId = Auth::id();
        $pictureToken = session()->get('view-picture')['accessToken'];
        $profile = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $accessToken]);
        $groups = API::get('/user/me/groups', [], ['Authorization' => 'Bearer ' . $accessToken]);
        return view('social.achievments')->with(array('profile' => $profile, 'groups' => $groups['data'], 'pictureToken' => $pictureToken, 'userId' => $userId));
    }

    public function groupView()
    {
        $accessToken = session()->get('access_token');
        $userId = Auth::id();
        $pictureToken = session()->get('view-picture')['accessToken'];
        $profile = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $accessToken]);
        $groups = API::get('/user/me/groups', [], ['Authorization' => 'Bearer ' . $accessToken]);
        $result = API::get("/user/search", ['text' => '*'], ['Authorization' => 'Bearer ' . $accessToken]);
        return view('social.createGroup')->with(array('profile' => $profile, 'groups' => $groups['data'], 'pictureToken' => $pictureToken, 'userId' => $userId, 'resultSearch' => $result));
    }

    public function createGroup(Request $request)
    {
        $accessToken = session()->get('access_token');
        $userId = Auth::id();
        $pictureToken = session()->get('view-picture')['accessToken'];
        $profile = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $accessToken]);
        $toFind = $request['select'];
        $groupToken = session()->get('group')['accessToken'];
        API::post('/group', ['users' => $toFind], ['Authorization' => 'Bearer ' . $groupToken]);
        $groups = API::get('/user/me/groups', [], ['Authorization' => 'Bearer ' . $accessToken]);
        return view('social.createGroup')->with(array('profile' => $profile, 'groups' => $groups['data'], 'pictureToken' => $pictureToken, 'userId' => $userId));
    }

    public function search(Request $request)
    {
        $accessToken = session()->get('access_token');
        $toFind = $request['toFind'];
        if ($toFind != "")
            $toFind = "*";
        $result = API::get("/user/search", ['text' => $toFind], ['Authorization' => 'Bearer ' . $accessToken]);
        return $result;
    }
}
