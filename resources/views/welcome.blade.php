<!doctype html>
<html lang="{{ app()->getLocale() }}">
@head()
<meta name="description"
      content="Avec les applications pour lunettes connectées ExoSuite, soyez l'acteur du futur du sport ! Découvrez dès maintenant notre suite de coaching sportif !"/>
@endhead
<body>
@include('layouts.menu')
<div class="loader">
    <div class="loader-inner">
        <div class="boxSpin">
        </div>
    </div>
</div>
<!-- Preloader ends-->
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
                            <h2 class="top50 bottom35  whitecolor">ExoSuite<span
                                        class="block subtitle"> La suite d'application qui révolutionne le monde du sport !</span></h2>
                            <a href="#services-three" class="button default scroll">features</a> &nbsp; <a
                                    href="javascript:void(0)" class="button whitehole">buy now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-2 col-sm-1"></div>
        </div>
    </div>
</section>
<!--Ful Screen Section Video ends-->


<!--Half image blocks 01-->
<section id="about">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 container-padding">
                <div class="half-block padding_half equalheight center-block wow fadeInLeft">
                    <div class="intro-text">
                        <span class="heading-title bottom25">always behind the brands</span>
                        <h2 class="darkcolor bottom45">A Studio helping web 2.0 gain some momentum.</h2>
                        <p>The integration of web fonts has always been one of the largest contributing factors to
                            diversity in the overall look and feel of websites today vs. yesterday. </p>
                        <div class="bars-custom top50">
                            <div class="barwrapper">
                                <span class="progressText">Coding</span>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="79" aria-valuemin="0"
                                         aria-valuemax="100">
                                        <span class="popOver" data-toggle="tooltip" data-placement="top"
                                              title="79%"> </span>
                                    </div>
                                </div>
                            </div>
                            <div class="barwrapper">
                                <span class="progressText">Accuracy</span>
                                <div class="progress ">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="10"
                                         aria-valuemax="100" style="">
                                        <span class="popOver" data-toggle="tooltip" data-placement="top"
                                              title="95%"> </span>
                                    </div>
                                </div>
                            </div>
                            <div class="barwrapper">
                                <span class="progressText">Planning</span>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0"
                                         aria-valuemax="100">
                                        <span class="popOver" data-toggle="tooltip" data-placement="top"
                                              title="85%"> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="javascript:void(0)" class="button default top50">more about Synx</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 nopadding">
                <div class="image">
                    <img alt="image" src="images/half-block1.jpg" class="equalheight">
                </div>
            </div>
        </div>
    </div>
</section>
<!--Half image blocks 01 ends-->


<!--Services 3 column-->
<section id="services-three" class="padding bglight">
    <div class="container">
        <div class="row">
            <div class="col-md-2 col-sm-1"></div>
            <div class="col-md-8 col-sm-10">
                <div class="intro-text center bottom15 wow fadeInUp">
                    <span class="heading-title bottom25">always behind the brands</span>
                    <h2 class="darkcolor bottom45">A Studio helping web 2.0 gain some momentum.</h2>
                    <p class="bottom45">The integration of web fonts has always been one of the largest contributing
                        factors to diversity in the overall look and feel of websites today vs. yesterday. Fonts, just
                        like images, play an important role in helping a website’s overall design stand out from the
                        competition. </p>
                    <a href="javascript:void(0)" class="button default">choose your best</a>
                </div>
            </div>
            <div class="col-md-2 col-sm-1"></div>
        </div>
        <div class="row">
            <div class="col-md-4 col-sm-6">
                <div class="floated-service equalheight top60 wow fadeInUp">
                    <i class="fa fa-bullhorn"></i>
                    <div class="cell">
                        <h4 class="darkcolor bottom10"><strong>Sync</strong> across all devices</h4>
                        <p class="bottom25">When Google announced they were joining the web font game with Google Fonts,
                            it was a game changer.</p>
                        <a href="javascript:void(0)" class="underlined">read more</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="floated-service equalheight top60 wow fadeInUp">
                    <i class="fa fa-copy"></i>
                    <div class="cell">
                        <h4 class="darkcolor bottom10"><strong>Endless</strong> design possibilities</h4>
                        <p class="bottom25">When Google announced they were joining the web font game with Google Fonts,
                            it was a game changer.</p>
                        <a href="javascript:void(0)" class="underlined">read more</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="floated-service equalheight top60 wow fadeInUp">
                    <i class="fa fa-refresh"></i>
                    <div class="cell">
                        <h4 class="darkcolor bottom10"><strong>Customer</strong> focused approach</h4>
                        <p class="bottom25">When Google announced they were joining the web font game with Google Fonts,
                            it was a game changer.</p>
                        <a href="javascript:void(0)" class="underlined">read more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--Services 3 column ends-->


