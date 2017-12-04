const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
  },
  /*
  ** Customize the progress bar color
  */
  loading: { 
	  height: '0.5em'
  },
  router: {
	  middleware: ['ssr-cookie']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [
      'jquery',
      'popper.js'
    ],
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  },
  modules: [
    ['@nuxtjs/google-adsense'],
    ['@nuxtjs/google-analytics'],
    ['@nuxtjs/sitemap']
  ],
  'google-adsense': {
    id: 'ca-pub-2810659463174293',
    pageLevelAds: true,
    analyticsUacct: 'UA-61070671-',
    analyticsDomainName: 'mori.space'
  },
  'google-analytics': {
    id: 'UA-61070671-'
  },
  sitemap: {
    path: '/sitemap.xml'
  }
}
