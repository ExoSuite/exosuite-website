<footer class="bgdefault padding_half">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <ul class="languagepicker roundborders">
                    @if (App::getLocale() == 'fr')
                        <li><a href="/language/fr"><img src="http://i65.tinypic.com/300b30k.png"/>Français</a></li>
                        <li><a href="/language/en"><img src="http://i64.tinypic.com/fd60km.png"/>English</a></li>
                    @else
                        <li><a href="/language/en"><img src="http://i64.tinypic.com/fd60km.png"/>English</a></li>
                        <li><a href="/language/fr"><img src="http://i65.tinypic.com/300b30k.png"/>Français</a></li>
                    @endif
                </ul>
            </div>
            <div class="col-md-12 col-sm-12 text-center">
                <ul class="social white wow bounceIn">
                    <li><a href="https://www.facebook.com/ExoSuiteProject/"><i class="fab fa-facebook"></i> </a></li>
                    <li><a href="https://twitter.com/ExoSuiteEIP"><i class="fab fa-twitter"></i> </a></li>
                </ul>
                <p class="whitecolor top30 wow fadeInUp">Copyright &copy; 2018 ExoSuite. all rights reserved.</p>
            </div>
        </div>
    </div>
</footer>