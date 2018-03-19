<nav class="navbar navbar-expand-lg navbar-dark custom-nav">
    <div class="container">

        <div class="navbar-left">
            <button class="navbar-toggler" type="button">☰</button>
            <a class="navbar-brand" href="/">
                <img class="logo-menu" src="/img/logoSquare.png" alt="logo" style="margin-top: 5%; width: 100%; height: auto;">
            </a>
        </div>

        <section class="navbar-mobile">
            <nav class="nav nav-navbar ml-auto">
                <a class="nav-link custom-link" href="/">Accueil</a>
                <a class="nav-link custom-link" href="/contact">Contact</a>
                <a class="nav-link custom-link" href="/exosuite">Notre projet</a>
                <a class="nav-link custom-link" href="/pricing">Tarifs</a>
            </nav>

            <span class="navbar-divider"></span>

            <div>
                @guest
                <a class="btn btn-sm btn-round btn-primary ml-lg-4 mr-2" href="/login">Se connecter</a>
                <a class="btn btn-sm btn-round btn-outline-primary" href="/register">Créer un compte</a>
                @endguest
                    @auth
                        <a class="btn btn-sm btn-round btn-primary ml-lg-4 mr-2" href="/profile">Mon profil</a>
                        <a class="btn btn-sm btn-round btn-outline-primary" href="/logout">Se déconnecter</a>
                        @endauth
            </div>
        </section>

    </div>
</nav>