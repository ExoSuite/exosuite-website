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
           'uuid' => 'required|uuid|exists:courses',
           'checkpoints_times' => 'required'
        ]);
        if ($validation->fails())
        {
            return $this->response->errorBadRequest($validation->errors()->toJson());
        }
        $infos = $request->all();
        CourseUptime::create($infos);

        return $this->response->created();
    }

    public function getAllCourseTimes($uuid)
    {
        return CourseUptime::where('uuid', $uuid)->get();
    }

}
