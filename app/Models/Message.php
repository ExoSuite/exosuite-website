<?php

namespace App\Models;

use App\Models\Abstracts\UuidModel;

class Message extends UuidModel
{

    /** @var string[] */
    protected $fillable = [
        'id',
        'contents',
        'group_id',
        'user_id',
        'created_at',
        'updated_at',
    ];
    protected $connection = 'pgsql_api';
}
