<?php

namespace App\Models;

use App\Models\Abstracts\UuidModel;

class Commentary extends UuidModel
{

    /** @var string[] */
    protected $fillable = ['id', 'post_id', 'content', 'author_id', 'created_at', 'updated_at',];

    protected $connection = 'pgsql_api';
}