<!--Single intro with background-->
<section class="padding bg-intro bgintro-five parallaxie">
    <div class="container-fluid container-padding">
        <div class="row">
            <div class="col-md-6 col-sm-3"></div>
            <div class="col-md-6 col-sm-9">
                <div class="intro-text text-right wow fadeInRight">
                    <span class="heading-title bottom25">always behind the brands</span>
                    <h2 class="whitecolor bottom45">Studio helping web 2.0 gain some momentum.</h2>
                    <p class="whitecolor">The integration of web fonts has always been one of the largest contributing
                        factors to diversity in the overall look and feel of websites today vs.</p>
                    <a href="javascript:void(0)" class="button default top50">creative approach</a>
                </div>
            </div>
        </div>
    </div>
</section>
<!--Single intro ends-->


<!--Team 02 Slider-->
<section id="team" class="padding_top">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="intro-text center wow fadeInUp">
                    <span class="heading-title bottom25">always behind the brands</span>
                    <h2 class="darkcolor text-capitalize heading_space">Synx creative team</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div id="team-slider" class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="team-slide">
                                <div class="team-photo equalheight">
                                    <img alt="image" src="images/team-slider1.jpg">
                                </div>
                                <div class="team-text equalheight">
                                    <h3>Lopez Onight</h3>
                                    <span>co-founder</span>
                                    <p class="top20 bottom20">A geek who is into fashion &amp; of course design which
                                        has always been one of the largest factors to her success in the industry.</p>
                                    <ul class="social">
                                        <li><a href="javascript:void(0)"><i class="fa fa-facebook"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-twitter"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-behance"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-dribbble"></i> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="team-slide">
                                <div class="team-photo equalheight">
                                    <img alt="image" src="images/team-slider2.jpg">
                                </div>
                                <div class="team-text equalheight">
                                    <h3>Lopez Onight</h3>
                                    <span>co-founder</span>
                                    <p class="top20 bottom20">A geek who is into fashion &amp; of course design which
                                        has always been one of the largest factors to her success in the industry.</p>
                                    <ul class="social">
                                        <li><a href="javascript:void(0)"><i class="fa fa-facebook"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-twitter"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-behance"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-dribbble"></i> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="team-slide">
                                <div class="team-photo equalheight">
                                    <img alt="image" src="images/team-slider3.jpg">
                                </div>
                                <div class="team-text equalheight">
                                    <h3>James O’Brian</h3>
                                    <span>marketing head</span>
                                    <p class="top20 bottom20">A geek who is into fashion &amp; of course design which
                                        has always been one of the largest factors to her success in the industry.</p>
                                    <ul class="social">
                                        <li><a href="javascript:void(0)"><i class="fa fa-facebook"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-twitter"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-behance"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-dribbble"></i> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="team-slide">
                                <div class="team-photo equalheight">
                                    <img alt="image" src="images/team-slider4.jpg">
                                </div>
                                <div class="team-text equalheight">
                                    <h3>Joshe Micheles</h3>
                                    <span>Media analyst</span>
                                    <p class="top20 bottom20">A geek who is into fashion &amp; of course design which
                                        has always been one of the largest factors to her success in the industry.</p>
                                    <ul class="social">
                                        <li><a href="javascript:void(0)"><i class="fa fa-facebook"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-twitter"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-behance"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-dribbble"></i> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="team-slide">
                                <div class="team-photo equalheight">
                                    <img alt="image" src="images/team-slider5.jpg">
                                </div>
                                <div class="team-text equalheight">
                                    <h3>Gohar Kendal</h3>
                                    <span>studio</span>
                                    <p class="top20 bottom20">A geek who is into fashion &amp; of course design which
                                        has always been one of the largest factors to her success in the industry.</p>
                                    <ul class="social">
                                        <li><a href="javascript:void(0)"><i class="fa fa-facebook"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-twitter"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-behance"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-dribbble"></i> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="team-slide">
                                <div class="team-photo equalheight">
                                    <img alt="image" src="images/team-slider6.jpg">
                                </div>
                                <div class="team-text equalheight">
                                    <h3>Nickoli Cermoe</h3>
                                    <span>sales specialist</span>
                                    <p class="top20 bottom20">A geek who is into fashion &amp; of course design which
                                        has always been one of the largest factors to her success in the industry.</p>
                                    <ul class="social">
                                        <li><a href="javascript:void(0)"><i class="fa fa-facebook"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-twitter"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-behance"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-dribbble"></i> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="team-slide">
                                <div class="team-photo equalheight">
                                    <img alt="image" src="images/team-slider1.jpg">
                                </div>
                                <div class="team-text equalheight">
                                    <h3>Clair Gellar</h3>
                                    <span>creative</span>
                                    <p class="top20 bottom20">A geek who is into fashion &amp; of course design which
                                        has always been one of the largest factors to her success in the industry.</p>
                                    <ul class="social">
                                        <li><a href="javascript:void(0)"><i class="fa fa-facebook"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-twitter"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-behance"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-dribbble"></i> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="team-slide">
                                <div class="team-photo equalheight">
                                    <img alt="image" src="images/team-slider2.jpg">
                                </div>
                                <div class="team-text equalheight">
                                    <h3>Lopez Onight</h3>
                                    <span>co-founder</span>
                                    <p class="top20 bottom20">A geek who is into fashion &amp; of course design which
                                        has always been one of the largest factors to her success in the industry.</p>
                                    <ul class="social">
                                        <li><a href="javascript:void(0)"><i class="fa fa-facebook"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-twitter"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-behance"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-dribbble"></i> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="team-slide">
                                <div class="team-photo equalheight">
                                    <img alt="image" src="images/team-slider3.jpg">
                                </div>
                                <div class="team-text equalheight">
                                    <h3>Lopez Onight</h3>
                                    <span>co-founder</span>
                                    <p class="top20 bottom20">A geek who is into fashion &amp; of course design which
                                        has always been one of the largest factors to her success in the industry.</p>
                                    <ul class="social">
                                        <li><a href="javascript:void(0)"><i class="fa fa-facebook"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-twitter"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-behance"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-dribbble"></i> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="team-slide">
                                <div class="team-photo equalheight">
                                    <img alt="image" src="images/team-slider4.jpg">
                                </div>
                                <div class="team-text equalheight">
                                    <h3>Joshe Micheles</h3>
                                    <span>Media analyst</span>
                                    <p class="top20 bottom20">A geek who is into fashion &amp; of course design which
                                        has always been one of the largest factors to her success in the industry.</p>
                                    <ul class="social">
                                        <li><a href="javascript:void(0)"><i class="fa fa-facebook"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-twitter"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-behance"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-dribbble"></i> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="team-slide">
                                <div class="team-photo equalheight">
                                    <img alt="image" src="images/team-slider5.jpg">
                                </div>
                                <div class="team-text equalheight">
                                    <h3>Gohar Kendal</h3>
                                    <span>studio</span>
                                    <p class="top20 bottom20">A geek who is into fashion &amp; of course design which
                                        has always been one of the largest factors to her success in the industry.</p>
                                    <ul class="social">
                                        <li><a href="javascript:void(0)"><i class="fa fa-facebook"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-twitter"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-behance"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-dribbble"></i> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="team-slide">
                                <div class="team-photo equalheight">
                                    <img alt="image" src="images/team-slider6.jpg">
                                </div>
                                <div class="team-text equalheight">
                                    <h3>Nickoli Cermoe</h3>
                                    <span>sales specialist</span>
                                    <p class="top20 bottom20">A geek who is into fashion &amp; of course design which
                                        has always been one of the largest factors to her success in the industry.</p>
                                    <ul class="social">
                                        <li><a href="javascript:void(0)"><i class="fa fa-facebook"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-twitter"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-behance"></i> </a></li>
                                        <li><a href="javascript:void(0)"><i class="fa fa-dribbble"></i> </a></li>
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


