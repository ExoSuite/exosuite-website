<?php

namespace Tests\API;

use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\Request;
use Tests\APITestCase;

class ClientAppMiddlewareTest extends APITestCase
{
    public function testGenerateApiURI() {
        $this->assertTrue('http://api.exosuite.local/api/authenticate/register' === $this->httpAPIUri('authenticate/register'));
    }

    public function testAssertUnauthorizedCallToApi()
    {
        $response = $this->call('POST', $this->httpAPIUri('authenticate/register'));
        $response->assertStatus(401);
    }

    public function testAssertAuthorizedCallToApiIncompleteRequest()
    {
        try {
            $this->APICall(new Request(), 'POST', 'authenticate/register', [], [], $this->createAPIDomainCallBack());
        } catch (GuzzleException $e) {
            $this->assertStatus(400, $e->getCode());
        }
    }



}
