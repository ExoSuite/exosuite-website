<?php

namespace App\Models\Traits;

use App\Models\ApiToken;
use Illuminate\Support\Str;
use Webpatser\Uuid\Uuid;

trait Tokens
{

    protected static function boot()
    {
        parent::boot();

        static::creating(function (ApiToken $model) {
            $model->{$model->getKeyName()} = (string)Uuid::generate(4);
            $model->{$model->token} = Str::random(60);
        });
    }
}
