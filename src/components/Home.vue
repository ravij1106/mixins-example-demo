<template>
    <div>
        <p>{{this.text}}</p>
        <br/>
        <button @click="goBack()">
            Back
        </button>
    </div>
</template>
<script>

import mixin from '../mixins/mixin'
import { formMixin } from '../mixins/my-mixin'

export default {
  name: 'Home',
  mixins: [mixin,formMixin],
  data() {
      return{
          text : 'Home page'
      }
  },
  created(){
      console.log("Inside created method");
  },
  methods: {
      goBack(){
          this.$router.push("/");
      }
  }
}
</script>