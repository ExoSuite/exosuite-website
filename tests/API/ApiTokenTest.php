<?php

namespace Tests\API;

use Illuminate\Http\Response;
use Tests\APITestCase;

class ApiTokenTest extends APITestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testApiTokenUnauthorized()
    {
        $this->APICall('GET', 'users/all', [], [], $this->createAPIDomainCallBack());
        $this->assertStatus(Response::HTTP_FORBIDDEN);
    }

    public function testRegisterUserForTokens()
    {
        $this->APICall('POST', 'authenticate/login', [
            "email" => "unittest@exosuite.fr",
            "password" => "unittest"
        ], [], $this->createAPIDomainCallBack());
        $this->assertStatus(Response::HTTP_OK);

        //$this->APICall('GET', 'users/all', [], [], $this->createAPIDomainCallBack());
    }

    /**
     * @depends testRegisterUserForTokens
     */
    /*public function testApiTokensAuthorized()
    {

    }*/

}
