import Vue from 'vue';
import store from '../src/store/store';
import Manager from './manager.vue';
// import App from './App.vue';
import vuetify from './plugins/vuetify'
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAaG79UoVejve0lwFsW--4tjl3cs82vHZA",
  authDomain: "manager-31acf.firebaseapp.com",
  projectId: "manager-31acf",
  storageBucket: "manager-31acf.appspot.com",
  messagingSenderId: "174918001603",
  appId: "1:174918001603:web:001d9ef8a9371e08c79376",
  measurementId: "G-N9XQZ5D0DV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(Manager),
  vuetify,
  store
});