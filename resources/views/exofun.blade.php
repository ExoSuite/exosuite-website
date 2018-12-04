<!doctype html>
<html lang="{{ app()->getLocale() }}">
@head()
<meta name="description"
      content="Grâce à ses forts aspects communautaires et ludiques, ExoFun vous propose une autre expérience du sport. Découvrez ses spécificités ici."/>
@endhead
<body>
@include('layouts.menu')
@include('layouts.preloader')
<div class="wrapper">
    <!--Ful Screen Section Video with caption-->
    <section class="full-screen parallax-static parallaxie" id="ourhome" style="background: url(/img/exofun.png)">
        <div class="container">
            <div class="row">
                <div class="col-md-2 col-sm-1"></div>
                <div class="col-md-8 col-sm-10">
                    <div class="center-block text-center wow fadeInUp">
                        <div class="center-item">
                            <h2 class="top50 bottom35 whitecolor text-shadowed">ExoFun<span
                                        class="block subtitle">@lang('website.exofun.subtitle')</span>
                            </h2>
                            <a href="#features" class="button default scrollings">@lang('website.exosuite.features')</a>
                            &nbsp; <a
                                    href="/pricing" class="button whitehole">@lang('website.exosuite.pricing')</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-sm-1"></div>
            </div>
        </div>
    </section>
    <!--Ful Screen Section Video ends-->


    <!--Services 3 column-->
    <section id="features" class="padding bglight">
        <div class="container">
            <div class="row">
                <div class="col-md-2 col-sm-1"></div>
                <div class="col-md-8 col-sm-10">
                    <div class="intro-text center bottom15 wow fadeInUp">
                        <span class="heading-title bottom25">@lang('website.exofun.features')</span>
                        <h2 class="darkcolor bottom45">@lang('website.exofun.featuresTitle')</h2>
                        <p class="bottom45">@lang('website.exofun.featuresDescription1')</p>
                        <p class="bottom45">
                            @lang('website.exofun.featuresDescription2')
                        </p>
                    </div>
                </div>
                <div class="col-md-2 col-sm-1"></div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-6">
                    <div class="icon_box equalheight top60 wow fadeInUp">
                        <i class="fa fa-gamepad"></i>
                        <h4 class="text-capitalize darkcolor bottom10"><a href="javascript:void(0)">@lang('website.exosuite.sport')</a></h4>
                        <hr>
                        <p class="no_bottom">@lang('website.exofun.sportDescription')</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="icon_box equalheight top60 wow fadeInUp">
                        <i class="fa fa-cloud"></i>
                        <h4 class="text-capitalize darkcolor bottom10"><a href="javascript:void(0)">@lang('website.exosuite.tech')</a></h4>
                        <hr>
                        <p class="no_bottom">@lang('website.exofun.techDescription')</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="icon_box equalheight top60 wow fadeInUp">
                        <i class="fa fa-users"></i>
                        <h4 class="text-capitalize darkcolor bottom10"><a href="javascript:void(0)">@lang('website.exosuite.social')</a>
                        </h4>
                        <hr>
                        <p class="no_bottom">@lang('website.exofun.socialDescription')</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--Services 3 column ends-->

    <!--Single intro with background-->
    <section class="padding parallaxie" style="background-image: url(/img/exorun-miniature.png)">
        <div class="container-fluid container-padding">
            <div class="row">
                <div class="col-md-5 col-sm-9">
                    <div class="intro-text wow fadeInLeft">
                        <span class="heading-title bottom25">@lang('website.exosuite.exorun')</span>
                        <h2 class="whitecolor bottom45 text-shadowed">@lang('website.exosuite.exorunTitle')</h2>
                        <p class="whitecolor text-shadowed">@lang('website.exosuite.exorunDescription')</p>
                        <a href="/exorun" class="button default top50">@lang('website.exosuite.exorunDiscover')</a>
                    </div>
                </div>
                <div class="col-md-7 col-sm-3"></div>
            </div>
        </div>
    </section>
    <section class="padding parallaxie" style="background-image: url(/img/exosuite-page-background.png)">
        <div class="container-fluid container-padding">
            <div class="row">
                <div class="col-md-5 col-sm-9">
                    <div class="intro-text wow fadeInLeft">
                        <span class="heading-title bottom25">@lang('website.exosuite.exosuite')</span>
                        <h2 class="whitecolor bottom45 text-shadowed">@lang('website.exosuite.exosuiteTitle')</h2>
                        <p class="whitecolor text-shadowed">@lang('website.exosuite.exosuiteDescription')</p>
                        <a href="/exosuite" class="button default top50">@lang('website.exosuite.exosuiteDiscover')</a>
                    </div>
                </div>
                <div class="col-md-7 col-sm-3"></div>
            </div>
        </div>
    </section>
    <!--Single intro ends-->
</div>
@include('layouts.footer')
</body>
</html>