<?php

namespace Tests\Feature;

use App\Http\Middleware\Localization;
use Illuminate\Support\Facades\Cookie;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ExoFunTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExoFunPageIntegrityFrench()
    {

        $response = $this->get(route('get_exofun'));

        $response->assertOk();
        $response->assertSeeText(trans("website.exofun.featuresTitle"));
    }

    public function testExoFunPageIntegrityEnglish()
    {

        $response = $this->get(route('get_exofun'));

        $response->assertOk();
        $response->assertSeeText(trans("website.exofun.featuresTitle"));
    }
}
