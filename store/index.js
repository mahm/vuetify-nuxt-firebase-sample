import Vue from 'vue'
import Vuex from 'vuex'
import check from './modules/check'
import * as actions from './actions'
import * as getters from './getters'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
Vue.config.debug = debug

const createStore = () => {
  return new Vuex.Store({
    modules: { check },
    actions,
    getters,
    strict: false,
    plugins: debug ? [createLogger()] : []
  })
}
export default createStore
