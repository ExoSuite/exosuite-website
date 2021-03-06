<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\WithFaker;
use Tests\Browser;
use Tests\DuskTestCase;
use Tests\Browser\Pages\ProfilePage;

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
            $password = str_random(6) . 'Cz0';

            $browser->visitRoute("login")
                ->assertRouteIs("login")
                ->type('first_name', $this->faker->firstName)
                ->type('last_name', $this->faker->lastName)
                ->type('nick_name', str_random(5))
                ->keys('@register_email', $this->faker->safeEmail)
                ->keys('@register_password', $password)
                ->type('password_confirmation', $password)
                ->press(trans('website.register'))
                ->storeConsoleLog("register1")
                ->waitForRoute('get_profile')->storeConsoleLog("register2");

            $browser->visit(new ProfilePage());
            $browser->logout();
        });
    }
}
