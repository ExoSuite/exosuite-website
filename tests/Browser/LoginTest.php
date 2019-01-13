<?php

namespace Tests\Browser;

use App\Models\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Tests\Browser;
use Tests\DuskTestCase;
use Webpatser\Uuid\Uuid;

class LoginTest extends DuskTestCase
{
    /**
     *
     * @return void
     */
    use WithFaker;

    /**
     * @throws \Throwable
     */

    public function testPostLoginForm()
    {
        $this->french();
        $this->browse(function (Browser $browser) {

            /* @var User $user */
            $userEmail = $this->faker->safeEmail;
            $userPassword = 'TestCz0';
            $user = factory(User::class)->make();
            $user->id = Uuid::generate()->string;
            /* @var array $userData */
            $userData = $user->toArray();
            $userData['email'] = $userEmail;
            $userData['password'] = Hash::make($userPassword);
            User::create($userData);

            $browser->visitRoute("login")
                ->assertRouteIs("login")
                ->assertGuest()
                ->waitFor("@login_email")
                ->keys('@login_email', $userEmail)
                ->keys('@login_password', $userPassword)
                ->press(trans('website.login.signin'))
                ->storeConsoleLog('console2')
                ->assertRouteIs("get_profile")
                ->assertAuthenticated()
                ->assertAuthenticatedAs($user)
                ->logout();
        });
    }
}
