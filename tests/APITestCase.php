<?php
/**
 * Created by PhpStorm.
 * User: loiclopez
 * Date: 16/03/2018
 * Time: 19:57
 */

namespace Tests;

use App\Traits\APICall;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Http\Request;
use PHPUnit\Framework\Assert as PHPUnit;

abstract class APITestCase extends BaseTestCase
{
    use CreatesApplication;
    use APICall {
        APICall::APICall as protected APITraitCall;
    }
    protected $currentHttpStatus;

    /**
     * Assert that the response has the given status code.
     *
     * @param int $expectedStatus
     * @param  int $status
     * @return $this
     */
    protected function assertStatus(int $expectedStatus)
    {

        PHPUnit::assertTrue(
            $this->currentHttpStatus === $expectedStatus,
            "Expected status code {$expectedStatus} but received {$this->currentHttpStatus}."
        );

        return $this;
    }

    protected function httpAPIUri(string $uri): string
    {
        return "http://" . env('API_DOMAIN') . "/api/{$uri}";
    }

    protected function createAPIDomainCallBack()
    {
        return array($this, "httpAPIUri");
    }

    /**
     * @param string $method
     * @param string $APIUri
     * @param array $body
     * @param array $headers
     * @param string $urlCreator
     */
    protected function APICall(string $method, string $APIUri,
                               array $body, array $headers = [], $urlCreator = null)
    {
        try {
            $this->APITraitCall(new Request(), $method, $APIUri, $body, $headers, $urlCreator);
            $this->currentHttpStatus = $this->response->getStatusCode();
        } catch (GuzzleException $e) {
            $this->currentHttpStatus = $e->getCode();
        }
    }

    protected function registerUnitTestUser()
    {
        $this->APICall('POST', 'authenticate/register',
            [
                "email" => "unittest@exosuite.fr",
                "first_name" => "unit",
                "last_name" => "test",
                "password" => "unittest",
                "password_confirmation" => "unittest"
            ], [], $this->createAPIDomainCallBack());
    }
}