<!--stats with circles-->
<section id="facts-custom" class="padding_top">
    <div class="container">
        <div class="row">
            <div class="col-md-2 col-sm-1"></div>
            <div class="col-md-8 col-sm-10">
                <div class="intro-text center wow fadeInUp">
                    <span class="heading-title bottom25">always behind the brands</span>
                    <h2 class="darkcolor bottom25">Yearly Facts Sheet</h2>
                    <p class="bottom25">The integration of web fonts has always been one of the largest contributing
                        factors to diversity in the overall look and feel of websites today vs. yesterday. Fonts, just
                        like images, play an important role in helping a website’s overall design stand out from the
                        competition. </p>
                </div>
            </div>
            <div class="col-md-2 col-sm-1"></div>
            <div class="row circular-wrap text-center">
                <div class="col-md-4 col-sm-4 top50 wow fadeInUp">
                    <div id="circle" class="circle" data-value="0.77">
                        <strong>257%</strong>
                    </div>
                    <h4 class="darkcolor top30">Increase in Sales year on year</h4>
                </div>
                <div class="col-md-4 col-sm-4 top50 wow fadeInUp">
                    <div id="circletwo" class="circle" data-value="0.96">
                        <strong>96%</strong>
                    </div>
                    <h4 class="darkcolor top30">Recommendation rate over the year</h4>
                </div>
                <div class="col-md-4 col-sm-4 top50 wow fadeInUp">
                    <div id="circlethree" class="circle" data-value="0.75">
                        <strong>317</strong>
                    </div>
                    <h4 class="darkcolor top30">New ventures we became part of</h4>
                </div>
            </div>
        </div>
    </div>
