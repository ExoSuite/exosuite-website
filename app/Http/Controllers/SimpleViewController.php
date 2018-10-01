<?php

namespace App\Http\Controllers;

use App\Facades\API;

class SimpleViewController extends Controller
{
    public function home()
    {
        return view ('welcome');
    }

    public function exosuite()
    {
        return view('exosuite');
    }

    public function exorun()
    {
        return view('exorun');
    }

    public function exofun()
    {
        return view('exofun');
    }

    public function pricing()
    {
        return view('pricing');
    }

    public function about()
    {
        return view('about');
    }
}
