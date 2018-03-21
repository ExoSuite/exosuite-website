<?php

namespace Tests\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Response;
use Tests\APITestCase;

class APIUserTest extends APITestCase
{
    use RefreshDatabase;

    protected function tryRegister($credentials)
    {
        $this->APICall(
            'POST', 'authenticate/register', $credentials, [], $this->createAPIDomainCallBack()
        );
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testRegisterUser()
    {
        $this->registerUnitTestUser();
        $this->assertStatus(Response::HTTP_CREATED);
    }

    public function testRegisterWithNoConfirmPassword()
    {
        $this->tryRegister([
            "email" => "unittest@exosuite.fr",
            "first_name" => "unit",
            "last_name" => "test",
            "password" => "unittest",
        ]);
        $this->assertStatus(Response::HTTP_BAD_REQUEST);
    }

    public function testRegisterWithNoPasswords()
    {
        $this->tryRegister([
            "email" => "unittest@exosuite.fr",
            "first_name" => "unit",
            "last_name" => "test",
        ]);
        $this->assertStatus(Response::HTTP_BAD_REQUEST);
    }

    public function testRegisterWithNoFirstName()
    {
        $this->tryRegister([
            "email" => "unittest@exosuite.fr",
            "last_name" => "test",
            "password" => "unittest",
            "password_confirmation" => "unittest"
        ]);
        $this->assertStatus(Response::HTTP_BAD_REQUEST);
    }


    public function testRegisterWithNoLastName()
    {
        $this->tryRegister([
            "email" => "unittest@exosuite.fr",
            "first_name" => "test",
            "password" => "unittest",
            "password_confirmation" => "unittest"
        ]);
        $this->assertStatus(Response::HTTP_BAD_REQUEST);
    }

    public function testRegisterWithNoEmail()
    {
        $this->tryRegister([
            "first_name" => "unit",
            "last_name" => "test",
            "password" => "unittest",
            "password_confirmation" => "unittest"
        ]);
        $this->assertStatus(Response::HTTP_BAD_REQUEST);
    }

    public function testAlreadyRegisteredEmail()
    {
        $this->registerUnitTestUser();
        $this->assertStatus(Response::HTTP_BAD_REQUEST);
    }
}
