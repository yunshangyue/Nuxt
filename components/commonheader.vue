<template>
    <p class="common_header">{{header_text}}</p>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    header_text: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less" scoped>
.common_header {
  background: #fff;
  border-bottom: 2px solid #f50057;
  color: #f50057;
  padding: 10px;
}
</style>
