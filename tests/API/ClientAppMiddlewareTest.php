<?php

namespace Tests\API;

use App\Helpers\APIClientAppHelper;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ClientAppMiddlewareTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @param string $uri
     * @return string
     */
    private function httpAPIUri(string $uri)  : string
    {
        return 'http://'.env('API_DOMAIN').'/'.$uri;
    }

    public function assertUnauthorizedCallToApi()
    {
        $response = $this->call('GET', $this->httpAPIUri('api/users/all'));
        $response->assertStatus(401);
    }

    public function assertAuthorizedCallToApi()
    {

        $response = $this->call('GET', $this->httpAPIUri('api/users/all'), [], [], [], ['client-web', APIClientAppHelper::getClienWebAppToken()]);
        $response->assertStatus(200);
    }
}
