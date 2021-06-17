<!--  -->
<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="iop">click</button>
    <span>{{count}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'

export default defineComponent({
  name: 'home',
  components: {
  },
  setup(){
    let count = ref(12)
    return{
      count
    }
  },
  methods: {
    iop(){
      this.count++
    }
  },
})
</script>
<style  scoped>
</style>
