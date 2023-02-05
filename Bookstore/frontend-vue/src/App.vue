<template>
  <Navbar />
  <router-view @fromChild="retrieve" :fromParent="dataNama"/>      
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: { 
    Navbar
  },
  data(){
    return{
      dataNama: ""
    }
  },
  methods: {
    retrieve(namamu){
      this.dataNama = namamu;
      alert("Nama diterima " + this.dataNama)
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
