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
        $linkText = trans('website.menu.home');
        $this->tests = [
            new RedirectConfig("get_home", $linkText, "get_home")
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

                if ($test->dropdownLinkText != null) {
                    $browser->waitForLink($test->dropdownLinkText)
                     ->clickLink($test->dropdownLinkText);
                }

                $browser->waitForLink($test->linkText)
                    ->clickLink($test->linkText);
            }
        });
    }


    public function testButtonThatRedirectsToHomeFromHome()
    {
        $this->browse(function (Browser $browser) {
            $target = '/';
            $expectedAfterClick = '/';
            $linkText = trans('website.menu.home');
            $browser->visit($target)
                ->assertPathIs($target)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToExoSuiteFromHome()
    {
        $this->browse(function (Browser $browser) {
            $target = '/';
            $expectedAfterClick = route('get_exosuite', [], false);
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exosuite');
            $browser->visit($target)
                ->assertPathIs($target)
                ->clickLink($dropdownLinkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToExoFunFromHome()
    {
        $this->browse(function (Browser $browser) {
            $target = '/';
            $expectedAfterClick = route('get_exofun', [], false);
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exofun');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($dropdownLinkText)
                ->clickLink($dropdownLinkText)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToExoRunFromHome()
    {
        $this->browse(function (Browser $browser) {
            $target = '/';
            $expectedAfterClick = route('get_exorun', [], false);
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exorun');
            $browser->visit($target)
                ->assertPathIs($target)
                ->clickLink($dropdownLinkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToSocialFromHome()
    {
        $this->browse(function (Browser $browser) {
            $target = '/';
            $expectedAfterClick = route('get_social', [], false);
            $linkText = trans('website.menu.socialNetwork');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToTeamFromHome()
    {
        $this->browse(function (Browser $browser) {
            $target = '/';
            $expectedAfterClick = route('get_team', [], false);
            $linkText = trans('website.menu.team');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToPricingFromHome()
    {
        $this->browse(function (Browser $browser) {
            $target = '/';
            $expectedAfterClick = route('get_pricing', [], false);
            $linkText = trans('website.menu.pricing');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToBlogFromHome()
    {
        $this->browse(function (Browser $browser) {
            $target = '/';
            $expectedAfterClick = route('get_blog', [], false);
            $linkText = trans('website.menu.blog');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToLoginFromHome()
    {
        $this->browse(function (Browser $browser) {
            $target = '/';
            $expectedAfterClick = route('login', [], false);
            $linkText = trans('website.menu.connect');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToContactFromHome()
    {
        $this->browse(function (Browser $browser) {
            $target = '/';
            $expectedAfterClick = route('get_contact', [], false);
            $linkText = trans('website.menu.contact');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToHomeFromContact()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_contact', [], false);
            $expectedAfterClick = '/';
            $linkText = trans('website.menu.home');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToExoSuiteFromContact()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_contact', [], false);
            $expectedAfterClick = route('get_exosuite', [], false);
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exosuite');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($dropdownLinkText)
                ->clickLink($dropdownLinkText)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToExoFunFromContact()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_contact', [], false);
            $expectedAfterClick = route('get_exofun', [], false);
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exofun');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($dropdownLinkText)
                ->clickLink($dropdownLinkText)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToExoRunFromContact()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_contact', [], false);
            $expectedAfterClick = route('get_exorun', [], false);
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exorun');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($dropdownLinkText)
                ->clickLink($dropdownLinkText)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToSocialFromContact()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_contact', [], false);
            $expectedAfterClick = route('get_social', [], false);
            $linkText = trans('website.menu.socialNetwork');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToTeamFromContact()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_contact', [], false);
            $expectedAfterClick =  route('get_team', [], false);;
            $linkText = trans('website.menu.team');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToPricingFromContact()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_contact', [], false);
            $expectedAfterClick = route('get_pricing', [], false);;
            $linkText = trans('website.menu.pricing');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToBlogFromContact()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_contact', [], false);
            $expectedAfterClick = route('get_blog', [], false);;
            $linkText = trans('website.menu.blog');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToLoginFromContact()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_contact', [], false);
            $expectedAfterClick = '/login';
            $linkText = trans('website.menu.connect');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToContactFromContact()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_contact', [], false);
            $expectedAfterClick = '/contact';
            $linkText = trans('website.menu.contact');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToHomeFromExoFun()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exofun';
            $expectedAfterClick = '/';
            $linkText = trans('website.menu.home');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToExoSuiteFromExoFun()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_exofun', [], false);
            $expectedAfterClick = route('get_exosuite', [], false);;
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exosuite');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($dropdownLinkText)
                ->clickLink($dropdownLinkText)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToExoFunFromExoFun()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exofun';
            $expectedAfterClick = '/exofun';
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exofun');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($dropdownLinkText)
                ->clickLink($dropdownLinkText)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToExoRunFromExoFun()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exofun';
            $expectedAfterClick = '/exorun';
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exorun');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($dropdownLinkText)
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToSocialFromExoFun()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exofun';
            $expectedAfterClick = '/social';
            $linkText = trans('website.menu.socialNetwork');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToTeamFromExoFun()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exofun';
            $expectedAfterClick = '/team';
            $linkText = trans('website.menu.team');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToPricingFromExoFun()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exofun';
            $expectedAfterClick = '/pricing';
            $linkText = trans('website.menu.pricing');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToBlogFromExoFun()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exofun';
            $expectedAfterClick = '/blog';
            $linkText = trans('website.menu.blog');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToLoginFromExoFun()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exofun';
            $expectedAfterClick = '/login';
            $linkText = trans('website.menu.connect');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToContactFromExoFun()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exofun';
            $expectedAfterClick = '/contact';
            $linkText = trans('website.menu.contact');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToHomeFromExoRun()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exorun';
            $expectedAfterClick = '/';
            $linkText = trans('website.menu.home');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToExoSuiteFromExoRun()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exorun';
            $expectedAfterClick = route('get_exosuite', [], false);;
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exosuite');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($dropdownLinkText)
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToExoRunFromExoRun()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exorun';
            $expectedAfterClick = '/exorun';
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exorun');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($dropdownLinkText)
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToExoFunFromExoRun()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exorun';
            $expectedAfterClick = '/exofun';
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exofun');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($dropdownLinkText)
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToSocialFromExoRun()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exorun';
            $expectedAfterClick = '/social';
            $linkText = trans('website.menu.socialNetwork');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToTeamFromExoRun()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exorun';
            $expectedAfterClick = '/team';
            $linkText = trans('website.menu.team');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToPricingFromExoRun()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exorun';
            $expectedAfterClick = '/pricing';
            $linkText = trans('website.menu.pricing');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToBlogFromExoRun()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exorun';
            $expectedAfterClick = '/blog';
            $linkText = trans('website.menu.blog');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToLoginFromExoRun()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exorun';
            $expectedAfterClick = '/login';
            $linkText = trans('website.menu.connect');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToContactFromExoRun()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exorun';
            $expectedAfterClick = '/contact';
            $linkText = trans('website.menu.contact');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToHomeFromExoSuite()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_exosuite', [], false);;
            $expectedAfterClick = '/';
            $linkText = trans('website.menu.home');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToExoSuiteFromExoSuite()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_exosuite', [], false);;
            $expectedAfterClick = route('get_exosuite', [], false);;
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exosuite');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($dropdownLinkText)
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToExoRunFromExoSuite()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_exosuite', [], false);;
            $expectedAfterClick = '/exorun';
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exorun');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($dropdownLinkText)
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToExoFunFromExoSuite()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_exosuite', [], false);;
            $expectedAfterClick = route('get_exosuite', [], false);;
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exosuite');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($dropdownLinkText)
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToSocialFromExoSuite()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_exosuite', [], false);;
            $expectedAfterClick = '/social';
            $linkText = trans('website.menu.socialNetwork');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToTeamFromExoSuite()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_exosuite', [], false);;
            $expectedAfterClick = '/team';
            $linkText = trans('website.menu.team');
            $browser->visit($target)
                ->assertPathIs($target)


                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToPricingFromExoSuite()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_exosuite', [], false);;
            $expectedAfterClick = '/pricing';
            $linkText = trans('website.menu.pricing');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToBlogFromExoSuite()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_exosuite', [], false);;
            $expectedAfterClick = '/blog';
            $linkText = trans('website.menu.blog');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToLoginFromExoSuite()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_exosuite', [], false);;
            $expectedAfterClick = '/login';
            $linkText = trans('website.menu.connect');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToContactFromExoSuite()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_exosuite', [], false);;
            $expectedAfterClick = '/contact';
            $linkText = trans('website.menu.contact');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToHomeFromPricing()
    {
        $this->browse(function (Browser $browser) {
            $target = '/pricing';
            $expectedAfterClick = '/';
            $linkText = trans('website.menu.home');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)

                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToExoSuiteFromPricing()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_pricing', [], false);
            $expectedAfterClick = route('get_exosuite', [], false);
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exosuite');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($dropdownLinkText)
                ->clickLink($dropdownLinkText)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToExoRunFromPricing()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_pricing', [], false);
            $expectedAfterClick = route('get_exorun', [], false);
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exorun');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($dropdownLinkText)
                ->clickLink($dropdownLinkText)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToExoFunFromPricing()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_pricing', [], false);
            $expectedAfterClick =  route('get_pricing', [], false);
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.pricing');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($dropdownLinkText)
                ->clickLink($dropdownLinkText)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToSocialFromPricing()
    {
        $this->browse(function (Browser $browser) {
            $target =  route('get_pricing', [], false);
            $expectedAfterClick =  route('get_social', [], false);
            $linkText = trans('website.menu.socialNetwork');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToTeamFromPricing()
    {
        $this->browse(function (Browser $browser) {
            $target =  route('get_pricing', [], false);
            $expectedAfterClick =  route('get_team', [], false);;
            $linkText = trans('website.menu.team');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToPricingFromPricing()
    {
        $this->browse(function (Browser $browser) {
            $target =  route('get_pricing', [], false);
            $expectedAfterClick =  route('get_pricing', [], false);
            $linkText = trans('website.menu.pricing');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToBlogFromPricing()
    {
        $this->browse(function (Browser $browser) {
            $target =  route('get_pricing', [], false);
            $expectedAfterClick = route('get_blog', [], false);
            $linkText = trans('website.menu.blog');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToLoginFromPricing()
    {
        $this->browse(function (Browser $browser) {
            $target =  route('get_pricing', [], false);
            $expectedAfterClick = route('login', [], false);
            $linkText = trans('website.menu.connect');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }

    public function testButtonThatRedirectsToContactFromPricing()
    {
        $this->browse(function (Browser $browser) {
            $target = route('get_pricing', [], false);
            $expectedAfterClick = route('get_pricing', [], false);
            $linkText = trans('website.menu.pricing');
            $browser->visit($target)
                ->assertPathIs($target)
                ->waitForLink($linkText)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
        });
    }
}
