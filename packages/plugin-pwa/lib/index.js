exports.name = 'pwa'

exports.extend = api => {
  api.chainWebpack(config => {
    if (api.mode !== 'production' || api.config.target !== 'app') return

    if (config.entryPoints.has('index')) {
      config.entry('index').add('@/register-service-worker')
    }

    config.plugin('poi-pwa-plugin').use(require('./poi-pwa-plugin'))
  })
}

exports.generators = require('../generators')
