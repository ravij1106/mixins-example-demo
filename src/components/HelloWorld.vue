<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="clicked('you just clicked on button 1')">
      Button 1
    </button>
    <button v-on:click="clicked('you just clicked on button 2')">
      Button 2
    </button>
  </div>
</template>

<script>

import mixin from '../mixins/mixin'

export default {
  name: 'HelloWorld',
  mixins: [mixin],
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
