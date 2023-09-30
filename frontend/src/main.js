import { createApp } from "vue";
// import vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import './registerServiceWorker'
// import { VueResponsiveComponents } from "vue-responsive-components"
 
// Vue.use(VueResponsiveComponents)

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:5000';

const vuetify = createVuetify({
  components,
  directives,
})


createApp(App).use(router).use(store).use(vuetify).mount("#app");

