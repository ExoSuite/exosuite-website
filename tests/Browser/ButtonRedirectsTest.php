<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\Browser\Config\RedirectConfig;
use Tests\DuskTestCase;

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
            new RedirectConfig("get_home", trans('website.menu.home'), "get_home"),

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
                $browser->visitRoute($test->source)
                    ->assertRouteIs($test->source);

                $browser->waitUntilMissing('.loader');
                $browser->assertMissing('.loader');


                if ($test->dropdownLinkText != null) {
                    $browser->clickLink($test->dropdownLinkText);
                }

                $browser->clickLink($test->linkText)
                    ->assertRouteIs($test->expectedAfterClick);
            }
        });
    }
}
