<template>
  <div class="hello">
    <section v-if="false">
      <h1 class="title">{{ msg }}</h1>
      <ul>
        <li v-for="key in obj" :key="key">{{key}}</li>
      </ul>

      <ul>
        <li v-for="n in evenNumbers">{{n}}</li>
      </ul>
    </section>

    <!-- filter -->

    <h2>{{msg |capitalize}}</h2>
    <h3>latitude:{{latitude}}---longitude:{{longitude}}</h3>
  </div>
</template>

<script>
  import { locationMixin } from '../utlis/mixins';
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'hello',
        obj:{name:"zhuang",age:20,school:"师范"},
        numbers:[1,2,3,4,5,6,7,8],
        dateNow:1512357519186,
        latitude:0,
        longitude:0,
      }
    },
    mixins:[locationMixin],
    computed:{
      evenNumbers(){
        var arr=this.numbers.filter(item=>{
          return item%2==0;
        });
        console.log(arr);
        return arr;
      }
    },
    filters:{
    },
    methods:{

    },
    mounted(){
      this.getLocation((res)=> {
        console.log(res);
        this.latitude=res.latitude;
        this.longitude=res.longitude;
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{ font-size: 40px; line-height: 80px;}


</style>
