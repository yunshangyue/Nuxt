<template>
    <mu-card class="item_container">
        <div class="user_main_header">
            <img :src="content.avatar_url" alt="userAvatar" class="user_avatar">
            <p style="margin-left:15px">{{content.loginname}}</p>
        </div>
        <p class="item_p">{{content.score}} 积分</p>
        <div><span></span>@{{ content.githubUsername }}</div>
        <p class="item_p">
            注册时间 {{ create_at_time }}
        </p>
    </mu-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    create_at_time() {
      return this.content.create_at
        ? this.content.create_at.substr(0, 10)
        : "未知";
    }
  }
};
</script>

<style lang="less" scoped>
.item_container {
  padding: 20px;
  margin-bottom: 20px;
}

.user_main_header {
  display: flex;
}

.user_avatar {
  width: 48px;
  height: 48px;
  border-radius: 4px;
}

.item_p {
  margin: 5px 0;
  font-weight: 500;
}
</style>
