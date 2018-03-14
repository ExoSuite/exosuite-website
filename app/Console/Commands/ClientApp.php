<?php

namespace App\Console\Commands;

use App\Models\ClientApp as ClientAppModel;
use Illuminate\Console\Command;
use Webpatser\Uuid\Uuid;


class ClientApp extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'client_app:generate {app_name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate a unique UUID for API mobile client requests';

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
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $app_name = $this->argument('app_name');
        $client_uuid = (string)Uuid::generate(4);
        if (ClientAppModel::where('client_name', $app_name)->exists()) {
            ClientAppModel::where('client_name', $app_name)->update(['client_uuid' => $client_uuid]);
        }
        else {
            ClientAppModel::create(['client_name' => $app_name, 'client_uuid' => $client_uuid]);
        }

        $this->info("Client created on app " . $app_name . " and with UUID " . $client_uuid . " successfully.");
    }
}
