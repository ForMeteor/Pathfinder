<template>
  <div id="app">
    <button @click="push({ name: 'home' })">1</button>
    <button @click="push({ name: 'leef' })">2</button>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'App',
  components: {
  },
  setup() {
    const router = useRouter()
    const go1 = () => {
      console.warn('click')
      console.warn(this)
    }
    return {
      go1,
      push: router.push,
    }
  },
  onMounted(){
    console.log('mou')
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