</section>
<!--stats with circles ends-->


<!--GAllery Grid-->
<section id="our-portfolio" class="clearfix margin_top">
    <div class="container-fluid">
        <div class="row bgdefault">
            <div class="col-md-2 col-sm-1"></div>
            <div class="col-md-8 col-sm-10">
                <div class="intro-text center padding_half wow fadeInUp">
                    <span class="heading-title whitecolor bottom25">always behind the brands</span>
                    <h2 class="whitecolor">Our Amazing Work</h2>
                </div>
            </div>
            <div class="col-md-2 col-sm-1"></div>
        </div>
        <div class="row">
            <div id="nospace-grid" class="cbp">
                <div class="cbp-item">
                    <div class="image">
                        <img alt="image" src="images/gallery-dynamic1.jpg">
                    </div>
                    <div class="overlay center-block whitecolor">
                        <ul class="social white bottom40">
                            <li><a data-fancybox="gallery" href="images/gallery-dynamic1.jpg"><i
                                            class="fa fa-search-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-external-link"></i></a></li>
                        </ul>
                        <h3 class="bottom20"><a data-fancybox="gallery" href="images/gallery-dynamic1.jpg">Synx+
                                Sannheiser</a></h3>
                        <p>print media</p>
                    </div>
                </div>
                <div class="cbp-item">
                    <div class="image">
                        <img alt="image" src="images/gallery-dynamic2.jpg">
                    </div>
                    <div class="overlay center-block whitecolor">
                        <ul class="social white bottom40">
                            <li><a data-fancybox="gallery" href="images/gallery-dynamic2.jpg"><i
                                            class="fa fa-search-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-external-link"></i></a></li>
                        </ul>
                        <h3 class="bottom20"><a data-fancybox="gallery" href="images/gallery-dynamic2.jpg">Camp-T
                                Culture</a></h3>
                        <p>visual sharing</p>
                    </div>
                </div>
                <div class="cbp-item">
                    <div class="image">
                        <img alt="image" src="images/gallery-dynamic3.jpg">
                    </div>
                    <div class="overlay center-block whitecolor">
                        <ul class="social white bottom40">
                            <li><a data-fancybox="gallery" href="images/gallery-dynamic3.jpg"><i
                                            class="fa fa-search-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-external-link"></i></a></li>
                        </ul>
                        <h3 class="bottom20"><a data-fancybox="gallery" href="images/gallery-dynamic3.jpg">Camp-T
                                Culture</a></h3>
                        <p>visual sharing</p>
                    </div>
                </div>
                <div class="cbp-item">
                    <div class="image">
                        <img alt="image" src="images/gallery-dynamic4.jpg">
                    </div>
                    <div class="overlay center-block whitecolor">
                        <ul class="social white bottom40">
                            <li><a data-fancybox="gallery" href="images/gallery-dynamic4.jpg"><i
                                            class="fa fa-search-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-external-link"></i></a></li>
                        </ul>
                        <h3 class="bottom20"><a data-fancybox="gallery" href="images/gallery-dynamic4.jpg">Lorenzo
                                Pagano</a></h3>
                        <p>printing industry</p>
                    </div>
                </div>
                <div class="cbp-item">
                    <div class="image">
                        <img alt="image" src="images/gallery-dynamic5.jpg">
                    </div>
                    <div class="overlay center-block whitecolor">
                        <ul class="social white bottom40">
                            <li><a data-fancybox="gallery" href="images/gallery-dynamic5.jpg"><i
                                            class="fa fa-search-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-external-link"></i></a></li>
                        </ul>
                        <h3 class="bottom20"><a data-fancybox="gallery" href="images/gallery-dynamic5.jpg">Lorenzo
                                Pagano</a></h3>
                        <p>visual sharing</p>
                    </div>
                </div>
                <div class="cbp-item">
                    <div class="image">
                        <img alt="image" src="images/gallery-dynamic6.jpg">
                    </div>
                    <div class="overlay center-block whitecolor">
                        <ul class="social white bottom40">
                            <li><a data-fancybox="gallery" href="images/gallery-dynamic6.jpg"><i
                                            class="fa fa-search-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-external-link"></i></a></li>
                        </ul>
                        <h3 class="bottom20"><a data-fancybox="gallery" href="images/gallery-dynamic6.jpg">Lorenzo
                                Pagano</a></h3>
                        <p>printing industry</p>
                    </div>
                </div>
                <div class="cbp-item">
                    <div class="image">
                        <img alt="image" src="images/gallery-dynamic7.jpg">
                    </div>
                    <div class="overlay center-block whitecolor">
                        <ul class="social white bottom40">
                            <li><a data-fancybox="gallery" href="images/gallery-dynamic7.jpg"><i
                                            class="fa fa-search-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-external-link"></i></a></li>
                        </ul>
                        <h3 class="bottom20"><a data-fancybox="gallery" href="images/gallery-dynamic7.jpg">Synx+
                                Sannheiser</a></h3>
                        <p>printing industry</p>
                    </div>
                </div>
                <div class="cbp-item">
                    <div class="image">
                        <img alt="image" src="images/gallery-dynamic8.jpg">
                    </div>
                    <div class="overlay center-block whitecolor">
                        <ul class="social white bottom40">
                            <li><a data-fancybox="gallery" href="images/gallery-dynamic8.jpg"><i
                                            class="fa fa-search-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-external-link"></i></a></li>
                        </ul>
                        <h3 class="bottom20"><a data-fancybox="gallery" href="images/gallery-dynamic8.jpg">Camp-T
                                Culture</a></h3>
                        <p>printing industry</p>
                    </div>
                </div>
                <div class="cbp-item">
                    <div class="image">
                        <img alt="image" src="images/gallery-dynamic9.jpg">
                    </div>
                    <div class="overlay center-block whitecolor">
                        <ul class="social white bottom40">
                            <li><a data-fancybox="gallery" href="images/gallery-dynamic9.jpg"><i
                                            class="fa fa-search-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-external-link"></i></a></li>
                        </ul>
                        <h3 class="bottom20"><a data-fancybox="gallery" href="images/gallery-dynamic9.jpg">Camp-T
                                Culture</a></h3>
                        <p>print media</p>
                    </div>
                </div>
                <div class="cbp-item">
                    <div class="image">
                        <img alt="image" src="images/gallery-dynamic10.jpg">
                    </div>
                    <div class="overlay center-block whitecolor">
                        <ul class="social white bottom40">
                            <li><a data-fancybox="gallery" href="images/gallery-dynamic10.jpg"><i
                                            class="fa fa-search-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-external-link"></i></a></li>
                        </ul>
                        <h3 class="bottom20"><a data-fancybox="gallery" href="images/gallery-dynamic10.jpg">Camp-T
                                Culture</a></h3>
                        <p>printing industry</p>
                    </div>
                </div>
            </div>
            <div id="gallery-work" class="cbp-l-loadMore-button">
                <a href="load-more/loadmore-nospace.html"
                   class="cbp-l-loadMore-link loadmore-dark container-padding float" rel="nofollow">
                    <span class="cbp-l-loadMore-defaultText">Load more projects ... <i class="fa fa-spinner"></i></span>
                    <span class="cbp-l-loadMore-loadingText">Loading...</span>
                    <span class="cbp-l-loadMore-noMoreLoading">No more items</span>
                </a>
            </div>
        </div>
    </div>
