<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-134931253-2"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', 'UA-134931253-2');
    </script>
    <title>ExoSuite - Login</title>

    <!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Main Font -->
    <script src="/social-app/webfontloader.min.js"></script>

    <script>
        WebFont.load({
            google: {
                families: ['Roboto:300,400,500,700:latin']
            }
        });
    </script>

    <script src="/social-app/webfontloader.min.js"></script>
    <script>
        WebFont.load({
            google: {
                families: ['Roboto:300,400,500,700:latin']
            }
        });
    </script>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" type="text/css" href="/css/social/app.css"/>


<body class="landing-page">

<div class="content-bg-wrap"></div>


<!-- Header Standard Landing  -->

<div class="header--standard header--standard-landing" id="header--standard">
    <div class="container">
        <div class="header--standard-wrap">
            <a href="/" class="logo">
                <div class="img-wrap">
                    <img src="/img/logoExoSuite.png" alt="ExoSuite" class="half-width">
                </div>
            </a>
        </div>
    </div>
</div>

<!-- ... end Header Standard Landing  -->
<div class="header-spacer--standard"></div>

<div class="container">
    <div class="row display-flex">
        <div class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="landing-content">
                <h1>@lang('website.login.textTitle')</h1>
            </div>
        </div>

        <div class="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">

            <!-- Login-Registration Form  -->

            <div class="registration-login-form">
                @if(!empty($errors->first()))
                    <div class="row col-lg-12">
                        <div class="alert alert-danger">
                            <span>{{ $errors->first() }}</span>
                        </div>
                    </div>
            @endif
            <!-- Nav tabs -->
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#home" role="tab">
                            <svg class="olymp-login-icon">
                                <use xlink:href="svg-icons/sprites/icons.svg#olymp-login-icon"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a id="login-button" class="nav-link" data-toggle="tab" href="#profile" role="tab">
                            <svg class="olymp-register-icon">
                                <use xlink:href="svg-icons/sprites/icons.svg#olymp-register-icon"></use>
                            </svg>
                        </a>
                    </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                    <div class="tab-pane active" id="home" role="tabpanel" data-mh="log-tab">
                        <div class="title h6">@lang('website.register')</div>
                        <form class="content" action="/register" method="POST">
                            @csrf()
                            <div class="row">
                                <div class="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div class="form-group label-floating">
                                        <label class="control-label">@lang('website.register.firstName')</label>
                                        <input class="form-control" placeholder="" type="text" name="first_name">
                                    </div>
                                </div>
                                <div class="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div class="form-group label-floating">
                                        <label class="control-label">@lang('website.register.lastName')</label>
                                        <input class="form-control" placeholder="" type="text" name="last_name">
                                    </div>
                                </div>
                                <div class="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div class="form-group label-floating">
                                        <label class="control-label">@lang('website.register.email')</label>
                                        <input dusk="register_email" class="form-control" placeholder="" type="email"
                                               name="email">
                                    </div>
                                    <div class="form-group label-floating">
                                        <label class="control-label">@lang('website.register.nickName')</label>
                                        <input class="form-control" placeholder="" type="text" name="nick_name">
                                    </div>
                                    <div class="form-group label-floating">
                                        <label class="control-label">@lang('website.register.password')</label>
                                        <input dusk="register_password" class="form-control" placeholder=""
                                               type="password" name="password">
                                    </div>
                                    <div class="form-group label-floating">
                                        <label class="control-label">@lang('website.register.passwordConfirm')</label>
                                        <input class="form-control" placeholder="" type="password"
                                               name="password_confirmation">
                                    </div>

                                    <button type="submit"
                                            class="btn btn-purple btn-lg full-width">@lang('website.register')</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="tab-pane" id="profile" role="tabpanel" data-mh="log-tab">
                        <div class="title h6">@lang('website.login.signin')</div>
                        <form class="content" method="POST" action="{{\URL::full()}}">
                            @csrf()
                            <div class="row">
                                <div class="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div class="form-group label-floating">
                                        <label class="control-label">@lang('website.login.mail')</label>
                                        <input dusk="login_email" class="form-control" placeholder="" type="email"
                                               name="email">
                                    </div>
                                    <div class="form-group label-floating">
                                        <label class="control-label">@lang('website.login.password')</label>
                                        <input dusk="login_password" class="form-control" placeholder="" type="password"
                                               name="password">
                                    </div>

                                    <div class="remember">
                                        <a href="#" class="forgot" data-toggle="modal"
                                           data-target="#restore-password">@lang('website.login.forgotPassword')</a>
                                    </div>

                                    <button type="submit"
                                            class="btn btn-lg btn-primary full-width">@lang('website.login.signin')</button>

                                    <div class="or"></div>

                                    <a href="#" class="btn btn-lg bg-facebook full-width btn-icon-left"><i
                                                class="fab fa-facebook-f" aria-hidden="true"></i>Login with Facebook</a>

                                    <a href="#" class="btn btn-lg bg-twitter full-width btn-icon-left"><i
                                                class="fab fa-twitter" aria-hidden="true"></i>Login with Twitter</a>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <!-- ... end Login-Registration Form  -->        </div>
    </div>
</div>

<!-- Window-popup Restore Password -->

<div class="modal fade" id="restore-password" tabindex="-1" role="dialog" aria-labelledby="restore-password"
     aria-hidden="true">
    <div class="modal-dialog window-popup restore-password-popup" role="document">
        <div class="modal-content">
            <a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
                <svg class="olymp-close-icon">
                    <use xlink:href="svg-icons/sprites/icons.svg#olymp-close-icon"></use>
                </svg>
            </a>

            <div class="modal-header">
                <h6 class="title">Restore your Password</h6>
            </div>

            <div class="modal-body">
                <form method="get">
                    <p>Enter your email and click the send code button. You’ll receive a code in your email. Please use
                        that
                        code below to change the old password for a new one.
                    </p>
                    <div class="form-group label-floating">
                        <label class="control-label">Your Email</label>
                        <input class="form-control" placeholder="" type="email" value="james-spiegel@yourmail.com">
                    </div>
                    <button class="btn btn-purple btn-lg full-width">Send me the Code</button>
                    <div class="form-group label-floating">
                        <label class="control-label">Enter the Code</label>
                        <input class="form-control" placeholder="" type="text" value="">
                    </div>
                    <div class="form-group label-floating">
                        <label class="control-label">Your New Password</label>
                        <input class="form-control" placeholder="" type="password" value="olympus">
                    </div>
                    <button class="btn btn-primary btn-lg full-width">Change your Password!</button>
                </form>

            </div>
        </div>
    </div>
</div>

<!-- ... end Window-popup Restore Password -->


<!-- Window Popup Main Search -->

<div class="modal fade" id="main-popup-search" tabindex="-1" role="dialog" aria-labelledby="main-popup-search"
     aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered window-popup main-popup-search" role="document">
        <div class="modal-content">
            <a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
                <svg class="olymp-close-icon">
                    <use xlink:href="svg-icons/sprites/icons.svg#olymp-close-icon"></use>
                </svg>
            </a>
            <div class="modal-body">
                <form class="form-inline search-form" method="post">
                    <div class="form-group label-floating">
                        <label class="control-label">What are you looking for?</label>
                        <input class="form-control bg-white" placeholder="" type="text" value="">
                    </div>

                    <button class="btn btn-purple btn-lg">Search</button>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- ... end Window Popup Main Search -->

<!-- JS Scripts -->
<script src="/js/social/app.js"></script>
<script defer src="/fonts/social/fontawesome-all.js"></script>


</body>
</html>
