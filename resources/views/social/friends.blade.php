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
        <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="ui-block responsive-flex">
                <div class="ui-block-title">
                    <div class="h6 title">James’s Friends (42)</div>
                    <form class="w-search">
                        <div class="form-group with-button">
                            <input class="form-control" type="text" placeholder="Search Friends...">
                            <button>
                                <svg class="olymp-magnifying-glass-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg>
                            </button>
                        </div>
                    </form>
                    <a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="ui-block">

                <!-- Friend Item -->

                <div class="friend-item">
                    <div class="friend-header-thumb">
                        <img src="/img/social/friend1.jpg" alt="friend">
                    </div>

                    <div class="friend-item-content">

                        <div class="more">
                            <svg class="olymp-three-dots-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                            <ul class="more-dropdown">
                                <li>
                                    <a href="#">Report Profile</a>
                                </li>
                                <li>
                                    <a href="#">Block Profile</a>
                                </li>
                                <li>
                                    <a href="#">Turn Off Notifications</a>
                                </li>
                            </ul>
                        </div>
                        <div class="friend-avatar">
                            <div class="author-thumb">
                                <img src="/img/social/avatar1.jpg" alt="author">
                            </div>
                            <div class="author-content">
                                <a href="#" class="h5 author-name">Nicholas Grissom</a>
                                <div class="country">San Francisco, CA</div>
                            </div>
                        </div>

                        <div class="swiper-container" data-slide="fade">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="friend-count" data-swiper-parallax="-500">
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">52</div>
                                            <div class="title">Friends</div>
                                        </a>
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">240</div>
                                            <div class="title">Photos</div>
                                        </a>
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">16</div>
                                            <div class="title">Videos</div>
                                        </a>
                                    </div>
                                    <div class="control-block-button" data-swiper-parallax="-100">
                                        <a href="#" class="btn btn-control bg-blue">
                                            <svg class="olymp-happy-face-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                                        </a>

                                        <a href="#" class="btn btn-control bg-purple">
                                            <svg class="olymp-chat---messages-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                                        </a>

                                    </div>
                                </div>

                                <div class="swiper-slide">
                                    <p class="friend-about" data-swiper-parallax="-500">
                                        Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
                                    </p>

                                    <div class="friend-since" data-swiper-parallax="-100">
                                        <span>Friends Since:</span>
                                        <div class="h6">December 2014</div>
                                    </div>
                                </div>
                            </div>

                            <!-- If we need pagination -->
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>

                <!-- ... end Friend Item -->			</div>
        </div>
        <div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="ui-block">

                <!-- Friend Item -->

                <div class="friend-item">
                    <div class="friend-header-thumb">
                        <img src="/img/social/friend2.jpg" alt="friend">
                    </div>

                    <div class="friend-item-content">

                        <div class="more">
                            <svg class="olymp-three-dots-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                            <ul class="more-dropdown">
                                <li>
                                    <a href="#">Report Profile</a>
                                </li>
                                <li>
                                    <a href="#">Block Profile</a>
                                </li>
                                <li>
                                    <a href="#">Turn Off Notifications</a>
                                </li>
                            </ul>
                        </div>
                        <div class="friend-avatar">
                            <div class="author-thumb">
                                <img src="/img/social/avatar2.jpg" alt="author">
                            </div>
                            <div class="author-content">
                                <a href="#" class="h5 author-name">Marina Valentine</a>
                                <div class="country">Long Island, NY</div>
                            </div>
                        </div>

                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="friend-count" data-swiper-parallax="-500">
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">52</div>
                                            <div class="title">Friends</div>
                                        </a>
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">240</div>
                                            <div class="title">Photos</div>
                                        </a>
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">16</div>
                                            <div class="title">Videos</div>
                                        </a>
                                    </div>
                                    <div class="control-block-button" data-swiper-parallax="-100">
                                        <a href="#" class="btn btn-control bg-blue">
                                            <svg class="olymp-happy-face-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                                        </a>

                                        <a href="#" class="btn btn-control bg-purple">
                                            <svg class="olymp-chat---messages-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                                        </a>

                                    </div>
                                </div>

                                <div class="swiper-slide">
                                    <p class="friend-about" data-swiper-parallax="-500">
                                        Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
                                    </p>

                                    <div class="friend-since" data-swiper-parallax="-100">
                                        <span>Friends Since:</span>
                                        <div class="h6">December 2014</div>
                                    </div>
                                </div>
                            </div>

                            <!-- If we need pagination -->
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>

                <!-- ... end Friend Item -->			</div>
        </div>
        <div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="ui-block">

                <!-- Friend Item -->

                <div class="friend-item">
                    <div class="friend-header-thumb">
                        <img src="/img/social/friend3.jpg" alt="friend">
                    </div>

                    <div class="friend-item-content">

                        <div class="more">
                            <svg class="olymp-three-dots-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                            <ul class="more-dropdown">
                                <li>
                                    <a href="#">Report Profile</a>
                                </li>
                                <li>
                                    <a href="#">Block Profile</a>
                                </li>
                                <li>
                                    <a href="#">Turn Off Notifications</a>
                                </li>
                            </ul>
                        </div>
                        <div class="friend-avatar">
                            <div class="author-thumb">
                                <img src="/img/social/avatar3.jpg" alt="author">
                            </div>
                            <div class="author-content">
                                <a href="#" class="h5 author-name">Nicholas Grissom</a>
                                <div class="country">Los Angeles, CA</div>
                            </div>
                        </div>

                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="friend-count" data-swiper-parallax="-500">
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">49</div>
                                            <div class="title">Friends</div>
                                        </a>
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">132</div>
                                            <div class="title">Photos</div>
                                        </a>
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">5</div>
                                            <div class="title">Videos</div>
                                        </a>
                                    </div>
                                    <div class="control-block-button" data-swiper-parallax="-100">
                                        <a href="#" class="btn btn-control bg-blue">
                                            <svg class="olymp-happy-face-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                                        </a>

                                        <a href="#" class="btn btn-control bg-purple">
                                            <svg class="olymp-chat---messages-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                                        </a>

                                    </div>
                                </div>

                                <div class="swiper-slide">
                                    <p class="friend-about" data-swiper-parallax="-500">
                                        Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
                                    </p>

                                    <div class="friend-since" data-swiper-parallax="-100">
                                        <span>Friends Since:</span>
                                        <div class="h6">December 2014</div>
                                    </div>
                                </div>
                            </div>

                            <!-- If we need pagination -->
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>

                <!-- ... end Friend Item -->			</div>
        </div>
        <div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="ui-block">

                <!-- Friend Item -->

                <div class="friend-item">
                    <div class="friend-header-thumb">
                        <img src="/img/social/friend4.jpg" alt="friend">
                    </div>

                    <div class="friend-item-content">
                        <div class="more">
                            <svg class="olymp-three-dots-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                            <ul class="more-dropdown">
                                <li>
                                    <a href="#">Report Profile</a>
                                </li>
                                <li>
                                    <a href="#">Block Profile</a>
                                </li>
                                <li>
                                    <a href="#">Turn Off Notifications</a>
                                </li>
                            </ul>
                        </div>

                        <div class="friend-avatar">
                            <div class="author-thumb">
                                <img src="/img/social/avatar4.jpg" alt="author">
                            </div>
                            <div class="author-content">
                                <a href="#" class="h5 author-name">Chris Greyson</a>
                                <div class="country">Austin, TX</div>
                            </div>
                        </div>

                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="friend-count" data-swiper-parallax="-500">
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">65</div>
                                            <div class="title">Friends</div>
                                        </a>
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">104</div>
                                            <div class="title">Photos</div>
                                        </a>
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">12</div>
                                            <div class="title">Videos</div>
                                        </a>
                                    </div>
                                    <div class="control-block-button" data-swiper-parallax="-100">
                                        <a href="#" class="btn btn-control bg-blue">
                                            <svg class="olymp-happy-face-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                                        </a>

                                        <a href="#" class="btn btn-control bg-purple">
                                            <svg class="olymp-chat---messages-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                                        </a>

                                    </div>
                                </div>

                                <div class="swiper-slide">
                                    <p class="friend-about" data-swiper-parallax="-500">
                                        Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
                                    </p>

                                    <div class="friend-since" data-swiper-parallax="-100">
                                        <span>Friends Since:</span>
                                        <div class="h6">December 2014</div>
                                    </div>
                                </div>
                            </div>

                            <!-- If we need pagination -->
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>

                <!-- ... end Friend Item -->			</div>
        </div>

        <div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="ui-block">

                <!-- Friend Item -->

                <div class="friend-item">
                    <div class="friend-header-thumb">
                        <img src="/img/social/friend5.jpg" alt="friend">
                    </div>

                    <div class="friend-item-content">

                        <div class="more">
                            <svg class="olymp-three-dots-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                            <ul class="more-dropdown">
                                <li>
                                    <a href="#">Report Profile</a>
                                </li>
                                <li>
                                    <a href="#">Block Profile</a>
                                </li>
                                <li>
                                    <a href="#">Turn Off Notifications</a>
                                </li>
                            </ul>
                        </div>
                        <div class="friend-avatar">
                            <div class="author-thumb">
                                <img src="/img/social/avatar5.jpg" alt="author">
                            </div>
                            <div class="author-content">
                                <a href="#" class="h5 author-name">Elaine Dreifuss</a>
                                <div class="country">New York, NY</div>
                            </div>
                        </div>

                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="friend-count" data-swiper-parallax="-500">
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">82</div>
                                            <div class="title">Friends</div>
                                        </a>
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">204</div>
                                            <div class="title">Photos</div>
                                        </a>
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">27</div>
                                            <div class="title">Videos</div>
                                        </a>
                                    </div>
                                    <div class="control-block-button" data-swiper-parallax="-100">
                                        <a href="#" class="btn btn-control bg-blue">
                                            <svg class="olymp-happy-face-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                                        </a>

                                        <a href="#" class="btn btn-control bg-purple">
                                            <svg class="olymp-chat---messages-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                                        </a>

                                    </div>
                                </div>

                                <div class="swiper-slide">
                                    <p class="friend-about" data-swiper-parallax="-500">
                                        Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
                                    </p>

                                    <div class="friend-since" data-swiper-parallax="-100">
                                        <span>Friends Since:</span>
                                        <div class="h6">December 2014</div>
                                    </div>
                                </div>
                            </div>

                            <!-- If we need pagination -->
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>

                <!-- ... end Friend Item -->			</div>
        </div>
        <div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="ui-block">

                <!-- Friend Item -->

                <div class="friend-item">
                    <div class="friend-header-thumb">
                        <img src="/img/social/friend6.jpg" alt="friend">
                    </div>

                    <div class="friend-item-content">

                        <div class="more">
                            <svg class="olymp-three-dots-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                            <ul class="more-dropdown">
                                <li>
                                    <a href="#">Report Profile</a>
                                </li>
                                <li>
                                    <a href="#">Block Profile</a>
                                </li>
                                <li>
                                    <a href="#">Turn Off Notifications</a>
                                </li>
                            </ul>
                        </div>
                        <div class="friend-avatar">
                            <div class="author-thumb">
                                <img src="/img/social/avatar6.jpg" alt="author">
                            </div>
                            <div class="author-content">
                                <a href="#" class="h5 author-name">Bruce Peterson</a>
                                <div class="country">Austin, TX</div>
                            </div>
                        </div>

                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="friend-count" data-swiper-parallax="-500">
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">73</div>
                                            <div class="title">Friends</div>
                                        </a>
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">360</div>
                                            <div class="title">Photos</div>
                                        </a>
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">11</div>
                                            <div class="title">Videos</div>
                                        </a>
                                    </div>
                                    <div class="control-block-button" data-swiper-parallax="-100">
                                        <a href="#" class="btn btn-control bg-blue">
                                            <svg class="olymp-happy-face-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                                        </a>

                                        <a href="#" class="btn btn-control bg-purple">
                                            <svg class="olymp-chat---messages-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                                        </a>

                                    </div>
                                </div>

                                <div class="swiper-slide">
                                    <p class="friend-about" data-swiper-parallax="-500">
                                        Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
                                    </p>

                                    <div class="friend-since" data-swiper-parallax="-100">
                                        <span>Friends Since:</span>
                                        <div class="h6">December 2014</div>
                                    </div>
                                </div>
                            </div>

                            <!-- If we need pagination -->
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>

                <!-- ... end Friend Item -->			</div>
        </div>
        <div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="ui-block">

                <!-- Friend Item -->

                <div class="friend-item">
                    <div class="friend-header-thumb">
                        <img src="/img/social/friend7.jpg" alt="friend">
                    </div>

                    <div class="friend-item-content">

                        <div class="more">
                            <svg class="olymp-three-dots-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                            <ul class="more-dropdown">
                                <li>
                                    <a href="#">Report Profile</a>
                                </li>
                                <li>
                                    <a href="#">Block Profile</a>
                                </li>
                                <li>
                                    <a href="#">Turn Off Notifications</a>
                                </li>
                            </ul>
                        </div>
                        <div class="friend-avatar">
                            <div class="author-thumb">
                                <img src="/img/social/avatar7.jpg" alt="author">
                            </div>
                            <div class="author-content">
                                <a href="#" class="h5 author-name">Carol Summers</a>
                                <div class="country">Los Angeles, CA</div>
                            </div>
                        </div>

                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="friend-count" data-swiper-parallax="-500">
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">49</div>
                                            <div class="title">Friends</div>
                                        </a>
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">132</div>
                                            <div class="title">Photos</div>
                                        </a>
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">5</div>
                                            <div class="title">Videos</div>
                                        </a>
                                    </div>
                                    <div class="control-block-button" data-swiper-parallax="-100">
                                        <a href="#" class="btn btn-control bg-blue">
                                            <svg class="olymp-happy-face-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                                        </a>

                                        <a href="#" class="btn btn-control bg-purple">
                                            <svg class="olymp-chat---messages-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                                        </a>

                                    </div>
                                </div>

                                <div class="swiper-slide">
                                    <p class="friend-about" data-swiper-parallax="-500">
                                        Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
                                    </p>

                                    <div class="friend-since" data-swiper-parallax="-100">
                                        <span>Friends Since:</span>
                                        <div class="h6">December 2014</div>
                                    </div>
                                </div>
                            </div>

                            <!-- If we need pagination -->
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>

                <!-- ... end Friend Item -->			</div>
        </div>
        <div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="ui-block">

                <!-- Friend Item -->

                <div class="friend-item">
                    <div class="friend-header-thumb">
                        <img src="/img/social/friend8.jpg" alt="friend">
                    </div>

                    <div class="friend-item-content">
                        <div class="more">
                            <svg class="olymp-three-dots-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                            <ul class="more-dropdown">
                                <li>
                                    <a href="#">Report Profile</a>
                                </li>
                                <li>
                                    <a href="#">Block Profile</a>
                                </li>
                                <li>
                                    <a href="#">Turn Off Notifications</a>
                                </li>
                            </ul>
                        </div>

                        <div class="friend-avatar">
                            <div class="author-thumb">
                                <img src="/img/social/avatar8.jpg" alt="author">
                            </div>
                            <div class="author-content">
                                <a href="#" class="h5 author-name">Michael Maximoff</a>
                                <div class="country">Portland, OR</div>
                            </div>
                        </div>

                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="friend-count" data-swiper-parallax="-500">
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">58</div>
                                            <div class="title">Friends</div>
                                        </a>
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">304</div>
                                            <div class="title">Photos</div>
                                        </a>
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">19</div>
                                            <div class="title">Videos</div>
                                        </a>
                                    </div>
                                    <div class="control-block-button" data-swiper-parallax="-100">
                                        <a href="#" class="btn btn-control bg-blue">
                                            <svg class="olymp-happy-face-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                                        </a>

                                        <a href="#" class="btn btn-control bg-purple">
                                            <svg class="olymp-chat---messages-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                                        </a>

                                    </div>
                                </div>

                                <div class="swiper-slide">
                                    <p class="friend-about" data-swiper-parallax="-500">
                                        Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
                                    </p>

                                    <div class="friend-since" data-swiper-parallax="-100">
                                        <span>Friends Since:</span>
                                        <div class="h6">December 2014</div>
                                    </div>
                                </div>
                            </div>

                            <!-- If we need pagination -->
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>

                <!-- ... end Friend Item -->			</div>
        </div>
    </div>
