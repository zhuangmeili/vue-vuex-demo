<template>
  <div class="">
    <input type="text" class="comInput" :placeholder="inputParams.placeholder" v-model="inputParams.value" @blur="">
    <p v-show="isError" class="error">请输入姓名  </p>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        errorMsg:"",
        isError:false,  //错误提示
      }
    },
    props:['inputParams'],
    methods:{
      inputValidate(){
        let rules=this.inputParams.rules;  //我们得到的rule是数组
        let isValid=true; //n个验证规则是否通过
        //循环进行验证
        rules.map((rule,index)=>{
          if(rule.require && !!this.inputParams.value ){
            this.isError=true;
            this.errorMsg=rule.message;
            console.log(11);
          }
        })
      }
    },
    mounted(){
      this.$nextTick(function () {
        this.inputValidate();
      })
    }
  }
</script>
<style scoped="scoped">
  .comInput{
    display: block; height: 35px; line-height: 35px; padding: 0 10px;  border: 1px solid #ddd; width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .error{ color: #e10408;font-size: 14px; line-height: 24px; height: 24px;}

</style>
