<?php
/**
 * Created by PhpStorm.
 * User: loiclopez
 * Date: 16/03/2018
 * Time: 19:57
 */

namespace Tests;

use App\Traits\APICall;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use PHPUnit\Framework\Assert as PHPUnit;

abstract class APITestCase extends BaseTestCase
{
    use CreatesApplication, APICall;

    /**
     * Assert that the response has the given status code.
     *
     * @param int $expectedStatus
     * @param  int $status
     * @return $this
     */
    protected function assertStatus(int $expectedStatus, int $status)
    {
        $actual = $status;

        PHPUnit::assertTrue(
            $actual === $expectedStatus,
            "Expected status code {$expectedStatus} but received {$actual}."
        );

        return $this;
    }

    protected function httpAPIUri(string $uri): string
    {
        return "http://" . env('API_DOMAIN') . "/{$uri}";
    }

    protected function createAPIDomainCallBack()
    {
        return array($this, "httpAPIUri");
    }
}