<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
        $this->validate($request, ['name' => 'required', 'email' => 'required|email', 'message' => 'required']);
        Mail::send('emails.contact', array('inputs' => $inputs), function ($message) use ($inputs) {
            $message->from($inputs['email'], 'ExoSuite');
            $message->to('EIP.ExoSuite@gmail.com', 'ExoSuite')->subject('Message reçu du formulaire de contact du site');
        });
        return redirect('/');
    }
}
