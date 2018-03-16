<?php

namespace App\Console\Commands;

use App\Models\ClientApp as ClientAppModel;
use Illuminate\Console\Command;
use Validator;

class ClientAppGetInfosUUID extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'client_app:get_infos_uuid {uuid}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get client app information from uuid search';

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
        $validator = Validator::make(['uuid' => $this->argument('uuid')], ['uuid' => 'uuid']);
        if ($validator->fails()) {
            $this->error("This UUID isn't a valid one");
            return;
        }
        $uuid = ClientAppModel::where('client_uuid', $this->argument('uuid'));
        if ($uuid->exists()) {
            $client_app = $uuid->first();
            $this->info("the client's uuid is " . $client_app->client_uuid . " and his name " . $client_app->client_name . ".");
        } else
            $this->error("This UUID \"" . $this->argument('uuid') . "\" doesn't match in database.");

    }
}
