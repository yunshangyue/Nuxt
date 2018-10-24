<template>
  <mu-col xl="3" lg="3" class="hide">
    <div v-if="isLogin">
      <mu-card>
        <p class="personeral_header">个人信息</p>
        <div class="personeral_body">
          <div class="desc">
            <img :src="user.avatar_url" class="user_avatar" @click="toUser(user.loginname)">
            <p class="user_name" @click="toMessage">{{ user.loginname }}</p>
            <mu-badge :content="count" circle color="#f50057" class="badge">
            </mu-badge>
          </div>
        </div>
      </mu-card>
      <mu-card class="ptn">
        <mu-button color="#f50057" small to="/Release">发布文章</mu-button>
      </mu-card>
    </div>
    <div v-else>
      <mu-card>
        <p class="personeral_header">未登录</p>
        <div class="login_info">
          <mu-button color="#f50057" small to="/login">登陆</mu-button>
        </div>
      </mu-card>
    </div>
    <indexFriend></indexFriend>
  </mu-col>
</template>

<script>
import { mapGetters } from "vuex";

import indexFriend from "./index_friend.vue";
import { get } from "../../assets/util/util";

export default {
  data() {
    return {
      count: "0"
    };
  },
  methods: {
    toUser(loginname) {
      this.$router.push({
        path: `/user/${loginname}`
      });
    },
    toMessage() {
      this.$router.push({
        path: "/message"
      });
    }
  },
  computed: {
    ...mapGetters(["user", "isLogin"])
  },
  components: { indexFriend },
  created() {
    // let accesstoken = localStorage.getItem("accesstoken");
    // if (accesstoken) {
    //   get(`/message/count`, { accesstoken }).then(res => {
    //     this.count = res.data.toString();
    //   });
    // }
  }
};
</script>

<style lang="less" scoped>
.personeral_header {
  margin: 0;
  padding: 15px;
  color: #f50057;
  background: #fafafa;
  border-bottom: 2px solid #f50057;
}

.personeral_body,
.login_info {
  padding: 10px;
}

.user_avatar {
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 4px;
}

.user_name {
  font-size: 15px;
  margin: 10px 0 10px 10px;
  cursor: pointer;
}

.desc {
  display: flex;
}

.ptn {
  margin-top: 15px;
  padding: 10px;
}

@media (max-width: 992px) {
  .hide {
    display: none;
  }
}
</style>
