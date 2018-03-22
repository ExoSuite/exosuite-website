<?php

namespace App\Http\Controllers\API;

use App\Models\CourseUptime;
use Illuminate\Http\Request;
use Validator;

class APICheckpointsTimesController extends APIBaseController
{
    public function create(Request $request)
    {
        $validation = Validator::make($request->all(), [
           'course_id' => 'required|uuid|exists:courses',
           'checkpoints_times' => 'required|json'
        ]);
        if ($validation->fails())
        {
            return $this->response->errorBadRequest($validation->errors()->toJson());
        }
        $infos = $request->all();
        CourseUptime::create($infos);

        return $this->response->created();
    }

    public function getAllCourseTimes($course_id)
    {
        return CourseUptime::where('course_id', $course_id)->get();
    }

    public function getFinalCourseTime($course_id)
    {
        $x = end(CourseUptime::where('course_id', $course_id)->first('checkpoints_times'));
        return ($x);
    }

}
