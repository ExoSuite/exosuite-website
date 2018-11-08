<!doctype html>
<html lang="{{ app()->getLocale() }}">
@head()
<meta name="description"
      content="Vous voulez repousser vos limites grâce aux dernières technologies ? Découvrez ExoRun, notre solution destinée aux coureurs confirmés."/>
@endhead
<body>
@include('layouts.menu')
@include('layouts.preloader')

<div class="wrapper">
    <!--Ful Screen Section Video with caption-->
    <section class="full-screen parallax-static parallaxie" id="ourhome" style="background: url(/img/exorun.png)">
        <div class="container">
            <div class="row">
                <div class="col-md-2 col-sm-1"></div>
                <div class="col-md-8 col-sm-10">
                    <div class="center-block text-center wow fadeInUp">
                        <div class="center-item">
                            <h2 class="top50 bottom35 whitecolor text-shadowed">ExoRun<span
                                        class="block subtitle">@lang('website.exorun.subtitle')</span>
                            </h2>
                            <a href="#features" class="button default scrollings">@lang('website.exorun.features')</a> &nbsp; <a
                                    href="/pricing" class="button whitehole">@lang('website.exorun.pricing')</a>
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
                        <span class="heading-title bottom25">@lang('website.exorun.features1')</span>
                        <h2 class="darkcolor bottom45">@lang('website.exorun.features1Title')</h2>
                        <p class="bottom45">@lang('website.exorun.features1Description1')</p>
                        <p class="bottom45">
                            @lang('website.exorun.features1Description2')
                        </p>
                    </div>
                </div>
                <div class="col-md-2 col-sm-1"></div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-6">
                    <div class="icon_box equalheight top60 wow fadeInUp">
                        <i class="fas fa-running"></i>
                        <h4 class="text-capitalize darkcolor bottom10"><a href="javascript:void(0)">@lang('website.exorun.sport')</a></h4>
                        <hr>
                        <p class="no_bottom">@lang('website.exorun.sportDescription')</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="icon_box equalheight top60 wow fadeInUp">
                        <i class="fa fa-cloud"></i>
                        <h4 class="text-capitalize darkcolor bottom10"><a href="javascript:void(0)">@lang('website.exorun.tech')</a></h4>
                        <hr>
                        <p class="no_bottom">@lang('website.exorun.techDescription')</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="icon_box equalheight top60 wow fadeInUp">
                        <i class="fa fa-users"></i>
                        <h4 class="text-capitalize darkcolor bottom10"><a href="javascript:void(0)">@lang('website.exorun.social')</a>
                        </h4>
                        <hr>
                        <p class="no_bottom">@lang('website.exorun.socialDescription')</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--Services 3 column ends-->

    <!--Single intro with background-->
    <section class="padding parallaxie" style="background-image: url(/img/exofun-miniature.jpg)">
        <div class="container-fluid container-padding">
            <div class="row">
                <div class="col-md-5 col-sm-9">
                    <div class="intro-text wow fadeInLeft">
                        <span class="heading-title bottom25">@lang('website.exosuite.exofun')</span>
                        <h2 class="whitecolor bottom45 text-shadowed">@lang('website.exosuite.exofunTitle')</h2>
                        <p class="whitecolor text-shadowed">@lang('website.exosuite.exofunDescription')</p>
                        <a href="/exofun" class="button default top50">@lang('website.exosuite.exofunDiscover')</a>
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