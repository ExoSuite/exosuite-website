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

        $response->assertOk();
        $response->assertSeeText(trans("website.social.shareTitle"));
    }

    public function testSocialPageIntegrityEnglish()
    {
        $this->english();
        $response = $this->get(route('get_social'));

        $response->assertOk();
        $response->assertSeeText(trans("website.social.shareTitle"));
    }
}
