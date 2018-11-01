<!doctype html>
<html lang="{{ app()->getLocale() }}">
@head()
<meta name="description"
      content="Avec les applications pour lunettes connectées ExoSuite, soyez l'acteur du futur du sport ! Découvrez dès maintenant notre suite de coaching sportif !"/>
@endhead
<body>
@include('layouts.menu')
@include('layouts.preloader')

<section class="full-screen caption-video caption-video-five parallaxie" id="ourhome">
    <div class="container">
        <div class="row">
            <div class="col-md-2 col-sm-1"></div>
            <div class="col-md-8 col-sm-10">
                <div class="center-block text-center">
                    <div class="center-item">
                        <!--Video Button-->
                        <div class="wow zoomIn">
                            <a href="https://youtu.be/cwHGS7kPU2I"
                               class="video-btn html5lightbox"><i class="fa fa-play"></i></a>
                        </div>
                        <div class="wow fadeInUp">
                            <h2 class="top50 bottom35 whitecolor text-shadowed">ExoSuite<span
                                        class="block subtitle">@lang('website.home.subtitle')</span></h2>
                            <a href="/exosuite" class="button default scroll">@lang('website.home.discover')</a> &nbsp; <a
                                    href="/pricing" class="button whitehole">@lang('website.home.pricing')</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="about">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 container-padding">
                <div class="half-block padding_half equalheight center-block wow fadeInLeft">
                    <div class="intro-text">
                        <span class="heading-title bottom25">@lang('website.home.tech')</span>
                        <h2 class="darkcolor bottom45">@lang('website.home.titleExosuite')</h2>
                        <p>@lang('website.home.descriptionExosuite')</p>
                        <a href="/exosuite" class="button default top50">@lang('website.home.moreInfos')</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 nopadding">
                <div class="image">
                    <img alt="image" src="/img/ar_example.jpg" class="equalheight">
                </div>
            </div>
        </div>
    </div>
</section>

<section class="padding bg-intro bgintro-five parallaxie">
    <div class="container-fluid container-padding">
        <div class="row">
            <div class="col-md-6 col-sm-3"></div>
            <div class="col-md-6 col-sm-9">
                <div class="intro-text text-right wow fadeInRight">
                    <span class="heading-title bottom25">@lang('website.home.socialNetwork')</span>
                    <h2 class="whitecolor bottom45 text-shadowed">@lang('website.home.titleSocialNetwork')</h2>
                    <p class="whitecolor text-shadowed">@lang('website.home.descriptionSocialNetwork')</p>
                    <a href="/social" class="button default top50">@lang('website.home.ourSocialNetwork')</a>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="services-three" class="padding bglight">
    <div class="container">
        <div class="row">
            <div class="col-md-2 col-sm-1"></div>
            <div class="col-md-8 col-sm-10">
                <div class="intro-text center bottom15 wow fadeInUp">
                    <span class="heading-title bottom25">@lang('website.home.epitech')</span>
                    <h2 class="darkcolor bottom45">@lang('website.home.titleEpitech')</h2>
                    <p class="bottom45">@lang('website.home.descriptionEpitech')</p>
                </div>
                <div class="col-md-4 col-md-offset-4 wow fadeInUp">
                    <a href="http://www.epitech.eu/fr/"><img src="/img/epitech.png" class="width-max"/></a>
                </div>
            </div>
        </div>
    </div>
</section>

<!--Parallax quote -->
<section id="single-parallx" class="padding parallaxie">
    <h3 class="hidden">hidden</h3>
    <div class="container">
        <div class="row padding">
            <div class="col-md-2 col-sm-2"></div>
            <div class="col-md-8 col-sm-8 text-center wow fadeInUp">
                <blockquote class="whitecolor text-shadowed">@lang('website.home.quote')
                </blockquote>
                <span class="whitecolor top30 text-shadowed">Steve JOBS</span>
            </div>
        </div>
    </div>
</section>
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
<script src="/js/new/map-dark.js"></script>
<script src="/js/new/map.js"></script>
</body>
</html>
