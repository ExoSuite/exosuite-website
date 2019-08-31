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
    protected function setUp(): void
    {
        parent::setUp();
        $this->tests = [
            new RedirectConfig("get_home", trans('website.menu.home'), "get_home"),
            new RedirectConfig("get_home", trans('website.menu.exosuite'), 'get_exosuite', trans('website.menu.project')),
            new RedirectConfig("get_home", trans('website.menu.exofun'), 'get_exofun', trans('website.menu.project')),
            new RedirectConfig("get_home", trans('website.menu.exorun'), 'get_exorun', trans('website.menu.project')),
            new RedirectConfig("get_home", trans('website.menu.socialNetwork'), "get_social"),
            new RedirectConfig("get_home", trans('website.menu.team'), "get_team"),
            new RedirectConfig("get_home", trans('website.menu.pricing'), "get_pricing"),
            new RedirectConfig("get_home", trans('website.menu.connect'), "login"),
            new RedirectConfig("get_home", trans('website.menu.contact'), "get_contact"),

            new RedirectConfig("get_contact", trans('website.menu.home'), "get_home"),
            new RedirectConfig("get_contact", trans('website.menu.exosuite'), 'get_exosuite', trans('website.menu.project')),
            new RedirectConfig("get_contact", trans('website.menu.exofun'), 'get_exofun', trans('website.menu.project')),
            new RedirectConfig("get_contact", trans('website.menu.exorun'), 'get_exorun', trans('website.menu.project')),
            new RedirectConfig("get_contact", trans('website.menu.socialNetwork'), "get_social"),
            new RedirectConfig("get_contact", trans('website.menu.team'), "get_team"),
            new RedirectConfig("get_contact", trans('website.menu.pricing'), "get_pricing"),
            new RedirectConfig("get_contact", trans('website.menu.connect'), "login"),
            new RedirectConfig("get_contact", trans('website.menu.contact'), "get_contact"),

            new RedirectConfig("get_exofun", trans('website.menu.home'), "get_home"),
            new RedirectConfig("get_exofun", trans('website.menu.exosuite'), 'get_exosuite', trans('website.menu.project')),
            new RedirectConfig("get_exofun", trans('website.menu.exofun'), 'get_exofun', trans('website.menu.project')),
            new RedirectConfig("get_exofun", trans('website.menu.exorun'), 'get_exorun', trans('website.menu.project')),
            new RedirectConfig("get_exofun", trans('website.menu.socialNetwork'), "get_social"),
            new RedirectConfig("get_exofun", trans('website.menu.team'), "get_team"),
            new RedirectConfig("get_exofun", trans('website.menu.pricing'), "get_pricing"),
            new RedirectConfig("get_exofun", trans('website.menu.connect'), "login"),
            new RedirectConfig("get_exofun", trans('website.menu.contact'), "get_contact"),

            new RedirectConfig("get_exorun", trans('website.menu.home'), "get_home"),
            new RedirectConfig("get_exorun", trans('website.menu.exosuite'), 'get_exosuite', trans('website.menu.project')),
            new RedirectConfig("get_exorun", trans('website.menu.exofun'), 'get_exofun', trans('website.menu.project')),
            new RedirectConfig("get_exorun", trans('website.menu.exorun'), 'get_exorun', trans('website.menu.project')),
            new RedirectConfig("get_exorun", trans('website.menu.socialNetwork'), "get_social"),
            new RedirectConfig("get_exorun", trans('website.menu.team'), "get_team"),
            new RedirectConfig("get_exorun", trans('website.menu.pricing'), "get_pricing"),
            new RedirectConfig("get_exorun", trans('website.menu.connect'), "login"),
            new RedirectConfig("get_exorun", trans('website.menu.contact'), "get_contact"),

            new RedirectConfig("get_exosuite", trans('website.menu.home'), "get_home"),
            new RedirectConfig("get_exosuite", trans('website.menu.exosuite'), 'get_exosuite', trans('website.menu.project')),
            new RedirectConfig("get_exosuite", trans('website.menu.exofun'), 'get_exofun', trans('website.menu.project')),
            new RedirectConfig("get_exosuite", trans('website.menu.exorun'), 'get_exorun', trans('website.menu.project')),
            new RedirectConfig("get_exosuite", trans('website.menu.socialNetwork'), "get_social"),
            new RedirectConfig("get_exosuite", trans('website.menu.team'), "get_team"),
            new RedirectConfig("get_exosuite", trans('website.menu.pricing'), "get_pricing"),
            new RedirectConfig("get_exosuite", trans('website.menu.connect'), "login"),
            new RedirectConfig("get_exosuite", trans('website.menu.contact'), "get_contact"),

            new RedirectConfig("get_pricing", trans('website.menu.home'), "get_home"),
            new RedirectConfig("get_pricing", trans('website.menu.exosuite'), 'get_exosuite', trans('website.menu.project')),
            new RedirectConfig("get_pricing", trans('website.menu.exofun'), 'get_exofun', trans('website.menu.project')),
            new RedirectConfig("get_pricing", trans('website.menu.exorun'), 'get_exorun', trans('website.menu.project')),
            new RedirectConfig("get_pricing", trans('website.menu.socialNetwork'), "get_social"),
            new RedirectConfig("get_pricing", trans('website.menu.team'), "get_team"),
            new RedirectConfig("get_pricing", trans('website.menu.pricing'), "get_pricing"),
            new RedirectConfig("get_pricing", trans('website.menu.connect'), "login"),
            new RedirectConfig("get_pricing", trans('website.menu.contact'), "get_contact")
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
