<?php

namespace Tests\API;

use Illuminate\Http\Response;
use Tests\APITestCase;

class ClientAppMiddlewareTest extends APITestCase
{

    public function testGenerateApiURI()
    {
        $this->assertTrue('http://api.exosuite.local/api/authenticate/register'
            === $this->httpAPIUri('authenticate/register'));
    }

    public function testAssertUnauthorizedCallToApi()
    {
        $response = $this->call('POST', $this->httpAPIUri('authenticate/register'));
        $response->assertStatus(Response::HTTP_UNAUTHORIZED);
    }

    public function testAssertAuthorizedCallToApiIncompleteRequest()
    {
        $this->APICall('POST', 'authenticate/register', [], [], $this->createAPIDomainCallBack());
        $this->assertStatus(Response::HTTP_BAD_REQUEST);
    }


}
