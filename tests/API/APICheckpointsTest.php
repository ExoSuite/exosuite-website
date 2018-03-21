<?php

namespace Tests\API;

use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Tests\APITestCase;


class APICheckpointsTest extends TestCase
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
}
