import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBKAeJszoGH0PJlZvHgNfKplrou9U9BlwE',
  authDomain: 'mvw-mtg-wishlist.firebaseapp.com',
  projectId: 'mvw-mtg-wishlist',
  storageBucket: 'mvw-mtg-wishlist.appspot.com',
  messagingSenderId: '116799803666',
  appId: '1:116799803666:web:c905dfbc195199832263cb',
  measurementId: 'G-0DDJ1P3PLS'
}

// Initialize Firebase
initializeApp(firebaseConfig)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
