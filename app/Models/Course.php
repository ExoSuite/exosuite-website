<?php

namespace App\Models;

use App\Models\Traits\Uuids;
use Dingo\Api\Http\Response\Format\Json;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;

/**
 * Class Course
 * @package App\Models
 * @property Uuid user_id
 * @property Uuid course_id
 * @property string title
 * @property string description
 * @property json checkpoints
 */

class Course extends Model
{
    use Uuids;

    protected $primaryKey = 'course_id';

    public $incrementing = false;

    protected $fillable = [
      'user_id', 'course_id', 'title', 'description', 'checkpoints'
    ];

    protected $casts = [
        'checkpoints' => 'json'
    ];

    public function User()
    {
        return $this->belongsTo('App\Models\User', "user_id");
    }

    public function courseUptime()
    {
        return $this->hasMany('App\Models\CourseUptime', 'course_id');
    }
}
