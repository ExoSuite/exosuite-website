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
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--Coming Soon ends-->

<!-- jQuery Files -->

<script src="/js/new/bootstrap.min.js"></script>
<script src="/js/all.js"></script>
</body>
</html>