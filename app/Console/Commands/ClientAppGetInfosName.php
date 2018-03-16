<?php

namespace App\Console\Commands;

use App\Models\ClientApp as ClientAppModel;
use Illuminate\Console\Command;

class ClientAppGetInfosName extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'client_app:get_infos_name {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get client information by name';

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
        $client = ClientAppModel::where('client_name', $this->argument('name'));
        if ($client->exists()) {
            $client_app = $client->first();
            $this->info("the client's uuid is " . $client_app->client_uuid . " and his name " . $client_app->client_name . ".");
        } else
            $this->error("This name \"" . $this->argument('name') . "\" doesn't match in database.");

    }
}
