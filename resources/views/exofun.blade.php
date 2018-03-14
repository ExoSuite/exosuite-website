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
<header class="header text-white" style="background-color: #283c86;">
    <div class="container text-center">
        <div class="row">
            <div class="col-md-8 mx-auto">
                <h1>ExoFun qu'est-ce que c'est ?</h1>
                <p class="lead-2 opacity-90 mt-6">Après lecture de cette page, vous allez tous comprendre ! Promis !</p>
            </div>
        </div>
    </div>
</header>

<main class="main-content">

    <section class="section">
        <div class="container">

            <div class="row">

                <div class="col-md-6 ml-auto order-md-last mb-7 mb-md-0">
                    <img src="/img/exofun.png" />
                </div>

                <div class="col-11 mx-auto col-md-5 mx-md-0">
                    <p class="text-light my-6">Built-in GPS. Water resistance to 50 meters.1 A lightning-fast dual‑core processor. And a display that’s two times brighter than before. Full of features that help you stay active.</p>

                    <ul class="list-unstyled">
                        <li><span class="mr-1 ti-check text-success small-3"></span> Built in GPS</li>
                        <li><span class="mr-1 ti-check text-success small-3"></span> Heart Rate Sensor</li>
                        <li><span class="mr-1 ti-check text-success small-3"></span> Water Resistant 50 Meters</li>
                        <li><span class="mr-1 ti-check text-success small-3"></span> Comprehensive Workout App</li>
                    </ul>

                    <div class="row gap-y align-items-center text-center bg-light rounded p-5 mt-7">
                        <div class="col-md-auto ml-auto order-md-last">
                            <h4 class="lead-5 mb-0 lh-1 fw-500">$399</h4>
                            <small class="text-lighter">+ $10 shipping fees</small>
                        </div>

                        <div class="col-md-auto">
                            <a class="btn btn-lg btn-primary" href="#">Purchase</a>
                        </div>
                    </div>
                </div>

            </div>

            <hr class="my-8">

            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <h5>Full specification</h5>

                    <p>Interactively foster interoperable schemas rather than client-centric architectures. Progressively drive collaborative human capital vis-a-vis optimal ideas. Monotonectally fashion cross-platform leadership skills through high standards in manufactured products. Continually reintermediate.</p>
                    <p>Progressively deliver ethical schemas before equity invested intellectual capital. Rapidiously embrace value-added manufactured products rather than 24/7 information. Credibly whiteboard compelling methodologies installed base action items. Objectively maintain.</p>

                    <h6>Warranty</h6>
                    <p>Synergistically empower multimedia based scenarios before backward-compatible testing procedures. Interactively disintermediate distinctive portals with state of the art sources. Conveniently architect process-centric quality vectors for cross-platform models. Continually expedite.</p>

                    <h6>Info</h6>
                    <p>Progressively morph plug-and-play value without market positioning partnerships. Authoritatively myocardinate high standards in deliverables and effective opportunities. Interactively whiteboard premium relationships rather than go forward expertise. Phosfluorescently target process-centric.</p>
                </div>
            </div>

        </div>
    </section>
</main>

@include('layouts.footer')
<script src="/js/page.min.js"></script>
<script src="/js/script.js"></script>
</body>
</html>