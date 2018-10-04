<?php

namespace App\Models\Traits;

use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;

trait Uuids
{

    /**
     * Boot function from laravel.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function (Model $model) {
            $model->{$model->getKeyName()} = (string)Uuid::generate(4);
        });
    }
}
