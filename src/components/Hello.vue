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

    <section class="template">
      <header>多个 v-if切换元素 使用 template包裹多个元素 </header>
      <button type="button" class="Btn BtnPrimary" @click="changeTemplate">点击我，切换元素</button>
      <br>
      <template v-if="isTemplate">
        <span>section1 我是span</span>
        <dl>
          <dt>section1我是dt</dt>
        </dl>
        <p>section1 我是品标签哈哈哈</p>
        <hr>
      </template>
      <template v-else>
        <span>section2 </span>
        <h2>section2,hsdfsl斯蒂芬斯蒂芬是防守打法水电费是的</h2>
        <h2>section2,hsdfsl斯蒂芬斯蒂芬是防守打法水电费是的</h2>
        <h2>section2,hsdfsl斯蒂芬斯蒂芬是防守打法水电费是的</h2>
      </template>

    </section>

    <section>
      <header id="header"> this.refs的使用 </header>
      <child-test ref="child"></child-test>
    </section>

  </div>
</template>

<script>
  import { locationMixin } from '../utlis/mixins';
  import ChildTest from './ChildTest';
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
        isTemplate:true, //显示第一个元素
      }
    },
    mixins:[locationMixin],
    components:{ChildTest},
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
      changeTemplate(){
        this.isTemplate=!this.isTemplate;
      },
      getRefs(){
        //console.log(this.$refs.child.$refs.header); //能获取到heaer
        //this.$el指的是当前组件的元素 ，比如这里指的是Hello组件
        console.log(this.$el);
      }
    },
    mounted(){
      //使用mixins中的方法
      this.getLocation((res)=> {
        console.log(res);
        this.latitude=res.latitude;
        this.longitude=res.longitude;
      });
      //refs的使用
      this.getRefs();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{ font-size: 40px; line-height: 80px;}
  .template{ border-top: 2px solid #ddd;}



</style>
