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
        Cookie::queue(Localization::$key, 'fr');
        $response = $this->get(route('get_team'));

        $response->assertOk();
        $response->assertSeeText(trans("website.team.title"));
    }

    public function testTeamPageIntegrityEnglish()
    {
        Cookie::queue(Localization::$key, 'en');
        $response = $this->get(route('get_team'));

        $response->assertOk();
        $response->assertSeeText(trans("website.team.title"));
    }
}
