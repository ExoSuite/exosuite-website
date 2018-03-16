<?php

namespace App\Http\Controllers\WebSite;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Helpers\APIClientAppHelper;

class ApiController extends Controller
{
    public function requestAPI(Request $request)
    {
        $client = new Client(['base_uri' => 'https://httpbin.org']);
        $response = $client->request('GET', 'anything');
        return(APIClientAppHelper::getHttp($request));
    }
}