</section>
<!--GAllery Grid ends-->


<!--Counter Style 03-->
<section id="bg-counter" class="padding_top padding_bottom_half parallaxie">
    <div class="container">
        <div class="row counter-wrap text-center">
            <div class="col-md-3 col-sm-6 col-xs-6">
                <div class="counter-center  padding_bottom_half wow fadeInUp">
                    <div class="number-counters bottom10">
                        <div class="counters">
                            <span class="count_nums" data-to="09" data-speed="2500"> </span>
                        </div>
                    </div>
                    <h6 class="text-uppercase bottom25">premium brands </h6>
                    <p>Exciting and captivating trade-show exhibits, putting our clients in the spotlight.</p>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-6">
                <div class="counter-center center padding_bottom_half wow fadeInUp">
                    <div class="number-counters bottom10">
                        <div class="counters">
                            <span class="count_nums" data-to="84" data-speed="2500"> </span>
                        </div>
                    </div>
                    <h6 class="text-uppercase bottom25">Digital design Awards </h6>
                    <p>GPS receivers and laser range who finders, unmanned aerial vehicles, inertial systems. </p>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-6">
                <div class="counter-center center padding_bottom_half wow fadeInUp">
                    <div class="number-counters bottom10">
                        <div class="counters">
                            <span class="count_nums" data-to="28" data-speed="2500"> </span>
                        </div>
                    </div>
                    <h6 class="text-uppercase bottom25">creative conferences </h6>
                    <p> Trimble’s branding and images. IGE also created a low-energy lighting solution. </p>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-6">
                <div class="counter-center center padding_bottom_half wow fadeInUp">
                    <div class="number-counters bottom10">
                        <div class="counters">
                            <span class="count_nums" data-to="107" data-speed="2500"> </span>
                        </div>
                    </div>
                    <h6 class="text-uppercase bottom25">active clients </h6>
                    <p>It was a game changer; it simplified the often complicated process of converting. </p>
                </div>
            </div>
        </div>
    </div>
