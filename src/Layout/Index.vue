<template>
  <div id="">
    <mainnav></mainnav>
    <router-view />
  </div>
</template>

<script>
import Nav from './lib/Nav.vue'

export default {
  name: 'Home',
  components: {
    mainnav: Nav
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
</style>