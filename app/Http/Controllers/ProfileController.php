<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Facades\API;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    private const userFields = array("first_name", "last_name", "nick_name");

    private const profileFields = array("city", "birthday", "description");

    public function editMyProfileView()
    {
        $access_token = session()->get('access_token');
        $response = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $access_token]);
        $userId = Auth::id();
        $pictureToken = API::post("/user/me/profile/picture/token", [], ['Authorization' => "Bearer $access_token"])['access_token'];
        $groups = API::get('/user/me/groups', [], ['Authorization' => 'Bearer ' . $access_token]);
        if ($response['profile']->birthday != null) {
            $response['profile']->birthday = Carbon::createFromFormat('Y-m-d', $response['profile']->birthday)->format('d/m/Y');
        }
        return view('social.editprofile')->with(array('profile' => $response, 'userId' => $userId, 'pictureToken' => $pictureToken, 'groups' => $groups['data']));
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
        $user = Auth::user()->id;
        API::postPicture('/user/' . $user . '/picture/avatar', $request->file('picture'), ['Authorization' => 'Bearer ' . $access_token]);
        return redirect('/profile');
    }
}
