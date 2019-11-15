@extends('errors::illustrated-layout')

@section('code', '404')
@section('title', __('Page Not Found'))

@section('image')
    <div style="background-image: url('/img/error/4RZEL9m.gif');" class="absolute pin bg-cover bg-no-repeat md:bg-left lg:bg-center">
    </div>
@endsection

@section('message', __('Tu ne peux pas acceder à la page si elle n\'existe pas.'))
