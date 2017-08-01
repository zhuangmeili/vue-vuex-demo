<template>
<div class="">
  <!--  http://localhost:8080/?title=#/count  -->
  <form>

    <ul class="formWrap">
      <li class="Flex">
        <h2 class="left">商品标题</h2>
        <div class="Flex_1">
          <input  type="text" class="inputTxt" name="title" ref="buyForm_title" v-model="buyForm.title" placeholder="请输入商品标题">
        </div>
      </li>
      <li class="Flex">
        <h2 class="left">商品单价</h2>
        <div class="Flex_1">
          <input  type="text" class="inputTxt"  ref="formPrice">元
        </div>

      </li>
      <li class="Flex">
        <h2 class="left">手机号码</h2>
        <div class="Flex_1">
          <input  type="text" class="inputTxt">
        </div>
      </li>
      <li class="Flex">
        <h2 class="left">商品详情</h2>
        <div class="Flex_1">
         <textarea></textarea>
        </div>
      </li>
      <li class="Flex">
        <h2 class="left"></h2>
        <div class="Flex_1 parentForm">

          <p class="errorMsg">{{errorMsg}}</p>
          <br>
          <br>
          <button type="button" class="Btn  BtnSolid" @click="submitForm">提交</button>
        </div>
      </li>
    </ul>



  </form>

</div>

</template>
<script type="text/javascript">
  export default{
    data(){
      return {
        errorMsg:'',
        rules1:[
          {required:true,message:'商品是必填项！'},
          {maxLength:10,message:'不能超过10个字符'}
        ],
        buyForm:{
          title:'',
        },

      }
    },
    methods:{
      submitForm(){
        var obj=this.$refs.buyForm_title;
        var title=obj.value;
        var rules=this.rules1;
        if(title==''){
           this.errorMsg=rules[0].message;
           return false;
        }
        if(title.length>10){
          this.errorMsg=rules[1].message;
          return false;
        }else{
            //成功则跳转页面
          let buyForm={title:title};
          this.errorMsg='';
          console.log("已经成功验证通过")
          console.log(JSON.stringify(buyForm) );
        }

      }
    },
  }
</script>
<style scoped="scoped">
  .formWrap{ margin-top: 30px;}
  .left{ width: 100px;font-size: 16px; line-height: 35px; height: 35px; padding-right: 20px; text-align: right;}
  .formWrap li{ margin-top: 15px;}
  .inputTxt{ width: 300px; height: 35px; line-height: 35px; border: 1px solid #ddd; padding: 0 8px;}
  .errorMsg{ color: #ff0100;}
.BtnSolid{ width: 150px; font-size: 15px; line-height: 40px; height: 40px; padding: 0 20px; border-radius: 2px;}
/* 注意 ：如果要梗菜 form表单组件的样式 可以在其父级 添加一个class 更改*/
  .parentForm .formItem{ border:1px solid #1aad19 ; }
</style>

