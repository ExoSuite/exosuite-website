<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

/**
 * Class TestCase
 * @package Tests
 */
abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    /**
     * @return void
     */
    protected function french() : void
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
}
