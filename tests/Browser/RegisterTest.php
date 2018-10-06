<?php

namespace Tests\Browser;


use App\Models\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class RegisterTest extends DuskTestCase
{
    public function testExample()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit(route('registerAPI'))
                ->type('first_name', 'Jean')
                ->type('last_name', 'Dupont')
                ->type('nickname', 'jdupont')
                ->type('email', 'test@test.fr')
                ->type('password', 'Test123')
                ->type('password_confirmation', 'Test123')
                ->click('#submit-register')
                ->assertPathIs('/register');
        });
    }
}
