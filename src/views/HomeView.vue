<template>
  <div class="home">
    <div>
      <router-link class="btn active" to="/">Home</router-link>
      <router-link class="btn" to="/bdflag">Flag</router-link>
      <router-link class="btn" to="/table">Table</router-link>
      <router-link class="btn" to="/transform">Transform</router-link>
    </div>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style>
  .btn {
  border: none;
  border-radius: 20px;
  outline: none;
  padding: 10px 16px;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
}
.active {
  background-color: cadetblue;
  color: antiquewhite;
}
.btn:hover {
  background-color: antiquewhite;
  color: #666;
}
</style>
