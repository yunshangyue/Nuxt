<template>
    <mu-card class="item_container">
        <p class="header">未读消息</p>
        <div class="item" v-for="item in content" :key="item.id">

        </div>
        <p v-if="show" class="show">没有未读消息</p>
    </mu-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
  
  },
  props: {
    content: {
      type: Array,
      default: () => []
    }
  },
  computed: {
      show() {
          return this.content.length == 0
      }
  }
};
</script>

<style lang="less" scoped>
.item_container {
  margin-bottom: 20px;
}

.header {
  background: #fff;
  border-bottom: 2px solid #f50057;
  color: #f50057;
  padding: 10px;
}
.item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  .user_avatar {
    width: 40px;
    height: 40px;
    margin-right: 15px;
    border-radius: 4px;
  }
  .topic_link {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}

.show {
    padding: 10px 0;
    margin: 0 20px;
}
</style>
