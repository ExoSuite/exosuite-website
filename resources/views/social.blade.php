<!doctype html>
<html lang="{{ app()->getLocale() }}">
@head()
<meta name="description"
      content="Partagez avec vos amis grâce à notre réseau social !"/>
@endhead
<body>
@include('layouts.menu')
@include('layouts.preloader')

<div class="wrapper">
    <!--Single portfolio items-->
    <section class="single-items center-block center-block item-one full-screen"
             style="background: url(/img/social-background-home.jpg) no-repeat">
        <div class="container">
            <div class="row">
                <div class="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8 col-xs-11">
                    <div class="item-titles whitecolor text-center wow zoomIn text-shadowed">
                        <h3 class="bottom10">
                            @lang('website.menu.socialNetwork')
                        </h3>
                        <p>@lang('website.social.subtitle')</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="single-items center-block parallaxie item-two full-screen" id="creative" style="background: url(/img/mauro-paillex-633293-unsplash.jpg)">
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-md-offset-7 col-sm-8 col-sm-offset-4 col-xs-11 col-xs-offset-1">
                    <div class="item-titles whitecolor text-right wow fadeInRight text-shadowed">
                        <h3 class="bottom10">
                            @lang('website.social.shareTitle')
                        </h3>
                        <p>@lang('website.social.shareDescription1')</p>
                        <p>@lang('website.social.shareDescription2')</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="single-items center-block item-three parallaxie full-screen" id="corporate" style="background: url(/img/defi-background.jpg)">
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-sm-8 col-xs-11">
                    <div class="item-titles whitecolor wow fadeInLeft text-shadowed">
                        <h3 class="bottom10">
                            @lang('website.social.defiTitle')
                        </h3>
                        <p>@lang('website.social.defiDescription')</p>
                    </div>
                </div>
                <div class="col-md-7 col-sm-4 col-xs-1"></div>
            </div>
        </div>
    </section>
    <!--Single portfolio ends-->
</div>
@include('layouts.footer')
</body>
</html>