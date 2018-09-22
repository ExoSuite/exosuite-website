<!doctype html>
<html lang="{{ app()->getLocale() }}">
@head()
<meta name="description" content="Vous avez une idée, une suggestion ? Vous pouvez nous envoyer un message depuis cette page web."/>
@endhead
<body>
@include('layouts.menu')

<header class="header pt-10 pb-0">
    <div class="container text-center">
        <h1 class="display-4">Contactez-nous</h1>
        <p class="lead-2 mt-6">Si vous avez une question, une suggestion, ou si vous voulez juste nous envoyer un petit mot, c'est par ici !</p>
    </div>
</header><!-- /.header -->


<!-- Main Content -->
<main class="main-content">


    <!--
    |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
    | Contact form
    |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
    !-->
    <section class="section">
        <div class="container">

            <div class="row">
                <form class="col-lg-6 mx-auto p-6 bg-gray rounded" action="/contact" method="POST">
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
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <input class="form-control form-control-lg" type="text" name="name" placeholder="Votre nom">
                        </div>

                        <div class="form-group col-md-6">
                            <input class="form-control form-control-lg" type="email" name="email" placeholder="Votre adresse mail">
                        </div>
                    </div>


                    <div class="form-group">
                        <textarea class="form-control form-control-lg" rows="4" placeholder="Votre message" name="message"></textarea>
                    </div>

                    <div class="text-center">
                        <button class="btn btn-lg btn-primary" type="submit">Envoyer</button>
                    </div>
                </form>
            </div>

        </div>
    </section>



    <!--
    |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
    | Map
    |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
    !-->
    <section class="section text-white bg-dark bg-img" data-overlay="6">
        <div class="container">
            <div class="row gap-y align-items-center">

                <div class="col-md-5">
                    <p class="text-uppercase small opacity-70 fw-600 ls-1">Où nous trouver</p>
                    <h5>Nice, FRANCE</h5>
                    <br>
                    <p>13 Rue Saint François de Paule<br>Epitech</p>
                    <p>Email: EIP.ExoSuite@gmail.com</p>
                    <br>
                </div>


                <div class="col-md-7">
                    <div class="h-400 rounded" id="map"></div>
                    <script>
                        function initMap() {
                            var uluru = {lat: -25.363, lng: 131.044};
                            var map = new google.maps.Map(document.getElementById('map'), {
                                zoom: 13,
                                center: new google.maps.LatLng(43.696023, 7.270137)
                            });
                            var marker = new google.maps.Marker({
                                position: map.getCenter(),
                                animation: google.maps.Animation.BOUNCE,
                                map: map
                            });
                        }
                    </script>
                    <script async defer
                            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAMH4RnwbRjqjY6eCK5OXeth9YhfbBcjW0&callback=initMap">
                    </script>
                </div>

            </div>
        </div>
    </section>

</main><!-- /.main-content -->

@include('layouts.footer')
<!-- Scripts -->
<script src="/js/page.js"></script>
<script src="/js/script.js"></script>

</body>
</html>
