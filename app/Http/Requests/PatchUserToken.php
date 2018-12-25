<?php

namespace App\Http\Requests;

use App\Rules\ValidTokenRule;
use Illuminate\Foundation\Http\FormRequest;

class PatchUserToken extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "token_type" => "required|string",
            "expires_in" => "required|integer",
            "access_token" => ["required", "string", new ValidTokenRule()],
            "refresh_token" => ["required", "string", new ValidTokenRule()]
        ];
    }
}
