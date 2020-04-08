// 一個 mixin 一樣是一個 Vue instance，只是他是個 Vue 宣告的 Macro，並不能獨立使用！

export const fruitMixin = {
    data: function() {
        return {
            fruits: ['Apple', 'Mongo', 'Banana'],
            filterText: ''
        }
    },
    computed: {
        // 此例我們會發現對array的 filter我們寫了重複的 code了！！！！要如何避免到處寫重複的 filter？一個是註冊 global filter，但對於 array而言，因為資料散佈在各個 Vue中，那該怎麼處理？  Ans: Mixin 
        // Mixin用法請參考 fruitMixin.js 
        filterFruits: function() { // 也可以寫成 filterFruits() {}
            return this.fruits.filter( (element) => { // 注意！不可以寫成 function(element) {}
                return element.match(this.filterText);
            });
        }
    },
    created: function() {
        console.log('Mixin Created');
    }
}