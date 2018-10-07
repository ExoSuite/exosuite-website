<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class RegisterTest extends DuskTestCase
{
    use WithFaker;

    /**
     * @throws \Throwable
     */
    public function testPostRegisterForm()
    {

        $this->browse(function (Browser $browser) {

            $route = route('registerAPI');
            $password = str_random() . '0';

            $browser->visit($route)
                ->assertPathIs('/register')
                ->type('first_name', $this->faker->firstName)
                ->type('last_name', $this->faker->lastName)
                ->type('nick_name', str_random(5))
                ->type('email', $this->faker->email)
                ->type('password', $password)
                ->type('password_confirmation', $password)
                ->click('#submit-register')
                ->assertPathIs('/profile');
        });
    }
}
