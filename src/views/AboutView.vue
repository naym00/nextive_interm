<template>
  <div class="about">
    <ul class="ul-div">
      <li class="li-class">1</li>
      <li class="li-class">2</li>
      <li class="li-class">3</li>
      <li class="li-class">4</li>
      <li class="li-class">5</li>
      <li class="li-class">6</li>
    </ul>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style>
.ul-div {
  display: flex;
  background: #f3e5f5;
  padding: 0px;
  margin: 0px;
}

.li-class {
  background: rgb(230, 226, 14);
  color: black;
  font-size: 30px;
  border: 1px solid rgb(44, 89, 240);
  margin: auto;
  padding: 2% 5%;
  list-style-type: none;
}
</style>
