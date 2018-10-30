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
    <!--Single portfolio items-->
    <section class="single-items center-block center-block item-one full-screen"
             style="background: url(/img/social-background-home.jpg) no-repeat">
        <div class="container">
            <div class="row">
                <div class="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8 col-xs-11">
                    <div class="item-titles whitecolor text-center wow zoomIn text-shadowed">
                        <h3 class="bottom10">
                            Réseau <strong>Social</strong>
                        </h3>
                        <p>Partagez vos performances, défiez vos amis</p>
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
                            Partagez vos <strong>performances</strong>
                        </h3>
                        <p>Vous aimez montrer que vous êtes le meilleur ? Partagez vos performances et montrer à vos
                            amis qui est le meilleur !</p>
                        <p>Partagez, likez, commentez le contenu de vos amis</p>
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
                            Défiez vos <strong>amis</strong>
                        </h3>
                        <p>Gagnez des récompenses, accomplissez les défis de vos amis</p>
                    </div>
                </div>
                <div class="col-md-7 col-sm-4 col-xs-1"></div>
            </div>
        </div>
    </section>
    <!--Single portfolio ends-->
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