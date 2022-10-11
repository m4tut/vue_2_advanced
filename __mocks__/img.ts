const path = require('path')

module.exports = {
  process(_, filename) {
    const fullpath = JSON.stringify(`/assets/img/${path.basename(filename)}`)
    return `module.exports = ${fullpath};`
  }
}
