<?php

namespace App\Jobs;

use App\Models\ApiToken;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class AccessTokenKiller implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $token_uuid;

    /**
     * Create a new job instance.
     *
     * @param string $token_uuid
     */
    public function __construct(string $token_uuid)
    {
        $this->token_uuid = $token_uuid;
    }

    /**
     * Execute the job.
     *
     * @return void
     * @throws \Exception
     */
    public function handle()
    {
        $token = ApiToken::find($this->token_uuid);
        if ($token->exists())
            $token->delete();
    }
}
