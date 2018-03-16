<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 *
 * @property Uuid client_uuid
 * @property string client_name
 */
class ClientApp extends Model
{
    /**
     * @var bool
     */
    public $timestamps = false;

    /**
     * @var array
     */
    protected $fillable = [
        "client_uuid", "client_name"
    ];
}
