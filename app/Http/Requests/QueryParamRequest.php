<?php
/**
 * Created by PhpStorm.
 * User: loiclopez
 * Date: 21/09/2018
 * Time: 13:01
 */

namespace App\Http\Requests;


use Illuminate\Foundation\Http\FormRequest;

/**
 * Class QueryParamRequest
 * @package App\Http\Requests
 */
abstract class QueryParamRequest extends FormRequest
{
    /**
     * @param null $keys
     * @return array
     */
    public function all($keys = null)
    {
        return array_replace_recursive(
            parent::all(),
            $this->route()->parameters()
        );
    }
}
