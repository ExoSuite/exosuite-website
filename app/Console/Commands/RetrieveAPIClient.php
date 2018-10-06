<?php

namespace App\Console\Commands;

use App\Facades\API;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\App;

/**
 * Class RetrieveAPIClient
 * @package App\Console\Commands
 */
class RetrieveAPIClient extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'api:retrieve';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Retrieve Staging API Client';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     *
     */
    private function isAbleToRun() {
        if (App::environment("production")) {
            $this->warn("Unable to run this command in " . env("APP_ENV") . ".");
            exit();
        }
    }

    private function setEnvironmentValue($envKey, $envValue)
    {
        $path = base_path('.env');
        if (file_exists($path)) {
            file_put_contents($path, str_replace(
                $envKey . '=' . env($envKey), $envKey . '=' . $envValue, file_get_contents($path)
            ));
        }
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->isAbleToRun();
        $response = API::get('staging/client');
        $this->setEnvironmentValue("WEBSITE_CLIENT_SECRET", $response['client_id']);
        $this->setEnvironmentValue("WEBSITE_CLIENT_ID_API", $response['client_secret']);
    }
}
