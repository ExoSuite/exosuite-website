<?php

namespace App\Models;

use App\Models\Traits\Uuids;
use Illuminate\Database\Eloquent\Model;



class Course extends Model
{
    use Uuids;

    protected $primaryKey = 'uuid';

    public $incrementing = false;

    protected $fillable = [
      'user_id', 'uuid', 'title', 'description', 'checkpoints'
    ];

    protected $casts = [
        'checkpoints' => 'json'
    ];

    public function User()
    {
        return $this->belongsTo('App\Models\User', "user_id");
    }
}
