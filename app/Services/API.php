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
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Config;

/**
 * Class API
 * @package App\Services
 */
class API
{
    /**
     * @var Client
     */
    private $client;
    public static $client_id;
    public static $client_secret;

    /**
     * @param $promise
     * @return array
     */
    private function wait($promise)
    {
        return (array) $promise->then(function (Response $response) {
            return json_decode($response->getBody()->getContents());
        })->wait();
    }

    /**
     * API constructor.
     */
    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => config('app.api-domain')
        ]);
    }

    public static function initClient()
    {
        if (env('APP_ENV') === 'production' or Config::get('app.env') === 'production') {
            self::$client_id = (int)config('app.website_client_id_api');
            self::$client_secret = config('app.website_client_secret');
        } else {
            self::$client_id = (int)env('WEBSITE_CLIENT_ID_API');
            self::$client_secret = env('WEBSITE_CLIENT_SECRET');
        }
    }

    /**
     * @param string $uri
     * @param array $data
     * @param array $headers
     * @return array
     */
    public function post(string $uri, array $data, array $headers = [])
    {
        $promise = $this->client->postAsync($uri, ['json' => $data, 'headers' => $headers]);
        return $this->wait($promise);
    }

    /**
     * @param string $uri
     * @param array $data
     * @param array $headers
     * @return array
     */
    public function get(string $uri, array $data = [], array $headers = [])
    {
        $promise = $this->client->getAsync($uri, ['query' => $data, 'headers' => $headers]);
        return $this->wait($promise);
    }

    /**
     * @param string $uri
     * @param array $data
     * @param array $headers
     * @return array
     */
    public function patch(string $uri, array $data, array $headers = [])
    {
        $promise = $this->client->patchAsync($uri, ['json' => $data, 'headers' => $headers]);
        return $this->wait($promise);
    }

    /**
     * @param string $uri
     * @param array $data
     * @param array $headers
     * @return array
     */
    public function put(string $uri, array $data, array $headers = [])
    {
        $promise = $this->client->putAsync($uri, ['json' => $data, 'headers' => $headers]);
        return $this->wait($promise);
    }

    /**
     * @param string $uri
     * @param array $data
     * @param array $headers
     * @return array
     */
    public function delete(string $uri, array $data = [], array $headers = [])
    {
        $promise = $this->client->putAsync($uri, ['query' => $data, 'headers' => $headers]);
        return $this->wait($promise);
    }
}
