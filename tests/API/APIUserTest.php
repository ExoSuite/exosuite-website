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
        } catch (GuzzleException $e) {
            $this->assertStatus(400, $e->getCode());
        }
    }
}
