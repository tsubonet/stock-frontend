module.exports = {
  css: [
    { src: '~assets/main.scss', lang: 'scss' },
  ],
  modules: [
    '@nuxtjs/axios',
    '~/modules/typescript'
  ],
  axios: {
    // proxyHeaders: false
  }
}
  