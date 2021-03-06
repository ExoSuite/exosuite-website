<?php

namespace App\Providers;

use App\Services\API;
use App\Services\InternalRequest;
use Illuminate\Support\Facades\App;
use Illuminate\Support\ServiceProvider;

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
        App::singleton('InternalRequest', function ($app) {
            return new InternalRequest($app);
        });
    }
}
