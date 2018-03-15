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
    <link rel="icon" href="/img/logoSquare.png">
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">

</head>
<body>
@include('layouts.menu')
<header class="header text-white" style="background-color: #C779D0;">
    <div class="container text-center">
        <div class="row">
            <div class="col-md-8 mx-auto">
                <h1>Mais qu'est-ce qu'est ExoRun ?</h1>
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
                    <img src="/img/exorun.png" />
                </div>


            </div>

            <hr class="my-8">

            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <h5 style="text-align: center">La recherche de la performance</h5>
                    <p>ExoRun permet aux coureurs confirmés et professionels de défier un ghost, représentant un rythme de course voulu, ou celui d'un membre de la communauté. Grâce à la réalité augementée, l'utilisateur verra cette entité se superposer à sa vue, et être en mesure de mieux se situer par rapport à son objectif.</p>

                    <h5 style="margin-top: 10%; text-align: center">Préparation aux évènements</h5>
                    <p>A l'aube d'un évènement sportif majeur, rien de mieux pour un coureur que s'entraîner sur le parcours concerné en pouvant évaluer son niveau et se comparer aux performances qui l'intéressent.</p>
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