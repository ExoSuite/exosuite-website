<?php

namespace Tests\API;

use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Tests\APITestCase;


class APICheckpointsTest extends APITestCase
{
    private $user_id;

    private $course_id;

    private $refresh_token;

    private $access_token;
}
