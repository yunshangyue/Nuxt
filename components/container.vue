<template>
  <mu-container class="main_container">
    <BreakCrumbs :secNav="secNav" v-show="isNav"></BreakCrumbs>
    <slot></slot>
  </mu-container>
</template>

<script>
import BreakCrumbs from "./breadcrumbs.vue";

export default {
  data() {
    return {};
  },
  props: {
    secNav: {
      type: String,
      default: ""
    }
  },
  components: {
    BreakCrumbs
  },
  computed: {
    isNav() {
      return this.secNav.length !== 0;
    }
  }
};
</script>

<style lang="less" scoped>
.main_container {
  margin-top: 90px;
}
</style>
