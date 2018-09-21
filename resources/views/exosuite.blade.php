<!doctype html>
<html lang="{{ app()->getLocale() }}">
@head()
<meta name="description" content="Découvrez en détail ce qui fait d'ExoSuite une approche innovante du coaching sportif."/>
@endhead
<body>
@include('layouts.menu')
<header class="header text-white" style="background-color: #ff5858;">
    <div class="container text-center">
        <div class="row">
            <div class="col-md-8 mx-auto">
                <h1>Mais qu'est-ce qu'ExoSuite ?</h1>
                <p class="lead-2 opacity-90 mt-6">Après lecture de cette page, vous allez tout comprendre ! Promis !</p>
            </div>
        </div>
    </div>
</header>

<main class="main-content">

    <section class="section">
        <div class="container">

            <div class="row" style="font-size: 28px">

                <div class="col-md-6 ml-auto order-md-last mb-7 mb-md-0">
                    <img src="/img/proto.jpg" alt="Illustration lunettes connectées"/>
                </div>

                <div class="col-11 mx-auto col-md-5 mx-md-0">
                    <h2 class="text-light my-6">ExoSuite est une suite d'applications pour lunettes connectées.</h2>

                    <p style="text-align: justify">✓ Une nouvelle ère du coaching sportif<br>✓ Une expérience immersive<br>✓ Une utilisation des technologies les plus avancées<br>✓ Un esprit communautaire fort</p>

                </div>

            </div>

            <hr class="my-8">

                <div class="col-lg-8 mx-auto">
                    <h5 style="text-align: center">ExoSuite, une approche innovante du coaching sportif</h5>

                    <p style="text-align: justify">Avec ExoSuite, la suite d'applications pour lunettes connectées, vous aurez la possibilité de courir contre des entités représentant les performances d'autres utilisateurs, que vous pourrez rencontrer lors d'évènements communautaires.</p>
                    <p style="text-align: justify">Enfilez vos lunettes connectées et devenez acteur d'une révolution en matière de coaching sportif prônant un aspect communautaire amplifié, et obtenez un suivi personnalisé, quand et où vous voulez, afin d'améliorer vos performances ou pratiquer le sport de façon ludique.</p>

                    <h5 style="margin-top: 10%; text-align: center">ExoRun</h5>
                    <p style="text-align: justify">ExoRun est une application de running destinée aux coureurs réguliers et professionnels souhaitant améliorer leurs performances et observer leur évolution, tout en pouvant se préparer pour des évènements sportifs et se mesurer à d'autres membres de la communauté.</p>
                    <button type="button" class="btn btn-outline-primary button-exosuite" onclick="location.href = '/exorun'">Découvrez ExoRun</button>

                    <h5 style="margin-top: 10%; text-align: center">ExoFun</h5>
                    <p style="text-align: justify">ExoFun est une application de running destinée aux coureurs occasionnels, ou aux personnes désireuses de se remettre en forme. A travers un système très communautaire alliant mini-jeux ludiques et classements, ExoFun permet la pratique du sport en s'amusant.</p>
                    <button type="button" class="btn btn-outline-info button-exosuite" onclick="location.href = '/exofun'">Découvrez ExoFun</button>
                </div>
            </div>
    </section>
</main>

@include('layouts.footer')
<script src="/js/page.js"></script>
<script src="/js/script.js"></script>
</body>
</html>