import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "./assets/tailwind.css";
import { setInterceptors } from "./configs/axios.config";

Vue.config.productionTip = false;
setInterceptors();
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
