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
            <div id="newsfeed-items-grid">

                @foreach($posts as $post)
                    <div class="ui-block">
                        <!-- Post -->

                        <article class="hentry post">

                            <div class="post__author author vcard inline-items">
                                <img src="/img/social/author-page.jpg" alt="author">

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
                                        <input name="postId" type="hidden" value="{{$post->id}}" />
                                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <textarea class="form-control" placeholder="{{$post->content}}" name="editText" ></textarea>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="submit" class="btn btn-primary">Save changes</button>

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

                                <a href="#" class="post-add-icon inline-items">
                                    <svg class="olymp-heart-icon">
                                        <use xlink:href="/svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
                                    </svg>
                                    <span>8</span>
                                </a>

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
                                </ul>

                                <div class="names-people-likes">
                                    <a href="#">Jenny</a>, <a href="#">Robert</a> and
                                    <br>6 more liked this
                                </div>


                                <div class="comments-shared">
                                    <a href="#" class="post-add-icon inline-items">
                                        <svg class="olymp-speech-balloon-icon">
                                            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use>
                                        </svg>
                                        <span>17</span>
                                    </a>

                                    <a href="#" class="post-add-icon inline-items">
                                        <svg class="olymp-share-icon">
                                            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-share-icon"></use>
                                        </svg>
                                        <span>24</span>
                                    </a>
                                </div>


                            </div>

                            <div class="control-block-button post-control-button">

                                <a href="#" class="btn btn-control featured-post">
                                    <svg class="olymp-trophy-icon">
                                        <use xlink:href="/svg-icons/sprites/icons.svg#olymp-trophy-icon"></use>
                                    </svg>
                                </a>

                                <a href="#" class="btn btn-control">
                                    <svg class="olymp-like-post-icon">
                                        <use xlink:href="/svg-icons/sprites/icons.svg#olymp-like-post-icon"></use>
                                    </svg>
                                </a>

                                <a href="#" class="btn btn-control">
                                    <svg class="olymp-comments-post-icon">
                                        <use xlink:href="/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use>
                                    </svg>
                                </a>

                                <a href="#" class="btn btn-control">
                                    <svg class="olymp-share-icon">
                                        <use xlink:href="/svg-icons/sprites/icons.svg#olymp-share-icon"></use>
                                    </svg>
                                </a>

                            </div>
                        </article>
                    </div>
            @endforeach


            <!-- .. end Post -->
                <!-- Comments -->

                <ul class="comments-list">
                    <li class="comment-item">
                        <div class="post__author author vcard inline-items">
                            <img src="/img/social/avatar10-sm.jpg" alt="author">

                            <div class="author-date">
                                <a class="h6 post__author-name fn" href="#">Elaine Dreyfuss</a>
                                <div class="post__date">
                                    <time class="published" datetime="2017-03-24T18:18">
                                        5 mins ago
                                    </time>
                                </div>
                            </div>

                            <a href="#" class="more">
                                <svg class="olymp-three-dots-icon">
                                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                </svg>
                            </a>

                        </div>

                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque
                            laudantium.</p>

                        <a href="#" class="post-add-icon inline-items">
                            <svg class="olymp-heart-icon">
                                <use xlink:href="/svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
                            </svg>
                            <span>8</span>
                        </a>
                        <a href="#" class="reply">Reply</a>
                    </li>
                    <li class="comment-item has-children">
                        <div class="post__author author vcard inline-items">
                            <img src="/img/social/avatar5-sm.jpg" alt="author">

                            <div class="author-date">
                                <a class="h6 post__author-name fn" href="#">Green Goo Rock</a>
                                <div class="post__date">
                                    <time class="published" datetime="2017-03-24T18:18">
                                        1 hour ago
                                    </time>
                                </div>
                            </div>

                            <a href="#" class="more">
                                <svg class="olymp-three-dots-icon">
                                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                </svg>
                            </a>

                        </div>

                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugiten, sed quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi en lod nesciunt. Neque porro
                            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit en lorem
                            ipsum der.
                        </p>

                        <a href="#" class="post-add-icon inline-items">
                            <svg class="olymp-heart-icon">
                                <use xlink:href="/svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
                            </svg>
                            <span>5</span>
                        </a>
                        <a href="#" class="reply">Reply</a>

                        <ul class="children">
                            <li class="comment-item">
                                <div class="post__author author vcard inline-items">
                                    <img src="/img/social/avatar8-sm.jpg" alt="author">

                                    <div class="author-date">
                                        <a class="h6 post__author-name fn" href="#">Diana Jameson</a>
                                        <div class="post__date">
                                            <time class="published" datetime="2017-03-24T18:18">
                                                39 mins ago
                                            </time>
                                        </div>
                                    </div>

                                    <a href="#" class="more">
                                        <svg class="olymp-three-dots-icon">
                                            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                        </svg>
                                    </a>

                                </div>

                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur.</p>

                                <a href="#" class="post-add-icon inline-items">
                                    <svg class="olymp-heart-icon">
                                        <use xlink:href="/svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
                                    </svg>
                                    <span>2</span>
                                </a>
                                <a href="#" class="reply">Reply</a>
                            </li>
                            <li class="comment-item">
                                <div class="post__author author vcard inline-items">
                                    <img src="/img/social/avatar2-sm.jpg" alt="author">

                                    <div class="author-date">
                                        <a class="h6 post__author-name fn" href="#">Nicholas Grisom</a>
                                        <div class="post__date">
                                            <time class="published" datetime="2017-03-24T18:18">
                                                24 mins ago
                                            </time>
                                        </div>
                                    </div>

                                    <a href="#" class="more">
                                        <svg class="olymp-three-dots-icon">
                                            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                        </svg>
                                    </a>

                                </div>

                                <p>Excepteur sint occaecat cupidatat non proident.</p>

                                <a href="#" class="post-add-icon inline-items">
                                    <svg class="olymp-heart-icon">
                                        <use xlink:href="/svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
                                    </svg>
                                    <span>0</span>
                                </a>
                                <a href="#" class="reply">Reply</a>

                            </li>
                        </ul>

                    </li>

                    <li class="comment-item">
                        <div class="post__author author vcard inline-items">
                            <img src="/img/social/avatar4-sm.jpg" alt="author">

                            <div class="author-date">
                                <a class="h6 post__author-name fn" href="#">Chris Greyson</a>
                                <div class="post__date">
                                    <time class="published" datetime="2017-03-24T18:18">
                                        1 hour ago
                                    </time>
                                </div>
                            </div>

                            <a href="#" class="more">
                                <svg class="olymp-three-dots-icon">
                                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                </svg>
                            </a>

                        </div>

                        <p>Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit.</p>

                        <a href="#" class="post-add-icon inline-items">
                            <svg class="olymp-heart-icon">
                                <use xlink:href="/svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
                            </svg>
                            <span>7</span>
                        </a>
                        <a href="#" class="reply">Reply</a>

                    </li>
                </ul>

                <!-- ... end Comments -->
                <a href="#" class="more-comments">View more comments <span>+</span></a>

                <!-- Comment Form  -->

                <form class="comment-form inline-items">

                    <div class="post__author author vcard inline-items">
                        <img src="/img/social/author-page.jpg" alt="author">

                        <div class="form-group with-icon-right ">
                            <textarea class="form-control" placeholder=""></textarea>
                            <div class="add-options-message">
                                <a href="#" class="options-message" data-toggle="modal"
                                   data-target="#update-header-photo">
                                    <svg class="olymp-camera-icon">
                                        <use xlink:href="/svg-icons/sprites/icons.svg#olymp-camera-icon"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <button class="btn btn-md-2 btn-primary">Post Comment</button>

                    <button class="btn btn-md-2 btn-border-think c-grey btn-transparent custom-color">Cancel
                    </button>

                </form>

                <!-- ... end Comment Form  -->                </div>
            <div class="ui-block">
                <!-- Post -->

                <article class="hentry post has-post-thumbnail shared-photo">

                    <div class="post__author author vcard inline-items">
                        <img src="/img/social/author-page.jpg" alt="author">

                        <div class="author-date">
                            <a class="h6 post__author-name fn"
                               href="02-ProfilePage.html">{{ $profile['first_name'] . ' ' . $profile['last_name'] }}</a>
                            shared
                            <a href="#">Diana Jameson</a>’s <a href="#">photo</a>
                            <div class="post__date">
                                <time class="published" datetime="2017-03-24T18:18">
                                    7 hours ago
                                </time>
                            </div>
                        </div>

                        <div class="more">
                            <svg class="olymp-three-dots-icon">
                                <use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                            </svg>
                            <ul class="more-dropdown">
                                <li>
                                    <a href="#">Edit Post</a>
                                </li>
                                <li>
                                    <a href="#">Delete Post</a>
                                </li>
                                <li>
                                    <a href="#">Turn Off Notifications</a>
                                </li>
                                <li>
                                    <a href="#">Select as Featured</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <p>Hi! Everyone should check out these amazing photographs that my friend shot the past week.
                        Here’s one of them...leave a kind comment!</p>

                    <div class="post-thumb">
                        <img src="/img/social/post-photo6.jpg" alt="photo">
                    </div>

                    <ul class="children single-children">
                        <li class="comment-item">
                            <div class="post__author author vcard inline-items">
                                <img src="/img/social/avatar8-sm.jpg" alt="author">
                                <div class="author-date">
                                    <a class="h6 post__author-name fn" href="#">Diana Jameson</a>
                                    <div class="post__date">
                                        <time class="published" datetime="2017-03-24T18:18">
                                            16 hours ago
                                        </time>
                                    </div>
                                </div>
                            </div>

                            <p>Here’s the first photo of our incredible photoshoot from yesterday. If you like it
                                please say so and tel me what you wanna see next!</p>
                        </li>
                    </ul>

                    <div class="post-additional-info inline-items">

                        <a href="#" class="post-add-icon inline-items">
                            <svg class="olymp-heart-icon">
                                <use xlink:href="/svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
                            </svg>
                            <span>15</span>
                        </a>

                        <ul class="friends-harmonic">
                            <li>
                                <a href="#">
                                    <img src="/img/social/friend-harmonic5.jpg" alt="friend">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/img/social/friend-harmonic10.jpg" alt="friend">
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
                                    <img src="/img/social/friend-harmonic2.jpg" alt="friend">
                                </a>
                            </li>
                        </ul>

                        <div class="names-people-likes">
                            <a href="#">Diana</a>, <a href="#">Nicholas</a> and
                            <br>13 more liked this
                        </div>

                        <div class="comments-shared">
                            <a href="#" class="post-add-icon inline-items">
                                <svg class="olymp-speech-balloon-icon">
                                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use>
                                </svg>
                                <span>0</span>
                            </a>

                            <a href="#" class="post-add-icon inline-items">
                                <svg class="olymp-share-icon">
                                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-share-icon"></use>
                                </svg>
                                <span>16</span>
                            </a>
                        </div>

                    </div>

                    <div class="control-block-button post-control-button">

                        <a href="#" class="btn btn-control">
                            <svg class="olymp-like-post-icon">
                                <use xlink:href="/svg-icons/sprites/icons.svg#olymp-like-post-icon"></use>
                            </svg>
                        </a>

                        <a href="#" class="btn btn-control">
                            <svg class="olymp-comments-post-icon">
                                <use xlink:href="/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use>
                            </svg>
                        </a>

                        <a href="#" class="btn btn-control">
                            <svg class="olymp-share-icon">
                                <use xlink:href="/svg-icons/sprites/icons.svg#olymp-share-icon"></use>
                            </svg>
                        </a>

                    </div>

                </article>

                <!-- .. end Post -->                </div>
        </div>

        <a id="load-more-button" href="#" class="btn btn-control btn-more" data-load-link="items-to-load.html"
           data-container="newsfeed-items-grid">
            <svg class="olymp-three-dots-icon">
                <use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
            </svg>
        </a>
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
                                <use xlink:href="svg-icons/sprites/icons.svg#olymp-play-icon"></use>
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
                                            xlink:href="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
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
                                            xlink:href="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
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
                                            xlink:href="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
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
                                            xlink:href="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
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
                                            xlink:href="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
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
                                            xlink:href="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
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
                <a href="#" class="upload-photo-item">
                    <svg class="olymp-computer-icon">
                        <use xlink:href="/svg-icons/sprites/icons.svg#olymp-computer-icon"></use>
                    </svg>

                    <h6>Upload Photo</h6>
                    <span>Browse your computer.</span>
                </a>

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
        <source src="mp3/Twice.mp3" title="Track 1" data-poster="track1.png" type="audio/mpeg">
        <source src="mp3/Twice.mp3" title="Track 2" data-poster="track2.png" type="audio/mpeg">
        <source src="mp3/Twice.mp3" title="Track 3" data-poster="track3.png" type="audio/mpeg">
        <source src="mp3/Twice.mp3" title="Track 4" data-poster="track4.png" type="audio/mpeg">
    </audio>

