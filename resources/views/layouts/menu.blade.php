{{--
@if (isset($mark) && $mark == true)
    <nav class="navbar navbar-expand-lg navbar-dark navbar-stick-dark" data-navbar="sticky">
        @else
            <nav class="navbar navbar-expand-lg navbar-light navbar-stick-dark" data-navbar="sticky">
                @endif
                <div class="container">

                    <div class="navbar-left">
                        <button class="navbar-toggler" type="button">☰</button>
                        <a class="navbar-brand" href="/">
                            <img class="logo-menu" src="/img/logoSquare.png" alt="logo"
                                 style="margin-top: 5%; width: 100%; height: auto;">
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
            </nav>--}}
<header id="main-navigation">
    <div id="navigation">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <nav class="navbar navbar-default">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#fixed-collapse-navbar" aria-expanded="true">
                                <span class="icon-bar top-bar"></span>
                                <span class="icon-bar middle-bar"></span>
                                <span class="icon-bar bottom-bar"></span>
                            </button>
                            <a class="navbar-brand logo-center" href="index-multi.html">
                                <img src="images/logo-blue.png" alt="logo" class="logo">
                                <img src="images/logo-scrolled-blue.png" alt="logo" class="scrolled-logo">
                            </a>
                        </div>
                        <div id="fixed-collapse-navbar" class="navbar-collapse collapse scrolly">
                            <div class="navbar-left-1">
                                <ul class="nav navbar-nav navbar-left">
                                    <li class="static dropdown">
                                        <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown">Home</a>
                                        <ul class="megamenu-content dropdown-menu titlevisible">
                                            <li>
                                                <div class="row">
                                                    <div class="col-sm-3">
                                                        <h5 class="title">Multi-Page Demos</h5>
                                                        <ul>
                                                            <li><a href="index-multi.html">Classic Version</a></li>
                                                            <li><a href="index-multi2.html">Corporate Version</a></li>
                                                            <li><a href="index-multi3.html">Agency Version </a></li>
                                                            <li><a href="index-multi4.html">Portfolio Version</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm-3">
                                                        <h5 class="title"></h5>
                                                        <ul>
                                                            <li><a href="index13.html">Crypto Version</a></li>
                                                            <li><a href="index-multi6.html">Parallax Background Version</a></li>
                                                            <li><a href="index-multi7.html">Business Startup Version</a></li>
                                                            <li><a href="index-multi8.html">Studio Version</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm-3">
                                                        <h5 class="title">One Page Demos</h5>
                                                        <ul>
                                                            <li><a href="index.html">Classic Version </a></li>
                                                            <li><a href="index3.html">Hero Video Version</a></li>
                                                            <li><a href="index7.html">Animated Layers Version</a></li>
                                                            <li><a href="index8.html">Agency Version</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm-3">
                                                        <h5 class="title"></h5>
                                                        <ul>
                                                            <li><a href="index10.html">Corporate Version</a></li>
                                                            <li><a href="index11.html">Creative Studio Version</a></li>
                                                            <li><a href="index12.html">One Page Portfolio</a></li>
                                                            <li><a href="index6.html">Parallax Portfolio Version</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="aboutus.html">About</a></li>
                                    <li><a href="ourservices.html">Services</a></li>
                                    <li><a href="ourgallery.html">Work</a></li>
                                </ul>
                            </div>
                            <div class="navbar-right-1">
                                <ul class="nav navbar-nav navbar-right">
                                    <li><a href="pricings.html">Prices</a></li>
                                    <li class="dropdown">
                                        <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown">Blog</a>
                                        <ul class="dropdown-menu">
                                            <li><a href="blog.html">Blog Listing</a></li>
                                            <li><a href="blog-detail.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li class="static dropdown">
                                        <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown">Elements</a>
                                        <ul class="megamenu-content dropdown-menu">
                                            <li>
                                                <div class="row">
                                                    <div class="col-sm-3">
                                                        <h5 class="title">Title</h5>
                                                        <ul>
                                                            <li><a href="aboutus.html">About</a></li>
                                                            <li><a href="blog.html">blog</a></li>
                                                            <li><a href="blog-detail.html">blog detail</a></li>
                                                            <li><a href="contactus.html">Contact Us</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm-3">
                                                        <h5 class="title">Title</h5>
                                                        <ul>
                                                            <li><a href="comingsoon.html">Coming Soon</a></li>
                                                            <li><a href="comingsoon-2.html">Coming Soon 2</a></li>
                                                            <li><a href="error.html">error page</a></li>
                                                            <li><a href="element-loaders.html">Preloaders</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm-3">
                                                        <h5 class="title">Title</h5>
                                                        <ul>
                                                            <li><a href="element-portfolio.html">Portfolio</a></li>
                                                            <li><a href="element-team.html">team</a></li>
                                                            <li><a href="element-testimonial.html">testimonials</a></li>
                                                            <li><a href="element-partners.html">partners</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm-3">
                                                        <h5 class="title">Title</h5>
                                                        <ul>
                                                            <li><a href="element-services.html">services</a></li>
                                                            <li><a href="element-counters.html">counters</a></li>
                                                            <li><a href="element-maps.html">google maps</a></li>
                                                            <li><a href="element-progressbars.html">progress bars</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="contactus.html">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- Main-Navigation ends -->
