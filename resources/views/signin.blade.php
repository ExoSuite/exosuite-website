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
    <!-- Main Content -->
    <main class="main-content">

        <div class="bg-white rounded shadow-7 w-400 mw-100 p-6">
            <h5 class="mb-7">Connectez-vous !</h5>

            <form>
                <div class="form-group">
                    <input type="text" class="form-control" name="username" placeholder="Username">
                </div>

                <div class="form-group">
                    <input type="password" class="form-control" name="password" placeholder="Password">
                </div>

                <div class="form-group flexbox py-3">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" checked>
                        <label class="custom-control-label">Se souvenir de moi</label>
                    </div>

                    <a class="text-muted small-2" href="user-recover.html">Mot de passe oublié ?</a>
                </div>

                <div class="form-group">
                    <button class="btn btn-block btn-primary" type="submit">Se connecter !</button>
                </div>
            </form>

            <div class="divider">Ou se connecter avec :</div>
            <div class="text-center">
                <a class="btn btn-circle btn-sm btn-facebook mr-2" href="#"><i class="fa fa-facebook"></i></a>
                <a class="btn btn-circle btn-sm btn-google mr-2" href="#"><i class="fa fa-google"></i></a>
                <a class="btn btn-circle btn-sm btn-twitter" href="#"><i class="fa fa-twitter"></i></a>
            </div>

            <hr class="w-30">

            <p class="text-center text-muted small-2">Vous n'êtes pas encore membre ? <a href="/signup">Créez votre compte ici !</a></p>
        </div>

    </main><!-- /.main-content -->


    <!-- Scripts -->
    <script src="/js/page.min.js"></script>
    <script src="/js/script.js"></script>
    </body>
</html>