<?php

namespace Tests;

use App\Services\API;
use Facebook\WebDriver\Chrome\ChromeOptions;
use Facebook\WebDriver\Remote\DesiredCapabilities;
use Facebook\WebDriver\Remote\RemoteWebDriver;
use Facebook\WebDriver\WebDriverDimension;
use Laravel\Dusk\TestCase as BaseTestCase;
use \Illuminate\Container\Container as Container;
use \Illuminate\Support\Facades\Facade as Facade;

/**
 * Class DuskTestCase
 * @package Tests
 */
abstract class DuskTestCase extends BaseTestCase
{
    use CreatesApplication;

    /**
     * @return void
     */
    protected function french() : void {
        app()->setLocale('fr');
    }

    /**
     * @return void
     */
    protected function english(): void {
        app()->setLocale('en');
    }

    /**
     * @return bool
     */
    private static function isLocal()
    {
        return env('APP_ENV') === 'local';
    }

    private static function duskDriver()
    {
        return env('DUSK_DRIVER');
    }

    protected function setUp()
    {
        $this->createApplication();
        API::initClient();
        parent::setUp();
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
        if (self::isLocal() or self::duskDriver() === 'CHROME') {
            self::startChromeDriver();
        }
    }

    /**
     * Create the RemoteWebDriver instance.
     *
     * @return \Facebook\WebDriver\Remote\RemoteWebDriver
     */
    protected function driver()
    {



        if (self::isLocal()) {
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
        } else if ($this->duskDriver() === 'CHROME') {
            $options = (new ChromeOptions())->addArguments([
                '--disable-gpu',
                '--headless',
                '--no-sandbox'
            ]);

            $chrome =  DesiredCapabilities::chrome()
                ->setCapability(ChromeOptions::CAPABILITY, $options)
                ->setCapability('acceptInsecureCerts', true);

            $driver = RemoteWebDriver::create(
                'http://api.dev.exosuite.fr:4444/wd/hub',
                $chrome
            );
        } else {
            $driver = RemoteWebDriver::create(
                'http://api.dev.exosuite.fr:4444/wd/hub',
                DesiredCapabilities::firefox()
            );
        }

        $size = new WebDriverDimension(1440,900);
        $driver->manage()->window()->setSize($size);
        return $driver;
    }
}
