<template>
  <el-menu
      :default-active="$route.path"
      mode="horizontal"
      text-color="#2c3e50"
      active-text-color="#42b983"
      :router="true">
    <el-menu-item index="/">Home</el-menu-item>
    <el-submenu>
      <template #title>Recipes</template>
      <el-menu-item index="/india">India</el-menu-item>
      <el-menu-item index="/austria">Austria</el-menu-item>
      <el-menu-item index="/romania">Romania</el-menu-item>
      <el-menu-item index="/germany">Germany</el-menu-item>
      <el-menu-item index="/bulgaria">Bulgaria</el-menu-item>
    </el-submenu>
    <el-menu-item index="/about">About</el-menu-item>
  </el-menu>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
