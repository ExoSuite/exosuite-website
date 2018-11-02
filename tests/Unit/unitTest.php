<?php

namespace Tests\Unit;

use App\Models\User;
use Illuminate\Http\Response;
use Tests\TestCase;

class unitTest extends TestCase
{
    private $user;

    private $userPassword = null;

    public function testGetProfileWithoutBeeingConnected()
    {
        $response = $this->get(
            route('profile')
        );
        $response->assertRedirect('/login');
    }

    public function testLogOutWithoutbeeingConnected()
    {
        $response = $this->get('/logout');
        $response->assertRedirect('/');
    }
}