</section>
<!--Counter Style 03 ends-->


<!--Pricing white Structure-->
<section id="ourpricing" class="padding">
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-2"></div>
            <div class="col-md-6 col-sm-8">
                <div class="intro-text center wow fadeInUp">
                    <span class="heading-title bottom25">well thoughtout plans </span>
                    <h2 class="darkcolor bottom45">Plans are better than just an estimate.</h2>
                    <p class="bottom25">We have accompanied the world-famous brands so we can look back together and
                        say, we just did it right, for everyone.</p>
                </div>
            </div>
            <div class="col-md-3 col-sm-2"></div>
        </div>
    </div>
    <div class="pricing-white">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-4 price-table text-center top50 wow fadeInUp">
                    <div class="price-plan">
                        <h3 class="bottom15">Standard</h3>
                        <div class="ammount">
                            <i class="fa fa-dollar"></i>
                            <h1>185</h1> <span class="dur">/ year</span>
                        </div>
                    </div>
                    <ul class="top15">
                        <li><span>15 Email Account</span></li>
                        <li><span>100Gb Space</span></li>
                        <li><span>Domain Name</span></li>
                        <li><span>500Gb Bandwidth</span></li>
                        <li><span>25 MySQL Databases</span></li>
                        <li><span>Enhanced Sercurity</span></li>
                    </ul>
                    <div class="clearfix"></div>
                    <a href="javascript:void(0)" class="button defaulthole top50">buy Now </a>
                </div>
                <div class="col-md-4 col-sm-4 price-table active text-center top50 wow fadeInUp">
                    <div class="price-plan">
                        <h3 class="bottom15">Professional</h3>
                        <div class="ammount">
                            <i class="fa fa-dollar"></i>
                            <h1>250</h1> <span class="dur">/ year</span>
                        </div>
                    </div>
                    <ul class="top15">
                        <li><span>15 Email Account</span></li>
                        <li><span>100Gb Space</span></li>
                        <li><span>Domain Name</span></li>
                        <li><span>500Gb Bandwidth</span></li>
                        <li><span>25 MySQL Databases</span></li>
                        <li><span>Enhanced Sercurity</span></li>
                    </ul>
                    <div class="clearfix"></div>
                    <a href="javascript:void(0)" class="button default top50">buy Now </a>
                </div>
                <div class="col-md-4 col-sm-4 price-table text-center top50 wow fadeInUp">
                    <div class="price-plan">
                        <h3 class="bottom15">Enterprise</h3>
                        <div class="ammount">
                            <i class="fa fa-dollar"></i>
                            <h1>360</h1> <span class="dur">/ year</span>
                        </div>
                    </div>
                    <ul class="top15">
                        <li><span>15 Email Account</span></li>
                        <li><span>100Gb Space</span></li>
                        <li><span>Domain Name</span></li>
                        <li><span>500Gb Bandwidth</span></li>
                        <li><span>25 MySQL Databases</span></li>
                        <li><span>Enhanced Sercurity</span></li>
                    </ul>
                    <div class="clearfix"></div>
                    <a href="javascript:void(0)" class="button defaulthole top50">buy Now </a>
                </div>
            </div>
        </div>
    </div>
