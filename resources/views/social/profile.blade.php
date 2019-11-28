<!doctype html>
<html lang="{{ app()->getLocale() }}">
@include('social.layouts.head')
<body class="social-body">
<div id="hellopreloader">
    <div class="preloader">
        <svg width="45" height="45" stroke="#fff">
            <g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)">
                <circle cx="22" cy="22" r="6" stroke="none">
                    <animate attributeName="r" begin="1.5s" calcMode="linear" dur="3s" repeatCount="indefinite"
                             values="6;22"/>
                    <animate attributeName="stroke-opacity" begin="1.5s" calcMode="linear" dur="3s"
                             repeatCount="indefinite" values="1;0"/>
                    <animate attributeName="stroke-width" begin="1.5s" calcMode="linear" dur="3s"
                             repeatCount="indefinite" values="2;0"/>
                </circle>
                <circle cx="22" cy="22" r="6" stroke="none">
                    <animate attributeName="r" begin="3s" calcMode="linear" dur="3s" repeatCount="indefinite"
                             values="6;22"/>
                    <animate attributeName="stroke-opacity" begin="3s" calcMode="linear" dur="3s"
                             repeatCount="indefinite" values="1;0"/>
                    <animate attributeName="stroke-width" begin="3s" calcMode="linear" dur="3s" repeatCount="indefinite"
                             values="2;0"/>
                </circle>
                <circle cx="22" cy="22" r="8">
                    <animate attributeName="r" begin="0s" calcMode="linear" dur="1.5s" repeatCount="indefinite"
                             values="6;1;2;3;4;5;6"/>
                </circle>
            </g>
        </svg>

        <div class="text">Loading ...</div>
    </div>
</div>
@include('social.layouts.menu')
@include('social.layouts.rightChat')
<div class="header-spacer"></div>

@include('social.layouts.profileHeader')

