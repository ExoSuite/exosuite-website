<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\Browser\Pages\HomePage;
use Tests\DuskTestCase;

class HomeBrowserTest extends DuskTestCase
{
    /**
     * A basic browser test example.
     *
     * @return void
     * @throws \Throwable
     */
    public function testHome()
    {
        $this->french();
        $this->browse(function (Browser $browser) {
            $browser->visit(new HomePage());
        });
    }
}
