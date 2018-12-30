<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\WithFaker;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class RegisterTest extends DuskTestCase
{
    /**
     *
     * @return void
     */
    use WithFaker;

    /**
     * @throws \Throwable
     */
    public function testPostRegisterForm()
    {
        $this->french();
        $this->browse(function (Browser $browser) {

            $target = '/login';
            $expectedAfterClick = route('profile', [], false);
            $password = str_random(6) . 'Cz0';

            $browser->visit($target)
                ->assertPathIs($target)
                ->type('first_name', $this->faker->firstName)
                ->type('last_name', $this->faker->lastName)
                ->type('nick_name', str_random(5))
                ->keys('@register_email', $this->faker->safeEmail)
                ->keys('@register_password', $password)
                ->type('password_confirmation', $password)
                ->press(trans('website.register'))
                ->assertPathIs($expectedAfterClick)
                ->logout();
        });
    }
}
