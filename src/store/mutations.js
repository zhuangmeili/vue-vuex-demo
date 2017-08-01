/**
 * Created by zhuangmeili on 2017/6/15 0014.
 */
/*
1、更改vuex的store中的状态，vuex中的mutations非常类似于事件，
2、参数：
   state 作为第一个参数
3、使用常量替代mutations事件类型；（全部大写，当然不强制要求）
4、子组件调用
   methods: {
     INCREMENT(){
       this.$store.commit('increment')  //触发状态更新；
     }
   }
5、组件中提交 mutations
   使用this.$store.commit('XXX'); or
   mapMutations 辅助函数
6。mutations必须同步执行
                ---------
* */

export default{

}
