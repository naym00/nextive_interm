<template>
  <div class="transform">

    <div>
      <router-link class="btn" to="/">Home</router-link>
      <router-link class="btn" to="/bdflag">Flag</router-link>
      <router-link class="btn" to="/table">Table</router-link>
      <router-link class="btn active" to="/transform">Transform</router-link>
    </div>


    <div class="box">
      <img class="image-class"
        src="https://cdn.pixabay.com/photo/2015/08/13/20/06/flower-887443_960_720.jpg"
        alt="flower image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TransformView",
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


.box {
  display: flex;
  justify-content: center;
  padding-top: 5%;
}
.image-class {
  width: 35%;
  height: auto;
  transition: all 0.8s;
}
:hover .image-class {
  transform: scale(1.2);
}
</style>
