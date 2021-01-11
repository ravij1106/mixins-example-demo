<template>
  <form @submit.prevent="handleLogin">
    Email :<input v-model="email" placeholder="Email" />
    Password :<input v-model="password" placeholder="Password" />
    <button>Login</button>
  </form>
</template>

<script>
import { formMixin } from "../mixins/my-mixin";

export default {
  name : "Login",
  mixins: [formMixin],
  methods: {
    handleLogin: function() {
      console.log("email :", this.email);
      console.log("Password :", this.password);
      //this.$router.push({ name: "Home" });
    }
  }
};
</script>