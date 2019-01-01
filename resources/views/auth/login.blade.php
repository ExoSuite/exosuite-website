<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>ExoSuite</title>

    <link rel="icon" href="/img/exosuite-icon.png">
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans" rel="stylesheet">
    <link rel="stylesheet" href="{{ mix('/css/all.css') }}">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous">
</head>

<body style="background-image: url(/img/bg/4.jpg);">
<div class="container login-container">
    <div class="row">
        <div class="col-md-12">
            @if(!$errors->isEmpty())
                @foreach($errors->all() as $error)
                    <div class="error">
                    <span class="text-danger">
                        <strong>{{ $error }}</strong>
                    </span>
                    </div>
                @endforeach
            @endif
        </div>
        <div class="col-md-6 login-form-1">
            <form method="POST" action="{{\URL::full()}}">
                <h3>@lang('website.login.signin')</h3>
                @csrf
                <div class="form-group">
                    <input dusk="login_email" name="email" type="email" class="form-control"
                           placeholder="@lang('website.login.mail')" value="{{ old('email') }}" required autofocus/>
                </div>
                <div class="form-group">
                    <input dusk="login_password" id="password" type="password" class="form-control" name="password" required
                           placeholder="@lang('website.login.password')"/>
                </div>
                <div class="form-group">
                    <input type="submit" class="btnSubmit" value="@lang('website.login.signin')"/>
                </div>
            </form>
            <div class="form-group">
                <a href="#" class="btnForgetPwd">@lang('website.login.forgotPassword')</a>
            </div>
        </div>
        <div class="col-md-6 login-form-2">
            <form action="/register" method="POST">
                @csrf
                <div class="login-logo">
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                </div>
                <h3>@lang('website.register')</h3>
                <div class="form-group">
                    <input type="text" class="form-control" name="first_name"
                           placeholder="@lang('website.register.firstName')" required autofocus
                           value="{{ old('first_name') }}">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" name="last_name"
                           placeholder="@lang('website.register.lastName')" required value="{{ old('last_name') }}">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" name="nick_name"
                           placeholder="@lang('website.register.nickName')" value="{{ old('nick_name') }}">
                </div>
                <div class="form-group">
                    <input dusk="register_email" type="email" class="form-control" name="email" value="{{ old('email') }}" required
                           placeholder="@lang('website.register.email')">
                </div>
                <div class="form-group">
                    <input dusk="register_password" id="name" type="password" class="form-control" name="password" required
                           placeholder="@lang('website.register.password')">
                </div>
                <div class="form-group">
                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation"
                           required placeholder="@lang('website.register.passwordConfirm')">
                </div>
                <div class="form-group">
                    <input type="submit" class="btnSubmit" value="@lang('website.register')"/>
                </div>
            </form>
        </div>
    </div>
</div>
</body>
<script src="{{ mix('/js/all.js') }}"></script>
</html>