</section>
<!--Pricing white ends-->


<!--Parallax quote -->
<section id="single-parallx" class="padding parallaxie">
    <h3 class="hidden">hidden</h3>
    <div class="container">
        <div class="row padding">
            <div class="col-md-2 col-sm-2"></div>
            <div class="col-md-8 col-sm-8 text-center wow fadeInUp">
                <blockquote class="whitecolor">Creativity is allowing yourself to make mistakes Art is knowing which
                    ones to keep
                </blockquote>
                <span class="defaultcolor top30">Alice Jhonson</span>
            </div>
            <div class="col-md-2 col-sm-2"></div>
        </div>
    </div>
</section>
<!--Parallax quote ends-->


<!--Blog info -->
<section id="ourinfo">
    <div class="container-fluid">
        <div class="row box-info-wrap">
            <div class="col-md-6 col-sm-6 nopadding">
                <div class="box-info container-padding padding_half equalheight wow fadeInLeft">
                    <div class="intro-text">
                        <span class="heading-title bottom25"> always behind the brands </span>
                        <h2 class="darkcolor bottom45"><a href="blog.html">Studio helping web 2.0 gain some
                                momentum.</a></h2>
                        <p>The integration of web fonts has always been one of the largest contributing factors to
                            diversity in the overall look and feel of websites today vs. yesterday.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 nopadding">
                <div class="box-info">
                    <div class="image">
                        <img alt="image" src="images/info-box1.jpg" class="equalheight">
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 nopadding">
                <div class="box-info">
                    <div class="image">
                        <img alt="image" src="images/info-box2.jpg" class="equalheight">
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 nopadding">
                <div class="box-info container-padding padding_half bgdefault equalheight wow fadeInRight">
                    <div class="intro-text">
                        <span class="heading-title whitecolor bottom25"> always behind the brands </span>
                        <h2 class="whitecolor bottom45"><a href="blog.html">Studio helping web 2.0 gain some
                                momentum.</a></h2>
                        <p class="whitecolor">The integration of web fonts has always been one of the largest
                            contributing factors to diversity in the overall look and feel of websites today vs.
                            yesterday.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12 col-sm-12 text-center top50"><a href="javascript:void(0)" class="button defaulthole">View
                more </a></div>
    </div>
</section>
<!--blog Info ends-->


<!--LOGOS style 01-->
<section id="logos-one" class="padding">
    <div class="container">
        <div class="row">
            <div class="col-md-2 col-sm-1"></div>
            <div class="col-md-8 col-sm-10">
                <div class="intro-text center wow fadeInUp">
                    <span class="heading-title bottom25">behind the scenes workout</span>
                    <h2 class="darkcolor heading_space">Landing X-Space perfectly <span class="block">in the targeted market.</span>
                    </h2>
                </div>
            </div>
            <div class="col-md-2 col-sm-1"></div>
        </div>
        <div class="row">
            <div id="logos-centered" class="owl-carousel">
                <div class="item">
                    <div class="logo-item"><img src="images/logo-1.png" alt="logo"></div>
                </div>
                <div class="item">
                    <div class="logo-item"><img src="images/logo-2.png" alt="logo"></div>
                </div>
                <div class="item">
                    <div class="logo-item"><img src="images/logo-3.png" alt="logo"></div>
                </div>
                <div class="item">
                    <div class="logo-item"><img src="images/logo-4.png" alt="logo"></div>
                </div>
                <div class="item">
                    <div class="logo-item"><img src="images/logo-5.png" alt="logo"></div>
                </div>
                <div class="item">
                    <div class="logo-item"><img src="images/logo-1.png" alt="logo"></div>
                </div>
                <div class="item">
                    <div class="logo-item"><img src="images/logo-2.png" alt="logo"></div>
                </div>
                <div class="item">
                    <div class="logo-item"><img src="images/logo-3.png" alt="logo"></div>
                </div>
                <div class="item">
                    <div class="logo-item"><img src="images/logo-4.png" alt="logo"></div>
                </div>
                <div class="item">
                    <div class="logo-item"><img src="images/logo-5.png" alt="logo"></div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--LOGOS ends-->


