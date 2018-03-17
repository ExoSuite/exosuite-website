<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="keywords" content="">

    <title>ExoSuite - Réinitialiser mot de passe</title>

    <!-- Styles -->
    <link href="/css/page.min.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">

    <!-- Favicons -->
    <link rel="icon" href="/img/logoSquare.png">
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


<!-- Main Content -->
<main class="main-content">

    <div class="bg-white rounded shadow-7 w-400 mw-100 p-6">
        <h5 class="mb-6">Réinitialiser votre mot de passe</h5>

        <form method="POST" action="/recover" class="input-line1">
            @csrf
            <div class="form-group">
                <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ $email or old('email') }}" required autofocus placeholder="Adresse mail">

                @if ($errors->has('email'))
                    <span class="invalid-feedback">
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
                @endif
            </div>

            <button class="btn btn-lg btn-block btn-primary" type="submit">Réinitialiser</button>
            @captcha
        </form>

    </div>

</main><!-- /.main-content -->


<!-- Scripts -->
<script src="/js/page.min.js"></script>
<script src="/js/script.js"></script>

</body>
</html>