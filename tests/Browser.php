<?php
/**
 * Created by PhpStorm.
 * User: loiclopez
 * Date: 2018-12-30
 * Time: 13:14
 */

namespace Tests;


class Browser extends \Laravel\Dusk\Browser
{

    public function assertGuest($guard = null)
    {
        $previousUrl = $this->driver->getCurrentURL();
        parent::assertGuest($guard);
        $this->visit($previousUrl);
        return $this;
    }

    /**
     * @param null $guard
     * @return $this|\Laravel\Dusk\Browser
     * @throws \Facebook\WebDriver\Exception\TimeOutException
     */
    public function logout($guard = null)
    {
        parent::logout();
        $this->visitRoute("logout")->waitForRoute("login");
        $this->visitRoute("get_profile")->waitForRoute("login")->assertRouteIs("login")->assertGuest();
        return $this;
    }
}
