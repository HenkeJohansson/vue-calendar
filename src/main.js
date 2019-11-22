import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyCqwPnwBMucdzQuCBsBvFdtDvAD39HDrkU",
  authDomain: "vue-calendar-8eba2.firebaseapp.com",
  databaseURL: "https://vue-calendar-8eba2.firebaseio.com",
  projectId: "vue-calendar-8eba2",
  storageBucket: "vue-calendar-8eba2.appspot.com",
  messagingSenderId: "893502228852",
  appId: "1:893502228852:web:21e22b5ba76bc3e0d50421"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
