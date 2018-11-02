<?php

namespace Tests\Feature;

use App\Http\Middleware\Localization;
use Illuminate\Support\Facades\Cookie;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ExoSuiteTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExoSuitePageIntegrityFrench()
    {
        Cookie::queue(Localization::$key, 'fr');
        $response = $this->get(route('get_exosuite'));

        $response->assertOk();
        $response->assertSeeText(trans("website.exosuite.exosuiteProjectTitle"));
    }

    public function testExoSuitePageIntegrityEnglish()
    {
        Cookie::queue(Localization::$key, 'en');
        $response = $this->get(route('get_exosuite'));

        $response->assertOk();
        $response->assertSeeText(trans("website.exosuite.exosuiteProjectTitle"));
    }
}
