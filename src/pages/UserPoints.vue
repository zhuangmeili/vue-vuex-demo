<template>
  <div>
   <header> 我是user points</header>

  </div>
</template>

<script>
  export default {
    name: "user-points",
    data(){
      return {

      }
    },
    mounted(){
      this.getUserPoints();
    },
    methods:{
      // step 1
      getUserPoints(){
        this.$http.get({
          url:'http://10.168.99.77/zml/userpoints/steplist',
          data:{ name:"zhuang", age: 10}
        }).then(res=>{
          let {returncode}=res;
          if(returncode===200){
            console.log(res);
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


</style>
