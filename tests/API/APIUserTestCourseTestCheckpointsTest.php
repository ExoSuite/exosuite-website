<?php

namespace Tests\API;

use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Tests\APITestCase;
use Illuminate\Http\Response;


class APIUserTestCourseTestCheckpointsTest extends APITestCase
{
    static private $user_id;

    static private $course_id;

    static private $refresh_token;

    static private $access_token;

    public function testLoginAndCreateCourse()
    {
        $this->APICall('POST', 'authenticate/login',
            [
                "email" => "unittest@exosuite.fr",
                "password" => "unittest",
            ], [], $this->createAPIDomainCallBack());
        $this->assertStatus(Response::HTTP_OK);
        $response = json_decode($this->response->getBody()->getContents(), true);
        self::$user_id = $response['user_id'];

        $this->APICall('POST', 'oauth/user/grant/refreshToken',
            [
                "user_id" => self::$user_id,
            ], [], $this->createAPIDomainCallBack());
        $this->assertStatus(Response::HTTP_OK);
        $response = json_decode($this->response->getBody()->getContents(), true);
        self::$refresh_token = $response['refresh_token'];
        self::$access_token = $response['access_token'];

        $this->APICall('POST', "courses/new",
            [
                "user_id" => self::$user_id,
                "title" => "test",
                "description" => "ceci_est_un_test",
                "checkpoints" => [0 => "test_checkpoint"],
                "access_token" => self::$access_token,
            ], ["access-token" => self::$access_token, "user-id" => self::$user_id], $this->createAPIDomainCallBack());
        $this->assertStatus(Response::HTTP_CREATED);
        $response = json_decode($this->response->getBody()->getContents(), true);
        self::$course_id = $response['course_id'];
    }
}