<?php

namespace Tests;

use App\Services\API;
use Facebook\WebDriver\Chrome\ChromeOptions;
use Facebook\WebDriver\Remote\DesiredCapabilities;
use Facebook\WebDriver\Remote\RemoteWebDriver;
use Facebook\WebDriver\WebDriverDimension;
use Laravel\Dusk\TestCase as BaseTestCase;

/**
 * Class DuskTestCase
 * @package Tests
 */
abstract class DuskTestCase extends BaseTestCase
{
    use CreatesApplication;

    /**
     * @param $route
     * @param array $parameters
     * @return string
     */
    protected function route($route, $parameters = [])
    {
        return route($route, $parameters, false);
    }

    /**
     * @return void
     */
    protected function french(): void
    {
        app()->setLocale('fr');
    }

    /**
     * @return void
     */
    protected function english(): void
    {
        app()->setLocale('en');
    }

    /**
     * @return bool
     */
    private static function isLocal()
    {
        return env('APP_ENV') === 'local';
    }

    /**
     * @return mixed
     */
    private static function duskDriver()
    {
        return env('DUSK_DRIVER');
    }

    /**
     *
     */
    protected function setUp(): void
    {
        parent::setUp();
        $this->createApplication();
        API::initClient();
        foreach (static::$browsers as $browser) {
            $browser->driver->manage()->deleteAllCookies();
        }
    }

    /**
     * Prepare for Dusk test execution.
     *
     * @beforeClass
     * @return void
     */
    public static function prepare()
    {
        if (self::isLocal() and self::duskDriver() === 'CHROME') {
            self::startChromeDriver();
        }
    }

    /**
     * Create the RemoteWebDriver instance.
     *
     * @return \Facebook\WebDriver\Remote\RemoteWebDriver
     * @throws \Facebook\WebDriver\Exception\WebDriverException
     */
    protected function driver()
    {

        if (self::isLocal() && $this->duskDriver() === 'CHROME') {
            $options = (new ChromeOptions())->addArguments([
                '--no-sandbox'
            ]);

            $driver = RemoteWebDriver::create(
                'http://localhost:9515',
                DesiredCapabilities::chrome()->setCapability(
                    ChromeOptions::CAPABILITY,
                    $options
                )
            );
        } elseif ($this->duskDriver() === 'CHROME') {
            $options = (new ChromeOptions())->addArguments([
                '--disable-gpu',
                '--headless',
                '--no-sandbox'
            ]);

            $chrome = DesiredCapabilities::chrome()
                ->setCapability(ChromeOptions::CAPABILITY, $options)
                ->setCapability('acceptInsecureCerts', true);

            $driver = RemoteWebDriver::create(
                'http://zalenium:4444/wd/hub',
                $chrome
            );
        } else {
            $driver = RemoteWebDriver::create(
                'http://zalenium:4444/wd/hub',
                $this->setupCapabilities()
            );
        }

        $size = new WebDriverDimension(1440, 900);
        $driver->manage()->window()->setSize($size);
        return $driver;
    }

    /**
     * @return DesiredCapabilities
     */
    protected function setupCapabilities()
    {
        $desiredCapabilities = DesiredCapabilities::firefox()
            ->setCapability('acceptInsecureCerts', true);
        return $desiredCapabilities;
    }

    /**
     * @param Browser $browser
     * @return Browser
     * @throws \Facebook\WebDriver\Exception\TimeOutException
     */
    protected function logout(Browser $browser): Browser
    {
        $home = $this->route("get_home");
        $protectedRoute = $this->route("get_profile");
        $login = $this->route("get");
        $browser->visit($this->route("logout"))->waitForRoute("get_home")->assertPathIs($home);
        $browser->visit($protectedRoute)->assertGuest()->assertPathIs($login);
        return $browser;
    }

    /**
     * @param RemoteWebDriver $driver
     * @return \Laravel\Dusk\Browser|Browser
     */
    protected function newBrowser($driver): Browser
    {
        return new Browser($driver);
    }
}
