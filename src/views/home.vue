<!--  -->
<template>
  <div>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <p @click="add">{{count}}</p>
    <p>{{k}}</p>
    <p>{{obj}}</p>
    <p>{{id}}</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent,onMounted,ref, watch,reactive,toRefs} from 'vue'
import { useStore } from 'vuex';
import { useRouter,useRoute } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue'

export default defineComponent({
  name: 'home',
  components: {
    HelloWorld
  },
  setup(){
    const router = useRouter();
    const route = useRoute();
    let id = route.query.id
    const store = useStore();
    const count = computed(()=>{
      return store.state.count
    })
    let k = ref(30)
    let obj = reactive({
      a:1,
      b:2
    })
    watch(()=>obj.a,(newValue,oldValue)=>{
      console.warn(newValue)
      console.warn(oldValue)
    })
    watch(k,(newValue,oldValue)=>{
      console.warn(newValue)
      console.warn(oldValue)
    })
    const max = () =>{
      store.commit('max')
    }
    const add = () =>{
      store.commit('increment')
      k.value++
      obj.a++
    }
    onMounted(() => {
      console.log('in')
      max()
    })
    return {
      max,
      add,
      count,
      id,
      k,
      // ...toRefs(obj)
      obj
    }
  },
  methods: {
    // add(){
    //   this.$store.commit('increment')
    // }
  },
})
</script>
<style  scoped>
</style>
