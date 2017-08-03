<template>
  <div class="container">
    
    <ul>
      <li class="Flex formItem">
        <span class="formLeft ">姓名:</span>
        <div class="Flex_1">
          <com-input :input-params.sync="nameParams"></com-input>
        </div>
      </li>
      <!--
      <li class="Flex formItem">
        <span class="formLeft ">年龄:</span>
        <div class="Flex_1">
          <com-input></com-input>
          <p class="error">请输入年龄</p>
        </div>
      </li>
      <li class="Flex formItem">
        <span class="formLeft ">邮箱:</span>
        <div class="Flex_1">
          <com-input></com-input>
          <p class="error">请输入邮箱</p>
        </div>
      </li>
      -->
      <li class="Flex formItem">
        <span class="formLeft "></span>
        <div class="Flex_1">
         <button type="button" class="formBtn" @click="submitForm">确定</button>
        </div>
      </li>
    </ul>


  </div>
</template>
<script type="text/javascript">
  export default{
    data(){
      return {
        nameParams:{
          placeholder:"请输入姓名",
          trigger: 'blur',
          value:'',
          rules:[
            { required:true, message:"姓名是必填项额"},
            { maxlength:8,message:'不能超过8个字符' }
          ]
        },
        //所有表单数据记录在这里
        formData:{
          name:""
        }
      }
    },
    methods:{
      submitForm(){
        this.formData.name=this.nameParams.value;
        console.log(this.inputValidate)
      }
    },
    watch:{

    },
    created(){
      this.formData.name=this.nameParams.value;
    },
    mounted(){

    }
  }
</script>
<style scoped="scoped">
  .container{ padding: 20px 0;}
  .formItem{padding: 20px 20px 0 0;}
  .formLeft{ width: 60px; text-align: right; font-size: 18px; line-height: 35px; height: 35px; padding-right: 10px;}

.formBtn{ background: #1aad19; font-size: 16px; color: #fff;  height: 35px; line-height: 35px; border-radius: 3px; padding: 0 20px;
border: 1px solid #028c00; }

</style>
