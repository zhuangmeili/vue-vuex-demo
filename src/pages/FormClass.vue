<template>
  <div class="container">

    <form action="">
      <ul>
        <li class="Flex formItem">
          <span class="formLeft">姓名:</span>
          <div class="Flex_1">
            <input type="text" class="comInput" v-model="formParams.values.name" placeholder="请输入姓名" @blur="validate('name')">
            <p class="error" v-show="!formParams.validates.name">{{formParams.errors.name}}</p>
          </div>
        </li>
        <li class="Flex formItem">
          <span class="formLeft">年龄:</span>
          <div class="Flex_1">
            <input type="text" class="comInput" v-model="formParams.values.age" placeholder="请输入年龄" >
            <p class="error" v-show="!formParams.validates.age">{{formParams.errors.age}}</p>
          </div>
        </li>
        <li class="Flex formItem">
          <span class="formLeft "></span>
          <div class="Flex_1">
            <button type="submit" class="formBtn" @click="submitForm">确定</button>
          </div>
        </li>
      </ul>
    </form>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        //提交表单使用
        formParams: {
          isFormValid: false,//是否表单全部验证通过
          rules: {
            name: [{required: true, message: "姓名是必填项额"}, {maxLength: 8, message: '不能超过8个字符'}],
            age: [{required: true, message: "年龄是必填项额"}]
          },
          errors: {
            name: "",
            age: ""
          },
          values: {
            name: "",
            age: ""
          },
          validates:{
            //默认都是false ，没有验证成功显示错误提示
            name:false,
            age:false
          }
        }
      }
    },
    methods: {
      validate(key){
        var rules=this.formParams.rules[key];
        var value=this.formParams.values[key];
        var isKeyValid=true;  //
        rules.map((rule,index)=>{
          //required
          if(rule.required && !value){
            console.log("执行 require");
            this.formParams.validates[key]=false;
            this.formParams.errors[key]=rule.message;
            isKeyValid=false;
            return false;
          }
          if(rule.maxLength && value.length>rule.maxLength){
            console.log("执行 lenth");
            this.formParams.validates[key]=false;
            this.formParams.errors[key]=rule.message;
            isKeyValid=false;
            return false;
          }
        });
        if(isKeyValid){
          console.log("判断完成");
          this.formParams.errors[key]="";
          this.formParams.validates[key]=true;
        }else{
          this.formParams.validates[key]=false;
        }
      },
      submitForm() {
        if(!this.formParams.validates.name){
          return false;
        }else{
          //否则的话 提交表单
          console.log("提交表单");
        }

      },
    },
    created() {

    },
    mounted() {

    }
  }
</script>
<style scoped="scoped">
  .container {
    padding: 20px 0;
  }

  .formItem {
    padding: 20px 20px 0 0;
  }

  .formLeft {
    width: 60px;
    text-align: right;
    font-size: 18px;
    line-height: 35px;
    height: 35px;
    padding-right: 10px;
  }

  .formBtn {
    background: #1aad19;
    font-size: 16px;
    color: #fff;
    height: 35px;
    line-height: 35px;
    border-radius: 3px;
    padding: 0 20px;
    border: 1px solid #028c00;
  }

  .comInput {
    display: block;
    height: 35px;
    line-height: 35px;
    padding: 0 10px;
    border: 1px solid #ddd;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .error {
    color: #e10408;
    font-size: 14px;
    line-height: 24px;
    height: 24px;
  }

</style>

