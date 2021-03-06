<?php
/**
 * Created by PhpStorm.
 * User: Yassir
 * Date: 18/09/2018
 * Time: 11:49
 */

namespace App\Facades;


use App\Services\API as APIService;
use Illuminate\Support\Facades\Facade;
use PeterPetrus\Auth\PassportToken;
use RuntimeException;

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

    public static function getWebsiteCredentials()
    {
        return [
            'client_id' => APIService::$client_id,
            'client_secret' => APIService::$client_secret
        ];
    }

    public static function checkAccessToken($instance)
    {
        if (session()->exists('access_token')) {
            $token = new PassportToken(session('access_token'));
            if ($token->expired) {
                if (!$instance) {
                    $instance = new APIService();
                }
                $response = $instance->post('/oauth/token', [
                    'grant_type' => 'refresh_token',
                    'refresh_token' => session('refresh_token'),
                    'client_id' => APIService::$client_id,
                    'client_secret' => APIService::$client_secret,
                    'scope' => '',
                ]);
                session($response);
                return $response;
            }
            return $token;
        }
    }

    public static function __callStatic($method, $args)
    {
        $instance = static::getFacadeRoot();

        if (!$instance) {
            throw new RuntimeException('A facade root has not been set.');
        }

        self::checkAccessToken($instance);
        return $instance->$method(...$args);
    }
}
