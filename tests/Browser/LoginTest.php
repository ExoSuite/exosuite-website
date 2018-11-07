<?php

namespace Tests\Browser;

use App\Models\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Webpatser\Uuid\Uuid;

class LoginTest extends DuskTestCase
{
    /**
     *
     * @return void
     */
    use WithFaker;

//    private $userPassword = null;
//    private $userFirstName = null;
//    private $userLastName = null;
//    private $userNickName = null;
//    private $userEmail = null;
//    private $userData = null;

    /**
     * @throws \Throwable
     */

    public function testPostLoginForm()
    {
        $this->french();
//        $this->userPassword = str_random() . '0';
//        $this->userFirstName = $this->faker->firstName;
//        $this->userLastName = $this->faker->lastName;
//        $this->userNickName = str_random(5);
//        $this->userEmail = $this->faker->safeEmail;
//        $this->userData = [
//            'first_name' => $this->userFirstName,
//            'last_name' => $this->userLastName,
//            'nick_name' => $this->userNickName,
//            'email' => $this->userEmail,
//            'password' => $this->userPassword,
//            'password_confirmation' => $this->userPassword
//        ];
//
//        //Register the user
//
//        $this->post(route('registerAPI'), $this->userData);
//
//        //Logout the new user
//
//        $this->get(route('get_logout'));
//
//        //Login as the new user

        $this->browse(function (Browser $browser) {
            /* @var User $user */
            $userEmail = $this->faker->safeEmail;
            $userPassword = str_random(5) . '0';
            $user = factory(User::class)->make();
            $user->id = Uuid::generate()->string;
            /* @var array $userData */
            $userData = $user->toArray();
            $userData['email'] = $userEmail;
            $userData['password'] = Hash::make($userPassword);
            User::create($userData);

            $target = '/login';
            $expectedAfterClick = route('profile', [], false);

            $browser->visit($target)
                ->assertPathIs($target)
                ->keys('@login_email', $userEmail)
                ->keys('@login_password', $userPassword)
                ->press(trans('Se connecter !'))
                ->assertPathIs($expectedAfterClick);
            $this->assertTrue(true);
        });
    }
}
