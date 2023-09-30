// REMEMBER TO IMPORT THIS IN MAIN.JS

import Vue from 'vue'
import Vuex from 'vuex'

import Auth from '@/warehouse/Auth'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        Auth
    },

    state:{
        
    },

    mutations: {

    },

    actions:{
        async login({ commit }, user){
            commit('auth_request');
            let res = await axios.post('http://localhost:5000/api/users/login')
            if(res.data.success){
                const token = res.data.token;
                const user = res.data.user;
                
            }
        }
    }
})