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

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', 'UA-115859959-1');
    </script>

</head>
<body>
@include('layouts.menu')
<header class="header text-white" style="background-color: #FF8C00;">
    <div class="container text-center">
        <div class="row">
            <div class="col-md-8 mx-auto">
                @if (!isset($id))
                    <h1>Votre profil utilisateur</h1>
                    <a class="btn btn-xl btn-round btn-info" href="/profile/edit"
                       style="margin: 0 auto; display: block; margin-bottom: 2%">Editez votre profil</a>
                @else
                    <h1>Le profil utilisateur de {{ $user->first_name }} {{ $user->last_name }}</h1>
                    <p class="custom-center">{{ $user->nickname }}</p>
                    <a class="btn btn-xl btn-round btn-info" href="#"
                       style="margin: 0 auto; display: block; margin-bottom: 2%">Suivre</a>
                @endif
            </div>
        </div>
    </div>
</header>
<main class="main-content">
    <div class="section" id="section-content">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <img src="/img/profile_default.png" alt="..."
                         class="rounded custom-avatar">
                    <p class="lead">{{ $user->first_name }} {{ $user->last_name }}</p>
                    <p>{{ $user->nickname }}</p>
                    <p>{{ $user->city }}</p>
                    @if (isset($user->birthday))
                        J'ai {{ date_diff(date_create($user->birthday), date_create(date("Y-m-d")))->format('%Y') }}
                        ans
                    @endif
                    <div class="col-sm-12 without-padding">
                        <p>Followers</p>
                        <div>
                            <a href="#"><img src="/img/profile_default.png" class="image-miniature"/></a>
                            <a href="#"><img src="/img/profile_default.png" class="image-miniature"/></a>
                            <a href="#"><img src="/img/profile_default.png" class="image-miniature"/></a>
                            <a href="#"><img src="/img/profile_default.png" class="image-miniature"/></a>
                        </div>
                    </div>
                </div>
                <div class="text-center col-sm-9">
                    <img class="rounded-md" src="/img/719292.jpg" alt="Image d'illustration">
                </div>
            </div>
        </div>
    </div>
</main>
@include('layouts.footer')
<script src="/js/page.js"></script>
<script src="/js/script.js"></script>
</body>
</html>