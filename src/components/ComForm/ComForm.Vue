<template>
  <div class="">
    <slot></slot>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {

      }
    },
    props:["formParams"],
    watch:{
//      formParams(){
//
//      }
    },
    methods:{
      validate(){
        let rules=this.formParams.rules;
        var values=this.formParams.values;
        for(let key in rules){
          //console.log(key); //表单的名字
          rules[key].map((rule,index)=>{
            //console.log(rule);
            let value=values[key];

            if(rule.required ){
              console.log(value)
            }

          })
        }
      }
    },
    created(){},
    mounted(){
      var _this=this;
      this.$nextTick(function () {
       // _this.validate();
      });
    }
  }
</script>
<style scoped="scoped">


</style>
