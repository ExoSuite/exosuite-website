const mix = require('laravel-mix');

/*/!*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 *!/
*/

mix.styles([
        'resources/css/bootstrap.min.css',
        'resources/css/animate.min.css',
        'resources/css/swiper.min.css',
        'resources/css/owl.carousel.min.css',
        'resources/css/settings.css',
        'resources/css/dscountdown.css',
        'resources/css/jquery.fancybox.min.css',
        'resources/css/cubeportfolio.min.css',
        'resources/css/simplebar.css',
        'resources/css/jquery.mb.YTPlayer.min.css',
        'resources/css/style.css',
        'resources/css/gradient.css',
        'resources/css/typo2.css',
        'resources/css/language-dropdown.css',
        'resources/css/login.css',
        'resources/css/profile.css',
        'resources/css/social.css'
    ],
    'public/css/all.css'
).sourceMaps().version();

mix.styles([
        'resources/Bootstrap/dist/css/bootstrap-reboot.css',
        'resources/Bootstrap/dist/css/bootstrap.css',
        'resources/Bootstrap/dist/css/bootstrap-grid.css',
        'resources/css/social/fonts.css',
        'resources/css/social/main.css',
        'resources/css/social/mapbox.scss'
    ],
    'public/css/social/app.css'
).sourceMaps().version();

mix.scripts([
        'resources/js/website/jquery.min.js',
        'resources/js/website/bootstrap.min.js',
        'resources/js/website/jquery.appear.js',
        'resources/js/website/swiper.jquery.min.js',
        'resources/js/website/owl.carousel.min.js',
        'resources/js/website/jquery-countTo.js',
        'resources/js/website/jquery.matchHeight-min.js',
        'resources/js/website/parallaxie.js',
        'resources/js/website/dscountdown.min.js',
        'resources/js/website/jquery.fancybox.min.js',
        'resources/js/website/jquery.cubeportfolio.min.js',
        'resources/js/website/circle-progress.min.js',
        'resources/js/website/simplebar.js',
        'resources/js/website/viedobox_video.js',
        'resources/js/website/jquery.mb.YTPlayer.min.js',
        'resources/js/website/typeit.min.js',
        'resources/js/website/wow.min.js',
        'resources/js/website/revolution/jquery.themepunch.tools.min.js',
        'resources/js/website/revolution/jquery.themepunch.revolution.min.js',
        'resources/js/website/revolution/extensions/revolution.extension.actions.min.js',
        'resources/js/website/revolution/extensions/revolution.extension.carousel.min.js',
        'resources/js/website/revolution/extensions/revolution.extension.kenburn.min.js',
        'resources/js/website/revolution/extensions/revolution.extension.layeranimation.min.js',
        'resources/js/website/revolution/extensions/revolution.extension.migration.min.js',
        'resources/js/website/revolution/extensions/revolution.extension.navigation.min.js',
        'resources/js/website/revolution/extensions/revolution.extension.parallax.min.js',
        'resources/js/website/revolution/extensions/revolution.extension.slideanims.min.js',
        'resources/js/website/revolution/extensions/revolution.extension.video.min.js',
        'resources/js/website/functions.js'
    ],
    'public/js/all.js'
).sourceMaps().version();

mix.scripts([
        'resources/js/social/jquery-3.2.1.js',
        'resources/js/social/jquery.appear.js',
        'resources/js/social/jquery.mousewheel.js',
        'resources/js/social/perfect-scrollbar.js',
        'resources/js/social/jquery.matchHeight.js',
        'resources/js/social/svgxuse.js',
        'resources/js/social/imagesloaded.pkgd.js',
        'resources/js/social/Headroom.js',
        'resources/js/social/velocity.js',
        'resources/js/social/ScrollMagic.js',
        'resources/js/social/jquery.waypoints.js',
        'resources/js/social/jquery.countTo.js',
        'resources/js/social/popper.min.js',
        'resources/js/social/material.min.js',
        'resources/js/social/bootstrap-select.js',
        'resources/js/social/smooth-scroll.js',
        'resources/js/social/selectize.js',
        'resources/js/social/swiper.jquery.js',
        'resources/js/social/moment.js',
        'resources/js/social/daterangepicker.js',
        'resources/js/social/simplecalendar.js',
        'resources/js/social/fullcalendar.js',
        'resources/js/social/isotope.pkgd.js',
        'resources/js/social/ajax-pagination.js',
        'resources/js/social/Chart.js',
        'resources/js/social/chartjs-plugin-deferred.js',
        'resources/js/social/circle-progress.js',
        'resources/js/social/loader.js',
        'resources/js/social/run-chart.js',
        'resources/js/social/jquery.magnific-popup.js',
        'resources/js/social/jquery.gifplayer.js',
        'resources/js/social/mediaelement-and-player.js',
        'resources/js/social/mediaelement-playlist-plugin.min.js',
        'resources/js/social/sticky-sidebar.js',
        'resources/js/social/ion.rangeSlider.js',
        'resources/js/social/base-init.js',
        'resources/Bootstrap/dist/js/bootstrap.bundle.js',
        'resources/js/social/upload-avatar.js',
        'resources/js/social/mapbox.js'
    ],
    'public/js/social/app.js'
).sourceMaps().version();

mix.react('resources/js/app.tsx', 'public/js').sourceMaps().version()
    .sass('resources/sass/app.scss', 'public/css')
    .webpackConfig({
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.tsx']
        }
    });

if (process.env.APP_ENV !== 'local' && process.env.APP_ENV !== 'testing') {
    mix.version();
}

mix.browserSync(process.env.APP_URL);
