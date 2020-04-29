<template>
  <el-menu :default-active="activeIndex"
           class="el-menu-demo"
           mode="horizontal"
           @select="handleSelect">
    <el-menu-item v-for="i in 8"
                  :key="i"
                  :index="i.toString()">处理中心</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      activeIndex: '1',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss">
</style>