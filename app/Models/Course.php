<?php

namespace App\Models;

use App\Models\Traits\Uuids;
use Illuminate\Database\Eloquent\Model;



class Course extends Model
{
    use Uuids;

    protected $primaryKey = 'course_id';

    public $incrementing = false;

    protected $fillable = [
      'user_id', 'course_id', 'title', 'description', 'checkpoints', 'checkpoint_times'
    ];

    protected $casts = [
        'checkpoints' => 'json'
    ];

    public function User()
    {
        return $this->belongsTo('App\Models\User', "user_id");
    }

    public function coursepptime()
    {
        return $this->hasMany('App\Models\CourseUptime', 'course_id');
    }
}
