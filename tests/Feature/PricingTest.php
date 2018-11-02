<?php

namespace Tests\Feature;

use App\Http\Middleware\Localization;
use Illuminate\Support\Facades\Cookie;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class PricingTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testPricingPageIntegrityFrench()
    {
        Cookie::queue(Localization::$key, 'fr');
        $response = $this->get(route('get_pricing'));

        $response->assertOk();
        $response->assertSeeText(trans("website.pricing.title"));
    }

    public function testPricingPageIntegrityEnglish()
    {
        Cookie::queue(Localization::$key, 'en');
        $response = $this->get(route('get_pricing'));

        $response->assertOk();
        $response->assertSeeText(trans("website.pricing.title"));
    }
}
