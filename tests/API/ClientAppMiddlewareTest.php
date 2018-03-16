<?php

namespace Tests\API;

use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\Request;
use Tests\APITestCase;

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
        $request = new Request();
        try {
            $this->APICall($request, 'POST', 'api/authenticate/register', $request->all(), [], $this->createAPIDomainCallBack());
            $this->assertStatus(400, $this->response->getStatusCode());
        } catch (GuzzleException $e) {
            $this->assertStatus(400, $e->getCode());
        }
    }
}
