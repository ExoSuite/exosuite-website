<?php

namespace Tests\API;

use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\Request;
use Tests\APITestCase;
use App\Helpers\APIClientAppHelper;
use GuzzleHttp\Client;

class ClientAppMiddlewareTest extends APITestCase
{
    public function testGenerateApiURI() {
        $this->assertTrue('http://api.exosuite.local/api/authenticate/register' === $this->httpAPIUri('api/authenticate/register'));
    }

    public function testAssertUnauthorizedCallToApi()
    {
        $response = $this->call('POST', $this->httpAPIUri('api/authenticate/register'));
        $response->assertStatus(401);
    }

    public function testAssertAuthorizedCallToApiIncompleteRequest()
    {
        $client = new Client(['headers' => ['client-web' => APIClientAppHelper::getClientWebAppToken()]]);
        try {
            $client->request('POST', 'http://api.exosuite.local/api/authenticate/register', ['form_params' => []]);
        } catch (GuzzleException $e) {
            throw new \Exception($e->getMessage());
            $this->assertStatus(400, $e->getCode());
        }
    }
}
