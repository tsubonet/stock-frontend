module.exports = {
  css: [
    { src: '~assets/main.scss', lang: 'scss' },
    '@fortawesome/fontawesome-free-webfonts',
    // '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
    // '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css',
  ],
  modules: [
    '@nuxtjs/axios',
    '~/modules/typescript'
  ],
  axios: {
    // proxyHeaders: false
  }
}
  