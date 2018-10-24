<template>
 <mu-appbar class="nav" color="#f50057">
      <mu-button icon slot="left" to="/">
        <mu-icon value="cloud" ></mu-icon>
      </mu-button>
  CNode

  <mu-button flat v-if="isLogin" slot="right" @click="exitLogin">退出</mu-button>
</mu-appbar>
</template>
<script>
import { mapState,mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["isLogin"])
  },
  methods: {
    ...mapActions(['exitLogin'])
  }
};
</script>

<style lang='less' scoped>
.nav {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 101;
}
</style>
