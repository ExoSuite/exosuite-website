<?php

namespace Tests\Feature;

use Tests\TestCase;

class LoginTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testGoLoginForm()
    {
        $response = $this->get(route('login', [], false));

        $response->assertOk();
    }
}
