<!doctype html>
<html lang="{{ app()->getLocale() }}">
@head()
<meta name="description" content="Grâce à ses forts aspects communautaires et ludiques, ExoFun vous propose une autre expérience du sport. Découvrez ses spécificités ici."/>
@endhead
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