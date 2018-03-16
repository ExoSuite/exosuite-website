<?php

namespace App\Traits;

use GuzzleHttp\Client;
use Psr\Http\Message\ResponseInterface;
use Illuminate\Http\Request;
use App\Helpers\APIClientAppHelper;


trait APICall
{
    /**
     * @var ResponseInterface
     */
    protected $response;

    /**
     * @param Request $request
     * @param string $apiUri
     * @return string
     */
    private function ApiUri(Request $request, string $apiUri)
    {
        return APIClientAppHelper::getHttp($request) . APIClientAppHelper::getApiUri() . '/' . $apiUri;
    }

    /**
     * @param Request $request
     * @param string $method
     * @param string $APIUri
     * @param array $body
     * @param array $headers
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    protected function APICall(Request $request, string $method, string $APIUri, array $body, array $headers = []) {
        $client = new Client(['headers' => ['client-web' => APIClientAppHelper::getClientWebAppToken(), $headers]]);
        $this->response =
            $client->request($method, $this->ApiUri($request, $APIUri),
                ['form_params' => $body]
            );
    }
}