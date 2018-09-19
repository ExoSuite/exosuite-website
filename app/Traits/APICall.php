<?php

namespace App\Traits;

use App\Helpers\APIClientAppHelper;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Psr\Http\Message\ResponseInterface;


trait APICall
{
    /**
     * @var ResponseInterface
     */
    protected $response;

    /**
     * @param Request $request
     * @param string $APIUri
     * @return string
     */
    private static function ApiUri(Request $request, string $APIUri)
    {
        return APIClientAppHelper::getHttp($request) . APIClientAppHelper::getApiUri() . '/' . $APIUri;
    }

    /**
     * @param Request $request
     * @param string $method
     * @param string $APIUri
     * @param array $body
     * @param array $headers
     * @param string $urlCreator
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    protected function APICall(
        Request $request,
        string $method,
        string $APIUri,
        array $body,
        array $headers = [],
        $urlCreator = null
    ) {
        $headers['client-web'] = APIClientAppHelper::getClientWebAppToken();
        Log::info("headers", $headers);
        $client = new Client(['headers' => $headers]);

        if ($urlCreator === null) {
            $APIUri = $this->ApiUri($request, $APIUri);
        } else {
            $APIUri = call_user_func($urlCreator, $APIUri);
        }

        $this->response = $client->request($method, $APIUri, ['form_params' => $body]);
    }
}