<!--Testimonials with background 02-->
<section id="testimonial-single" class="padding parallaxie">
    <div class="container text-center">
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
                <div id="testimonial-fade" class="owl-carousel">
                    <div class="item">
                        <blockquote class="whitecolor bottom60">Joining the web font game with Google Fonts, it was a
                            game changer; It is simplified yet very often also quite complicated process of converting
                            and embedding these techniques. We love and embrace Google Fonts and wanted to share some of
                            our favorite Google.
                        </blockquote>
                        <div class="single-testi">
                            <img src="images/testimonial-single10.png" alt="image" class="top40">
                            <h3 class="defaultcolor top40">Jenn Shukla</h3>
                            <h4 class="darkcolor bottom25 top10">Copy Writter &amp; Blogger - Synx</h4>
                            <ul class="social">
                                <li><a href="javascript:void(0)"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="javascript:void(0)"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="javascript:void(0)"><i class="fa fa-rss"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="item">
                        <blockquote class="whitecolor bottom60">
                            This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red
                            Queen. To her surprise, she lost sight of her in a moment. When Google announced they were
                            joining. It is simplified yet very often also quite complicated process of converting.
                        </blockquote>
                        <div class="single-testi">
                            <img src="images/testimonial-single11.png" alt="image" class="top40">
                            <h3 class="defaultcolor top40">James Smith</h3>
                            <h4 class="darkcolor bottom25 top10">Copy Writter &amp; Blogger - Synx</h4>
                            <ul class="social">
                                <li><a href="javascript:void(0)"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="javascript:void(0)"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="javascript:void(0)"><i class="fa fa-rss"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="item">
                        <blockquote class="whitecolor bottom60">Joining the web font game with Google Fonts, it was a
                            game changer; It is simplified yet very often also quite complicated process of converting
                            and embedding these techniques. We love and embrace Google Fonts and wanted to share some of
                            our favorite Google.
                        </blockquote>
                        <div class="single-testi">
                            <img src="images/testimonial-single12.png" alt="image" class="top40">
                            <h3 class="defaultcolor top40">Berhn Schott</h3>
                            <h4 class="darkcolor bottom25 top10">Copy Writter &amp; Blogger - Synx</h4>
                            <ul class="social">
                                <li><a href="javascript:void(0)"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="javascript:void(0)"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="javascript:void(0)"><i class="fa fa-rss"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-1"></div>
        </div>
    </div>
</section>
<!--Testimonials with background ends-->


<!--Contact form-->
<section id="contact-form" class="padding">
    <div class="container text-center">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 wow fadeInUp">
                <div class="intro-text center">
                    <span class="heading-title bottom25">well thoughtout plans </span>
                    <h2 class="darkcolor bottom45">Get in Touch</h2>
                </div>
                <p class="heading_space"> The integration of web fonts has always been one of the largest contributing
                    factors to diversity in the overall look and feel of websites today vs. yesterday.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
                <form class="getin_form wow fadeInUp">
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <div class="form-group bottom45">
                                <input class="form-control" type="text" placeholder="your name" required>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12">
                            <div class="form-group bottom45">
                                <input class="form-control" type="email" placeholder="email" required>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12">
                            <div class="form-group bottom45">
                                <input class="form-control" type="text" placeholder="company">
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12">
                            <div class="form-group bottom45">
                                <textarea class="form-control" placeholder="a brief message"></textarea>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <button type="submit" class="button defaulthole">submit request</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
<!--Contact form ends-->
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
