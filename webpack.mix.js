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
        'resources/css/login.css'
    ],
    'public/css/all.css'
).version();

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
).version();

mix.react('resources/js/app.ts', 'public/js').sourceMaps().version()
//    .sass('resources/sass/app.scss', 'public/css')
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