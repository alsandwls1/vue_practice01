import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

/*
// testproject firebase CDN
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
*/

// shophappy firebase CDN
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAFWbIsSHERWSCOjiys84PAb1XPZIEThjM",
  authDomain: "shophappy-31a7a.firebaseapp.com",
  databaseURL: "https://shophappy-31a7a.firebaseio.com",
  projectId: "shophappy-31a7a",
  storageBucket: "shophappy-31a7a.appspot.com",
  messagingSenderId: "686275441717",
  appId: "1:686275441717:web:5fa3daf6b8dcea42"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
