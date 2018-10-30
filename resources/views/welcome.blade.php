<!doctype html>
<html lang="{{ app()->getLocale() }}">
@head()
<meta name="description"
      content="Avec les applications pour lunettes connectées ExoSuite, soyez l'acteur du futur du sport ! Découvrez dès maintenant notre suite de coaching sportif !"/>
@endhead
<body>
@include('layouts.menu')
@include('layouts.preloader')

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
                            <h2 class="top50 bottom35 whitecolor text-shadowed">ExoSuite<span
                                        class="block subtitle"> La suite d'application qui révolutionne le monde du sport !</span></h2>
                            <a href="/exosuite" class="button default scroll">Découvrir</a> &nbsp; <a
                                    href="javascript:void(0)" class="button whitehole">Tarifs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="about">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 container-padding">
                <div class="half-block padding_half equalheight center-block wow fadeInLeft">
                    <div class="intro-text">
                        <span class="heading-title bottom25">La technologie au service du sport</span>
                        <h2 class="darkcolor bottom45">Une suite d'application pour lunettes connectées pour vous aider à faire du sport.</h2>
                        <p>ExoSuite utilise la puissance et l'innovation de la technologie AR pour votre sport. Cette technologie est encore jeune mais plein de promesse. Nous croyons en la Réalité Augmentée est nous
                        parions sur celle-ci par le biais de lunettes connectées.</p>
                        <a href="javascript:void(0)" class="button default top50">plus d'infos</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 nopadding">
                <div class="image">
                    <img alt="image" src="/img/ar_example.jpg" class="equalheight">
                </div>
            </div>
        </div>
    </div>
</section>

<section class="padding bg-intro bgintro-five parallaxie">
    <div class="container-fluid container-padding">
        <div class="row">
            <div class="col-md-6 col-sm-3"></div>
            <div class="col-md-6 col-sm-9">
                <div class="intro-text text-right wow fadeInRight text-shadowed">
                    <span class="heading-title bottom25">Réseau social</span>
                    <h2 class="whitecolor bottom45">ExoSuite vous offre un grand moment de partage !</h2>
                    <p class="whitecolor">ExoSuite est aussi un réseau social pour vous donner les moyens de vous surpasser, de vous faire des amis et de faire du sport ensemble !</p>
                    <a href="javascript:void(0)" class="button default top50">notre réseau social</a>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="services-three" class="padding bglight">
    <div class="container">
        <div class="row">
            <div class="col-md-2 col-sm-1"></div>
            <div class="col-md-8 col-sm-10">
                <div class="intro-text center bottom15 wow fadeInUp">
                    <span class="heading-title bottom25">Qui est derrière ExoSuite ?</span>
                    <h2 class="darkcolor bottom45">Un groupe d'ami étudiant à EPITECH.</h2>
                    <p class="bottom45">Nous sommes 7 étudiants d'EPITECH et nous nous sommes regroupés pour la création de ce projet.
                    Nous sommes des passionnés de l'informatique et ce projet a pour but d'illustrer notre volonté d'innover.
                        Ce projet est dans le cadre de L'EIP (EPITECH INNOVATIVE PROJECT)</p>
                </div>
                <div class="col-md-4 col-md-offset-4 wow fadeInUp">
                    <img src="/img/epitech.png" class="width-max" />
                </div>
        </div>
    </div>
</section>

<!--Parallax quote -->
<section id="single-parallx" class="padding parallaxie">
    <h3 class="hidden">hidden</h3>
    <div class="container">
        <div class="row padding">
            <div class="col-md-2 col-sm-2"></div>
            <div class="col-md-8 col-sm-8 text-center wow fadeInUp">
                <blockquote class="whitecolor text-shadowed">L'innovation, c'est une situation qu'on choisit parce qu'on a une passion brûlante pour quelque chose.
                </blockquote>
                <span class="whitecolor top30 text-shadowed">Steve JOBS</span>
            </div>
        </div>
    </div>
</section>
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
