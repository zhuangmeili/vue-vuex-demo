<template>
  <div class="wrap">
   <header class="header"> 我是user points</header>
    <ul v-if="stepList.length" class="list">
      <li class="list-item" v-for="(item,index) in stepList" :key="index" @click="toDetail">
        {{item.content}}
      </li>
    </ul>

    <p>我的名字 ---{{name}}</p>

  </div>
</template>

<script>
  export default {
    name: "user-points",
    data(){
      return {
        stepList:[],
        name:"zhuang"

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
      toDetail(){
        window.location.href='https://www.baidu.com/';
      }

    },
    beforeRouteEnter (to, from, next) {
      console.log('enter');
      next();
    },

    beforeRouteUpdate(){
      console.log('before  update');
      alert(111);
      this.name='update';
    },
    beforeRouteLeave (to, from, next) {
      this.name='leave';
    }
  }
</script>

<style scoped>
  .wrap{ font-size: 16px; line-height: 40px;}
  .list-item{ border-bottom: 1px solid #ddd; }

</style>
