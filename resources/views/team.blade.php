<!doctype html>
<html lang="{{ app()->getLocale() }}">
@head()
<meta name="description"
      content="L'équipe de développement ExoSuite"/>
@endhead
<body>
@include('layouts.menu')
@include('layouts.preloader')

<div class="wrapper">
    <!--Page header-->
    <section class="padding_top parallaxie" style="background-color: #262626">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="intro-text center padding_half wow fadeInUp">
                        <span class="heading-title bottom20">@lang('website.menu.team')</span>
                        <h2 class="whitecolor text-capitalize bottom45">@lang('website.team.title')</h2>
                        <ul class="breadcrumbs">
                            <li><a href="/">@lang('website.menu.home')</a></li>
                            <li>@lang('website.menu.team')</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--Page header ends-->

    <section id="team" class="padding_top">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="intro-text center wow fadeInUp">
                        <span class="heading-title bottom25">@lang('website.team.inno')</span>
                        <h2 class="darkcolor text-capitalize heading_space">@lang('website.team.teamTitle')</h2>
                        <p style="margin-bottom: 8.75em">@lang('website.team.teamDescription')</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div id="team-slider" class="swiper-container" style="margin-bottom: 8.75em">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="team-slide">
                                    <div class="team-photo equalheight">
                                        <img alt="image" src="img/team/eric.png">
                                    </div>
                                    <div class="team-text equalheight">
                                        <h3>Eric DESCHODT</h3>
                                        <span>@lang('website.team.ericJob')</span>
                                        <p class="top20 bottom20">@lang('website.team.ericDescription')</p>
                                        <ul class="social">
                                            <li><a href="https://www.linkedin.com/in/deschodteric/"><i class="fab fa-linkedin"></i> </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="team-slide">
                                    <div class="team-photo equalheight">
                                        <img alt="image" src="/img/team/dupil.jpg">
                                    </div>
                                    <div class="team-text equalheight">
                                        <h3>Loïc DUPIL</h3>
                                        <span>@lang('website.team.dupilJob')</span>
                                        <p class="top20 bottom20">@lang('website.team.dupilDescription')</p>
                                        <ul class="social">
                                            <li><a href="https://www.linkedin.com/in/lo%C3%AFc-dupil-04789b10a/"><i class="fab fa-linkedin"></i> </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="team-slide">
                                    <div class="team-photo equalheight">
                                        <img alt="image" src="/img/team/lopez.jpg">
                                    </div>
                                    <div class="team-text equalheight">
                                        <h3>Loïc LOPEZ</h3>
                                        <span>@lang('website.team.lopezJob')</span>
                                        <p class="top20 bottom20">@lang('website.team.lopezDescription')</p>
                                        <ul class="social">
                                            <li><a href="https://www.linkedin.com/in/loiclopez/"><i class="fab fa-linkedin"></i> </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="team-slide">
                                    <div class="team-photo equalheight">
                                        <img alt="image" src="/img/team/renaud.jpg">
                                    </div>
                                    <div class="team-text equalheight">
                                        <h3>Renaud JULIANI</h3>
                                        <span>@lang('website.team.renaudJob')</span>
                                        <p class="top20 bottom20">@lang('website.team.renaudDescription')</p>
                                        <ul class="social">
                                            <li><a href="https://www.linkedin.com/in/renaudjuliani/"><i class="fab fa-linkedin"></i> </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="team-slide">
                                    <div class="team-photo equalheight">
                                        <img alt="image" src="/img/team/pierre.jpg">
                                    </div>
                                    <div class="team-text equalheight">
                                        <h3>Pierre PIAZZA</h3>
                                        <span>@lang('website.team.pierreJob')</span>
                                        <p class="top20 bottom20">@lang('website.team.pierreDescription')</p>
                                        <ul class="social">
                                            <li><a href="https://www.linkedin.com/in/pierre-piazza-77089b10a/"><i class="fab fa-linkedin"></i> </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="team-slide">
                                    <div class="team-photo equalheight">
                                        <img alt="image" src="/img/team/stan.jpg">
                                    </div>
                                    <div class="team-text equalheight">
                                        <h3>Stanislas DENEUBOURG</h3>
                                        <span>@lang('website.team.stanJob')</span>
                                        <p class="top20 bottom20">@lang('website.team.stanDescription')</p>
                                        <ul class="social">
                                            <li><a href="https://www.linkedin.com/in/stanislas-deneubourg/"><i class="fab fa-linkedin"></i> </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="team-slide">
                                    <div class="team-photo equalheight">
                                        <img alt="image" src="/img/team/Yassir-Jabbari.jpg"/>
                                    </div>
                                    <div class="team-text equalheight">
                                        <h3>Yassir JABBARI</h3>
                                        <span>@lang('website.team.yassirJob')</span>
                                        <p class="top20 bottom20">@lang('website.team.yassirDescription')</p>
                                        <ul class="social">
                                            <li><a href="https://www.linkedin.com/in/yassirjabbari/"><i class="fab fa-linkedin"></i> </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--<div class="swiper-button-next"></div>
                         <div class="swiper-button-prev"></div>-->
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--Team 02 Slider ends-->
</div>


