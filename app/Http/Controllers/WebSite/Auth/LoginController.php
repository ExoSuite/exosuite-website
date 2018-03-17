<?php

namespace App\Http\Controllers\WebSite\Auth;

use App\Http\Controllers\WebSite\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use GuzzleHttp\Exception\GuzzleException;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/login';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function loginView()
    {
        return view('auth.login');
    }

    public function login(Request $request)
    {
        try {
            $this->APICall($request, 'POST', 'api/authenticate/login', $request->all());
        } catch (BadResponseException $e) {
            $response = json_decode($e->getResponse()->getBody()->getContents(), true);
            $message = json_decode($response['message'], true);
            return view('auth.login')->withErrors($message);
        }
        return redirect('/login');
    }

    public function recoverView()
    {
        return view('auth.passwords.email');
    }
}
