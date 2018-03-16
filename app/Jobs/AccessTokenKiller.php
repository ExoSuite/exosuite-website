<?php

namespace App\Jobs;

use App\Models\ClientApp;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

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
