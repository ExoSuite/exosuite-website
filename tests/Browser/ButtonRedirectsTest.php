<?php

namespace Tests\Browser;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class ButtonRedirectsTest extends DuskTestCase
{
    public function testButtonThatRedirectsToHomeFromHome()
    {
        $this->browse(function (Browser $browser) {
            $target = '/';
            $expectedAfterClick = '/';
            $linkText = trans('website.menu.home');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToExoSuiteFromHome()
    {
        $this->browse(function (Browser $browser) {
            $target = '/';
            $expectedAfterClick = '/exosuite';
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exosuite');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($dropdownLinkText)
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToExoFunFromHome()
    {
        $this->browse(function (Browser $browser) {
            $target = '/';
            $expectedAfterClick = '/exofun';
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exofun');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($dropdownLinkText)
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToExoRunFromHome()
    {
        $this->browse(function (Browser $browser) {
            $target = '/';
            $expectedAfterClick = '/exorun';
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exorun');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($dropdownLinkText)
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToSocialFromHome()
    {
        $this->browse(function (Browser $browser) {
            $target = '/';
            $expectedAfterClick = '/social';
            $linkText = trans('website.menu.socialNetwork');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToTeamFromHome()
    {
        $this->browse(function (Browser $browser) {
            $target = '/';
            $expectedAfterClick = '/team';
            $linkText = trans('website.menu.team');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToPricingFromHome()
    {
        $this->browse(function (Browser $browser) {
            $target = '/';
            $expectedAfterClick = '/pricing';
            $linkText = trans('website.menu.pricing');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToBlogFromHome()
    {
        $this->browse(function (Browser $browser) {
            $target = '/';
            $expectedAfterClick = '/blog';
            $linkText = trans('website.menu.blog');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToLoginFromHome()
    {
        $this->browse(function (Browser $browser) {
            $target = '/';
            $expectedAfterClick = '/login';
            $linkText = trans('website.menu.connect');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToContactFromHome()
    {
        $this->browse(function (Browser $browser) {
            $target = '/';
            $expectedAfterClick = '/contact';
            $linkText = trans('website.menu.contact');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToHomeFromContact()
    {
        $this->browse(function (Browser $browser) {
            $target = '/contact';
            $expectedAfterClick = '/';
            $linkText = trans('website.menu.home');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToExoSuiteFromContact()
    {
        $this->browse(function (Browser $browser) {
            $target = '/contact';
            $expectedAfterClick = '/exosuite';
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exosuite');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($dropdownLinkText)
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToExoFunFromContact()
    {
        $this->browse(function (Browser $browser) {
            $target = '/contact';
            $expectedAfterClick = '/exofun';
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exofun');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($dropdownLinkText)
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToExoRunFromContact()
    {
        $this->browse(function (Browser $browser) {
            $target = '/contact';
            $expectedAfterClick = '/exorun';
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exorun');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($dropdownLinkText)
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToSocialFromContact()
    {
        $this->browse(function (Browser $browser) {
            $target = '/contact';
            $expectedAfterClick = '/social';
            $linkText = trans('website.menu.socialNetwork');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToTeamFromContact()
    {
        $this->browse(function (Browser $browser) {
            $target = '/contact';
            $expectedAfterClick = '/team';
            $linkText = trans('website.menu.team');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToPricingFromContact()
    {
        $this->browse(function (Browser $browser) {
            $target = '/contact';
            $expectedAfterClick = '/pricing';
            $linkText = trans('website.menu.pricing');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToBlogFromContact()
    {
        $this->browse(function (Browser $browser) {
            $target = '/contact';
            $expectedAfterClick = '/blog';
            $linkText = trans('website.menu.blog');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToLoginFromContact()
    {
        $this->browse(function (Browser $browser) {
            $target = '/contact';
            $expectedAfterClick = '/login';
            $linkText = trans('website.menu.connect');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToContactFromContact()
    {
        $this->browse(function (Browser $browser) {
            $target = '/contact';
            $expectedAfterClick = '/contact';
            $linkText = trans('website.menu.contact');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
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
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToExoSuiteFromExoFun()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exofun';
            $expectedAfterClick = '/exosuite';
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exosuite');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($dropdownLinkText)
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
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
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($dropdownLinkText)
                ->pause(1000)
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
                ->click('@navbar-collapser')
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
                ->click('@navbar-collapser')
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
                ->click('@navbar-collapser')
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
                ->click('@navbar-collapser')
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
                ->click('@navbar-collapser')
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
                ->click('@navbar-collapser')
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
                ->click('@navbar-collapser')
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
                ->click('@navbar-collapser')
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
            $expectedAfterClick = '/exosuite';
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exosuite');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
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
                ->click('@navbar-collapser')
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
                ->click('@navbar-collapser')
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
                ->click('@navbar-collapser')
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
                ->click('@navbar-collapser')
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
                ->click('@navbar-collapser')
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
                ->click('@navbar-collapser')
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
                ->click('@navbar-collapser')
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
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToHomeFromExoSuite()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exosuite';
            $expectedAfterClick = '/';
            $linkText = trans('website.menu.home');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToExoSuiteFromExoSuite()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exosuite';
            $expectedAfterClick = '/exosuite';
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exosuite');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($dropdownLinkText)
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToExoRunFromExoSuite()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exosuite';
            $expectedAfterClick = '/exorun';
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exorun');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
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
            $target = '/exosuite';
            $expectedAfterClick = '/exosuite';
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exosuite');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
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
            $target = '/exosuite';
            $expectedAfterClick = '/social';
            $linkText = trans('website.menu.socialNetwork');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToTeamFromExoSuite()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exosuite';
            $expectedAfterClick = '/team';
            $linkText = trans('website.menu.team');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToPricingFromExoSuite()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exosuite';
            $expectedAfterClick = '/pricing';
            $linkText = trans('website.menu.pricing');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToBlogFromExoSuite()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exosuite';
            $expectedAfterClick = '/blog';
            $linkText = trans('website.menu.blog');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToLoginFromExoSuite()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exosuite';
            $expectedAfterClick = '/login';
            $linkText = trans('website.menu.connect');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToContactFromExoSuite()
    {
        $this->browse(function (Browser $browser) {
            $target = '/exosuite';
            $expectedAfterClick = '/contact';
            $linkText = trans('website.menu.contact');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
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
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToExoSuiteFromPricing()
    {
        $this->browse(function (Browser $browser) {
            $target = '/pricing';
            $expectedAfterClick = '/exosuite';
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exosuite');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($dropdownLinkText)
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToExoRunFromPricing()
    {
        $this->browse(function (Browser $browser) {
            $target = '/pricing';
            $expectedAfterClick = '/exorun';
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.exorun');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($dropdownLinkText)
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToExoFunFromPricing()
    {
        $this->browse(function (Browser $browser) {
            $target = '/pricing';
            $expectedAfterClick = '/pricing';
            $dropdownLinkText = trans('website.menu.project');
            $linkText = trans('website.menu.pricing');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($dropdownLinkText)
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToSocialFromPricing()
    {
        $this->browse(function (Browser $browser) {
            $target = '/pricing';
            $expectedAfterClick = '/social';
            $linkText = trans('website.menu.socialNetwork');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToTeamFromPricing()
    {
        $this->browse(function (Browser $browser) {
            $target = '/pricing';
            $expectedAfterClick = '/team';
            $linkText = trans('website.menu.team');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToPricingFromPricing()
    {
        $this->browse(function (Browser $browser) {
            $target = '/pricing';
            $expectedAfterClick = '/pricing';
            $linkText = trans('website.menu.pricing');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToBlogFromPricing()
    {
        $this->browse(function (Browser $browser) {
            $target = '/pricing';
            $expectedAfterClick = '/blog';
            $linkText = trans('website.menu.blog');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToLoginFromPricing()
    {
        $this->browse(function (Browser $browser) {
            $target = '/pricing';
            $expectedAfterClick = '/login';
            $linkText = trans('website.menu.connect');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }

    public function testButtonThatRedirectsToContactFromPricing()
    {
        $this->browse(function (Browser $browser) {
            $target = '/pricing';
            $expectedAfterClick = '/pricing';
            $linkText = trans('website.menu.pricing');
            $browser->visit($target)
                ->assertPathIs($target)
                ->pause(1000)
                ->click('@navbar-collapser')
                ->pause(1000)
                ->clickLink($linkText)
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }
}
