<template>
  <mu-card :raised="true" class="content" v-if="content">
    <div class="topic_header">
      <h4 class="title">{{content.title}}</h4>
      <!-- <mu-icon value="settings_ethernet" color="#e0e0e0" v-if="isLogin && isAuthor" @click="updateTopic"></mu-icon> -->
      <mu-icon value="star" :class="[initIsCollect,bgColor]" v-if="isLogin" @click="topicCollect(content.id)"></mu-icon>
    </div>

    <mu-divider></mu-divider>
    <div v-html="content.content" class="content_container"></div>
  </mu-card>
</template>

<script>
import { mapGetters, mapState } from "vuex";

import { post } from "~/assets/util/util";

export default {
  data() {
    return {
      bgColor: "",
      First: true,
      star: false,
      
      // isCollect: false
      // bgColor
    };
  },
  props: {
    content: {
      type: Object,
      default: {}
    }
  },
  methods: {
    Collect(id) {
      post(
        "/topic_collect/collect",
        {},
        {
          accesstoken: this.accesstoken,
          topic_id: id
        }
      )
        .then(res => {
          if (res.success) {
            this.First = false;
            this.star = true;
            this.bgColor = "star";
           this.$toast.message('收藏成功')
          } else {
            this.$toast.message('出错了请重试')
          }
        })
        .catch(e => {
          this.open = true;
          this.msg = "啊哦 网络出错了";
        });
    },
    unCollect(id) {
      post(
        "/topic_collect/de_collect",
        {},
        {
          accesstoken: this.accesstoken,
          topic_id: id
        }
      )
        .then(res => {
          if (res.success) {
            this.First = false;
            this.star = false;
            // this.$refs.star.className = 'unstar'
            this.bgColor = "unstar";
           
             this.$toast.message('取消收藏')
          } else {
            
            this.$toast.message('出错了')
          }
        })
        .catch(e => {
        
         this.$toast.message('啊哦 网络出错了')
        });
    },
    topicCollect(id) {
      if (this.First) {
        if (this.content.is_collect) {
          this.unCollect(id);
        } else {
          this.Collect(id);
        }
      } else {
        if (this.star) {
          this.unCollect(id);
        } else {
          this.Collect(id);
        }
      }
    }
  },
  computed: {
    // ...mapGetters(["isLogin", "accesstoken", "user"]),
    ...mapState(["isLogin", "accesstoken", "user"]),
    initIsCollect() {
      return this.content.is_collect ? "Initstar" : "Initunstar";
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/less/common.less";

.topic_header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .title {
    width: 80%;
    padding: 20px 0;
    margin: 0;
    overflow: hidden;
  }
}

.content_container {
  padding: 0 15px;
  & /deep/ img {
    max-width: 100%;
  }
}

.Initstar {
  color: @primary;
}

.Initunstar {
  color: @cc;
}

.star {
  color: @primary;
}

.unstar {
  color: @cc;
}
</style>
