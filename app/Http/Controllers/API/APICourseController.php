<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\APIBaseController;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Course;
use Validator;

class APICourseController extends APIBaseController
{
    public function create(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'user_id' => 'required|uuid|exists:users',
            'title' => 'required|max:50',
            'description' => 'max:255',
            'checkpoints' => 'required'
        ]);
        if ($validation->fails()) {
            return $this->response->errorBadRequest($validation->errors()->toJson());
        }

        $infos = $request->all();
        $course = Course::create($infos);

        return $this->response->created(null, ['course_id' => $course->course_id]);
    }

    public function getAllCourses()
    {
        return Course::all();
    }

    public function getCoursesByTitle($title)
    {
        return Course::where('title', 'like', $title.'%')->get();
    }

    public function getUserByCourseUserId($user_id)
    {
        $validation = Validator::make(['user_id' => $user_id], [
            'user_id' => 'required|uuid|exists:users|exists:courses',
        ]);
        if ($validation->fails()) {
            return $this->response->errorBadRequest($validation->errors()->toJson());
        }
        return Course::where('user_id', $user_id)->first()->User()->first();
    }

}
