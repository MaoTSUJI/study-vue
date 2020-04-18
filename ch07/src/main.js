import Vue from 'vue'
import App from './App.vue' // App.vueの読み込み
import store from './store' // store.jsの読み込み

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})