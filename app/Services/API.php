<?php
/**
 * Created by PhpStorm.
 * User: Yassir
 * Date: 18/09/2018
 * Time: 11:13
 */

namespace App\Services;

use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Response;

class API
{
    private $client;

    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => config('app.api-domain')
        ]);
    }

    public function post(string $uri, array $data, array $headers = [])
    {
        $promise = $this->client->postAsync($uri,
            ['json' => $data, 'headers' => $headers]);
        $promise->then(function (Response $response) {
            return json_decode($response->getBody());
        })->wait();
    }
}