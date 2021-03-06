const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('resources/sass/app.scss', 'public/css', {}, [
    tailwindcss('./tailwind.config.js'),
]).version().options({
    processCssUrls: false,
})

mix.react('resources/js/app.js', 'public/js');

if(process.env.NODE_ENV === 'development') {
    mix.browserSync({
        proxy: process.env.APP_URL
    });
    mix.sourceMaps();
}

mix.disableSuccessNotifications();
