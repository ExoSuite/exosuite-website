<?php

namespace App\Rules;

use App\Models\User;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Hash;

class LoginPasswordRule implements Rule
{
    private $password;
    private $email;

    /**
     * Create a new rule instance.
     *
     * @param string $password
     * @param string $email
     */
    public function __construct($password, $email)
    {
        $this->password = $password;
        $this->email = $email;
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
        if ($this->password && $this->email) {
            $user = User::where('email', $this->email)->first();
            if (Hash::check($this->password, $user->password))
                return true;
            else
                try {
                    return Hash::createArgonDriver()->check($user->password, $this->password);
                } catch (\Exception $exception) {
                    return false;
                }

        }
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
