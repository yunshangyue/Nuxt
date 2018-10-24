<template>
    <mu-flex justify-content="center" class="page_container">
        <mu-pagination raised :total="1000" :current.sync="current" @change="handleChange" color="#009688"></mu-pagination>
    </mu-flex>
</template>

<script>
export default {
  data() {
    return {
      current: 1
    };
  },
  methods: {
    handleChange() {
      this.$emit("changePage", { current: this.current });
    }
  }
};
</script>

<style lang="less" scoped>
.page_container {
  padding-bottom: 35px;
  margin: 10px 0px;
}

.page_container /deep/ .mu-pagination-item.mu-button.is-current {
  background-color: #f50057;
}
</style>
