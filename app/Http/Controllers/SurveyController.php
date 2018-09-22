<?php

namespace App\Http\Controllers;

use App\Models\Opinion;
use Illuminate\Http\Request;

class SurveyController extends Controller
{
    public function postSurvey(Request $request)
    {
        $json = json_decode($request->get('json'), true);
        if (isset($json['Vous êtes intéressé ? Laissez-nous votre mail !'])) {
            Opinion::create(["survey" => $request->get('json'), "email" => $json['Vous êtes intéressé ? Laissez-nous votre mail !']]);
        } else {
            Opinion::create(["survey" => $request->get('json'), "email" => null]);
        }
        return response()->json([], 200);
    }

    public function index()
    {
        return view('survey');
    }
}
