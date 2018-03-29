<template>
  <div class="wrap">
   <header class="header"> 我是user points</header>
    <ul v-if="stepList.length" class="list">
      <li class="list-item" v-for="(item,index) in stepList" :key="index">
        {{item.content}}
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: "user-points",
    data(){
      return {
        stepList:[]

      }
    },
    mounted(){
      this.getUserPoints();
    },
    methods:{
      getUserPoints(){
        this.$http.get({
          url:'/api/userpoints/steplist',
          data:{ name:"zhuang", age: 10}
        }).then(res=>{
          let {returncode}=res;
          if(returncode===200){
            this.stepList =res.result;
          }else{
            console.log("状态为 非200的结果");
          }
        }).catch(error=>{
          // 无法访问到服务器的时候
          console.log(error.message);
        })
      },

    }
  }
</script>

<style scoped>
  .wrap{ font-size: 16px; line-height: 40px;}
  .list-item{ border-bottom: 1px solid #ddd; }

</style>
