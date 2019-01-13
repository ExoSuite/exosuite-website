<?php

namespace Tests\Feature;

use Tests\TestCase;

class ExoRunTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExoRunPageIntegrityFrench()
    {
        $this->french();
        $response = $this->get(route('get_exorun'));

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
        $response->assertSeeText(trans("website.exorun.subtitle"));
        $response->assertSeeText(trans("website.exorun.features"));
        $response->assertSeeText(trans("website.exorun.pricing"));
        $response->assertSeeText(trans("website.exorun.features1"));
        $response->assertSeeText(trans("website.exorun.features1Title"));
        $response->assertSeeText(trans("website.exorun.features1Description1"));
        $response->assertSeeText(trans("website.exorun.features1Description2"));
        $response->assertSeeText(trans("website.exorun.sport"));
        $response->assertSeeText(trans("website.exorun.tech"));
        $response->assertSeeText(trans("website.exorun.social"));
        $response->assertSeeText(trans("website.exorun.sportDescription"));
        $response->assertSeeText(trans("website.exorun.techDescription"));
        $response->assertSeeText(trans("website.exorun.socialDescription"));
    }

    public function testExoRunPageIntegrityEnglish()
    {
        $this->english();
        $response = $this->get(route('get_exorun'));

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
        $response->assertSeeText(trans("website.exorun.subtitle"));
        $response->assertSeeText(trans("website.exorun.features"));
        $response->assertSeeText(trans("website.exorun.pricing"));
        $response->assertSeeText(trans("website.exorun.features1"));
        $response->assertSeeText(trans("website.exorun.features1Title"));
        $response->assertSeeText(trans("website.exorun.features1Description1"));
        $response->assertSeeText(trans("website.exorun.features1Description2"));
        $response->assertSeeText(trans("website.exorun.sport"));
        $response->assertSeeText(trans("website.exorun.tech"));
        $response->assertSeeText(trans("website.exorun.social"));
        $response->assertSeeText(trans("website.exorun.sportDescription"));
        $response->assertSeeText(trans("website.exorun.techDescription"));
        $response->assertSeeText(trans("website.exorun.socialDescription"));
    }
}
