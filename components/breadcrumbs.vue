<template>
  <mu-breadcrumbs>
      <mu-breadcrumbs-item :disabled="false" to="/">主页</mu-breadcrumbs-item>
      <mu-breadcrumbs-item :disabled="true">{{secNav}}</mu-breadcrumbs-item>
    </mu-breadcrumbs>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   props: ['secNav'],
   components: {

   }
 }
</script>

<style>

 
</style>
