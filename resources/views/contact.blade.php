<!doctype html>
<html lang="{{ app()->getLocale() }}">
@head()
<meta name="description" content="Vous avez une idée, une suggestion ? Vous pouvez nous envoyer un message depuis cette page web."/>
@endhead
<body>
@include('layouts.menu')
@include('layouts.preloader')

<div class="wrapper">
    <!--Page header-->
    <section class="padding_top parallaxie" style="background-color: #262626">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="intro-text center padding_half wow fadeInUp">
                        <span class="heading-title bottom20">@lang('website.contact')</span>
                        <h2 class="whitecolor text-capitalize bottom45">@lang('website.contact.title')</h2>
                        <ul class="breadcrumbs">
                            <li><a href="index-multi.html">@lang('website.menu.home')</a></li>
                            <li>@lang('website.menu.contact')</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--Page header ends-->

    <!--Contact form-->
    <section id="contact-form" class="padding_bottom" style="padding-top: 8.75em">
        <div class="container">
            <div class="row">
                <div class="col-md-offset-2 col-md-8">
                    <form class="getin_form wow fadeInUp" action="/contact" method="POST">
                        @csrf
                        @if ($errors->any())
                            <div class="alert alert-danger">
                                <ul>
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif
                        @if (isset($send))
                            <div class="alert alert-success">Nous avons bien reçu votre message 😁</div>
                        @endif
                        <div class="row">
                            <div class="col-md-12 col-sm-12">
                                <div class="form-group bottom45">
                                    <input class="form-control" type="text" name="name" placeholder="@lang('website.contact.name')" required>
                                </div>
                            </div>
                            <div class="col-md-12 col-sm-12">
                                <div class="form-group bottom45">
                                    <input class="form-control" type="email" name="email" placeholder="@lang('website.contact.email')" required>
                                </div>
                            </div>
                            <div class="col-md-12 col-sm-12">
                                <div class="form-group bottom45">
                                    <textarea class="form-control" name="message" placeholder="@lang('website.contact.message')"></textarea>
                                </div>
                            </div>
                            <div class="col-sm-12 text-center">
                                <button type="submit" class="button defaulthole">@lang('website.contact.send')</button>
                            </div>
                        </div>
                        @if (\App::environment("production"))
                            @captcha
                        @endif
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!--Contact form ends-->
</div>

@include('layouts.footer')
</body>
</html>
