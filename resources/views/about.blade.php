<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>ExoSuite - A propos</title>

    <!-- Fonts -->
    <link href="/css/page.min.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
    <link href="/css/custom.css" rel="stylesheet">
    <link rel="icon" href="/img/logoSquare.png">
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">

</head>
<body>
@include('layouts.menu')
<header class="header">
    <div class="container">
        <div class="row align-items-center h-100">

            <div class="col-md-7 mx-auto">
                <h1 style="text-align: center">A propos de nous</h1>
                <p class="lead-3">Nous sommes un groupe de sept étudiants de troisième année à Epitech Nice, passionnés par l'aspect créatif et technique du développement. ExoSuite est notre projet de fin d'études qui respecte notre vocation : Concevoir un coach sportif innovant et utilisant les dernières technologies.</p>
            </div>
        </div>
    </div>
</header>
<main class="main-content">

    <img src="/img/719292.jpg" />


    <!--
    |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
    | Team
    |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
    !-->
    <section class="section">
        <div class="container">
            <header class="section-header">
                <h2>L'équipe ExoSuite</h2>
                <hr>
            </header>


            <div class="row gap-y center_team">
                <div class="col-md-6 col-lg-3 team-1">
                    <a href="#">
                        <img src="/img/team/eric.png" alt="..." class="custom_size">
                    </a>
                    <h6>Eric Deschodt</h6>
                    <small>CEO</small>
                </div>


                <div class="col-md-6 col-lg-3 team-1">
                    <a href="#">
                        <img src="/img/team/dupil.jpg" alt="..." class="custom_size">
                    </a>
                    <h6>Loïc Dupil</h6>
                    <small>API</small>
                </div>


                <div class="col-md-6 col-lg-3 team-1">
                    <a href="#">
                        <img src="/img/team/lopez.jpg" alt="..." class="custom_size">
                    </a>
                    <h6>Loïc Lopez</h6>
                    <small>CTO</small>
                </div>


                <div class="col-md-6 col-lg-3 team-1">
                    <a href="#">
                        <img src="/img/team/renaud.jpg" alt="..." class="custom_size">
                    </a>
                    <h6>Renaud Juliani</h6>
                    <small>Développeur Mobile</small>
                </div>
                <div class="col-md-6 col-lg-4 team-1">
                    <a href="#">
                        <img src="/img/team/pierre.jpg" alt="..." class="custom_size">
                    </a>
                    <h6>Pierre Piazza</h6>
                    <small>Développeur Mobile</small>
                </div>
                <div class="col-md-6 col-lg-4 team-1">
                    <a href="#">
                        <img src="/img/team/stan.jpg" alt="..." class="custom_size">
                    </a>
                    <h6>Stanislas Deneubourg</h6>
                    <small>Développeur Web</small>
                </div>
                <div class="col-md-6 col-lg-4 team-1">
                    <a href="#">
                        <img src="/img/team/Yassir-Jabbari.jpg" alt="..." class="custom_size">
                    </a>
                    <h6>Yassir Jabbari</h6>
                    <small>Développeur Web</small>
                </div>
            </div>

        </div>
    </section>


    <!--
    |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
    | CTA
    |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
    !-->
    <section class="section text-center py-12" data-overlay="7">
        <div class="container">
            <h2 class="display-4 text-white mb-7"><strong>Découvrez Exosuite.</strong></h2>
            <a class="btn btn-lg btn-round btn-info" href="exosuite">Qu'est-ce qu'ExoSuite ?</a>
        </div>
    </section>


</main>
@include('layouts.footer')
<script src="/js/page.js"></script>
<script src="/js/script.js"></script>
</body>
</html>