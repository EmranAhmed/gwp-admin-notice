const mix = require('wp-mix');
const min = Mix.inProduction() ? '.min' : '';

mix.banner({
    banner : "GetWooPlugins Admin Notice v1.0.0 \n\nAuthor: Emran Ahmed ( emran.bd.08@gmail.com ) \nDate: " + new Date().toLocaleString() + "\nReleased under the GPLv3 license."
});

mix.notification({
    title : 'GetWooPlugins Admin Notice',
    // contentImage : Mix.paths.root('images/logo.png')
});

if (!Mix.inProduction()) {
    mix.sourceMaps();
}

mix.sass(`scss/gwp-admin-notice.scss`, `gwp-admin-notice${min}.css`);