<div class="container">
    <div class="row">

        <!-- Main Content -->

        <div class="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
            <div class="ui-block">

                <!-- News Feed Form  -->

                <div class="news-feed-form">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active inline-items" data-toggle="tab" href="#home-1" role="tab"
                               aria-expanded="true">

                                <svg class="olymp-status-icon">
                                    <use xlink:href="svg-icons/sprites/icons.svg#olymp-status-icon"></use>
                                </svg>

                                <span>Status</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link inline-items" data-toggle="tab" href="#profile-1" role="tab"
                               aria-expanded="false">

                                <svg class="olymp-multimedia-icon">
                                    <use xlink:href="svg-icons/sprites/icons.svg#olymp-multimedia-icon"></use>
                                </svg>

                                <span>Multimedia</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link inline-items" data-toggle="tab" href="#blog" role="tab"
                               aria-expanded="false">
                                <svg class="olymp-blog-icon">
                                    <use xlink:href="svg-icons/sprites/icons.svg#olymp-blog-icon"></use>
                                </svg>

                                <span>Blog Post</span>
                            </a>
                        </li>
                    </ul>

                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div class="tab-pane active" id="home-1" role="tabpanel" aria-expanded="true">
                            <form action="/addpost" method="POST">
                                @csrf()
                                <div class="author-thumb">
                                    <img src="/img/social/author-page.jpg" alt="author">
                                </div>
                                <div class="form-group with-icon label-floating is-empty">
                                    <label class="control-label">Share what you are thinking here...</label>
                                    <textarea class="form-control" placeholder="" name="postText"></textarea>
                                </div>
                                <div class="add-options-message">
                                    <a href="#" class="options-message" data-toggle="tooltip" data-placement="top"
                                       data-original-title="ADD PHOTOS">
                                        <svg class="olymp-camera-icon" data-toggle="modal"
                                             data-target="#update-header-photo">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-camera-icon"></use>
                                        </svg>
                                    </a>
                                    <a href="#" class="options-message" data-toggle="tooltip" data-placement="top"
                                       data-original-title="TAG YOUR FRIENDS">
                                        <svg class="olymp-computer-icon">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-computer-icon"></use>
                                        </svg>
                                    </a>

                                    <a href="#" class="options-message" data-toggle="tooltip" data-placement="top"
                                       data-original-title="ADD LOCATION">
                                        <svg class="olymp-small-pin-icon">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-small-pin-icon"></use>
                                        </svg>
                                    </a>

                                    <button class="btn btn-primary btn-md-2">Post Status</button>

                                </div>

                            </form>
                        </div>

                        <div class="tab-pane" id="profile-1" role="tabpanel" aria-expanded="true">
                            <form>
                                <div class="author-thumb">
                                    <img src="/img/social/author-page.jpg" alt="author">
                                </div>
                                <div class="form-group with-icon label-floating is-empty">
                                    <label class="control-label">Share what you are thinking here...</label>
                                    <textarea class="form-control" placeholder=""></textarea>
                                </div>
                                <div class="add-options-message">
                                    <a href="#" class="options-message" data-toggle="tooltip" data-placement="top"
                                       data-original-title="ADD PHOTOS">
                                        <svg class="olymp-camera-icon" data-toggle="modal"
                                             data-target="#update-header-photo">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-camera-icon"></use>
                                        </svg>
                                    </a>
                                    <a href="#" class="options-message" data-toggle="tooltip" data-placement="top"
                                       data-original-title="TAG YOUR FRIENDS">
                                        <svg class="olymp-computer-icon">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-computer-icon"></use>
                                        </svg>
                                    </a>

                                    <a href="#" class="options-message" data-toggle="tooltip" data-placement="top"
                                       data-original-title="ADD LOCATION">
                                        <svg class="olymp-small-pin-icon">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-small-pin-icon"></use>
                                        </svg>
                                    </a>

                                    <button class="btn btn-primary btn-md-2">Post Status</button>
                                    <button class="btn btn-md-2 btn-border-think btn-transparent c-grey">Preview
                                    </button>

                                </div>

                            </form>
                        </div>

                        <div class="tab-pane" id="blog" role="tabpanel" aria-expanded="true">
                            <form>
                                <div class="author-thumb">
                                    <img src="/img/social/author-page.jpg" alt="author">
                                </div>
                                <div class="form-group with-icon label-floating is-empty">
                                    <label class="control-label">Share what you are thinking here...</label>
                                    <textarea class="form-control" placeholder=""></textarea>
                                </div>
                                <div class="add-options-message">
                                    <a href="#" class="options-message" data-toggle="tooltip" data-placement="top"
                                       data-original-title="ADD PHOTOS">
                                        <svg class="olymp-camera-icon" data-toggle="modal"
                                             data-target="#update-header-photo">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-camera-icon"></use>
                                        </svg>
                                    </a>
                                    <a href="#" class="options-message" data-toggle="tooltip" data-placement="top"
                                       data-original-title="TAG YOUR FRIENDS">
                                        <svg class="olymp-computer-icon">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-computer-icon"></use>
                                        </svg>
                                    </a>

                                    <a href="#" class="options-message" data-toggle="tooltip" data-placement="top"
                                       data-original-title="ADD LOCATION">
                                        <svg class="olymp-small-pin-icon">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-small-pin-icon"></use>
                                        </svg>
                                    </a>

                                    <button class="btn btn-primary btn-md-2">Post Status</button>
                                    <button class="btn btn-md-2 btn-border-think btn-transparent c-grey">Preview
                                    </button>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>

                <!-- ... end News Feed Form  -->            </div>

            <div id="newsfeed-items-grid">

                @foreach($posts as $post)
                    <div class="ui-block">
                        <!-- Post -->

                        <article class="hentry post">

                            <div class="post__author author vcard inline-items">
                                <img src="{{ config("api.domain") }}user/{{$post->author_id}}/profile/picture/avatar?token={{ $pictureToken }}"
                                     alt="author">

                                <div class="author-date">
                                    <a class="h6 post__author-name fn"
                                       href="/profile">{{ $profile['first_name'] . ' ' . $profile['last_name'] }}</a>
                                    <div class="post__date">
                                        <time class="published">
                                            {{ date('d-m-y h:i:s', strtotime($post->created_at))  }}
                                        </time>
                                    </div>
                                </div>

                                <div class="more">
                                    <svg class="olymp-three-dots-icon">
                                        <use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                    </svg>


                                    <form action="/editpost" method="POST">
                                        @csrf()
                                        <input name="postId" type="hidden" value="{{$post->id}}"/>
                                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                                             aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <button type="button" class="close" data-dismiss="modal"
                                                                aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <textarea class="form-control" placeholder="{{$post->content}}"
                                                                  name="editText"></textarea>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary"
                                                                data-dismiss="modal">Close
                                                        </button>
                                                        <button type="submit" class="btn btn-primary">Save changes
                                                        </button>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </form>


                                    <ul class="more-dropdown">
                                        <li>
                                            <a href="" data-toggle="modal" data-target="#exampleModal">Edit Post</a>
                                        </li>
                                        <li>
                                            <a href="{{ "/deletepost/" . $post->id }}">Delete Post</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <p> {{$post->content}} </p>
                            <div class="post-additional-info inline-items">
                                @if(isset($post->isMyLike))
                                    <a href="javascript:void(0)" class="post-add-icon inline-items liked"
                                       onclick="like(this)">
                                        <svg class="olymp-heart-icon">
                                            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
                                        </svg>
                                        <span id="nbLikes"
                                              postId="{{$post->id}}">{{count($post->likes)}}</span>
                                    </a>
                                @else()
                                    <a href="javascript:void(0)" class="post-add-icon inline-items"
                                       onclick="like(this)">
                                        <svg class="olymp-heart-icon">
                                            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
                                        </svg>
                                        <span id="nbLikes"
                                              postId="{{$post->id}}">{{count($post->likes)}}</span>
                                    </a>
                                @endif()

                                {{--{{ "/createCommentary/" . $post->id }}--}}

                                <div class="comments-shared">
                                    <a href="#" class="post-add-icon inline-items">
                                        <svg class="olymp-speech-balloon-icon">
                                            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use>
                                        </svg>
                                        <span>17</span>
                                    </a>
                                </div>

                            </div>
                            <div>
                                <form action="/createCommentary" method="POST">
                                    @csrf()
                                    <div class="author-thumb">
                                        <img src="/img/social/author-page.jpg" alt="author">
                                    </div>
                                    <br>
                                    <div>
                                        <input type="text" name="addcom" placeholder="add a commentary"/>
                                        <input type="hidden" name="id" value="{{ $post->id }}"/>
                                    </div>
                                </form>
                            </div>


                            <br>
                            <div>
                                @foreach($post->commentaries as $commentary)
                                    <div style="border-bottom: 1px solid lightgrey;">
                                        <ui>
                                            <div>
                                                <img src="/img/social/friend-harmonic7.jpg" alt="friend">
                                            </div>
                                            <div>
                                                <text>{{ $commentary->content }}</text>
                                            </div>
                                            {{--updatecommentary--}}
                                            <form action="/updateCommentary" method="POST">
                                                @csrf()
                                                <input name="commentId" type="hidden" value="{{$commentary->id}}"/>
                                                <input name="postId" type="hidden" value="{{$post->id}}"/>
                                                <div class="modal fade" id="{{$commentary->id}}" tabindex="-1"
                                                     role="dialog"
                                                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <button type="button" class="close" data-dismiss="modal"
                                                                        aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">
                                                        <textarea class="form-control"
                                                                  placeholder="{{$commentary->content}}"
                                                                  name="comment"></textarea>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary"
                                                                        data-dismiss="modal">Close
                                                                </button>
                                                                <button type="submit" class="btn btn-primary">Save
                                                                    changes
                                                                </button>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            {{--                                    end update com--}}

                                            <div class="more">
                                                <svg class="olymp-three-dots-icon">
                                                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                                </svg>
                                                <ul class="more-dropdown">
                                                    <li>
                                                        <a href="" data-toggle="modal"
                                                           data-target="{{'#' . $commentary->id}}">Edit comment</a>
                                                    </li>
                                                    <li>
                                                        <a href="{{ "/deleteComm/" . $commentary->id . "/" . $post->id}}">Delete
                                                            comment</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </ui>
                                        <br>
                                    </div>
                                @endforeach
                                <br>
                            </div>
                        </article>
                    </div>
                @endforeach
            </div>

            <a id="load-more-button" href="#" class="btn btn-control btn-more" data-load-link="items-to-load.html"
               data-container="newsfeed-items-grid">
                <svg class="olymp-three-dots-icon">
                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                </svg>
            </a>
        </div>
        <a id="load-more-button" href="#" class="btn btn-control btn-more" data-load-link="items-to-load.html"
           data-container="newsfeed-items-grid">
            <svg class="olymp-three-dots-icon">
                <use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
            </svg>
        </a>
{{--            <a href="{{ url('/profile/twitter/redirect') }}" class="social-item bg-twitter">
                <i class="fab fa-twitter" aria-hidden="true"></i>
                Connexion
            </a>--}}
            <form id="tweetForm" name="tweetForm">
                <p>Ecrire un tweet:</p>
                <textarea id="tweetMsg" name="message" value="" cols="80"></textarea>
                <input type="button" class="bg-twitter social-item" value="Tweet" name="Envoyer" onclick="send_tweet()">
            </form>

            <script type="text/javascript">
                function send_tweet(){
                    //var msg = prompt("Ecrivez votre tweet:", "");
                    var msg = document.getElementById("tweetMsg").value;
                    window.location.href = "?messg=" + msg;
                }
            </script>


            @php
            @include(vendor.autoload);
            use Abraham\TwitterOAuth\TwitterOAuth;

            define('CONSUMER_KEY', 'xdi8Y359o6gxjpOWLDBCtZeUT');
            define('CONSUMER_SECRET', 'LQzjtk1ji7htA0ed8kwqblx3lLQGVJDbvQDjC6Wkk9YsOimYgF');
            define('ACCESS_TOKEN', '974277836767932416-s34V8Ro1Tzq3GP3RBTM2bvB5xW1cWJw');
            define('ACCESS_TOKEN_SECRET', 'naRpW0lLNsWMex5F3zbbuNEo14om8wm2jwDAGcCsD2Ol4');

            /*$oauth = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET);
            $accessToken = $oauth->oauth2('oauth2/token', ['grant_type' => 'client_credentials']);
            $access_token = $accessToken->access_token;
            $connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, null, $access_token);*/
            $connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET);
            if (isset($_GET['messg']))
            {
                $status = $_GET['messg'];
                //echo ($status);
                if ($status != "")
                    $post_tweets = $connection->post("statuses/update", ["status" => $status]);
            echo "<script type=\"text/javascript\">window.location.href = \"?\"</script>";
            }
            @endphp

            <div id="fb-root"></div>

            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v4.0&appId=494358124689840"></script>

            <div class="social-item bg-facebook" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="small">
                <i class="fab fa-facebook-f" aria-hidden="true"></i>
                <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fexosuite.fr&amp;src=sdkpreparse"
                class="fb-xfbml-parse-ignore">Post on Facebook</a></div>
        </div>

        <!-- ... end Main Content -->


        <!-- Left Sidebar -->

        <div class="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">

            <div class="ui-block">
                <div class="ui-block-title">
                    <h6 class="title">Profile Intro</h6>
                </div>
                <div class="ui-block-content">

                    <!-- W-Personal-Info -->

                    <ul class="widget w-personal-info item-block">
                        <li>
                            <span class="title">About Me:</span>
                            <span class="text">
                                @if ($profile['profile'])
                                    @if ($profile['profile']->description == null)
                                        Aucune description renseignée.
                                    @else
                                        {{ $profile['profile']->description }}
                                    @endif
                                @endif
                            </span>
                        </li>
                    </ul>

                    <!-- .. end W-Personal-Info -->
                    <!-- W-Socials -->

                    <div class="widget w-socials">
                        <h6 class="title">Other Social Networks:</h6>
                        <a href="#" class="social-item bg-facebook">
                            <i class="fab fa-facebook-f" aria-hidden="true"></i>
                            Facebook
                        </a>
                        <a href="#" class="social-item bg-twitter">
                            <i class="fab fa-twitter" aria-hidden="true"></i>
                            Twitter
                        </a>
                        <a href="#" class="social-item bg-dribbble">
                            <i class="fab fa-dribbble" aria-hidden="true"></i>
                            Dribbble
                        </a>
                    </div>


                    <!-- ... end W-Socials -->
                </div>
            </div>

            <div class="ui-block">
                <div class="ui-block-title">
                    <h6 class="title">James’s Badges</h6>
                </div>
                <div class="ui-block-content">

                    <!-- W-Badges -->

                    <ul class="widget w-badges">
                        <li>
                            <a href="24-CommunityBadges.html">
                                <img src="/img/social/badge1.png" alt="author">
                                <div class="label-avatar bg-primary">2</div>
                            </a>
                        </li>
                        <li>
                            <a href="24-CommunityBadges.html">
                                <img src="/img/social/badge4.png" alt="author">
                            </a>
                        </li>
                        <li>
                            <a href="24-CommunityBadges.html">
                                <img src="/img/social/badge3.png" alt="author">
                                <div class="label-avatar bg-blue">4</div>
                            </a>
                        </li>
                        <li>
                            <a href="24-CommunityBadges.html">
                                <img src="/img/social/badge6.png" alt="author">
                            </a>
                        </li>
                        <li>
                            <a href="24-CommunityBadges.html">
                                <img src="/img/social/badge11.png" alt="author">
                            </a>
                        </li>
                        <li>
                            <a href="24-CommunityBadges.html">
                                <img src="/img/social/badge8.png" alt="author">
                            </a>
                        </li>
                        <li>
                            <a href="24-CommunityBadges.html">
                                <img src="/img/social/badge10.png" alt="author">
                            </a>
                        </li>
                        <li>
                            <a href="24-CommunityBadges.html">
                                <img src="/img/social/badge13.png" alt="author">
                                <div class="label-avatar bg-breez">2</div>
                            </a>
                        </li>
                        <li>
                            <a href="24-CommunityBadges.html">
                                <img src="/img/social/badge7.png" alt="author">
                            </a>
                        </li>
                        <li>
                            <a href="24-CommunityBadges.html">
                                <img src="/img/social/badge12.png" alt="author">
                            </a>
                        </li>
                    </ul>

                    <!--.. end W-Badges -->
                </div>
            </div>

            <div class="ui-block">
                <div class="ui-block-title">
                    <h6 class="title">My Spotify Playlist</h6>
                </div>

                <!-- W-Playlist -->

                <ol class="widget w-playlist">
                    <li class="js-open-popup" data-popup-target=".playlist-popup">
                        <div class="playlist-thumb">
                            <img src="/img/social/playlist6.jpg" alt="thumb-composition">
                            <div class="overlay"></div>
                            <a href="#" class="play-icon">
                                <svg class="olymp-music-play-icon-big">
                                    <use xlink:href="/svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
                                </svg>
                            </a>
                        </div>

                        <div class="composition">
                            <a href="#" class="composition-name">The Past Starts Slow...</a>
                            <a href="#" class="composition-author">System of a Revenge</a>
                        </div>

                        <div class="composition-time">
                            <time class="published" datetime="2017-03-24T18:18">3:22</time>
                            <div class="more">
                                <svg class="olymp-three-dots-icon">
                                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                </svg>
                                <ul class="more-dropdown">
                                    <li>
                                        <a href="#">Add Song to Player</a>
                                    </li>
                                    <li>
                                        <a href="#">Add Playlist to Player</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </li>

                    <li class="js-open-popup" data-popup-target=".playlist-popup">
                        <div class="playlist-thumb">
                            <img src="/img/social/playlist7.jpg" alt="thumb-composition">
                            <div class="overlay"></div>
                            <a href="#" class="play-icon">
                                <svg class="olymp-music-play-icon-big">
                                    <use xlink:href="/svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
                                </svg>
                            </a>
                        </div>

                        <div class="composition">
                            <a href="#" class="composition-name">The Pretender</a>
                            <a href="#" class="composition-author">Kung Fighters</a>
                        </div>

                        <div class="composition-time">
                            <time class="published" datetime="2017-03-24T18:18">5:48</time>
                            <div class="more">
                                <svg class="olymp-three-dots-icon">
                                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                </svg>
                                <ul class="more-dropdown">
                                    <li>
                                        <a href="#">Add Song to Player</a>
                                    </li>
                                    <li>
                                        <a href="#">Add Playlist to Player</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </li>
                    <li class="js-open-popup" data-popup-target=".playlist-popup">
                        <div class="playlist-thumb">
                            <img src="/img/social/playlist8.jpg" alt="thumb-composition">
                            <div class="overlay"></div>
                            <a href="#" class="play-icon">
                                <svg class="olymp-music-play-icon-big">
                                    <use xlink:href="/svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
                                </svg>
                            </a>
                        </div>

                        <div class="composition">
                            <a href="#" class="composition-name">Blood Brothers</a>
                            <a href="#" class="composition-author">Iron Maid</a>
                        </div>

                        <div class="composition-time">
                            <time class="published" datetime="2017-03-24T18:18">3:06</time>
                            <div class="more">
                                <svg class="olymp-three-dots-icon">
                                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                </svg>
                                <ul class="more-dropdown">
                                    <li>
                                        <a href="#">Add Song to Player</a>
                                    </li>
                                    <li>
                                        <a href="#">Add Playlist to Player</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </li>
                    <li class="js-open-popup" data-popup-target=".playlist-popup">
                        <div class="playlist-thumb">
                            <img src="/img/social/playlist9.jpg" alt="thumb-composition">
                            <div class="overlay"></div>
                            <a href="#" class="play-icon">
                                <svg class="olymp-music-play-icon-big">
                                    <use xlink:href="/svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
                                </svg>
                            </a>
                        </div>

                        <div class="composition">
                            <a href="#" class="composition-name">Seven Nation Army</a>
                            <a href="#" class="composition-author">The Black Stripes</a>
                        </div>

                        <div class="composition-time">
                            <time class="published" datetime="2017-03-24T18:18">6:17</time>
                            <div class="more">
                                <svg class="olymp-three-dots-icon">
                                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                </svg>
                                <ul class="more-dropdown">
                                    <li>
                                        <a href="#">Add Song to Player</a>
                                    </li>
                                    <li>
                                        <a href="#">Add Playlist to Player</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </li>
                    <li class="js-open-popup" data-popup-target=".playlist-popup">
                        <div class="playlist-thumb">
                            <img src="/img/social/playlist10.jpg" alt="thumb-composition">
                            <div class="overlay"></div>
                            <a href="#" class="play-icon">
                                <svg class="olymp-music-play-icon-big">
                                    <use xlink:href="/svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
                                </svg>
                            </a>
                        </div>

                        <div class="composition">
                            <a href="#" class="composition-name">Killer Queen</a>
                            <a href="#" class="composition-author">Archiduke</a>
                        </div>

                        <div class="composition-time">
                            <time class="published" datetime="2017-03-24T18:18">5:40</time>
                            <div class="more">
                                <svg class="olymp-three-dots-icon">
                                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                </svg>
                                <ul class="more-dropdown">
                                    <li>
                                        <a href="#">Add Song to Player</a>
                                    </li>
                                    <li>
                                        <a href="#">Add Playlist to Player</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </li>
                </ol>

                <!-- .. end W-Playlist -->
            </div>

            <div class="ui-block">
                <div class="ui-block-title">
                    <h6 class="title">Twitter Feed</h6>
                </div>

                <!-- W-Twitter -->

                <ul class="widget w-twitter">
                    <li class="twitter-item">
                        <div class="author-folder">
                            <img src="/img/social/twitter-avatar1.png" alt="avatar">
                            <div class="author">
                                <a href="#" class="author-name">Space Cowboy</a>
                                <a href="#" class="group">@james_spiegelOK</a>
                            </div>
                        </div>
                        <p>Tomorrow with the agency we will run 5 km for charity. Come and give us your support!
                            <a href="#" class="link-post">#Daydream5K</a></p>
                        <span class="post__date">
                            <time class="published" datetime="2017-03-24T18:18">
                                2 hours ago
                            </time>
                        </span>
                    </li>
                    <li class="twitter-item">
                        <div class="author-folder">
                            <img src="/img/social/twitter-avatar1.png" alt="avatar">
                            <div class="author">
                                <a href="#" class="author-name">Space Cowboy</a>
                                <a href="#" class="group">@james_spiegelOK</a>
                            </div>
                        </div>
                        <p>Check out the new website of “The Bebop Bar”! <a href="#" class="link-post">bytle/thbp53f</a>
                        </p>
                        <span class="post__date">
                            <time class="published" datetime="2017-03-24T18:18">
                                16 hours ago
                            </time>
                        </span>
                    </li>
                    <li class="twitter-item">
                        <div class="author-folder">
                            <img src="/img/social/twitter-avatar1.png" alt="avatar">
                            <div class="author">
                                <a href="#" class="author-name">Space Cowboy</a>
                                <a href="#" class="group">@james_spiegelOK</a>
                            </div>
                        </div>
                        <p>The Sunday is the annual agency camping trip and I still haven’t got a tent
                            <a href="#" class="link-post">#TheWild #Indoors</a></p>
                        <span class="post__date">
                            <time class="published" datetime="2017-03-24T18:18">
                                Yesterday
                            </time>
                        </span>
                    </li>
                </ul>


                <!-- .. end W-Twitter -->
            </div>

            <div class="ui-block">
                <div class="ui-block-title">
                    <h6 class="title">Last Videos</h6>
                </div>
                <div class="ui-block-content">

                    <!-- W-Latest-Video -->

                    <ul class="widget w-last-video">
                        <li>
                            <a href="https://vimeo.com/ondemand/viewfromabluemoon4k/147865858"
                               class="play-video play-video--small">
                                <svg class="olymp-play-icon">
                                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-play-icon"></use>
                                </svg>
                            </a>
                            <img src="/img/social/video8.jpg" alt="video">
                            <div class="video-content">
                                <div class="title">System of a Revenge - Hypnotize...</div>
                                <time class="published" datetime="2017-03-24T18:18">3:25</time>
                            </div>
                            <div class="overlay"></div>
                        </li>
                        <li>
                            <a href="https://youtube.com/watch?v=excVFQ2TWig" class="play-video play-video--small">
                                <svg class="olymp-play-icon">
                                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-play-icon"></use>
                                </svg>
                            </a>
                            <img src="/img/social/video7.jpg" alt="video">
                            <div class="video-content">
                                <div class="title">Green Goo - Live at Dan’s Arena</div>
                                <time class="published" datetime="2017-03-24T18:18">5:48</time>
                            </div>
                            <div class="overlay"></div>
                        </li>
                    </ul>

                    <!-- .. end W-Latest-Video -->
                </div>
            </div>

        </div>

        <!-- ... end Left Sidebar -->


        <!-- Right Sidebar -->

        <div class="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">

            <div class="ui-block">
                <div class="ui-block-title">
                    <h6 class="title">Last Photos</h6>
                </div>
                <div class="ui-block-content">

                    <!-- W-Latest-Photo -->

                    <ul class="widget w-last-photo js-zoom-gallery">
                        <li>
                            <a href="/img/social/last-photo10-large.jpg">
                                <img src="/img/social/last-photo10-large.jpg" alt="photo">
                            </a>
                        </li>
                        <li>
                            <a href="/img/social/last-phot11-large.jpg">
                                <img src="/img/social/last-phot11-large.jpg" alt="photo">
                            </a>
                        </li>
                        <li>
                            <a href="/img/social/last-phot12-large.jpg">
                                <img src="/img/social/last-phot12-large.jpg" alt="photo">
                            </a>
                        </li>
                        <li>
                            <a href="/img/social/last-phot13-large.jpg">
                                <img src="/img/social/last-phot13-large.jpg" alt="photo">
                            </a>
                        </li>
                        <li>
                            <a href="/img/social/last-phot14-large.jpg">
                                <img src="/img/social/last-phot14-large.jpg" alt="photo">
                            </a>
                        </li>
                        <li>
                            <a href="/img/social/last-phot15-large.jpg">
                                <img src="/img/social/last-phot15-large.jpg" alt="photo">
                            </a>
                        </li>
                        <li>
                            <a href="/img/social/last-phot16-large.jpg">
                                <img src="/img/social/last-phot16-large.jpg" alt="photo">
                            </a>
                        </li>
                        <li>
                            <a href="/img/social/last-phot17-large.jpg">
                                <img src="/img/social/last-phot17-large.jpg" alt="photo">
                            </a>
                        </li>
                        <li>
                            <a href="/img/social/last-phot18-large.jpg">
                                <img src="/img/social/last-phot18-large.jpg" alt="photo">
                            </a>
                        </li>
                    </ul>


                    <!-- .. end W-Latest-Photo -->
                </div>
            </div>

            <div class="ui-block">
                <div class="ui-block-title">
                    <h6 class="title">Blog Posts</h6>
                </div>
                <!-- W-Blog-Posts -->

                <ul class="widget w-blog-posts">
                    <li>
                        <article class="hentry post">

                            <a href="#" class="h4">My Perfect Vacations in South America and Europe</a>

                            <p>Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod por incidid ut
                                labore et.</p>

                            <div class="post__date">
                                <time class="published" datetime="2017-03-24T18:18">
                                    7 hours ago
                                </time>
                            </div>

                        </article>
                    </li>
                    <li>
                        <article class="hentry post">

                            <a href="#" class="h4">The Big Experience of Travelling Alone</a>

                            <p>Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod por incidid ut
                                labore et.</p>

                            <div class="post__date">
                                <time class="published" datetime="2017-03-24T18:18">
                                    March 18th, at 6:52pm
                                </time>
                            </div>

                        </article>
                    </li>
                </ul>

                <!-- .. end W-Blog-Posts -->
            </div>

            <div class="ui-block">
                <div class="ui-block-title">
                    <h6 class="title">Friends (86)</h6>
                </div>
                <div class="ui-block-content">

                    <!-- W-Faved-Page -->

                    <ul class="widget w-faved-page js-zoom-gallery">
                        <li>
                            <a href="#">
                                <img src="/img/social/avatar38-sm.jpg" alt="author">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/img/social/avatar24-sm.jpg" alt="user">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/img/social/avatar36-sm.jpg" alt="author">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/img/social/avatar35-sm.jpg" alt="user">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/img/social/avatar34-sm.jpg" alt="author">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/img/social/avatar33-sm.jpg" alt="author">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/img/social/avatar32-sm.jpg" alt="user">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/img/social/avatar31-sm.jpg" alt="author">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/img/social/avatar30-sm.jpg" alt="author">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/img/social/avatar29-sm.jpg" alt="user">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/img/social/avatar28-sm.jpg" alt="user">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/img/social/avatar27-sm.jpg" alt="user">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/img/social/avatar26-sm.jpg" alt="user">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/img/social/avatar25-sm.jpg" alt="user">
                            </a>
                        </li>
                        <li class="all-users">
                            <a href="#">+74</a>
                        </li>
                    </ul>

                    <!-- .. end W-Faved-Page -->
                </div>
            </div>

            <div class="ui-block">
                <div class="ui-block-title">
                    <h6 class="title">Favourite Pages</h6>
                </div>

                <!-- W-Friend-Pages-Added -->

                <ul class="widget w-friend-pages-added notification-list friend-requests">
                    <li class="inline-items">
                        <div class="author-thumb">
                            <img src="/img/social/avatar41-sm.jpg" alt="author">
                        </div>
                        <div class="notification-event">
                            <a href="#" class="h6 notification-friend">The Marina Bar</a>
                            <span class="chat-message-item">Restaurant / Bar</span>
                        </div>
                        <span class="notification-icon" data-toggle="tooltip" data-placement="top"
                              data-original-title="ADD TO YOUR FAVS">
							<a href="#">
								<svg class="olymp-star-icon"><use
                                            xlink:href="/svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
							</a>
						</span>

                    </li>

                    <li class="inline-items">
                        <div class="author-thumb">
                            <img src="/img/social/avatar42-sm.jpg" alt="author">
                        </div>
                        <div class="notification-event">
                            <a href="#" class="h6 notification-friend">Tapronus Rock</a>
                            <span class="chat-message-item">Rock Band</span>
                        </div>
                        <span class="notification-icon" data-toggle="tooltip" data-placement="top"
                              data-original-title="ADD TO YOUR FAVS">
							<a href="#">
								<svg class="olymp-star-icon"><use
                                            xlink:href="/svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
							</a>
						</span>

                    </li>

                    <li class="inline-items">
                        <div class="author-thumb">
                            <img src="/img/social/avatar43-sm.jpg" alt="author">
                        </div>
                        <div class="notification-event">
                            <a href="#" class="h6 notification-friend">Pixel Digital Design</a>
                            <span class="chat-message-item">Company</span>
                        </div>
                        <span class="notification-icon" data-toggle="tooltip" data-placement="top"
                              data-original-title="ADD TO YOUR FAVS">
							<a href="#">
								<svg class="olymp-star-icon"><use
                                            xlink:href="/svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
							</a>
						</span>
                    </li>

                    <li class="inline-items">
                        <div class="author-thumb">
                            <img src="/img/social/avatar44-sm.jpg" alt="author">
                        </div>
                        <div class="notification-event">
                            <a href="#" class="h6 notification-friend">Thompson’s Custom Clothing Boutique</a>
                            <span class="chat-message-item">Clothing Store</span>
                        </div>
                        <span class="notification-icon" data-toggle="tooltip" data-placement="top"
                              data-original-title="ADD TO YOUR FAVS">
							<a href="#">
								<svg class="olymp-star-icon"><use
                                            xlink:href="/svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
							</a>
						</span>

                    </li>

                    <li class="inline-items">
                        <div class="author-thumb">
                            <img src="/img/social/avatar45-sm.jpg" alt="author">
                        </div>
                        <div class="notification-event">
                            <a href="#" class="h6 notification-friend">Crimson Agency</a>
                            <span class="chat-message-item">Company</span>
                        </div>
                        <span class="notification-icon" data-toggle="tooltip" data-placement="top"
                              data-original-title="ADD TO YOUR FAVS">
							<a href="#">
								<svg class="olymp-star-icon"><use
                                            xlink:href="/svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
							</a>
						</span>
                    </li>

                    <li class="inline-items">
                        <div class="author-thumb">
                            <img src="/img/social/avatar46-sm.jpg" alt="author">
                        </div>
                        <div class="notification-event">
                            <a href="#" class="h6 notification-friend">Mannequin Angel</a>
                            <span class="chat-message-item">Clothing Store</span>
                        </div>
                        <span class="notification-icon" data-toggle="tooltip" data-placement="top"
                              data-original-title="ADD TO YOUR FAVS">
							<a href="#">
								<svg class="olymp-star-icon"><use
                                            xlink:href="/svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
							</a>
						</span>
                    </li>
                </ul>

                <!-- .. end W-Friend-Pages-Added -->
            </div>

            <div class="ui-block">
                <div class="ui-block-title">
                    <h6 class="title">James's Poll</h6>
                </div>
                <div class="ui-block-content">

                    <!-- W-Pool -->

                    <ul class="widget w-pool">
                        <li>
                            <p>If you had to choose, which actor do you prefer to be the next Darkman? </p>
                        </li>
                        <li>
                            <div class="skills-item">
                                <div class="skills-item-info">
									<span class="skills-item-title">
										<span class="radio">
											<label>
												<input type="radio" name="optionsRadios">
												Thomas Bale
											</label>
										</span>
									</span>
                                    <span class="skills-item-count">
										<span class="count-animate" data-speed="1000" data-refresh-interval="50"
                                              data-to="62" data-from="0"></span>
										<span class="units">62%</span>
									</span>
                                </div>
                                <div class="skills-item-meter">
                                    <span class="skills-item-meter-active bg-primary" style="width: 62%"></span>
                                </div>

                                <div class="counter-friends">12 friends voted for this</div>

                                <ul class="friends-harmonic">
                                    <li>
                                        <a href="#">
                                            <img src="/img/social/friend-harmonic1.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/img/social/friend-harmonic2.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/img/social/friend-harmonic3.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/img/social/friend-harmonic4.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/img/social/friend-harmonic5.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/img/social/friend-harmonic6.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/img/social/friend-harmonic7.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/img/social/friend-harmonic8.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/img/social/friend-harmonic9.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="all-users">+3</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <div class="skills-item">
                                <div class="skills-item-info">
									<span class="skills-item-title">
										<span class="radio">
											<label>
												<input type="radio" name="optionsRadios">
												Ben Robertson
											</label>
										</span>
									</span>
                                    <span class="skills-item-count">
										<span class="count-animate" data-speed="1000" data-refresh-interval="50"
                                              data-to="27" data-from="0"></span>
										<span class="units">27%</span>
									</span>
                                </div>
                                <div class="skills-item-meter">
                                    <span class="skills-item-meter-active bg-primary" style="width: 27%"></span>
                                </div>
                                <div class="counter-friends">7 friends voted for this</div>

                                <ul class="friends-harmonic">
                                    <li>
                                        <a href="#">
                                            <img src="/img/social/friend-harmonic7.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/img/social/friend-harmonic8.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/img/social/friend-harmonic9.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/img/social/friend-harmonic10.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/img/social/friend-harmonic11.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/img/social/friend-harmonic12.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/img/social/friend-harmonic13.jpg" alt="friend">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <div class="skills-item">
                                <div class="skills-item-info">
									<span class="skills-item-title">
										<span class="radio">
											<label>
												<input type="radio" name="optionsRadios">
												Michael Streiton
											</label>
										</span>
									</span>
                                    <span class="skills-item-count">
										<span class="count-animate" data-speed="1000" data-refresh-interval="50"
                                              data-to="11" data-from="0"></span>
										<span class="units">11%</span>
									</span>
                                </div>
                                <div class="skills-item-meter">
                                    <span class="skills-item-meter-active bg-primary" style="width: 11%"></span>
                                </div>

                                <div class="counter-friends">2 people voted for this</div>

                                <ul class="friends-harmonic">
                                    <li>
                                        <a href="#">
                                            <img src="/img/social/friend-harmonic14.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/img/social/friend-harmonic15.jpg" alt="friend">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>

                    <!-- .. end W-Pool -->
                    <a href="#" class="btn btn-md-2 btn-border-think custom-color c-grey full-width">Vote Now!</a>
                </div>
            </div>

        </div>

        <!-- ... end Right Sidebar -->

    </div>
