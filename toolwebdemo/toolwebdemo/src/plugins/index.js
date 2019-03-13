import utils from './utils/utils'

export default {
  install(Vue) {
    Vue.prototype.$YUPlugin = {
      ...Vue.prototype.$YUPlugin,
      ...{utils}
    }
  }
}