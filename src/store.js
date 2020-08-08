import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const global = {
    state: {
        filterTerms: null
    },
    getters: {},
    mutations: {
        addTermFilter(state, filter) {
            console.log(filter.id)
        }
    },
    actions: {}
}

export default new Vuex.Store({
    modules: [
        global
    ]
})