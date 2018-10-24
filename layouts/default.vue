<template>
  <div>
    <vHeader />
    <nuxt />
  </div>
</template>

<script>
import vHeader from "../components/header";
import { mapActions } from 'vuex'
export default {
  data() {
    return {};
  },
  created() {
    if (typeof localStorage === "undefined" || localStorage === null) {
      return;
    } else {
     this.Login()
    }
  },
  methods: {
    ...mapActions(['Login'])
  },
  components: {
    vHeader
  }
};
</script>

<style lang='less' scoped>
</style>
