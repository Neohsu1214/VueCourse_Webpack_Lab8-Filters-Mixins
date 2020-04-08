import Vue from 'vue'
import App from './App.vue'

// filter是一個工具，能在不異動原有資料的情況下，處理如何顯示的議題 ex: 1000 -> 1,000
// 註冊一個 GLobal 的 filter: to-lowercase
Vue.filter('to-lowercase', {
  
});

new Vue({
  el: '#app',
  render: h => h(App)
})
