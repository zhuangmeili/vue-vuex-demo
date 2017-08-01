<template>
<div>
  <section>
    <ul>
      <li class="listItem" v-for="item in filterTodoCount">
        {{ item.text}}
      </li>
    </ul>
  </section>
</div>

</template>
<script type="text/javascript">
  import { mapState ,mapGetters,mapMutations,mapActions} from 'vuex'
  export default{
    data(){
      return {

      }
    },
    //方法一
//    computed:{
//      filterTodoCount(){
//        return this.$store.getters.filterTodoCount
//      },
//    }
    //方法二

    computed:{
      ...mapGetters(['filterTodoCount'])
    }
  }
  /*
  1、有时候我们需要从store中派生出一些状态，例如对列表进行过滤并计数
  在getters中定义
  可以认为是计算属性
  2、组件访问 ：
   this.$store.getters.filterTodoCount


  * */
</script>
<style scoped="scoped">
.listItem{ height: 35px; line-height: 35px; border-bottom: 1px solid #ddd;}

</style>
