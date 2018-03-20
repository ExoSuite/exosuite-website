<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCourseUptimesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::enableForeignKeyConstraints();
        Schema::create('course_uptimes', function (Blueprint $table) {
            $table->uuid('uuid');
            $table->foreign('uuid')->references('uuid')->on('courses');
            $table->uuid('id')->primary();
            $table->json('checkpoints_times');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('course_uptimes');
    }
}
