<?php

namespace App\Models;

use App\Models\Abstracts\UuidModel;

class Group extends UuidModel
{
    /** @var string[] */
    protected $fillable = [
        'id',
        'name',
        'created_at',
        'updated_at',
    ];
    protected $connection = 'pgsql_api';
}
