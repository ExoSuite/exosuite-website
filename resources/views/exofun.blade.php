<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>ExoFun</title>

    <!-- Fonts -->
    <link href="/css/page.min.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
    <link href="/css/custom.css" rel="stylesheet">
    <link rel="icon" href="/img/logoSquare.png">
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-115859959-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-115859959-1');
    </script>


</head>
<body>
@include('layouts.menu')
<header class="header text-white" style="background-color: #283c86;">
    <div class="container text-center">
        <div class="row">
            <div class="col-md-8 mx-auto">
                <h1>Mais qu'est-ce qu'ExoFun ?</h1>
                <p class="lead-2 opacity-90 mt-6">Après lecture de cette page, vous allez tout comprendre ! Promis !</p>
            </div>
        </div>
    </div>
</header>

<main class="main-content">

    <section class="section">
        <div class="container">

            <div class="row">

                <div style="margin: auto" class="col-md-6 ml-auto order-md-last mb-7 mb-md-0">
                    <img src="/img/exofun.png" alt="Illustration montrant ExoFun"/>
                </div>

            </div>

            <hr class="my-8">

            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <h5 style="text-align: center">Le sport ludique</h5>
                    <p style="text-align: justify">ExoFun permet aux personnes peu enclines au sport de le pratiquer en s'amusant, à travers des mini-jeux. Grâce à la réalité augementée, l'utilisateur pourra collecter des objets visibles sur l'interface de ses lunettes connectées, et ainsi courir tout en s'amusant.</p>

                    <h5 style="margin-top: 10%; text-align: center">Un esprit communautaire</h5>
                    <p style="text-align: justify">Des classements seront disponibles pour les mini-jeux afin de renforcer l'aspect communautaire. De surcroît, des évènements collectifs seront proposés à la communauté pour leur permettre de se rassembler et de pratiquer du sport en groupe.</p>
                </div>
            </div>

        </div>
    </section>
</main>

@include('layouts.footer')
<script src="/js/page.js"></script>
<script src="/js/script.js"></script>
</body>
</html>