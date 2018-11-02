<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App;
use Mail;

class ContactController extends Controller
{
    public function index()
    {
        return view('contact')->with(array('mark' => true));
    }

    public function contact(Request $request)
    {
        $inputs = $request->all();
        $toValidate =  ['name' => 'required', 'email' => 'required|email', 'message' => 'required'];
        if (App::environment('production'))
            $toValidate['g-recaptcha-response'] = 'required|captcha';
        $this->validate($request, $toValidate);
        Mail::to(array('email' => 'contact@exosuite.fr'))->send(new ContactMail($inputs));
        return view('/contact')->with(['send' => true]);
    }
}
