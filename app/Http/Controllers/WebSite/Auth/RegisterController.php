<?php

namespace App\Http\Controllers\WebSite\Auth;

use App\Http\Controllers\WebSite\Controller;
use GuzzleHttp\Exception\BadResponseException;
use Illuminate\Http\Request;

class RegisterController extends Controller
{

    public function register(Request $request)
    {
        try {
            $this->APICall($request, 'POST', 'api/authenticate/register', $request->all());
        } catch (BadResponseException $e) {
            $response = json_decode($e->getResponse()->getBody()->getContents(), true);
            $message = json_decode($response['message'], true);
            return view('auth.register')->withErrors($message);
        }
        return redirect('/login');
    }

    public function registerView()
    {
        return view("auth.register");
    }
}
