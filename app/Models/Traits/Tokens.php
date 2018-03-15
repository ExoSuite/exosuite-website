<?php

namespace App\Models\Traits;

use Illuminate\Support\Str;

trait Tokens
{

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->{$model->token} = Str::random(60);
        });
        }
}
