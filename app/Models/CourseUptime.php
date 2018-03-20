<?php

namespace App\Models;

use App\Models\Traits\Uuids;
use Illuminate\Database\Eloquent\Model;

class CourseUptime extends Model
{
    use Uuids;

    protected $primaryKey = 'id';

    public $incrementing = false;

    protected $fillable = [
        'uuid', 'id', 'checkpoints_times'
    ];

    protected $casts = [
      'checkpoints_times' => 'json'
    ];

    public function Course()
    {
        return $this->belongsTo('App\Models\Course', 'uuid');
    }
}
