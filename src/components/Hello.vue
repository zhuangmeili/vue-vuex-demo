<template>
  <div class="hello">
    <h1 class="title">{{ msg }}</h1>
    <ul>
      <li v-for="key in obj" :key="key">{{key}}</li>
    </ul>

    <ul>
      <li v-for="n in evenNumbers">{{n}}</li>
    </ul>


  </div>
</template>

<script>
  import { helloMixin } from '../assets/mixins/helloMixin';
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        obj:{name:"zhuang",age:20,school:"师范"},
        numbers:[1,2,3,4,5,6,7,8],
      }
    },
    mixins:[helloMixin],
    computed:{
      evenNumbers(){
        var arr=this.numbers.filter(item=>{
          return item%2==0;
        });
        console.log(arr);
        return arr;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{ font-size: 40px; line-height: 80px;}


</style>
