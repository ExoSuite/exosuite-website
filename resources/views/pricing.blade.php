<!doctype html>
<html lang="{{ app()->getLocale() }}">
@head()
<meta name="description" content="Découvrez sans plus attendre nos différents tarifs qui répondent à chacun de vos besoins, que vous soyez un coureur débutant, occasionnel ou confirmé !"/>
@endhead
<body>
@include('layouts.menu')

@include('layouts.preloader')

<div class="wrapper">
    <!--Page header-->
    <section class="padding_top" style="background-color: #262626">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="intro-text center padding_half wow fadeInUp">
                        <span class="heading-title bottom20">@lang('website.pricing')</span>
                        <h2 class="whitecolor text-capitalize bottom45">@lang('website.pricing.title')</h2>
                        <ul class="breadcrumbs">
                            <li><a href="/">@lang('website.menu.home')</a></li>
                            <li>@lang('website.menu.pricing')</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--Page header ends-->



    <section class="padding">
        <div class="pricing-white">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-4 price-table text-center top50">
                        <div class="price-plan">
                            <h3 class="bottom15">ExoRun</h3>
                            <div class="ammount">
                                <i class="fas fa-euro-sign"></i>
                                <h1>0</h1>
                            </div>
                        </div>
                        <ul class="top15">
                            <li><span>@lang('website.pricing.exorun1')</span></li>
                            <li><span>@lang('website.pricing.exorun2')</span></li>
                            <li><span>@lang('website.pricing.exorun3')</span></li>
                        </ul>
                    </div>
                    <div class="col-md-4 col-sm-4 price-table active text-center top50">
                        <div class="price-plan">
                            <h3 class="bottom15">Premium</h3>
                            <div class="ammount">
                                <i class="fas fa-euro-sign"></i>
                                <h1>3,99</h1> <span class="dur">@lang('website.pricing.mois')</span>
                            </div>
                        </div>
                        <ul class="top15">
                            <li><span>@lang('website.pricing.abo1')</span></li>
                            <li><span>@lang('website.pricing.abo2')</span></li>
                            <li><span>@lang('website.pricing.abo3')</span></li>
                            <li><span>@lang('website.pricing.abo4')</span></li>
                            <li><span>@lang('website.pricing.abo5')</span></li>
                            <li><span>@lang('website.pricing.abo6')</span></li>
                        </ul>
                        {{--<div class="clearfix"></div>
                        <a href="javascript:void(0)" class="button default top50">buy Now </a>--}}
                    </div>
                    <div class="col-md-4 col-sm-4 price-table text-center top50">
                        <div class="price-plan">
                            <h3 class="bottom15">ExoFun</h3>
                            <div class="ammount">
                                <i class="fas fa-euro-sign"></i>
                                <h1>0</h1>
                            </div>
                        </div>
                        <ul class="top15">
                            <li><span>@lang('website.pricing.exofun1')</span></li>
                            <li><span>@lang('website.pricing.exofun2')</span></li>
                            <li><span>@lang('website.pricing.exofun3')</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
<script src="/js/new/map.js"></script>
</body>
</html>