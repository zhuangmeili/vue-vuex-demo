<template>
<div class="container">
  <header class="header">mutation 同步操作 <span class="ClorDanger">{{ demoName}}</span> </header>
  <button class="btnAdd" @click="add()">+ add </button>  <span class="colorDanger">{{count}}</span>

  <br>
  <br>
  <button class="btnMinus ">- minus</button>

</div>

</template>
<script type="text/javascript">
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
  /*  methods:{
      //方案一
//      INCREMENT(){
//        this.$store.commit("INCREMENT");
//      }
      //方案二 提交载荷
      INCREMENT(){
        this.$store.commit("INCREMENT",{
          amount:10
        });
      }
    }*/
    methods:{
      ...mapMutations({
        add:'INCREMENT'
      })
    }
  }
</script>
<style scoped="scoped">
  .header{ font-size: 20px; line-height: 50px; padding: 10px 0;}
.container{ padding-top: 20px;}
.btnAdd,.btnMinus{ padding: 0 30px; height: 40px; line-height: 40px; font-size: 16px; border: 1px solid #007806; background: #1aad19; border-radius: 2px; color: #fff;}

.btnMinus{ background: #fff; border: 1px solid #ddd; color: #333; }
  .colorDanger{ color: red; margin-left: 10px;}
</style>