</div>

<div class="modal fade" id="update-header-photo" tabindex="-1" role="dialog" aria-labelledby="update-header-photo"
     aria-hidden="true">
    <div class="modal-dialog window-popup update-header-photo" role="document">
        <div class="modal-content">
            <a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
                <svg class="olymp-close-icon">
                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
                </svg>
            </a>

            <div class="modal-header">
                <h6 class="title">Update Header Photo</h6>
            </div>

            <div class="modal-body">
                <form method="post" action="/profile/avatar" class="form-upload-picture" id="upload-picture-form"
                      enctype="multipart/form-data">
                    @csrf
                    <div class="upload-photo-item" id="div-upload-avatar">
                        <input type="file" name="picture" id="input-upload-avatar" class="invisible"/>
                        <svg class="olymp-computer-icon">
                            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-computer-icon"></use>
                        </svg>

                        <h6>Upload Photo</h6>
                        <span>Browse your computer.</span>
                    </div>
                </form>

                <a href="#" class="upload-photo-item" data-toggle="modal" data-target="#choose-from-my-photo">

                    <svg class="olymp-photos-icon">
                        <use xlink:href="/svg-icons/sprites/icons.svg#olymp-photos-icon"></use>
                    </svg>

                    <h6>Choose from My Photos</h6>
                    <span>Choose from your uploaded photos</span>
                </a>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="choose-from-my-photo" tabindex="-1" role="dialog" aria-labelledby="choose-from-my-photo"
     aria-hidden="true">
    <div class="modal-dialog window-popup choose-from-my-photo" role="document">

        <div class="modal-content">
            <a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
                <svg class="olymp-close-icon">
                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
                </svg>
            </a>
            <div class="modal-header">
                <h6 class="title">Choose from My Photos</h6>

                <!-- Nav tabs -->
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#home" role="tab" aria-expanded="true">
                            <svg class="olymp-photos-icon">
                                <use xlink:href="/svg-icons/sprites/icons.svg#olymp-photos-icon"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#profile" role="tab" aria-expanded="false">
                            <svg class="olymp-albums-icon">
                                <use xlink:href="/svg-icons/sprites/icons.svg#olymp-albums-icon"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="modal-body">
                <!-- Tab panes -->
                <div class="tab-content">
                    <div class="tab-pane active" id="home" role="tabpanel" aria-expanded="true">

                        <div class="choose-photo-item" data-mh="choose-item">
                            <div class="radio">
                                <label class="custom-radio">
                                    <img src="/img/social/choose-photo1.jpg" alt="photo">
                                    <input type="radio" name="optionsRadios">
                                </label>
                            </div>
                        </div>
                        <div class="choose-photo-item" data-mh="choose-item">
                            <div class="radio">
                                <label class="custom-radio">
                                    <img src="/img/social/choose-photo2.jpg" alt="photo">
                                    <input type="radio" name="optionsRadios">
                                </label>
                            </div>
                        </div>
                        <div class="choose-photo-item" data-mh="choose-item">
                            <div class="radio">
                                <label class="custom-radio">
                                    <img src="/img/social/choose-photo3.jpg" alt="photo">
                                    <input type="radio" name="optionsRadios">
                                </label>
                            </div>
                        </div>

                        <div class="choose-photo-item" data-mh="choose-item">
                            <div class="radio">
                                <label class="custom-radio">
                                    <img src="/img/social/choose-photo4.jpg" alt="photo">
                                    <input type="radio" name="optionsRadios">
                                </label>
                            </div>
                        </div>
                        <div class="choose-photo-item" data-mh="choose-item">
                            <div class="radio">
                                <label class="custom-radio">
                                    <img src="/img/social/choose-photo5.jpg" alt="photo">
                                    <input type="radio" name="optionsRadios">
                                </label>
                            </div>
                        </div>
                        <div class="choose-photo-item" data-mh="choose-item">
                            <div class="radio">
                                <label class="custom-radio">
                                    <img src="/img/social/choose-photo6.jpg" alt="photo">
                                    <input type="radio" name="optionsRadios">
                                </label>
                            </div>
                        </div>

                        <div class="choose-photo-item" data-mh="choose-item">
                            <div class="radio">
                                <label class="custom-radio">
                                    <img src="/img/social/choose-photo7.jpg" alt="photo">
                                    <input type="radio" name="optionsRadios">
                                </label>
                            </div>
                        </div>
                        <div class="choose-photo-item" data-mh="choose-item">
                            <div class="radio">
                                <label class="custom-radio">
                                    <img src="/img/social/choose-photo8.jpg" alt="photo">
                                    <input type="radio" name="optionsRadios">
                                </label>
                            </div>
                        </div>
                        <div class="choose-photo-item" data-mh="choose-item">
                            <div class="radio">
                                <label class="custom-radio">
                                    <img src="/img/social/choose-photo9.jpg" alt="photo">
                                    <input type="radio" name="optionsRadios">
                                </label>
                            </div>
                        </div>


                        <a href="#" class="btn btn-secondary btn-lg btn--half-width">Cancel</a>
                        <a href="#" class="btn btn-primary btn-lg btn--half-width">Confirm Photo</a>

                    </div>
                    <div class="tab-pane" id="profile" role="tabpanel" aria-expanded="false">

                        <div class="choose-photo-item" data-mh="choose-item">
                            <figure>
                                <img src="/img/social/choose-photo10.jpg" alt="photo">
                                <figcaption>
                                    <a href="#">South America Vacations</a>
                                    <span>Last Added: 2 hours ago</span>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="choose-photo-item" data-mh="choose-item">
                            <figure>
                                <img src="/img/social/choose-photo11.jpg" alt="photo">
                                <figcaption>
                                    <a href="#">Photoshoot Summer 2016</a>
                                    <span>Last Added: 5 weeks ago</span>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="choose-photo-item" data-mh="choose-item">
                            <figure>
                                <img src="/img/social/choose-photo12.jpg" alt="photo">
                                <figcaption>
                                    <a href="#">Amazing Street Food</a>
                                    <span>Last Added: 6 mins ago</span>
                                </figcaption>
                            </figure>
                        </div>

                        <div class="choose-photo-item" data-mh="choose-item">
                            <figure>
                                <img src="/img/social/choose-photo13.jpg" alt="photo">
                                <figcaption>
                                    <a href="#">Graffity & Street Art</a>
                                    <span>Last Added: 16 hours ago</span>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="choose-photo-item" data-mh="choose-item">
                            <figure>
                                <img src="/img/social/choose-photo14.jpg" alt="photo">
                                <figcaption>
                                    <a href="#">Amazing Landscapes</a>
                                    <span>Last Added: 13 mins ago</span>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="choose-photo-item" data-mh="choose-item">
                            <figure>
                                <img src="/img/social/choose-photo15.jpg" alt="photo">
                                <figcaption>
                                    <a href="#">The Majestic Canyon</a>
                                    <span>Last Added: 57 mins ago</span>
                                </figcaption>
                            </figure>
                        </div>


                        <a href="#" class="btn btn-secondary btn-lg btn--half-width">Cancel</a>
                        <a href="#" class="btn btn-primary btn-lg disabled btn--half-width">Confirm Photo</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

