import axios from 'axios';
import router from '@/router/index'

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status: ''
};

const getters = {

    /* 
    isLoggedIn: function(state){
        if(state.token != ''){
            return true
        } else{
            return false
        }
    }
    */
   
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user
};

const actions = {

};

const mutations = {

};

export default {
    state,
    actions,
    mutations,
    getters
}

