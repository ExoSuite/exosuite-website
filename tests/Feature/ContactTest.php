<?php

namespace Tests\Feature;

use App;
use Tests\TestCase;

class ContactTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */

    public function testContactPageIntegrityFrench()
    {
        $this->french();
        $response = $this->get(route('get_contact'));

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
        $response->assertSeeText(trans("website.contact"));
        $response->assertSeeText(trans("website.contact.title"));
        $response->assertSeeText(trans("website.contact.send"));
    }

    public function testContactPageIntegrityEnglish()
    {
        $this->english();
        $response = $this->get(route('get_contact'));

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
        $response->assertSeeText(trans("website.contact"));
        $response->assertSeeText(trans("website.contact.title"));
        $response->assertSeeText(trans("website.contact.send"));
    }
}
