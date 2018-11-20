<?php

namespace Tests\Feature;

use App\Http\Middleware\Localization;
use Illuminate\Support\Facades\Cookie;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class SocialTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testSocialPageIntegrityFrench()
    {
        $this->french();
        $response = $this->get(route('get_social'));

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
        $response->assertSeeText(trans("website.social.subtitle"));
        $response->assertSeeText(trans("website.social.shareTitle"));
        $response->assertSeeText(trans("website.social.shareDescription1"));
        $response->assertSeeText(trans("website.social.shareDescription2"));
        $response->assertSeeText(trans("website.social.defiTitle"));
        $response->assertSeeText(trans("website.social.defiDescription"));
    }

    public function testSocialPageIntegrityEnglish()
    {
        $this->english();
        $response = $this->get(route('get_social'));

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
        $response->assertSeeText(trans("website.social.subtitle"));
        $response->assertSeeText(trans("website.social.shareTitle"));
        $response->assertSeeText(trans("website.social.shareDescription1"));
        $response->assertSeeText(trans("website.social.shareDescription2"));
        $response->assertSeeText(trans("website.social.defiTitle"));
        $response->assertSeeText(trans("website.social.defiDescription"));
    }
}
