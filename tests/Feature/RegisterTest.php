<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RegisterTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */

    public function testRegisterUser(bool $with_nick_name = false)
    {
        $user = factory(User::class)->make();

        $userData = $user->toArray();
        $userData['password'] = $user->password;
        $userData['password_confirmation'] = $user->password;

        if ($with_nick_name) {
            $userData['nick_name'] = str_random();
        }

        $response = $this->post(route('registerAPI'), $userData);
        $response->assertRedirect(route('get_profile'));
    }

    public function testRegisterUserWithoutNickName()
    {
        $this->testRegisterUser();
    }

    public function testRegisterUserWithNickName()
    {
        $this->testRegisterUser(true);
    }

    public function testGoRegisterPage()
    {
        $response = $this->get(route('login', [], false));
        $response->assertOk();
    }
}
