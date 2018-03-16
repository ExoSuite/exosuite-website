<?php

namespace Tests\API;

use App\Helpers\APIClientAppHelper;
use GuzzleHttp\Exception\GuzzleException;
use Tests\APITestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;

class ClientAppMiddlewareTest extends APITestCase
{
    /**
     * A basic test example.
     *
     * @param string $uri
     * @return string
     */
    private function httpAPIUri(string $uri)  : string
    {
        return 'http://'.env('API_DOMAIN').'/'.$uri;
    }

    public function testAssertUnauthorizedCallToApi()
    {
        $response = $this->call('POST', $this->httpAPIUri('api/authenticate/register'));
        $response->assertStatus(401);
    }

    public function testAssertAuthorizedCallToApiIncompleteRequest()
    {
        $request = new Request();
        try {
            $this->APICall($request, 'POST', 'api/authenticate/register', $request->all());
            $this->assertStatus(400, $this->response->getStatusCode());
        } catch (GuzzleException $e) {
            $this->assertStatus(400, $e->getCode());
        }
    }
}