</div>

<a class="back-to-top" href="#">
    <img src="/svg-icons/back-to-top.svg" alt="arrow" class="back-icon">
</a>

<div class="ui-block popup-chat popup-chat-responsive" tabindex="-1" role="dialog" aria-labelledby="update-header-photo"
     aria-hidden="true">

    <div class="modal-content">
        <div class="modal-header">
            <span class="icon-status online"></span>
            <h6 class="title">Chat</h6>
            <div class="more">
                <svg class="olymp-three-dots-icon">
                    <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                </svg>
                <svg class="olymp-little-delete js-chat-open">
                    <use xlink:href="svg-icons/sprites/icons.svg#olymp-little-delete"></use>
                </svg>
            </div>
        </div>
        <div class="modal-body">
            <div class="mCustomScrollbar">
                <ul class="notification-list chat-message chat-message-field">
                    <li>
                        <div class="author-thumb">
                            <img src="/img/social/avatar14-sm.jpg" alt="author" class="mCS_img_loaded">
                        </div>
                        <div class="notification-event">
                            <span class="chat-message-item">Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks</span>
                            <span class="notification-date"><time class="entry-date updated"
                                                                  datetime="2004-07-24T18:18">Yesterday at 8:10pm</time></span>
                        </div>
                    </li>

                    <li>
                        <div class="author-thumb">
                            <img src="/img/social/author-page.jpg" alt="author" class="mCS_img_loaded">
                        </div>
                        <div class="notification-event">
                            <span class="chat-message-item">Don’t worry Mathilda!</span>
                            <span class="chat-message-item">I already bought everything</span>
                            <span class="notification-date"><time class="entry-date updated"
                                                                  datetime="2004-07-24T18:18">Yesterday at 8:29pm</time></span>
                        </div>
                    </li>

                    <li>
                        <div class="author-thumb">
                            <img src="/img/social/avatar14-sm.jpg" alt="author" class="mCS_img_loaded">
                        </div>
                        <div class="notification-event">
                            <span class="chat-message-item">Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks</span>
                            <span class="notification-date"><time class="entry-date updated"
                                                                  datetime="2004-07-24T18:18">Yesterday at 8:10pm</time></span>
                        </div>
                    </li>
                </ul>
            </div>

            <form class="need-validation">

                <div class="form-group label-floating is-empty">
                    <label class="control-label">Press enter to post...</label>
                    <textarea class="form-control" placeholder=""></textarea>
                    <div class="add-options-message">
                        <a href="#" class="options-message">
                            <svg class="olymp-computer-icon">
                                <use xlink:href="svg-icons/sprites/icons.svg#olymp-computer-icon"></use>
                            </svg>
                        </a>
                        <div class="options-message smile-block">

                            <svg class="olymp-happy-sticker-icon">
                                <use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-sticker-icon"></use>
                            </svg>

                            <ul class="more-dropdown more-with-triangle triangle-bottom-right">
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat1.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat2.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat3.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat4.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat5.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat6.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat7.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat8.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat9.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat10.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat11.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat12.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat13.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat14.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat15.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat16.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat17.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat18.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat19.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat20.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat21.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat22.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat23.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat24.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat25.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat26.png" alt="icon">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/social/icon-chat27.png" alt="icon">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    </div>

</div>

@include('social.layouts.footer')
</body>
</html>