</div>

<div class="modal fade" id="update-header-photo" tabindex="-1" role="dialog" aria-labelledby="update-header-photo" aria-hidden="true">
    <div class="modal-dialog window-popup update-header-photo" role="document">
        <div class="modal-content">
            <a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
                <svg class="olymp-close-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
            </a>

            <div class="modal-header">
                <h6 class="title">Update Header Photo</h6>
            </div>

            <div class="modal-body">
                <a href="#" class="upload-photo-item">
                    <svg class="olymp-computer-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-computer-icon"></use></svg>

                    <h6>Upload Photo</h6>
                    <span>Browse your computer.</span>
                </a>

                <a href="#" class="upload-photo-item" data-toggle="modal" data-target="#choose-from-my-photo">

                    <svg class="olymp-photos-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-photos-icon"></use></svg>

                    <h6>Choose from My Photos</h6>
                    <span>Choose from your uploaded photos</span>
                </a>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="choose-from-my-photo" tabindex="-1" role="dialog" aria-labelledby="choose-from-my-photo" aria-hidden="true">
    <div class="modal-dialog window-popup choose-from-my-photo" role="document">

        <div class="modal-content">
            <a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
                <svg class="olymp-close-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
            </a>
            <div class="modal-header">
                <h6 class="title">Choose from My Photos</h6>

                <!-- Nav tabs -->
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#home" role="tab" aria-expanded="true">
                            <svg class="olymp-photos-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-photos-icon"></use></svg>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#profile" role="tab" aria-expanded="false">
                            <svg class="olymp-albums-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-albums-icon"></use></svg>
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

