<?php

namespace App\Rules;

use App\Models\AClasses\AbstractApiToken;
use App\Models\ApiToken;
use App\Models\User;
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
    public function __construct($user_id, $token_type)
    {
        $this->user_id = $user_id;
        $this->token_type = $token_type;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string $attribute
     * @param  mixed $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $token = ApiToken::where('token_type', $this->token_type)->where('user_id', $this->user_id);

        if ($this->token_type === ApiToken::$RefreshToken->type) {
            return strlen($value) == AbstractApiToken::$length && $token->exists()
                && $value === $token->first()->token && User::find($this->user_id)->refresh_token === $value;
        }

        return strlen($value) == AbstractApiToken::$length && $token->exists() && $value === $token->first()->token;
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
