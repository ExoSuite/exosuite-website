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
                    <div class="h6 title">{{ $profile['first_name'] . ' ' . $profile['last_name'] }}'s Friends </div>
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
        @foreach($friends as $friend)
        <div class="ui-block">

            <!-- Friend Item -->

            <div class="friend-item">
                <div class="friend-header-thumb">
                    <img src="/img/social/friend8.jpg" alt="friend">
                </div>

                <div class="friend-item-content">
                    <div class="friend-avatar">
                        <div class="author-thumb">
                            <img src="/img/social/avatar8.jpg" alt="author">
                        </div>
                        <div class="author-content">
                            <a href="#" class="h5 author-name">name surname</a>
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
                                </div>
                                <div class="control-block-button" data-swiper-parallax="-100">
                                    <a href="{{ "user/" . $user->id ."/friendship/" }}" class="accept-request request-del">
										<span class="icon-minus">
											<svg class="olymp-happy-face-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
										</span>
                                    </a>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <!-- ... end Friend Item -->			</div>
            @endforeach
    </div>





      <div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">

              <div class="ui-block">

                  <!-- Friend Item -->

                  <div class="friend-item">
                      <div class="friend-header-thumb">
                          <img src="/img/social/friend8.jpg" alt="friend">
                      </div>

                      <div class="friend-item-content">
                          <div class="friend-avatar">
                              <div class="author-thumb">
                                  <img src="/img/social/avatar8.jpg" alt="author">
                              </div>
                              <div class="author-content">
                                  <a href="#" class="h5 author-name">name surname</a>
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
                                      </div>
                                      <div class="control-block-button" data-swiper-parallax="-100">
                                          <a href="{{ "user/" . $userId ."/friendship/" }}" class="accept-request request-del">
										<span class="icon-minus">
											<svg class="olymp-happy-face-icon"><use xlink:href="/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
										</span>
                                          </a>

                                      </div>
                                  </div>

                              </div>
                          </div>
                      </div>
                  </div>

                  <!-- ... end Friend Item -->			</div>

      </div>

  </div>

</div>

<a class="back-to-top" href="#">
    <img src="/svg-icons/back-to-top.svg" alt="arrow" class="back-icon">
</a>

@include('social.layouts.popupchat')
@include('social.layouts.footer')
</body>
</html>
