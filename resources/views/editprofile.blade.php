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
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-115859959-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-115859959-1');
    </script>

</head>
<body>
@include('layouts.menu')
<header class="header text-white" style="background-color: #2c3e50;">
    <div class="container text-center">
        <div class="row">
            <div class="col-md-8 mx-auto">
                <h1>Edition de votre profil utilisateur</h1>
                <a class="btn btn-xl btn-round btn-info" href="/profile" style="margin: 0 auto; display: block; margin-bottom: 2%">Retour à votre profil</a>
            </div>
        </div>
    </div>
</header>
<main class="main-content">
    <div class="section" id="section-content">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <img src="http://www.web-soluces.net/webmaster/avatar/FaceCo-Homme.png" alt="..." class="rounded custom-avatar">
                    <section class="section bg-gray">
                        <div class="container">
                            <form method="POST" action="/profile/edit">
                                @csrf
                                <div class="row gap-y">
                                    <div class="col-lg-4">
                                        <div class="form-group">
                                            <label>Prénom</label>
                                            <input class="form-control form-control-sm" type="text" placeholder="{{ $user->first_name }}" name="firstname">
                                        </div>
                                        <div class="form-group">
                                            <label>Nom de famille</label>
                                            <input class="form-control form-control-sm" type="text" placeholder="{{ $user->last_name }}" name="lastname">
                                        </div>
                                        <div class="form-group">
                                            <label>Nom d'utilisateur</label>
                                            <input class="form-control form-control-sm" type="text" placeholder="{{ $user->nickname }}" name="nickname">
                                        </div>
                                        <div class="form-group">
                                            <label>Ville</label>
                                            <input class="form-control form-control-sm" type="text" placeholder="{{ $user->city }}" name="city">
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="form-group">
                                            <label>Date de naissance</label>
                                            <input class="form-control form-control-sm" type="date" placeholder="Date de naissance" name="birthday">
                                            <label>A propos</label>
                                            <textarea class="form-control" rows="5" name="about" style="width: 350px">{{ $user->about }}</textarea>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Soumettre</button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
            <div class="text-center my-6">
                <img class="rounded-md" src="/img/719292.jpg" alt="...">
            </div>
        </div>
    </div>
</main>
@include('layouts.footer')
<script src="/js/page.js"></script>
<script src="/js/script.js"></script>
</body>
</html>