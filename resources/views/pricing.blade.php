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
</body>
</html>