<template>
  <div class="">
    <form>
      <ul class="formWrap">
        <li class="">
          <header class="header">使用 mutations</header>
          <div class="Flex">
            <h2 class="left">商品标题</h2>
            <div class="Flex_1">
              <input  type="text" class="inputTxt" name="title"  placeholder="请输入商品标题"
                      :value="formObj.title" @input="updateFormObj">
            </div>
          </div>
        </li>
        <li class="">
          <header class="header"> 双向绑定计算属性 ：使用 getter  setter</header>
          <div class="Flex">
            <h2 class="left">商品详情</h2>
            <div class="Flex_1">
              <input  type="text" class="inputTxt" name="detail"  placeholder="请输入商品详情"
              v-model="detail">
            </div>
          </div>
        </li>

        <li class="Flex">

          <h2 class="left"></h2>
          <div class="Flex_1 parentForm">

            <p class="errorMsg">{{}}</p>
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
  import { mapState ,mapGetters,mapMutations,mapActions} from 'vuex'
  export default{
    data(){
      return {

      }
    },
    computed:{
      //方法一
      ...mapState({
        formObj:state=>state.form.formObj
      }),
      //方法二 get set
      //detail变量
      detail:{
        get(){
          return this.$store.state.form.formObj.detail;
        },
        set(value){
          this.$store.commit('updateFormObj',value);
        }
      }

    },
    methods:{
      //方法一
      updateFormObj(e){
        this.$store.commit('updateFormObj',e.target.value);
        console.log("input事件触发 "+e.target.value);
      },
      submitForm(){

      }
    },
  }
  /*
用户输入时，v-model会试图直接修改 formObj.message。在严格模式中，
由于这个修改不是在mutation函数中执行的

用vuex思维，解决办法
   给<input>中绑定value，然后侦听input或者 change事件，在事件回调中调用action；


  * */
</script>
<style scoped="scoped">
  .header{ font-size: 20px; line-height: 50px; padding: 10px 0;}
  .formWrap{ margin-top: 30px;}
  .left{ width: 100px;font-size: 16px; line-height: 35px; height: 35px; padding-right: 20px; text-align: right;}
  .formWrap li{ margin-top: 15px;}
  .inputTxt{ width: 300px; height: 35px; line-height: 35px; border: 1px solid #ddd; padding: 0 8px;}
  .errorMsg{ color: #ff0100;}
  .BtnSolid{ width: 150px; font-size: 15px; line-height: 40px; height: 40px; padding: 0 20px; border-radius: 2px;}
  /* 注意 ：如果要梗菜 form表单组件的样式 可以在其父级 添加一个class 更改*/
  .parentForm .formItem{ border:1px solid #1aad19 ; }
</style>


