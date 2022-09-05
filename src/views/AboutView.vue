<template>
  <div class="about">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
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
ul {
  display: flex;
  background: #f3e5f5;
  padding: 0px;
  margin: 0px;
}

li {
  background: rgb(230, 226, 14);
  color: black;
  font-size: 30px;
  border: 1px solid rgb(44, 89, 240);
  margin: auto;
  padding: 2% 5%;
  list-style-type: none;
}
</style>
