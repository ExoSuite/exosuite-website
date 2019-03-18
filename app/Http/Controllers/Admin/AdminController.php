<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Facades\API;

class AdminController extends Controller
{
    public function home()
    {
        $access_token = session()->get('access_token');
        $profile = API::get('/user/me', [], ['Authorization' => 'Bearer ' . $access_token]);
        return view('admin.admin')->with(array("profile" => $profile));
    }
}
