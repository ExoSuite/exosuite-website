<?php

namespace App\Http\Controllers\Auth;


use App\Facades\API;
use App\Facades\InternalRequest;
use App\Http\Controllers\Controller;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Http\Request;

class RegisterController extends Controller
{

    public function register(Request $request)
    {
        if ($request->filled('nick_name')) {
            $data = $request->all();
        } else {
            $data = $request->except('nick_name');
        }
        try {
            // TODO : Remettre en place le recaptcha ici et dans le login
            //$this->validate($request, ['g-recaptcha-response' => 'required|captcha']);
            API::post('/auth/register', $data);
            InternalRequest::request(Request::METHOD_POST, route('loginAPI'), $data);
            return redirect('profile');
        } catch (ClientException $e) {
            $response = json_decode($e->getResponse()->getBody()->getContents(), true);
            $message = $response['errors'];
            return view('auth.register')->withErrors($message);
        }
    }

    public function registerView()
    {
        return view("auth.register");
    }
}
