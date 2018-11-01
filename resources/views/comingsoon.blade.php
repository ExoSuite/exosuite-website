<!doctype html>
<html lang="{{ app()->getLocale() }}">
@head()
<meta name="description"
      content="L'équipe de développement ExoSuite"/>
@endhead
<body>

@include('layouts.preloader')

<!--Coming Soon-->
<section id="countdown-cols" class="">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 col-sm-6 nopadding hidden-xs full-height" style="background: url(/img/719292.jpg)">
                <a href="/" class="logo-coming"><img alt="" src="/img/logoExoSuite.png"></a>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12 nopadding full-height">
                <div class="center-block">
                    <div class="intro-text center wow fadeInUp">
                        <span class="heading-title whitecolor bottom25">Blog</span>
                        <h1 class="whitecolor bottom25">@lang('website.comingSoon')</h1>
                        <h4 class="whitecolor heading_space">@lang('website.comingSoon.subTitle')</h4>
                    </div>
                    <div class="row">
                        {{--<div class="col-md-12 col-sm-12">
                            <div class="our-countdown whitecolor wow fadeInUp">
                                <div class="custom-count"></div>
                            </div>
                        </div>--}}
                        <div class="col-md-12 col-sm-12">
                            {{--<div class="newsletter-simple text-center padding_half">
                                <form class="footer_email wow fadeInUp">
                                    <div class="form-group">
                                        <input class="email" type="email" placeholder="Enter your email" required>
                                        <button type="submit" class="btn-newes button"><span><i class="fa fa-envelope-o"></i> &nbsp; subscribe</span></button>
                                    </div>
                                </form>
                            </div>--}}
                            <ul class="social white text-center top20 wow fadeInUp">
                                <li><a href="https://www.facebook.com/ExoSuiteProject/"><i class="fab fa-facebook"></i>
                                    </a></li>
                                <li><a href="https://twitter.com/ExoSuiteEIP"><i class="fab fa-twitter"></i> </a></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--Coming Soon ends-->

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