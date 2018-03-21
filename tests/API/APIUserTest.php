<?php

namespace Tests\API;

use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Tests\APITestCase;

class APIUserTest extends APITestCase
{
    use RefreshDatabase;
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testRegisterUser()
    {
        try {
            $this->registerUnitTestUser();
            $this->assertStatus(201, $this->response->getStatusCode());
        } catch (GuzzleException $e) {
            $this->assertStatus(201, $e->getCode());
        }
    }

    public function testRegisterWithNoConfirmPassword()
    {
        try {
            $this->APICall(new Request(), 'POST', 'authenticate/register',
                [
                    "email" => "unittest@exosuite.fr",
                    "first_name" => "unit",
                    "last_name" => "test",
                    "password" => "unittest",
                ], [], $this->createAPIDomainCallBack());
        } catch (GuzzleException $e) {
            $this->assertStatus(400, $e->getCode());
        }
    }

    public function testRegisterWithNoPasswords()
    {
        try {
            $this->APICall(new Request(), 'POST', 'authenticate/register',
                [
                    "email" => "unittest@exosuite.fr",
                    "first_name" => "unit",
                    "last_name" => "test",
                ], [], $this->createAPIDomainCallBack());
        } catch (GuzzleException $e) {
            $this->assertStatus(400, $e->getCode());
        }
    }

    public function testRegisterWithNoFirstName()
    {
        try {
            $this->APICall(new Request(), 'POST', 'authenticate/register',
                [
                    "email" => "unittest@exosuite.fr",
                    "last_name" => "test",
                    "password" => "unittest",
                    "password_confirmation" => "unittest"
                ], [], $this->createAPIDomainCallBack());
        } catch (GuzzleException $e) {
            $this->assertStatus(400, $e->getCode());
        }
    }


    public function testRegisterWithNoLastName()
    {
        try {
            $this->APICall(new Request(), 'POST', 'authenticate/register',
                [
                    "email" => "unittest@exosuite.fr",
                    "first_name" => "test",
                    "password" => "unittest",
                    "password_confirmation" => "unittest"
                ], [], $this->createAPIDomainCallBack());
        } catch (GuzzleException $e) {
            $this->assertStatus(400, $e->getCode());
        }
    }

    public function testRegisterWithNoEmail()
    {
        try {
            $this->APICall(new Request(), 'POST', 'authenticate/register',
                [
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
