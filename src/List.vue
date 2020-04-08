<template>
    <div>
        <h1>Filters & Mixins from ListVue</h1>
        
        <!-- 針對 Array 要如何實作 filter? 用 computed function!! 也就是把 computed後的array 呈現出來即可 -->
        針對 array 實作 filter<br>
        <input type="text" v-model="filterText">
        <ul>
            <li v-for="(fruit, index) in filterFruits" :key="index">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    import { fruitMixin } from "./fruitMixin.js";

    export default {
        mixins: [fruitMixin]  // 所以 Mixin 就是 Macro 啦！就是為了避免到處充滿重複的 code而建立的！ Vue會自動把 mixin 中建立的 data, computed, methods 等跟原本 Vue物件中的整合在一起
        /* 改用 fruitMixin.js 中宣告的內容了
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
        }
        */
    }
</script>

<style>

</style>
