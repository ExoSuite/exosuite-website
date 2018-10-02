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
        $response->assertSeeText("Le futur du sport");
        $response->assertSeeText("Découvrez ExoSuite, la suite d'applications");
        $response->assertSeeText("qui révolutionne le monde du sport !");
        $response->assertSeeText("Accueil");
        $response->assertSeeText("Contact");
        $response->assertSeeText("Notre projet");
        $response->assertSeeText("Notre projet");
        $response->assertSeeText("Tarifs");
    }
}
