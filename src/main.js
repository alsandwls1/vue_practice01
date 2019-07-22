import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD51A3muxRCqp8aDZzY2RFXbTLD5cH-uM0",
  authDomain: "testproject-a9870.firebaseapp.com",
  databaseURL: "https://testproject-a9870.firebaseio.com",
  projectId: "testproject-a9870",
  storageBucket: "testproject-a9870.appspot.com",
  messagingSenderId: "634982806289",
  appId: "1:634982806289:web:e0cfb6d3c72a0677"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
