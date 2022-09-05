<template>
  <div class="about">
    <div>
      <router-link class="btn" to="/">Home</router-link>
      <router-link class="btn active" to="/bdflag">Flag</router-link>
      <router-link class="btn" to="/table">Table</router-link>
      <router-link class="btn" to="/transform">Transform</router-link>
    </div>
    <div class="relative" style="text-align:center">
        <div class="absolute"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BangladeshFlag",
};
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


div.relative {
  position: relative;
  top:80px;
  left:80px;
  padding: 5% 0%;
  width: 42%;
  background-color: #006a4e;
}

div.absolute {
    margin-left:25%;
    padding: 19% 0%;
    width: 40%;
    border-radius: 50%;
    background-color: #f42a41;
}
</style>
