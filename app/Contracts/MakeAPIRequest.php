<?php
/**
 * Created by PhpStorm.
 * User: loiclopez
 * Date: 09/10/2018
 * Time: 15:38
 */

namespace App\Contracts;


use Illuminate\Support\Collection;

/**
 * Interface MakeAPIRequest
 * @package App\Contracts
 */
interface MakeAPIRequest
{

    /**
     * @return void
     */
    public static function initClient();

    /**
     * @param string $uri
     * @param array $data
     * @param array $headers
     * @return array
     */
    public function post(string $uri, array $data, array $headers = []);

    /**
     * @param string $uri
     * @param array $data
     * @param array $headers
     * @return array
     */
    public function get(string $uri, array $data = [], array $headers = []);

    /**
     * @param string $uri
     * @param array|Collection $data
     * @param array $headers
     * @return array
     */
    public function patch(string $uri, $data, array $headers = []);

    /**
     * @param string $uri
     * @param array $data
     * @param array $headers
     * @return array
     */
    public function put(string $uri, array $data, array $headers = []);

    /**
     * @param string $uri
     * @param array $data
     * @param array $headers
     * @return array
     */
    public function delete(string $uri, array $data = [], array $headers = []);
}
