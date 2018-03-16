<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class APITokenRule implements Rule
{
    private $user_id;
    private $token_type;

    /**
     * Create a new rule instance.
     *
     * @param string $user_id
     * @param string $token_type
     */
    public function __construct(string $user_id, string $token_type)
    {
        $this->user_id = $user_id;
        $this->token_type = $token_type;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $validator = Validator::make(['user_id', $this->user_id,  'user_id' => 'bail|required|uuid|exists:users']);
        $token = ApiToken::where('token_type', $this->token_type)->where('user_id', $this->user_id);

        return strlen($value) == AbstractApiToken::$length && $validator->passes() && $token->exists() && $value === $token->first()->token;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The token must be a valid one.';
    }
}
