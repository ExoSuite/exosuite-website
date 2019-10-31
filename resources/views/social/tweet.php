<?php

@include(vendor.autoload);
use Abraham\TwitterOAuth\TwitterOAuth;

define('CONSUMER_KEY', 'xdi8Y359o6gxjpOWLDBCtZeUT');
define('CONSUMER_SECRET', 'LQzjtk1ji7htA0ed8kwqblx3lLQGVJDbvQDjC6Wkk9YsOimYgF');
define('ACCESS_TOKEN', '974277836767932416-s34V8Ro1Tzq3GP3RBTM2bvB5xW1cWJw');
define('ACCESS_TOKEN_SECRET', 'naRpW0lLNsWMex5F3zbbuNEo14om8wm2jwDAGcCsD2Ol4');

$connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET);
if (isset($_POST['message']))
{
    $status = $_POST['message'];
    echo ($status);
    //$post_tweets = $connection->post("statuses/update", ["status" => $status]);
}
?>