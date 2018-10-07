<?php
/**
 * Created by PhpStorm.
 * User: loiclopez
 * Date: 05/10/2018
 * Time: 21:32
 */

namespace App\Console;


/**
 * Class Utils
 * @package App\Console
 */
class Utils
{
    public static function setEnvironmentValue($envKey, $envValue)
    {
        $path = base_path('.env');
        if (file_exists($path)) {
            file_put_contents($path, str_replace(
                $envKey . '=' . env($envKey),
                $envKey . '=' . $envValue,
                file_get_contents($path)
            ));
        }
    }
}
