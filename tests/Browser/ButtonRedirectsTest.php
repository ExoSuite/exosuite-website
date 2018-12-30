<?php

namespace Tests\Browser;

use Tests\Browser\Config\RedirectConfig;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

/**
 * Class ButtonRedirectsTest
 * @package Tests\Browser
 */
class ButtonRedirectsTest extends DuskTestCase
{

    /**
     * @var array
     */
    private $tests = [];


    /**
     *
     */
    protected function setUp()
    {
        parent::setUp();
        $this->tests = [
            new RedirectConfig("get_home", trans('website.menu.home'), "get_home")
        ];
    }

    /**
     * @throws \Throwable
     */
    public function testRedirects()
    {
        $this->browse(function (Browser $browser) {

            /** @var RedirectConfig $test */
            foreach ($this->tests as $test) {
                $browser->screenshot("{$test->source}1");
                $browser->visitRoute($test->source)
                    ->assertRouteIs($test->source);

                $browser->waitUntilMissing('.loader');

                $browser->screenshot("{$test->source}2");

                if ($test->dropdownLinkText != null) {
                    $browser->waitForLink($test->dropdownLinkText)
                     ->clickLink($test->dropdownLinkText);
                    $browser->screenshot("{$test->dropdownLinkText}1");
                }

                $browser->waitForLink($test->linkText)
                    ->clickLink($test->linkText)
                    ->assertRouteIs($test->expectedAfterClick);
                $browser->screenshot("{$test->expectedAfterClick}1");
            }
        });
    }
}
