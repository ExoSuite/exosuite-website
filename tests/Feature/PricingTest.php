<?php

namespace Tests\Feature;

use Tests\TestCase;

class PricingTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testPricingPageIntegrityFrench()
    {
        $this->french();
        $response = $this->get(route('get_pricing'));

        // ASSERT CODE 200
        $response->assertOk();

        // ASSERT MENU'S TEXT
        $response->assertSeeText(trans("website.menu.home"));
        $response->assertSeeText(trans("website.menu.project"));
        $response->assertSeeText(trans("website.menu.exosuite"));
        $response->assertSeeText(trans("website.menu.exorun"));
        $response->assertSeeText(trans("website.menu.exofun"));
        $response->assertSeeText(trans("website.menu.socialNetwork"));
        $response->assertSeeText(trans("website.menu.team"));
        $response->assertSeeText(trans("website.menu.pricing"));
        $response->assertSeeText(trans("website.menu.blog"));
        $response->assertSeeText(trans("website.menu.connect"));
        $response->assertSeeText(trans("website.menu.contact"));

        // ASSERT PAGE'S TEXT
        $response->assertSeeText(trans("website.pricing"));
        $response->assertSeeText(trans("website.pricing.title"));
        $response->assertSeeText(trans("website.pricing.mois"));
        $response->assertSeeText(trans("website.pricing.exorun1"));
        $response->assertSeeText(trans("website.pricing.exorun2"));
        $response->assertSeeText(trans("website.pricing.exorun3"));
        $response->assertSeeText(trans("website.pricing.abo1"));
        $response->assertSeeText(trans("website.pricing.abo2"));
        $response->assertSeeText(trans("website.pricing.abo3"));
        $response->assertSeeText(trans("website.pricing.abo4"));
        $response->assertSeeText(trans("website.pricing.abo5"));
        $response->assertSeeText(trans("website.pricing.abo6"));
        $response->assertSeeText(trans("website.pricing.exofun1"));
        $response->assertSeeText(trans("website.pricing.exofun2"));
        $response->assertSeeText(trans("website.pricing.exofun3"));
    }

    public function testPricingPageIntegrityEnglish()
    {
        $this->english();
        $response = $this->get(route('get_pricing'));

        // ASSERT CODE 200
        $response->assertOk();

        // ASSERT MENU'S TEXT
        $response->assertSeeText(trans("website.menu.home"));
        $response->assertSeeText(trans("website.menu.project"));
        $response->assertSeeText(trans("website.menu.exosuite"));
        $response->assertSeeText(trans("website.menu.exorun"));
        $response->assertSeeText(trans("website.menu.exofun"));
        $response->assertSeeText(trans("website.menu.socialNetwork"));
        $response->assertSeeText(trans("website.menu.team"));
        $response->assertSeeText(trans("website.menu.pricing"));
        $response->assertSeeText(trans("website.menu.blog"));
        $response->assertSeeText(trans("website.menu.connect"));
        $response->assertSeeText(trans("website.menu.contact"));

        // ASSERT PAGE'S TEXT
        $response->assertSeeText(trans("website.pricing"));
        $response->assertSeeText(trans("website.pricing.title"));
        $response->assertSeeText(trans("website.pricing.mois"));
        $response->assertSeeText(trans("website.pricing.exorun1"));
        $response->assertSeeText(trans("website.pricing.exorun2"));
        $response->assertSeeText(trans("website.pricing.exorun3"));
        $response->assertSeeText(trans("website.pricing.abo1"));
        $response->assertSeeText(trans("website.pricing.abo2"));
        $response->assertSeeText(trans("website.pricing.abo3"));
        $response->assertSeeText(trans("website.pricing.abo4"));
        $response->assertSeeText(trans("website.pricing.abo5"));
        $response->assertSeeText(trans("website.pricing.abo6"));
        $response->assertSeeText(trans("website.pricing.exofun1"));
        $response->assertSeeText(trans("website.pricing.exofun2"));
        $response->assertSeeText(trans("website.pricing.exofun3"));
    }
}
