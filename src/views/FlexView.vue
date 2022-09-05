<template>
  <div class="about">

    <div>
        <button v-on:change="styleChange($event)" value="row" type="button">row</button>
        <button v-on:change="styleChange($event)" value="row-reverse" type="button">row-reverse</button>
        <button v-on:change="styleChange($event)" value="column" type="button">column</button>
        <button v-on:change="styleChange($event)" value="column-reverse" type="button">column-reverse</button>
    </div>

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
  name: "FlexView",
  data(){
    return {
        action: '',
    }
  },
  methods:{
    styleChange(e){
        this.action = e.target.value;
        console.log(this.action);
    }
  }
};
</script>

<style>
ul {
  display: flex;
  flex-direction: column-reverse;
  padding: 0px;
  margin: 0px;
}

li {
  color: black;
  font-size: 30px;
  border: 1px solid rgb(44, 89, 240);
  margin: auto;
  padding: 2% 5%;
  list-style-type: none;
}
</style>
