<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Models\User;

class LoginPasswordRule implements Rule
{
    private $pass;
    private $email;
    /**
     * Create a new rule instance.
     *
     * @param string $password
     * @param string $email
     */
    public function __construct($password, $email)
    {
        $this->pass = $password;
        $this->email = $email;
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
        if ($this->pass && $this->email)
            return \Hash::check($this->pass, User::where('email', $this->email)->first()->password);
        else
            return false;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Wrong password!';
    }
}
