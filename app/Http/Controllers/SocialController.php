<?php

namespace App\Http\Controllers;

class SocialController extends Controller
{
    public function profile()
    {
        return view('social.profile');
    }

    public function home()
    {
        return view('social.newsfeed');
    }
}
