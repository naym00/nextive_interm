<template>
  <div class="about">
    <div>
      <button v-on:click="styleChange($event)" value="row" type="button">
        row
      </button>
      <button
        v-on:click="styleChange($event)"
        value="row-reverse"
        type="button"
      >
        row-reverse
      </button>
      <button v-on:click="styleChange($event)" value="column" type="button">
        column
      </button>
      <button
        v-on:click="styleChange($event)"
        value="column-reverse"
        type="button"
      >
        column-reverse
      </button>
    </div>
    <ul :class="action">
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
  data() {
    return {
      action: "",
    };
  },
  methods: {
    styleChange(e) {
      this.action = e.target.value;
    },
  },
};
</script>

<style lang="scss">
  
$flex-directions: row, row-reverse, column, column-reverse;
$properties: display, padding, margin;
@mixin flex-properties() {
  $map-ob: ("display": flex, "padding": 0px, "margin": 0px);
  @each $key, $val in $map-ob {
    #{$key}: $val;
  }
}
@mixin flex-direction($direction: row) {
  flex-direction: $direction;
}

@each $direction in $flex-directions {
  
  .#{$direction} {
    @include flex-properties();
    @include flex-direction($direction);
  }
}
/*




.row li {
  color: black;
  font-size: 30px;
  border: 1px solid rgb(44, 89, 240);
  margin: auto;
  padding: 2% 5%;
  list-style-type: none;
}

.row-reverse li {
  color: black;
  font-size: 30px;
  border: 1px solid rgb(44, 89, 240);
  margin: auto;
  padding: 2% 5%;
  list-style-type: none;
}

.column li {
  color: black;
  font-size: 30px;
  border: 1px solid rgb(44, 89, 240);
  margin: auto;
  padding: 2% 5%;
  list-style-type: none;
}

.column-reverse li {
  color: black;
  font-size: 30px;
  border: 1px solid rgb(44, 89, 240);
  margin: auto;
  padding: 2% 5%;
  list-style-type: none;
}
*/
</style>
