<?php

namespace Tests;

use Facebook\WebDriver\Chrome\ChromeOptions;
use Laravel\Dusk\TestCase as BaseTestCase;
use Facebook\WebDriver\Remote\RemoteWebDriver;
use Facebook\WebDriver\Remote\DesiredCapabilities;
use Symfony\Component\Process\Process;

/**
 * Class DuskTestCase
 * @package Tests
 */
abstract class DuskTestCase extends BaseTestCase
{
    use CreatesApplication;

    /**
     * @return bool
     */
    private static function isLocal()
    {
        return env('APP_ENV') === 'local';
    }

    /**
     * Prepare for Dusk test execution.
     *
     * @beforeClass
     * @return void
     */
    public static function prepare()
    {
        if (self::isLocal()) {
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
            $options = (new ChromeOptions)->addArguments([
                '--no-sandbox'
            ]);

            return RemoteWebDriver::create(
                'http://localhost:9515', DesiredCapabilities::chrome()->setCapability(
                ChromeOptions::CAPABILITY, $options
            ));
        }
        else {
            return RemoteWebDriver::create(
                "http://phantomjs.local:4444/wd/hub", DesiredCapabilities::phantomjs()
            );
        }
    }
}
