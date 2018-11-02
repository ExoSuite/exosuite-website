<?php

namespace Tests\Feature;

use App\Http\Middleware\Localization;
use Illuminate\Support\Facades\Cookie;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ExoRunTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExoRunPageIntegrityFrench()
    {

        $response = $this->get(route('get_exorun'));

        $response->assertOk();
        $response->assertSeeText(trans("website.exorun.features1Title"));
    }

    public function testExoRunPageIntegrityEnglish()
    {

        $response = $this->get(route('get_exorun'));

        $response->assertOk();
        $response->assertSeeText(trans("website.exorun.features1Title"));
    }
}
