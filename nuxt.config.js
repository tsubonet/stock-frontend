module.exports = {
  css: [
    { src: '~assets/main.scss', lang: 'scss' },
    { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' },
  ],
  modules: [
    '@nuxtjs/axios',
    '~/modules/typescript'
  ],
  axios: {
    // proxyHeaders: false
  }
}
  