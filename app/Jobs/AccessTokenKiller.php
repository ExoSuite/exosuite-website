<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Models\ClientApp;
use Webpatser\Uuid\Uuid;

class AccessTokenKiller implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $uuid;
    /**
     * Create a new job instance.
     *
     * @param string $database
     * @return void
     */
    public function __construct(string $client_uuid)
    {
        $this->uuid = $client_uuid;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        ClientApp::find($this->uuid)->delete();
    }
}
