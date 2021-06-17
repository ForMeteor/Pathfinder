<!--  -->
<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="iop">click</button>
    <p>{{count}}</p>
    <p>{{id}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import { useRouter,useRoute } from 'vue-router';

export default defineComponent({
  name: 'home',
  components: {
  },
  setup(){
    let count = ref(12)
    const route = useRoute();
    let id = route.query.id
    const iop = ()=>{
      count.value++
    }
    return{
      count,
      id,
      iop
    }
  },
})
</script>
<style  scoped>
</style>
