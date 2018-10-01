<?php

namespace Tests;

use Illuminate\Support\Facades\App;
use Laravel\Dusk\TestCase as BaseTestCase;
use Facebook\WebDriver\Chrome\ChromeOptions;
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
     * @var Process
     */
    static protected $phantomJS;

    /**
     * @return bool
     */
    private static function isLocal()
    {
        return env('APP_ENV') === 'local';
    }

    /**
     *
     */
    private static function initHeadless()
    {
        $cmd = getcwd() . '/tests/bin/phantomjs --webdriver=4444';
        self::$phantomJS = new Process($cmd);
        self::$phantomJS->start();
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
        } else {
            self::initHeadless();
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
            return parent::driver();
        }
        else {
            return RemoteWebDriver::create(
                'http://localhost:4444/wd/hub', DesiredCapabilities::phantomjs()
            );
        }
    }

    /**
     *
     */
    protected function tearDown()
    {
        if (!self::isLocal()) {
            self::$phantomJS->stop();
        }
        parent::tearDown();
    }
}
