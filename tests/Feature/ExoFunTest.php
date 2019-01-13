<?php

namespace Tests\Feature;

use Tests\TestCase;

class ExoFunTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExoFunPageIntegrityFrench()
    {
        $this->french();
        $response = $this->get(route('get_exofun'));

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
        $response->assertSeeText(trans("website.exofun.subtitle"));
        $response->assertSeeText(trans("website.exofun.features"));
        $response->assertSeeText(trans("website.exofun.featuresTitle"));
        $response->assertSeeText(trans("website.exofun.featuresDescription1"));
        $response->assertSeeText(trans("website.exofun.featuresDescription2"));
        $response->assertSeeText(trans("website.exofun.sportDescription"));
        $response->assertSeeText(trans("website.exofun.techDescription"));
        $response->assertSeeText(trans("website.exofun.socialDescription"));
    }

    public function testExoFunPageIntegrityEnglish()
    {
        $this->english();
        $response = $this->get(route('get_exofun'));

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
        $response->assertSeeText(trans("website.exofun.subtitle"));
        $response->assertSeeText(trans("website.exofun.features"));
        $response->assertSeeText(trans("website.exofun.featuresTitle"));
        $response->assertSeeText(trans("website.exofun.featuresDescription1"));
        $response->assertSeeText(trans("website.exofun.featuresDescription2"));
        $response->assertSeeText(trans("website.exofun.sportDescription"));
        $response->assertSeeText(trans("website.exofun.techDescription"));
        $response->assertSeeText(trans("website.exofun.socialDescription"));
    }
}
