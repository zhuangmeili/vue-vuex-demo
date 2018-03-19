<template>
  <div class="container">
    <header class="header">action 异步操作  <span class="ClorDanger">{{ demoName}}</span> </header>
    <button class="btnAdd" @click="add()">+ add </button>  <span class="colorDanger">{{count}}</span>

    <br>
    <br>
    <button class="btnMinus ">- minus</button>

  </div>

</template>
<script type="text/javascript">
  /*
  * Action 类似与mutation
  * Action提交的是mutation，而不是直接变更状态
  * Action 可以包含任意异步操作
  * 方法一： this.$store.dispatch("");
  * 方法二： ...mapActions({  })
  *
  * */
  import { mapState ,mapGetters,mapMutations,mapActions} from 'vuex'
  export default{
    data(){
      return {}
    },
    computed:{
      ...mapState({
        demoName:state=>state.demo.demoName,
        count:state=>state.demo.count
      })
    },
    //方法一：this.$store.dispatch("incrementAsyn");
    methods:{
      add(){
        this.$store.dispatch("incrementAsyn");
      }
    }
    //方法二：mapActions
   /* methods:{
      ...mapActions({
        add:'incrementAsyn'
      })
    }*/
  }
</script>
<style scoped="scoped">
  .header{ font-size: 20px; line-height: 50px; padding: 10px 0;}
  .container{ padding-top: 20px;}
  .btnAdd,.btnMinus{ padding: 0 30px; height: 40px; line-height: 40px; font-size: 16px; border: 1px solid #007806; background: #1aad19; border-radius: 2px; color: #fff;}

  .btnMinus{ background: #fff; border: 1px solid #ddd; color: #333; }
  .colorDanger{ color: red; margin-left: 10px;}
</style>
