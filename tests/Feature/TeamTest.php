<?php

namespace Tests\Feature;

use App\Http\Middleware\Localization;
use Illuminate\Support\Facades\Cookie;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TeamTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testTeamPageIntegrityFrench()
    {
        $response = $this->get(route('get_team'));

        $response->assertOk();
        $response->assertSeeText(trans("website.team.title"));
    }

    public function testTeamPageIntegrityEnglish()
    {
        $response = $this->get(route('get_team'));

        $response->assertOk();
        $response->assertSeeText(trans("website.team.title"));
    }
}
