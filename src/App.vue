<template>
  <div id="app">
    <el-menu class="el-menu"
             mode="horizontal"
             router
             text-color="#fff"
             active-text-color="#ffd04b"
    >
      <el-menu-item index="1" class="el-menu-item" style=" font-size: 20pt!important;">
        <img src="https://www.pzhu.cn/images/logo.png" alt=""/>
      </el-menu-item>
      <el-menu-item index="2" style=" font-size: 30pt!important;" class="el-menu-item">五四运动</el-menu-item>
      <el-menu-item index="3" class="el-menu-item" style=" font-size: 30pt!important;">五四精神</el-menu-item>
      <el-menu-item index="4" class="el-menu-item" style=" font-size: 30pt!important;">五四人物</el-menu-item>
      <el-menu-item index="5" class="el-menu-item" style=" font-size: 30pt!important;">攀大五四</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: font,serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  list-style: none;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.el-menu {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  background-image: url("@/assets/img_1.png");
  /*margin: auto;*/
  /*font-family: "HarmonyOS Sans",serif!important;*/
  font-size: 16pt !important;

}

.el-menu-item:hover {
  background-color: rgba(240, 70, 80, 0.5) !important;
  color: #ffd04b !important;
  /*font-family: "HarmonyOS Sans"!important;*/
  font-size: 16pt !important;


}

.el-menu-item:focus {
  background-color: transparent !important;
  /*font-family: "HarmonyOS Sans"!important;*/
  font-size: 16pt !important;

}


.el-menu-item {
  height: auto !important;
  line-height: 80px !important;
  padding: 10px;
  flex: 1;
  align-items: center;

}

.el-menu-item li {
  /*font-family: "HarmonyOS Sans"!important;*/
  font-size: 16pt !important;
  text-align: center !important;

}

.el-menu img {
  height: 100%;
  float: left;
}
</style>
