<?php

namespace Tests\Feature;

use Tests\TestCase;

class HomeTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testHomeIntegrity()
    {
        $response = $this->get('/');

        $response->assertOk();
        $response->assertSeeText("ExoSuite");
        $response->assertSeeText("La suite d'application qui révolutionne le monde du sport !");
    }
}
