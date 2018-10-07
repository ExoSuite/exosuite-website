<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>ExoSuite - Créer compte</title>

    <!-- Fonts -->
    <link href="/css/page.min.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
    <link rel="icon" href="/img/logoSquare.png">
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

<body class="layout-centered bg-img" style="background-image: url(/img/bg/4.jpg);">

<main class="main-content">

    <div class="bg-white rounded shadow-7 w-400 mw-100 p-6">
        @if(!$errors->isEmpty())
            @foreach($errors->all() as $error)
                <div class="error">
                    <span class="text-danger">
                        <strong>{{ $error }}</strong>
                    </span>
                </div>
            @endforeach
        @endif
        <h5 class="mb-7">Créez un compte !</h5>

        <form id="form" method="POST" action="{{ route('registerAPI') }}">
            @csrf
            <div class="form-group">
                <input type="text" class="form-control" name="first_name" placeholder="Votre prénom" required autofocus value="{{ old('first_name') }}">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="last_name" placeholder="Votre nom" required value="{{ old('last_name') }}">
            </div>

            <div class="form-group">
                <input type="text" class="form-control" name="nick_name" placeholder="Nom d'utilisateur (optionnel)" value="{{ old('nick_name') }}">
            </div>

            <div class="form-group">
                <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required placeholder="Votre adresse Mail">

                {{--@if ($errors->has('email'))
                    <span class="invalid-feedback">
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
                @endif--}}
            </div>

            <div class="form-group">
                <input id="name" type="password" class="form-control" name="password" required placeholder="Mot de passe">
            </div>

            <div class="form-group">
                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required placeholder="Confirmez mot de passe">
            </div>

            <div class="form-group">
                <button class="btn btn-block btn-primary" id="submit-register"  type="submit">Créer un compte !</button>
                @if (\App::environment("production"))
                    @captcha
                @endif
            </div>
        </form>

        <div class="divider">Ou s'inscrire via :</div>
        <div class="text-center">
            <a class="btn btn-circle btn-sm btn-facebook mr-2" href="#"><i class="fa fa-facebook"></i></a>
            <a class="btn btn-circle btn-sm btn-google mr-2" href="#"><i class="fa fa-google"></i></a>
            <a class="btn btn-circle btn-sm btn-twitter" href="#"><i class="fa fa-twitter"></i></a>
        </div>

        <hr class="w-30">

        <p class="text-center text-muted small-2">Déjà membre ? <a href="{{ route('login') }}">Connectez-vous !</a></p>
    </div>

</main>

<!-- Scripts -->
<script src="/js/page.js"></script>
<script src="/js/script.js"></script>
</body>
</html>
