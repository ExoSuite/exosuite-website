<?php
/**
 * Created by PhpStorm.
 * User: Yassir
 * Date: 18/09/2018
 * Time: 11:49
 */

namespace App\Facades;


use Illuminate\Support\Facades\Facade;

/**
 * Class API
 * @package App\Facades
 * @method array post(string $uri, array $data, array $headers = [])
 * @method array get(string $uri, array $data = [], array $headers = [])
 * @method array put(string $uri, array $data, array $headers = [])
 * @method array patch(string $uri, array $data, array $headers = [])
 * @method array delete(string $uri, array $data = [], array $headers = [])
 */
class API extends Facade
{
    /**
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return "API";
    }
}
