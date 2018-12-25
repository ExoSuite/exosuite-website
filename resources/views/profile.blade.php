<!doctype html>
<html lang="{{ app()->getLocale() }}">
@head()
<meta name="description"
      content="Profil"/>
@endhead
<body>
@include('layouts.menu')
<div id="notif" data-user-id="{{Auth::id()}}"></div>
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
</body>
</html>