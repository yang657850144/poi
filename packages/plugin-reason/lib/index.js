exports.name = 'reason'

exports.extend = api => {
  api.chainWebpack(config => {
    config.module
      .rule('bs')
      .test(/\.(re|ml)$/)
      .use('bs-loader')
      .loader('@poi/bs-loader')
      .options({
        cwd: api.resolve()
      })
  })
}

exports.generators = require('../generators')