@include('layouts.footer')
<!-- jQuery Files -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="/js/new/bootstrap.min.js"></script>

<!--to view items on reach-->
<script src="/js/new/jquery.appear.js"></script>

<!--Swiper slider-->
<script src="/js/new/swiper.jquery.min.js"></script>

<!--Owl slider-->
<script src="/js/new/owl.carousel.min.js"></script>

<!--number counters-->
<script src="/js/new/jquery-countTo.js"></script>

<!--equalize the same heights of block-->
<script src="/js/new/jquery.matchHeight-min.js"></script>

<!--for parallax bgs-->
<script src="/js/new/parallaxie.js"></script>

<!--for CountDown Timer-->
<script src="/js/new/dscountdown.min.js"></script>

<!--Open popup fancybox on images-->
<script src="/js/new/jquery.fancybox.min.js"></script>

<!--Portfolio galleries-->
<script src="/js/new/jquery.cubeportfolio.min.js"></script>

<!--Progressbar s in circle forms-->
<script src="/js/new/circle-progress.min.js"></script>

<!--scrollbar on blocks-->
<script src="/js/new/simplebar.js"></script>

<!--Video Pops support for youtube, viemo etc-->
<script src="/js/new/viedobox_video.js"></script>

<!--youtube background video-->
<script src="/js/new/jquery.mb.YTPlayer.min.js"></script>

<!-- Type It -->
<script src="https://cdn.jsdelivr.net/jquery.typeit/4.4.0/typeit.min.js"></script>

<!-- WOW Transitions -->
<script src="/js/new/wow.min.js"></script>

<!--Revolution SLider-->
<script src="/js/new/revolution/jquery.themepunch.tools.min.js"></script>
<script src="/js/new/revolution/jquery.themepunch.revolution.min.js"></script>
<!-- SLIDER REVOLUTION 5.0 EXTENSIONS  (Load Extensions only on Local File Systems !  The following part can be removed on Server for On Demand Loading) -->
<script src="/js/new/revolution/extensions/revolution.extension.actions.min.js"></script>
<script src="/js/new/revolution/extensions/revolution.extension.carousel.min.js"></script>
<script src="/js/new/revolution/extensions/revolution.extension.kenburn.min.js"></script>
<script src="/js/new/revolution/extensions/revolution.extension.layeranimation.min.js"></script>
<script src="/js/new/revolution/extensions/revolution.extension.migration.min.js"></script>
<script src="/js/new/revolution/extensions/revolution.extension.navigation.min.js"></script>
<script src="/js/new/revolution/extensions/revolution.extension.parallax.min.js"></script>
<script src="/js/new/revolution/extensions/revolution.extension.slideanims.min.js"></script>
<script src="/js/new/revolution/extensions/revolution.extension.video.min.js"></script>


<!--Synx scripts-->
<script src="/js/new/functions.js"></script>

<!--Google map API-->
<script src="http://maps.google.com/maps/api/js?key=AIzaSyAOBKD6V47-g_3opmidcmFapb3kSNAR70U"></script>
<script src="/js/new/map.js"></script>
</body>
</html>