<!doctype html>
<html lang="{{ app()->getLocale() }}">
@head()
<meta name="description" content="Vous avez une idée, une suggestion ? Vous pouvez nous envoyer un message depuis cette page web."/>
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
                        <span class="heading-title bottom20">Vous aimez parler ?</span>
                        <h2 class="whitecolor text-capitalize bottom45">Contactez-nous !</h2>
                        <ul class="breadcrumbs">
                            <li><a href="index-multi.html">Accueil</a></li>
                            <li>Contactez-nous</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--Page header ends-->

    <!--Contact form-->
    <section id="contact-form" class="padding_bottom" style="padding-top: 8.75em">
        <div class="container">
            <div class="row">
                <div class="col-md-offset-2 col-md-8">
                    <form class="getin_form wow fadeInUp" action="/contact" method="POST">
                        @csrf
                        @if ($errors->any())
                            <div class="alert alert-danger">
                                <ul>
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif
                        @if (isset($send))
                            <div class="alert alert-success">Nous avons bien reçu votre message 😁</div>
                        @endif
                        <div class="row">
                            <div class="col-md-12 col-sm-12">
                                <div class="form-group bottom45">
                                    <input class="form-control" type="text" name="name" placeholder="Votre nom" required>
                                </div>
                            </div>
                            <div class="col-md-12 col-sm-12">
                                <div class="form-group bottom45">
                                    <input class="form-control" type="email" name="email" placeholder="Votre adresse mail" required>
                                </div>
                            </div>
                            <div class="col-md-12 col-sm-12">
                                <div class="form-group bottom45">
                                    <textarea class="form-control" name="message" placeholder="Votre message"></textarea>
                                </div>
                            </div>
                            <div class="col-sm-12 text-center">
                                <button type="submit" class="button defaulthole">Envoyer</button>
                            </div>
                        </div>
                        @if (\App::environment("production"))
                            @captcha
                        @endif
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!--Contact form ends-->
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
<script src="http://maps.google.com/maps/api/js?key=AIzaSyAOBKD6V47-g_3opmidcmFapb3kSNAR70U"></script>
<script src="/js/new/map.js"></script>
</body>
</html>
