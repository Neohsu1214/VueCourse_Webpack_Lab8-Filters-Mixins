<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>這個會被轉大寫：{{ someText | toUppercase }}</p>
                <p>這個最後會被轉小寫：{{ someText | toUppercase | to-lowercase}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                someText: 'Hello there!'
            }
        }, 
        filters: {
            // filter 的 value 由 | 前面執行的結果傳進來
            toUppercase: function(value) { // 也可以寫成 toUppercase: function(value) {} 
                return value.toUpperCase();
            }
        }
    }
</script>

<style>

</style>
