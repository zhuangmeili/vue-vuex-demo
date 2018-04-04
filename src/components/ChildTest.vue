<template>
  <div class="child">
    <header ref="header" class="header"> this is header </header>
    <section class="content">
      this is content
    </section>
  </div>
</template>

<script>
  export default {
    name: "child-test"
  }
</script>

<style scoped>
  .child{

  }
  .child .header{ font-size: 16px;
    text-align: center; line-height: 40px;
  background: #029400; color: #fff;}
  .child .content{ margin-top: 10px;}

</style>
