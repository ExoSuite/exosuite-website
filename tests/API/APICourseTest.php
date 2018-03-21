<?php

namespace Tests\API;

use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Tests\APITestCase;
use Illuminate\Http\Response;

class APICourseTest extends APITestCase
{
    use RefreshDatabase;

    private $user_id;

    private $refresh_token;

    private $access_token;

    /**
     * A basic test example.
     *
     * @return void
     */

    public function testLogin()
    {
        $this->APICall(new Request(), 'POST', 'authenticate/login',
            [
                "email" => "unittest@exosuite.fr",
                "password" => "unittest",
            ], [], $this->createAPIDomainCallBack());
        $this->assertStatus(Response::HTTP_OK);
        if ($this->currentHttpStatus === Response::HTTP_OK) {
            $response = json_decode($this->response->getBody()->getContents(), true);
            $this->user_id = $response['user_id'];
            $this->APICall('POST', 'oauth/user/grant/refreshToken',
                [
                    "user_id" => $this->user_id,
                ], [], $this->createAPIDomainCallBack());
            $this->assertStatus(Response::HTTP_OK);
            if ($this->currentHttpStatus === Response::HTTP_OK) {
                $response = json_decode($this->response->getBody()->getContents(), true);
                $this->refresh_token = $response['refresh_token'];
                $this->access_token = $response['access_token'];
            }
        }
    }

    public function testNewCourseWithNoUserID()
    {

        $this->APICall(new Request(), 'POST', 'courses/new',
            [
                "title" => "test",
                "checkpoints" => [0 => "issou"],
                "access_token" => $this->access_token,
            ], [], $this->createAPIDomainCallBack());
        $this->assertStatus(Response::HTTP_BAD_REQUEST);
    }

    public function testNewCourseWithNoTitle()
    {
        $this->APICall(new Request(), 'POST', 'courses/new',
            [
                "user_id" => $this->user_id,
                "checkpoints" => [0 => "issou"],
                "access_token" => $this->access_token,
            ], [], $this->createAPIDomainCallBack());
        $this->assertStatus(Response::HTTP_BAD_REQUEST);
    }

    public function testNewCourseWithNoCheckpoints()
    {
        $this->APICall(new Request(), 'POST', 'courses/new',
            [
                "title" => "test",
                "access_token" => $this->access_token,
            ], [], $this->createAPIDomainCallBack());
        $this->assertStatus(Response::HTTP_BAD_REQUEST);
    }

    public function testNewCourseOK()
    {
        $this->APICall(new Request(), 'POST', 'courses/new',
            [
                "user_id" => $this->user_id,
                "title" => "test",
                "checkpoints" => [0 => "issou"],
                "access_token" => $this->access_token,
            ], [], $this->createAPIDomainCallBack());
        $this->assertStatus(Response::HTTP_OK);
    }
}
