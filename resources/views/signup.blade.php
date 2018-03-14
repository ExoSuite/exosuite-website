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
    <link rel="icon" href="/img/favicon.png">
</head>

<body class="layout-centered bg-img" style="background-image: url(/img/bg/4.jpg);">

<main class="main-content">

    <div class="bg-white rounded shadow-7 w-400 mw-100 p-6">
        <h5 class="mb-7">Créez un compte !</h5>

        <form>
            <div class="form-group">
                <input type="text" class="form-control" name="name" placeholder="Votre nom">
            </div>

            <div class="form-group">
                <input type="email" class="form-control" name="email" placeholder="Votre email">
            </div>

            <div class="form-group">
                <input type="password" class="form-control" name="password" placeholder="Mot de passe">
            </div>

            <div class="form-group">
                <input type="password" class="form-control" name="password-confirm" placeholder="Confirmation du mot de passe">
            </div>

            <div class="form-group py-3">
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input">
                    <label class="custom-control-label">Je suis en accord avec les <a class="ml-1" href="terms.html">termes du service.</a></label>
                </div>
            </div>

            <div class="form-group">
                <button class="btn btn-block btn-primary" type="submit">Créer un compte !</button>
            </div>
        </form>

        <div class="divider">Ou s'inscrire via :</div>
        <div class="text-center">
            <a class="btn btn-circle btn-sm btn-facebook mr-2" href="#"><i class="fa fa-facebook"></i></a>
            <a class="btn btn-circle btn-sm btn-google mr-2" href="#"><i class="fa fa-google"></i></a>
            <a class="btn btn-circle btn-sm btn-twitter" href="#"><i class="fa fa-twitter"></i></a>
        </div>

        <hr class="w-30">

        <p class="text-center text-muted small-2">Déjà membre ? <a href="/signin">Connectez-vous !</a></p>
    </div>

</main>

<!-- Scripts -->
<script src="/js/page.min.js"></script>
<script src="/js/script.js"></script>
</body>
</html>