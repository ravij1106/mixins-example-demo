<template>
   <div>
     <h1>{{msg}}</h1>
   </div>
</template>

<script>
import { formMixin } from "../mixins/my-mixin";
 export default{
     mixins:[myMixin],
     data:function(){
         return{
              msg: "I Win (component)"
         }
     }
 }
</script>