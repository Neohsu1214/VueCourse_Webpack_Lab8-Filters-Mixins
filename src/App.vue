<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>這個會被轉大寫：{{ someText | toUppercase }}</p>
                <p>這個最後會被轉小寫：{{ someText | toUppercase | to-lowercase}}</p>

                <hr>
                <!-- 針對 Array 要如何實作 filter? 用 computed function!! 也就是把 computed後的array 呈現出來即可 -->
                針對 array 實作 filter<br>
                <input type="text" v-model="filterText">
                <ul>
                    <li v-for="(fruit, index) in filterFruits" :key="index">{{ fruit }}</li>
                </ul>

                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import ListVue from "./List.vue";

    export default {
        data: function() {
            return {
                someText: 'Hello there!',
                fruits: ['Apple', 'Mongo', 'Banana'],
                filterText: ''
            }
        }, 
        filters: {
            // filter 的 value 由 | 前面執行的結果傳進來
            toUppercase: function(value) { // 也可以寫成 toUppercase: function(value) {} 
                return value.toUpperCase();
            }
        },
        computed: {
            filterFruits: function() { // 也可以寫成 filterFruits() {}
                return this.fruits.filter( (element) => { // 注意！不可以寫成 function(element) {}
                    return element.match(this.filterText);
                });
            }
        }, 
        components: {
            appList: ListVue // 也可以寫成 'app-list': ListVue
        }
    }
</script>

<style>

</style>
