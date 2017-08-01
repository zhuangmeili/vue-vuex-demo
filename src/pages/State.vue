<template>
  <div >
    <header class="header"> state <span class="ClorDanger">{{ demoName}}</span>  </header>
    <section class="section">
      <h4 class="line1">count: <span class="colorDanger">{{count}}</span></h4>
      <h4 class="line1">localNormal: <span class="colorDanger">{{localNormal}}</span></h4>

    </section>
{{domain}}
  </div>

</template>
<script type="text/javascript">
  import { mapState ,mapGetters,mapMutations,mapActions} from 'vuex'
  export default{
    data(){
      return {
          a:100,
      }
    },
    //计算属性中返回某个状态
    //方法一
//    computed:{
//       count(){
//           return this.$store.state.count;
//       }
//    }

    computed:{
      //这个是局部的计算属性
      localNormal(){
          return this.a*2;
      },
      //方法二
      //状态就算属性
      ...mapState({
        demoName:state=>state.demo.demoName,
        domain:state=>state.domain,
        count:state=>state.demo.count
      })
    },
    methods:{

    },
    created(){

    }
  }
  /*

  1、this.$store.state.xxx  来获取状态对象  //在computed中获取
  2、 如何与局部计算属性混合使用呢？

  * */
</script>
<style scoped="scoped">
  .header{ font-size: 20px; line-height: 50px; padding: 10px 0;}
.section{ background: #fafafa; margin-top: 20px; }
.colorDanger{ color: red;}
  .line1{font-size: 16px; }

</style>
