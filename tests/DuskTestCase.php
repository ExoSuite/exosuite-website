<?php

namespace Tests;

use App\Services\API;
use Facebook\WebDriver\Chrome\ChromeOptions;
use Facebook\WebDriver\Remote\DesiredCapabilities;
use Facebook\WebDriver\Remote\RemoteWebDriver;
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

            return RemoteWebDriver::create(
                'http://localhost:9515',
                DesiredCapabilities::chrome()->setCapability(
                    ChromeOptions::CAPABILITY,
                    $options
                )
            );
        }

        if ($this->duskDriver() === 'CHROME') {
            $options = (new ChromeOptions())->addArguments([
                '--disable-gpu',
                '--headless'
            ]);

            $chrome =  DesiredCapabilities::chrome()
                ->setCapability(ChromeOptions::CAPABILITY, $options)
                ->setCapability('acceptInsecureCerts', true);

            return RemoteWebDriver::create(
                'http://localhost:9515',
                $chrome
            );
        } elseif ($this->duskDriver() === 'PHANTOMJS') {
            return RemoteWebDriver::create(
                "http://127.0.0.1:4444/wd/hub",
                DesiredCapabilities::phantomjs()
            );
        }
    }
}
