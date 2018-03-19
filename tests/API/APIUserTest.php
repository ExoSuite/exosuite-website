<?php

namespace Tests\API;

use GuzzleHttp\Exception\GuzzleException;
use Tests\APITestCase;
use Illuminate\Http\Request;

class APIUserTest extends APITestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testRegisterUser()
    {
        try {
            $this->APICall(new Request(), 'POST', 'authenticate/register',
                [
                    "email" => "unittest@exosuite.fr",
                    "first_name" => "unit",
                    "last_name" => "test",
                    "password" => "unittest",
                    "password_confirmation" => "unittest"
                ], [], $this->createAPIDomainCallBack());
            $this->assertStatus(201, $this->response->getStatusCode());
        } catch (GuzzleException $e) {
            $this->assertStatus(200, $e->getCode());
        }
    }
}
