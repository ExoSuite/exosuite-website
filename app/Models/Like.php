<?php

namespace App\Models;

use App\Models\Abstracts\UuidModel;
use App\Models\Traits\Uuids;

class Like extends UuidModel
{
    use Uuids;

    /** @var string[] */
    protected $fillable = [
        'id',
        'liked_id',
        'liked_type',
        'liker_id',
    ];
    protected $connection = 'pgsql_api';
}
