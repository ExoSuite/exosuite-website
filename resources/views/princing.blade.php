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
<header class="header text-white" style="background-color: #2C7744;">
    <div class="container text-center">
        <div class="row">
            <div class="col-md-8 mx-auto">
                <h1>Vous demandez nos tarifs ?</h1>
                <p class="lead-2 opacity-90 mt-6">Vous serez étonnés en voyant nos tarifs !</p>
            </div>
        </div>
    </div>
</header>
<section class="section text-white" style="background-color: #7a54d8">
    <div class="container">
        <h2 class="text-center">Les voilà !</h2>
        <br><br><br>

        <div class="row gap-y">

            <div class="col-lg-4">
                <div class="pricing-2">
                    <h2 class="price">0<span class="price-unit">€</span></h2>
                    <h6 class="plan-name">ExoRun</h6>
                    <p class="plan-description">Une seule course disponible à la fois<br />Un seul fantôme chargé<br />Pas d'accès aux fantômes des champions</p>
                    <br>
                </div>
            </div>


            <div class="col-lg-4">
                <div class="pricing-2">
                    <h2 class="price">0<span class="price-unit">€</span></h2>
                    <h6 class="plan-name">ExoFun</h6>
                    <p class="plan-description">Pas de récompenses journalières<br />Partage communautaire restreint<br />Pas d'accès aux scores des champions</p>
                    <br>
                </div>
            </div>


            <div class="col-lg-4">
                <div class="pricing-2">
                    <h2 class="price">3,99<span class="price-unit">€/mois</span></h2>
                    <h6 class="plan-name">Abonnement premium</h6>
                    <p class="plan-description">Entrainement Personnalisé<br />Vidéos d’échauffements (pré et post courses)<br />Entrainement proposé par des coachs professionnels
                    <br />Créations de parcours illimités<br />Fantômes illimités<br />Organisation évènements</p>
                    <br>
                </div>
            </div>

        </div>

    </div>
</section>
@include('layouts.footer')
</body>
</html>