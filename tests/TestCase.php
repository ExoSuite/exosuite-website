<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected function french() : void {
        app()->setLocale('fr');
    }

    protected function english(): void {
        app()->setLocale('en');
    }
}
