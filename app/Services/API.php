<?php
/**
 * Created by PhpStorm.
 * User: Yassir
 * Date: 18/09/2018
 * Time: 11:13
 */

namespace App\Services;

use App\Contracts\MakeAPIRequest;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Collection;

/**
 * Class API
 * @package App\Services
 */
class API implements MakeAPIRequest
{
    /**
     * @var Client $client
     */
    private $client;
    /**
     * @var int $client_id
     */
    public static $client_id;
    /**
     * @var string $client_secret
     */
    public static $client_secret;

    /**
     * @param mixed $promise
     * @return array
     */
    private function wait($promise)
    {
        return (array)$promise->then(function (Response $response) {
            return json_decode($response->getBody()->getContents());
        })->wait();
    }

    /**
     * API constructor.
     */
    public function __construct()
    {
        $this->client = new Client(['base_uri' => config('api.domain')]);
    }

    /**
     * @return void
     */
    public static function initClient()
    {
        self::$client_id = (int)config('api.client_id');
        self::$client_secret = config('api.client_secret');
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
     * @param UploadedFile $data
     * @param array $headers
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function postPicture(string $uri, UploadedFile $data, array $headers = [])
    {
        dd($data);
        $picture = fopen($data, 'r');
        $response = $this->client->post($uri, [
                'multipart' => [
                    [
                        'name' => 'picture',
                        'contents' => $picture,
                    ]
                ],
                'headers' => $headers
            ]);
        return $response;
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
     * @param array|Collection $data
     * @param array $headers
     * @return array
     */
    public function patch(string $uri, $data, array $headers = [])
    {
        if ($data instanceof Collection)
            $data = $data->all();
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
