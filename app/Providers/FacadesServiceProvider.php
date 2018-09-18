<?php

namespace App\Providers;

use App\Services\API;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\App;

class FacadesServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        App::singleton('API', function () {
            return new API();
        });
    }
}
