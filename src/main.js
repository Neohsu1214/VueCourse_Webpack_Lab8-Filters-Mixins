import Vue from 'vue'
import App from './App.vue'

// filter是一個工具，能在不異動原有資料的情況下，處理如何顯示的議題 ex: 1000 -> 1,000
// 註冊一個 GLobal 的 filter: to-lowercase
Vue.filter('to-lowercase', function(value) {
  return value.toLowerCase();
});

// 註冊一個 global mixin!
Vue.mixin({
  created: function() {
    console.log('Global Mixin - created hook');
    // 查看 log 會發現... Global Mixin會自動加載於各個 Vue instance中！！！
    // Neo案： 感覺好像病毒 XD 但有任何要 global 使用的企業邏輯，都可以宣告在 Global Mixin中自動加載！甚好啊！
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
