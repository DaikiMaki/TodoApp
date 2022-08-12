const mix = require('laravel-mix');
mix.ts('resources/ts/index.tsx', 'public/js')
.sass('resources/sass/app.scss', 'public/css');
 
if (mix.inProduction()){
    mix.version();
}
