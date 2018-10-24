<template>
  <div>
    <mu-card class="replay_container" v-if="content">
      <div class="header">
        <p>{{content.reply_count}} 条回复</p>
      </div>
      <div class="replay">
        <div v-for="item in content.replies" :key="item.id">
          <div class="replay_item">
            <mu-avatar class="replay_avatar">
              <img :src="item.author.avatar_url">
            </mu-avatar>
            <div class="right">
              <div class="comment_header">

                <p style="margin:0 0 5px 20px">{{ item.author.loginname }} {{item.create_at.substr(0, 10)}}</p>
                <div>
                 <mu-icon value="thumb_up" @click="uped(item.reply_id)" size="14" :class="item.is_uped ? 'Inituped' : 'Inituoed_not',Color"></mu-icon><span>{{item.ups.length}}</span>
                  </div>
              </div>

              <div style="margin-left: 20px" v-html="item.content"></div>
            </div>
          </div>
          <mu-divider></mu-divider>
        </div>
      </div>
    </mu-card>
    <mu-card>
      <CommonHeader header_text="添加回复"></CommonHeader>
      <Editor @mdContent="publish_comment" class="editor"></Editor>
    </mu-card>
<mu-snackbar :open.sync="open">
    {{msg}}
    <mu-button flat slot="action" color="secondary" @click="open = false">Close</mu-button>
  </mu-snackbar>
  </div>
</template>

<script>
import Editor from "~/components/editor.vue";
import CommonHeader from "~/components/commonheader.vue";
import { post } from "~/assets/util/util";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      open: false,
      Color: '',
      msg: '评论已发送'
    };
  },
  props: {
    content: {
      type: Object,
      default: {}
    }
  },
  methods: {
    publish_comment(content) {
      post(
        `/topic/${this.content.id}/replies`,
        {},
        { accesstoken: this.accesstoken, content }
      ).then(res => {
        if (res.success) {
          this.open = true
        }
      });
    },
    uped(reply_id) {
      post(`/reply/${reply_id}/ups`,{}, {accesstoken: this.accesstoken})
        .then(res => {
          console.log(res)
        })
        .catch(e => console.log(e))
    }
  },
  components: {
    Editor,
    CommonHeader
  },
  computed: {
    ...mapGetters(["accesstoken"])
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/less/common.less";

.content_container {
  overflow: hidden;
  padding: 0 20px;
}
.replay_ul {
  padding: 20px;
}
.replay_container {
  margin-bottom: 20px;
}
.replay_content {
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
}
.content {
  padding-bottom: 20px;
  margin-bottom: 20px;
}
.header {
  display: flex;
  background-color: #f50057;
  justify-content: space-between;
  padding: 0 20px;
  color: #fff;
}

.replay {
  .replay_item {
    display: flex;
    padding: 20px 20px 0 20px;
    align-items: flex-start;
    .right {
      flex: 1;
    }
  }
}

.right /deep/ img {
  max-width: 100%;
}

.editor {
  padding: 10xp 15px;
}

.comment_header {
  display: flex;
  justify-content: space-between;
}

.Inituped {
  color: @primary;
}

.Inituoed_not {
  color: @cc;
}
</style>
