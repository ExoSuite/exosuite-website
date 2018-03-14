<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Artisan;
use Webpatser\Uuid\Uuid;

class ClientWebApp extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'client_web_app:generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate a Web client UUID for API';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    private function setEnvironmentValue($envKey, $envValue)
    {
        $envFile = app()->environmentFilePath();
        $str = file_get_contents($envFile);

        $oldValue = env($envKey);

        $str = str_replace("{$envKey}={$oldValue}", "{$envKey}={$envValue}\n", $str);

        $fp = fopen($envFile, 'w');
        fwrite($fp, $str);
        fclose($fp);
        if (file_exists(App::getCachedConfigPath()))
            Artisan::call("config:cache");
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $client_uuid = (string)Uuid::generate(4);
        $this->setEnvironmentValue("CLIENT_WEB_APP", $client_uuid);
        $this->info("A new environmental UUID value has been set " . $client_uuid . " successfully");
    }
}
