<?php

namespace Tests\Feature;

use Tests\TestCase;

class TeamTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testTeamPageIntegrityFrench()
    {
        $this->french();
        $response = $this->get(route('get_team'));

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
        $response->assertSeeText(trans("website.team.title"));
        $response->assertSeeText(trans("website.team.inno"));
        $response->assertSeeText(trans("website.team.teamTitle"));
        $response->assertSeeText(trans("website.team.teamDescription"));
        $response->assertSeeText(trans("website.team.ericJob"));
        $response->assertSeeText(trans("website.team.ericDescription"));
        $response->assertSeeText(trans("website.team.dupilJob"));
        $response->assertSeeText(trans("website.team.dupilDescription"));
        $response->assertSeeText(trans("website.team.lopezJob"));
        $response->assertSeeText(trans("website.team.lopezDescription"));
        $response->assertSeeText(trans("website.team.renaudJob"));
        $response->assertSeeText(trans("website.team.renaudDescription"));
        $response->assertSeeText(trans("website.team.pierreJob"));
        $response->assertSeeText(trans("website.team.pierreDescription"));
        $response->assertSeeText(trans("website.team.stanJob"));
        $response->assertSeeText(trans("website.team.stanDescription"));
        $response->assertSeeText(trans("website.team.yassirJob"));
        $response->assertSeeText(trans("website.team.yassirDescription"));
    }

    public function testTeamPageIntegrityEnglish()
    {
        $this->english();
        $response = $this->get(route('get_team'));

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
        $response->assertSeeText(trans("website.team.title"));
        $response->assertSeeText(trans("website.team.inno"));
        $response->assertSeeText(trans("website.team.teamTitle"));
        $response->assertSeeText(trans("website.team.teamDescription"));
        $response->assertSeeText(trans("website.team.ericJob"));
        $response->assertSeeText(trans("website.team.ericDescription"));
        $response->assertSeeText(trans("website.team.dupilJob"));
        $response->assertSeeText(trans("website.team.dupilDescription"));
        $response->assertSeeText(trans("website.team.lopezJob"));
        $response->assertSeeText(trans("website.team.lopezDescription"));
        $response->assertSeeText(trans("website.team.renaudJob"));
        $response->assertSeeText(trans("website.team.renaudDescription"));
        $response->assertSeeText(trans("website.team.pierreJob"));
        $response->assertSeeText(trans("website.team.pierreDescription"));
        $response->assertSeeText(trans("website.team.stanJob"));
        $response->assertSeeText(trans("website.team.stanDescription"));
        $response->assertSeeText(trans("website.team.yassirJob"));
        $response->assertSeeText(trans("website.team.yassirDescription"));
    }
}
