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
</body>
</html>