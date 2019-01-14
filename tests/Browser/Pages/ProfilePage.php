<?php

namespace Tests\Browser\Pages;

use Laravel\Dusk\Browser;

class ProfilePage extends Page
{
    private $user;

    public function __construct($user = null)
    {
        $this->user = $user;
    }

    /**
     * Get the URL for the page.
     *
     * @return string
     */
    public function url()
    {
        return route("get_profile");
    }

    /**
     * Assert that the browser is on the page.
     *
     * @param  Browser $browser
     * @return void
     * @throws \Facebook\WebDriver\Exception\TimeOutException
     */
    public function assert(Browser $browser)
    {
        $browser->waitForRoute('get_profile')
            ->assertRouteIs('get_profile')
            ->waitUntilMissing('#hellopreloader')
            ->assertVisible("div.profile-section")
            ->assertAuthenticated();

        if ($this->user)
            $browser->assertAuthenticatedAs($this->user);

    }

    /**
     * Get the element shortcuts for the page.
     *
     * @return array
     */
    public function elements()
    {
        return [
            '@element' => '#selector',
        ];
    }
}
