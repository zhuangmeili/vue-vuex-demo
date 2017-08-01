<template>
  <div id="app">
    <div class="leftSide">
      <ul class="tabUl">
        <li>
          <router-link class="link" to="/state" activeClass="router-link-active">state</router-link>
        </li>
        <li>
          <router-link class="link" to="/mutation" activeClass="router-link-active">mutation</router-link>
        </li>
        <li>
          <router-link class="link" to="/action" activeClass="router-link-active">action</router-link>
        </li>
        <li>
          <router-link class="link " to="/modules" activeClass="router-link-active">modules</router-link>
        </li>
        <li>
          <router-link class="link" to="/todos" activeClass="router-link-active">todos</router-link>
        </li>
        <li>
          <router-link class="link" to="/form1" activeClass="router-link-active">form1</router-link>
        </li>
        <li>
          <router-link class="link " to="/formvuex" activeClass="router-link-active">formVuex</router-link>
        </li>

      </ul>

    </div>
    <div class="rightSide">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
.leftSide{ position: absolute;
  left:0; top:0; width: 220px; height: 100%; background: #fafafa; border-right: 1px solid #ddd;}

  .rightSide{margin-left: 230px;  }
.tabUl li{ height: 50px; line-height: 50px; font-size: 16px; text-align: center; border-bottom: 1px solid #e5e5e5; }


.link{  display: block; height: 50px;}
.router-link-active{ color: #1aad19 !important; background: #fff; border-right: 1px solid #fff; margin-right: -1px;  font-weight: bold;}
</style>
