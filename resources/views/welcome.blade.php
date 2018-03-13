<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>ExoSuite</title>

        <!-- Fonts -->
        <link href="/css/page.min.css" rel="stylesheet">
        <link href="/css/style.css" rel="stylesheet">
        <link href="/css/custom.css" rel="stylesheet">
        <link rel="icon" href="/img/favicon.png">
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">

    </head>
    <body>
    @include('layouts.menu')
    <header class="header text-white h-fullscreen bg-img-left" style="background-image: url(/img/ar_background.png)" data-overlay="1">
        <div class="container">
            <div class="row align-items-center h-100">

                <div class="col-md-5 mx-auto pb-7">
                    <img src="/img/logoExoSuite.png" />
                    <p class="lead-4">Le futur du sport</p>
                    <p class="lead-2 fw-400 mb-7">Découvrez ExoSuite, la suite d'application qui révolutionne le monde du sport !</p>
                    <a class="btn btn-xl btn-round btn-info" href="/exosuite">Commencez ici</a>
                    <a class="btn btn-xl btn-round btn-google" href="https://youtu.be/cwHGS7kPU2I" data-provide="lightbox">ExoSuite en video</a>
                </div>

            </div>
        </div>
    </header>
    @include('layouts.footer')
    <script async="" src="https://www.google-analytics.com/analytics.js"></script>
    <script src="/js/page.min.js"></script>
    <script src="/js/script.js"></script>
    </body>
</html>
