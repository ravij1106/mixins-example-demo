<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="clicked('you just clicked on button 1')">
      Button 1
    </button>
    &nbsp;&nbsp;&nbsp;
    <button v-on:click="clicked('you just clicked on button 2')">
      Button 2
    </button>
    &nbsp;&nbsp;&nbsp;
    <button v-on:click="showTitle()">
      Show title
    </button>
    <p>This is newly added text</p>
    <br/>
    <button @click="goHome()">
      Home
    </button>
    &nbsp;&nbsp;&nbsp;
    <button @click="goLogin()">
      Login
    </button>
    &nbsp;&nbsp;&nbsp;
    <button @click="goSignUp()">
      Signup
    </button>
  </div>
</template>

<script>

import mixin from '../mixins/mixin'

export default {
  name: 'HelloWorld',
  mixins: [mixin],
  data() {
    return {
      msg: "Hello world"
    }
  },
  methods : {
    goHome(){
      //debugger; // eslint-disable-line no-debugger
      this.$router.push({ name: "Home" });
    },
    goLogin(){
      this.$router.push({ name: "Login" });
    },
    goSignUp(){
      this.$router.push({ name: "Signup" });
    }
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
