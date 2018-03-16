<?php

namespace App\Http\Controllers\WebSite\Auth;

use App\Http\Controllers\WebSite\Controller;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\Request;

class RegisterController extends Controller
{

    public function register(Request $request)
    {
        try {
            $this->APICall($request, 'POST', 'api/authenticate/register', $request->all());
        } catch (GuzzleException $e) {
            return $e->getCode();
        }
        return $this->response->getStatusCode();
    }

    public function registerView()
    {
        return view("auth.register");
    }
}
