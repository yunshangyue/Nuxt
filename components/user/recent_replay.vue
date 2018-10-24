<template>
  <mu-card class="item_container">
    <p class="header">最近参与的话题</p>
    <div class="item" v-for="item in content" :key="item.id">
      <img class="user_avatar" :src="item.author.avatar_url" @click="toUser(item.author.loginname)">
      <a @click="toTopic(item.id)" class="topic_link">{{item.title}}</a>
    </div>
  </mu-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.content);
  },
  methods: {
    toTopic(topicId) {
      this.$router.push({
        path: `/topic/${topicId}`
      });
    },
    toUser(loginname) {
      console.log(loginname);
      this.$router.push({
        path: `/user/${loginname}`
      });
    }
  },
  props: {
    content: {
      type: Array,
      default: () => []
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
    cursor: pointer;
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
</style>
