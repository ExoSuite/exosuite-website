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
<body class="layout-centered bg-gray">
<main class="main-content text-center pb-lg-8">
    <div class="container">

        @if(rand(0, 2) == 0)
            <img src="/img/error/SpiffyCloseFlee-max-1mb.gif" />
            <h1 class="display-1 text-muted mb-7">Ah !</h1>
        @elseif(rand(0, 2) == 1)
            <img src="/img/error/p4sxib.gif" />
            <h1 class="display-1 text-muted mb-7">Okay !</h1>
        @else
            <img src="/img/error/BountifulResponsibleArgali-size_restricted.gif" />
            <h1 class="display-1 text-muted mb-7">WAOUH !</h1>
        @endif
        <p class="lead">Erreur 404 : Cette page n'existe pas</p>
        <br>
        <button class="btn btn-secondary w-150 mr-2" type="button" onclick="window.history.back();">Retour</button>
        <a class="btn btn-secondary w-150" href="/">Accueil</a>

    </div>
</main><!-- /.main-content -->


<!-- Scripts -->
<script src="../assets/js/page.min.js"></script>
<script src="../assets/js/script.js"></script>
</body>
</html>