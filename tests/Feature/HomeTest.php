<?php

namespace Tests\Feature;

use App;
use App\Http\Middleware\Localization;
use Illuminate\Support\Facades\Cookie;
use Tests\TestCase;
use App\Models\User;

class HomeTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testHomePageIntegrityFrench()
    {
        App::setLocale('fr');
        $response = $this->get(route('get_home'));

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
        $response->assertSeeText(trans("website.home.subtitle"));
        $response->assertSeeText(trans("website.home.discover"));
        $response->assertSeeText(trans("website.home.pricing"));
        $response->assertSeeText(trans("website.home.tech"));
        $response->assertSeeText(trans("website.home.titleExosuite"));
        $response->assertSeeText(trans("website.home.descriptionExosuite"));
        $response->assertSeeText(trans("website.home.moreInfos"));
        $response->assertSeeText(trans("website.home.socialNetwork"));
        $response->assertSeeText(trans("website.home.titleSocialNetwork"));
        $response->assertSeeText(trans("website.home.descriptionSocialNetwork"));
        $response->assertSeeText(trans("website.home.ourSocialNetwork"));
        $response->assertSeeText(trans("website.home.epitech"));
        $response->assertSeeText(trans("website.home.titleEpitech"));
        $response->assertSeeText(trans("website.home.descriptionEpitech"));
        $response->assertSeeText(trans("website.home.quote"));
    }

    public function testHomePageIntegrityEnglish()
    {
        App::setLocale('en');
        $response = $this->get(route('get_home'));

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
        $response->assertSeeText(trans("website.home.subtitle"));
        $response->assertSeeText(trans("website.home.discover"));
        $response->assertSeeText(trans("website.home.pricing"));
        $response->assertSeeText(trans("website.home.tech"));
        $response->assertSeeText(trans("website.home.titleExosuite"));
        $response->assertSeeText(trans("website.home.descriptionExosuite"));
        $response->assertSeeText(trans("website.home.moreInfos"));
        $response->assertSeeText(trans("website.home.socialNetwork"));
        $response->assertSeeText(trans("website.home.titleSocialNetwork"));
        $response->assertSeeText(trans("website.home.descriptionSocialNetwork"));
        $response->assertSeeText(trans("website.home.ourSocialNetwork"));
        $response->assertSeeText(trans("website.home.epitech"));
        $response->assertSeeText(trans("website.home.titleEpitech"));
        $response->assertSeeText(trans("website.home.descriptionEpitech"));
        $response->assertSeeText(trans("website.home.quote"));
    }
};
