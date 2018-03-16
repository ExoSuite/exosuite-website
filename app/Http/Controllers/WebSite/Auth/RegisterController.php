<?php

namespace App\Http\Controllers\WebSite\Auth;

use App\Helpers\APIClientAppHelper;
use App\Models\User;
use GuzzleHttp\Psr7\Request as APIRequest;
use App\Http\Controllers\WebSite\Controller;
use Illuminate\Http\Request;
use GuzzleHttp\Client;

class RegisterController extends Controller
{
    private function ApiUri(Request $request, string $apiUri)
    {
        return APIClientAppHelper::getHttp($request) . APIClientAppHelper::getApiUri() . '/' . $apiUri;
    }
    public function register(Request $request)
    {
        $client = new Client(['headers' => ['client-web' => APIClientAppHelper::getClientWebAppToken()]]);
        $response = $client->request('POST', $this->ApiUri($request, 'api/authenticate/register'), [
           'form_params' => $request->all()
        ]);
        return $response->getStatusCode();
    }

    public function registerView()
    {
        return view("auth.register");
    }
}
