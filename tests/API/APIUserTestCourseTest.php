<?php

namespace Tests\API;

use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Tests\APITestCase;
use Illuminate\Http\Response;

class APIUserTestCourseTest extends APITestCase
{
    static private $user_id;

    static private $refresh_token;

    static private $access_token;

    public function testLogin()
    {
        $this->APICall('POST', 'authenticate/login',
            [
                "email" => "unittest@exosuite.fr",
                "password" => "unittest"
            ], [], $this->createAPIDomainCallBack());
        $this->assertStatus(Response::HTTP_OK);
        $response = json_decode($this->response->getBody()->getContents(), true);
        self::$user_id = $response['user_id'];

        $this->APICall('POST', 'oauth/user/grant/refreshToken',
            [
                "user_id" => self::$user_id
            ], [], $this->createAPIDomainCallBack());
        $this->assertStatus(Response::HTTP_OK);
        $response = json_decode($this->response->getBody()->getContents(), true);
        self::$refresh_token = $response['refresh_token'];
        self::$access_token = $response['access_token'];
    }

    public function testNewCourseWithNoUserID()
    {

        $this->APICall('POST', 'courses/new',
            [
                "title" => "test",
                "checkpoints" => [0 => "test_checkpoint"]
            ], ["access-token" => self::$access_token ], $this->createAPIDomainCallBack());
        $this->assertStatus(Response::HTTP_FORBIDDEN);
    }

    public function testNewCourseWithNoTitle()
    {
        $this->APICall('POST', 'courses/new',
            [
                "user_id" => self::$user_id,
                "checkpoints" => [0 => "test_checkpoint"]
            ], ["access-token" => self::$access_token, "user-id" => self::$user_id], $this->createAPIDomainCallBack());
        $this->assertStatus(Response::HTTP_BAD_REQUEST);
    }

    public function testNewCourseWithNoCheckpoints()
    {
        $this->APICall('POST', 'courses/new',
            [
                "user_id" => self::$user_id,
                "title" => "test"
            ], ["access-token" => self::$access_token, "user-id" => self::$user_id], $this->createAPIDomainCallBack());
        $this->assertStatus(Response::HTTP_BAD_REQUEST);
    }

    public function testNewCourseOK()
    {
        $this->APICall('POST', 'courses/new',
            [
                "user_id" => self::$user_id,
                "title" => "test",
                "description" => "ceci_est_un_test",
                "checkpoints" => [0 => "test_checkpoint"]
            ], ["access-token" => self::$access_token, "user-id" => self::$user_id], $this->createAPIDomainCallBack());
        $this->assertStatus(Response::HTTP_CREATED);
    }
}