<a class="back-to-top" href="#">
    <img src="/svg-icons/back-to-top.svg" alt="arrow" class="back-icon">
</a>

<div class="ui-block popup-chat popup-chat-responsive" tabindex="-1" role="dialog" aria-labelledby="update-header-photo" aria-hidden="true">

    <div class="modal-content">
        <div class="modal-header">
            <span class="icon-status online"></span>
            <h6 class="title" >Chat</h6>
            <div class="more">
                <svg class="olymp-three-dots-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                <svg class="olymp-little-delete js-chat-open"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
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
                            <span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">Yesterday at 8:10pm</time></span>
                        </div>
                    </li>

                    <li>
                        <div class="author-thumb">
                            <img src="/img/social/author-page.jpg" alt="author" class="mCS_img_loaded">
                        </div>
                        <div class="notification-event">
                            <span class="chat-message-item">Don’t worry Mathilda!</span>
                            <span class="chat-message-item">I already bought everything</span>
                            <span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">Yesterday at 8:29pm</time></span>
                        </div>
                    </li>

                    <li>
                        <div class="author-thumb">
                            <img src="/img/social/avatar14-sm.jpg" alt="author" class="mCS_img_loaded">
                        </div>
                        <div class="notification-event">
                            <span class="chat-message-item">Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks</span>
                            <span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">Yesterday at 8:10pm</time></span>
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
                            <svg class="olymp-computer-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-computer-icon"></use></svg>
                        </a>
                        <div class="options-message smile-block">

                            <svg class="olymp-happy-sticker-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-happy-sticker-icon"></use></svg>

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