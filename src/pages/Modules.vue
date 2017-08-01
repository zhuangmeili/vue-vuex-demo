<template>
<div>
  <header class="header"> modules <span class="ClorDanger">{{ mod1Name}}</span>   </header>
  <button class="btnAdd" @click="add()">+ add </button>  <span class="colorDanger">{{count}}</span>

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
        mod1Name:state=>state.mod1.mod1Name,
        count:state=>state.mod1.count
      })
    },
    methods:{
      ...mapMutations({
        demoName:state=>state.demo.demoName,
        add:'INCREMENT'
      })
    }
  }
</script>
<style scoped="scoped">
  .header{ font-size: 20px; line-height: 50px; padding: 10px 0;}
  .btnAdd{ padding: 0 30px; height: 40px; line-height: 40px; font-size: 16px; border: 1px solid #007806; background: #1aad19; border-radius: 2px; color: #fff;}

  .colorDanger{ color: red; margin-left: 10px;}
</style>
