<!doctype html>
<html lang="{{ app()->getLocale() }}">
@head()
<meta name="description"
      content="Avec les applications pour lunettes connectées ExoSuite, soyez l'acteur du futur du sport ! Découvrez dès maintenant notre suite de coaching sportif !"/>
@endhead
<body>
@include('layouts.menu')
<header class="header text-white h-fullscreen bg-img-left" style="background-image: url(/img/ar_background.png)"
        data-overlay="1">
    <div class="container">
        <div class="row align-items-center h-100">

            <div class="col-md-5 mx-auto pb-7">
                <img src="/img/logoExoSuite.png" alt="Logo ExoSuite"/>
                <p class="lead-4">Le futur du sport</p>
                <p style="text-align: justify" class="lead-2 fw-400 mb-7">Découvrez ExoSuite, la suite d'applications
                    qui révolutionne le monde du sport !</p>
                <a class="btn btn-xl btn-round btn-info" href="/exosuite"
                   style="margin: 0 auto; display: block; margin-bottom: 2%">Commencez ici</a>
                <a class="btn btn-xl btn-round btn-google" href="https://youtu.be/cwHGS7kPU2I" data-provide="lightbox"
                   style="margin: 0 auto; display: block;">ExoSuite en vidéo</a>
            </div>

        </div>
    </div>
</header>
@include('layouts.footer')
<script src="/js/page.js"></script>
<script src="/js/script.js"></script>
</body>
</html>
