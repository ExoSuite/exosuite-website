<?php

namespace Tests\API;

use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Tests\APITestCase;

class APICourseTest extends APITestCase
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

    public function testNewCourseWithNoUserID()
    {
        try {
            $this->APICall(new Request(), 'POST', 'courses/new',
                [
                    "title" => "test",
                    "checkpoints" => ["0" => "issou"],
                ], [], $this->createAPIDomainCallBack());
        } catch (GuzzleException $e) {
            $this->assertStatus(400, $e->getCode());
        }
    }

    public function testNewCourseWithNoTitle()
    {
        try {
            $this->APICall(new Request(), 'POST', 'courses/new',
                [
                    "checkpoints" => ["0" => "issou"],
                ], [], $this->createAPIDomainCallBack());
        } catch (GuzzleException $e) {
            $this->assertStatus(400, $e->getCode());
        }
    }

    public function testNewCourseWithNoCheckpoints()
    {
        try {
            $this->APICall(new Request(), 'POST', 'courses/new',
                [
                    "title" => "test",
                ], [], $this->createAPIDomainCallBack());
        } catch (GuzzleException $e) {
            $this->assertStatus(400, $e->getCode());
        }
    }
}