<div class="window-popup playlist-popup" tabindex="-1" role="dialog" aria-labelledby="playlist-popup"
     aria-hidden="true">

    <a href="" class="icon-close js-close-popup">
        <svg class="olymp-close-icon">
            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
        </svg>
    </a>

    <div class="mCustomScrollbar">
        <table class="playlist-popup-table">

            <thead>

            <tr>

                <th class="play">
                    PLAY
                </th>

                <th class="cover">
                    COVER
                </th>

                <th class="song-artist">
                    SONG AND ARTIST
                </th>

                <th class="album">
                    ALBUM
                </th>

                <th class="released">
                    RELEASED
                </th>

                <th class="duration">
                    DURATION
                </th>

                <th class="spotify">
                    GET IT ON SPOTIFY
                </th>

                <th class="remove">
                    REMOVE
                </th>
            </tr>

            </thead>

            <tbody>
            <tr>
                <td class="play">
                    <a href="#" class="play-icon">
                        <svg class="olymp-music-play-icon-big">
                            <use xlink:href="/svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
                        </svg>
                    </a>
                </td>
                <td class="cover">
                    <div class="playlist-thumb">
                        <img src="/img/social/playlist19.jpg" alt="thumb-composition">
                    </div>
                </td>
                <td class="song-artist">
                    <div class="composition">
                        <a href="#" class="composition-name">We Can Be Heroes</a>
                        <a href="#" class="composition-author">Jason Bowie</a>
                    </div>
                </td>
                <td class="album">
                    <a href="#" class="album-composition">Ziggy Firedust</a>
                </td>
                <td class="released">
                    <div class="release-year">2014</div>
                </td>
                <td class="duration">
                    <div class="composition-time">
                        <time class="published" datetime="2017-03-24T18:18">6:17</time>
                    </div>
                </td>
                <td class="spotify">
                    <i class="fab fa-spotify composition-icon" aria-hidden="true"></i>
                </td>
                <td class="remove">
                    <a href="#" class="remove-icon">
                        <svg class="olymp-close-icon">
                            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
                        </svg>
                    </a>
                </td>
            </tr>

            <tr>
                <td class="play">
                    <a href="#" class="play-icon">
                        <svg class="olymp-music-play-icon-big">
                            <use xlink:href="/svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
                        </svg>
                    </a>
                </td>
                <td class="cover">
                    <div class="playlist-thumb">
                        <img src="/img/social/playlist6.jpg" alt="thumb-composition">
                    </div>
                </td>
                <td class="song-artist">
                    <div class="composition">
                        <a href="#" class="composition-name">The Past Starts Slow and Ends</a>
                        <a href="#" class="composition-author">System of a Revenge</a>
                    </div>
                </td>
                <td class="album">
                    <a href="#" class="album-composition">Wonderize</a>
                </td>
                <td class="released">
                    <div class="release-year">2014</div>
                </td>
                <td class="duration">
                    <div class="composition-time">
                        <time class="published" datetime="2017-03-24T18:18">6:17</time>
                    </div>
                </td>
                <td class="spotify">
                    <i class="fab fa-spotify composition-icon" aria-hidden="true"></i>
                </td>
                <td class="remove">
                    <a href="#" class="remove-icon">
                        <svg class="olymp-close-icon">
                            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
                        </svg>
                    </a>
                </td>
            </tr>

            <tr>
                <td class="play">
                    <a href="#" class="play-icon">
                        <svg class="olymp-music-play-icon-big">
                            <use xlink:href="/svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
                        </svg>
                    </a>
                </td>
                <td class="cover">
                    <div class="playlist-thumb">
                        <img src="/img/social/playlist7.jpg" alt="thumb-composition">
                    </div>
                </td>
                <td class="song-artist">
                    <div class="composition">
                        <a href="#" class="composition-name">The Pretender</a>
                        <a href="#" class="composition-author">Kung Fighters</a>
                    </div>
                </td>
                <td class="album">
                    <a href="#" class="album-composition">Warping Lights</a>
                </td>
                <td class="released">
                    <div class="release-year">2014</div>
                </td>
                <td class="duration">
                    <div class="composition-time">
                        <time class="published" datetime="2017-03-24T18:18">6:17</time>
                    </div>
                </td>
                <td class="spotify">
                    <i class="fab fa-spotify composition-icon" aria-hidden="true"></i>
                </td>
                <td class="remove">
                    <a href="#" class="remove-icon">
                        <svg class="olymp-close-icon">
                            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
                        </svg>
                    </a>
                </td>
            </tr>

            <tr>
                <td class="play">
                    <a href="#" class="play-icon">
                        <svg class="olymp-music-play-icon-big">
                            <use xlink:href="/svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
                        </svg>
                    </a>
                </td>
                <td class="cover">
                    <div class="playlist-thumb">
                        <img src="/img/social/playlist8.jpg" alt="thumb-composition">
                    </div>
                </td>
                <td class="song-artist">
                    <div class="composition">
                        <a href="#" class="composition-name">Seven Nation Army</a>
                        <a href="#" class="composition-author">The Black Stripes</a>
                    </div>
                </td>
                <td class="album">
                    <a href="#" class="album-composition ">Icky Strung (LIVE at Cube Garden)</a>
                </td>
                <td class="released">
                    <div class="release-year">2014</div>
                </td>
                <td class="duration">
                    <div class="composition-time">
                        <time class="published" datetime="2017-03-24T18:18">6:17</time>
                    </div>
                </td>
                <td class="spotify">
                    <i class="fab fa-spotify composition-icon" aria-hidden="true"></i>
                </td>
                <td class="remove">
                    <a href="#" class="remove-icon">
                        <svg class="olymp-close-icon">
                            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
                        </svg>
                    </a>
                </td>
            </tr>

            <tr>
                <td class="play">
                    <a href="#" class="play-icon">
                        <svg class="olymp-music-play-icon-big">
                            <use xlink:href="/svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
                        </svg>
                    </a>
                </td>
                <td class="cover">
                    <div class="playlist-thumb">
                        <img src="/img/social/playlist9.jpg" alt="thumb-composition">
                    </div>
                </td>
                <td class="song-artist">
                    <div class="composition">
                        <a href="#" class="composition-name">Leap of Faith</a>
                        <a href="#" class="composition-author">Eden Artifact</a>
                    </div>
                </td>
                <td class="album">
                    <a href="#" class="album-composition">The Assassins’s Soundtrack</a>
                </td>
                <td class="released">
                    <div class="release-year">2014</div>
                </td>
                <td class="duration">
                    <div class="composition-time">
                        <time class="published" datetime="2017-03-24T18:18">6:17</time>
                    </div>
                </td>
                <td class="spotify">
                    <i class="fab fa-spotify composition-icon" aria-hidden="true"></i>
                </td>
                <td class="remove">
                    <a href="#" class="remove-icon">
                        <svg class="olymp-close-icon">
                            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
                        </svg>
                    </a>
                </td>
            </tr>

            <tr>
                <td class="play">
                    <a href="#" class="play-icon">
                        <svg class="olymp-music-play-icon-big">
                            <use xlink:href="/svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
                        </svg>
                    </a>
                </td>
                <td class="cover">
                    <div class="playlist-thumb">
                        <img src="/img/social/playlist10.jpg" alt="thumb-composition">
                    </div>
                </td>
                <td class="song-artist">
                    <div class="composition">
                        <a href="#" class="composition-name">Killer Queen</a>
                        <a href="#" class="composition-author">Archiduke</a>
                    </div>
                </td>
                <td class="album">
                    <a href="#" class="album-composition ">News of the Universe</a>
                </td>
                <td class="released">
                    <div class="release-year">2014</div>
                </td>
                <td class="duration">
                    <div class="composition-time">
                        <time class="published" datetime="2017-03-24T18:18">6:17</time>
                    </div>
                </td>
                <td class="spotify">
                    <i class="fab fa-spotify composition-icon" aria-hidden="true"></i>
                </td>
                <td class="remove">
                    <a href="#" class="remove-icon">
                        <svg class="olymp-close-icon">
                            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
                        </svg>
                    </a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>

    <audio id="mediaplayer" data-showplaylist="true">
        <source src="/mp3/Twice.mp3" title="Track 1" data-poster="track1.png" type="audio/mpeg">
        <source src="/mp3/Twice.mp3" title="Track 2" data-poster="track2.png" type="audio/mpeg">
        <source src="/mp3/Twice.mp3" title="Track 3" data-poster="track3.png" type="audio/mpeg">
        <source src="/mp3/Twice.mp3" title="Track 4" data-poster="track4.png" type="audio/mpeg">
    </audio>

</div>

<a class="back-to-top" href="#">
    <img src="/svg-icons/back-to-top.svg" alt="arrow" class="back-icon">
</a>

@include('social.layouts.popupchat')

@include('social.layouts.footer')

<script type="text/javascript">
    var likeBtn = document.querySelector('.ico');
    var counter = 0;
    var nbcomment = 0;

    if (likeBtn != null) {
        likeBtn.addEventListener('click', function () {
            likeBtn.classList.toggle('liked');
            if (counter == 0)
                counter = 1;
            else
                counter = 0;
            document.getElementById("spanlike").innerHTML = counter;
        });
        document.getElementById("nbcom").innerHTML = nbcomment;
    }
</script>
</body>
</html>
