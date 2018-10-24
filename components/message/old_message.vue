<template>
    <mu-card class="item_container">
        <p class="header">已读消息</p>
        <div class="item" v-for="item in content" :key="item.id" v-if="item">
            <a class="item_link" @click="toUser(item.author.loginname)">{{item.author.loginname}}</a>
            <span v-if="item.type == 'reply'" class="type">回复了你的话题</span>
            <a class="item_link" @click="toTopic(item.topic.id)">{{item.topic.title}}</a>
        </div>
        <p v-else>空空如也~</p>
    </mu-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
  toUser(loginname) {
      this.$router.push({
          path: `/user/${loginname}`
      })
  },
  toTopic(topicId) {
      this.$router.push({
          path: `/topic/${topicId}`
      })
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

.item_link {
    cursor: pointer;
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

.type {
    margin: 0 10px
}
</style>
