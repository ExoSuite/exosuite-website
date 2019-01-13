<?php

namespace Tests\Feature;

use Tests\TestCase;

class ExoSuiteTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExoSuitePageIntegrityFrench()
    {
        $this->french();
        $response = $this->get(route('get_exosuite'));

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
        $response->assertSeeText(trans("website.exosuite.subtitle"));
        $response->assertSeeText(trans("website.exosuite.features"));
        $response->assertSeeText(trans("website.exosuite.pricing"));
        $response->assertSeeText(trans("website.exosuite.exosuiteProject"));
        $response->assertSeeText(trans("website.exosuite.exosuiteProjectTitle"));
        $response->assertSeeText(trans("website.exosuite.exosuiteProjectDescription1"));
        $response->assertSeeText(trans("website.exosuite.exosuiteProjectDescription2"));
        $response->assertSeeText(trans("website.exosuite.sport"));
        $response->assertSeeText(trans("website.exosuite.tech"));
        $response->assertSeeText(trans("website.exosuite.social"));
        $response->assertSeeText(trans("website.exosuite.sportDescription"));
        $response->assertSeeText(trans("website.exosuite.techDescription"));
        $response->assertSeeText(trans("website.exosuite.socialDescription"));
        $response->assertSeeText(trans("website.exosuite.exofun"));
        $response->assertSeeText(trans("website.exosuite.exofunTitle"));
        $response->assertSeeText(trans("website.exosuite.exofunDescription"));
        $response->assertSeeText(trans("website.exosuite.exofunDiscover"));
        $response->assertSeeText(trans("website.exosuite.exorun"));
        $response->assertSeeText(trans("website.exosuite.exorunTitle"));
        $response->assertSeeText(trans("website.exosuite.exorunDescription"));
        $response->assertSeeText(trans("website.exosuite.exorunDiscover"));
        $response->assertSeeText(trans("website.exosuite.exosuiteTitle"));
    }

    public function testExoSuitePageIntegrityEnglish()
    {
        $this->english();
        $response = $this->get(route('get_exosuite'));

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
        $response->assertSeeText(trans("website.exosuite.subtitle"));
        $response->assertSeeText(trans("website.exosuite.features"));
        $response->assertSeeText(trans("website.exosuite.pricing"));
        $response->assertSeeText(trans("website.exosuite.exosuiteProject"));
        $response->assertSeeText(trans("website.exosuite.exosuiteProjectTitle"));
        $response->assertSeeText(trans("website.exosuite.exosuiteProjectDescription1"));
        $response->assertSeeText(trans("website.exosuite.exosuiteProjectDescription2"));
        $response->assertSeeText(trans("website.exosuite.sport"));
        $response->assertSeeText(trans("website.exosuite.tech"));
        $response->assertSeeText(trans("website.exosuite.social"));
        $response->assertSeeText(trans("website.exosuite.sportDescription"));
        $response->assertSeeText(trans("website.exosuite.techDescription"));
        $response->assertSeeText(trans("website.exosuite.socialDescription"));
        $response->assertSeeText(trans("website.exosuite.exofun"));
        $response->assertSeeText(trans("website.exosuite.exofunTitle"));
        $response->assertSeeText(trans("website.exosuite.exofunDescription"));
        $response->assertSeeText(trans("website.exosuite.exofunDiscover"));
        $response->assertSeeText(trans("website.exosuite.exorun"));
        $response->assertSeeText(trans("website.exosuite.exorunTitle"));
        $response->assertSeeText(trans("website.exosuite.exorunDescription"));
        $response->assertSeeText(trans("website.exosuite.exorunDiscover"));
        $response->assertSeeText(trans("website.exosuite.exosuiteTitle"));
    }
}
