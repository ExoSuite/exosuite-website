<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Opinion
 * @package App\Models
 * @package string survey
 * @package string email
 */
class Opinion extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'survey', 'email'
    ];
}
