<template>
    <Container secNav="发布话题">
        <mu-row gutter>
            <mu-col span="8" sm="6" md="8" lg="9" xl="8">
                <mu-card>
                    <div class="write_container">
                        选择板块: <mu-menu cover :open.sync="open">
                            <mu-button flat color="primary">{{btn_msg}}</mu-button>
                            <mu-list slot="content">
                                <mu-list-item button v-for="item in tab_type" :key="item.id" @click="select_type(item.type, item.type_msg)">
                                    <mu-list-item-title>{{item.type_msg}}</mu-list-item-title>
                                </mu-list-item>
                            </mu-list>
                        </mu-menu>
                        <mu-text-field color="primary" underline-color="primary" :label-float="true" v-model="title" label="标题" type="text"></mu-text-field>
                    </div>
                    <Editor @mdContent="mdContent"></Editor>
                </mu-card>
            </mu-col>
            <mu-col span="4" sm="6" md="4" lg="3" xl="4">
                <mu-card>
                </mu-card>
            </mu-col>
        </mu-row>
        
    </Container>
</template>

<script>
// import axios from "axios";
import { post } from "~/assets/util/util";
import { mapGetters } from "vuex";
import Container from "~/components/container.vue";

import Editor from "~/components/editor.vue";

export default {
  data() {
    return {
      isPublish: false,
      open: false,
      type: "dev",
      type_msg: "测试",
      title: "",
      tab_type: [
        {
          type_msg: "分享",
          id: 1,
          type: "share"
        },
        {
          type_msg: "问答",
          id: 2,
          type: "ask"
        },
        {
          type_msg: "招聘",
          id: 3,
          type: "job"
        },
        {
          type_msg: "测试",
          id: 4,
          type: "dev"
        }
      ]
    };
  },
  methods: {
    select_type(type, msg) {
      this.type = type;
      this.type_msg = msg;
      this.open = false;
    },
    mdContent(mdContent) {
      post(
        "/topics",
        {},
        {
          accesstoken: this.accesstoken,
          title: this.title,
          tab: this.type,
          content: mdContent
        }
      )
        .then(res => {
          if (res.data.success && res.status === 200) {
            this.isPublish = true;
            this.$toast.message("发布成功");
            this.$router.push({
              path: `/`
            });
          }
        })
        .catch(e => {
          this.$toast.info(e.response.data["error_msg"]);
        });

      //   axios
      //     .post(`${this.API}/topics`, {
      //       accesstoken: this.accesstoken,
      //       title: this.title,
      //       tab: this.type,
      //       content: mdContent
      //     })
      //     .then(res => {
      //       if (res.data.success && res.status === 200) {
      //         this.$toast.message("发布成功");
      //         this.$router.push({
      //           path: `index/${this.type}`
      //         });
      //       }
      //     })
      //     .catch(e => console.log(e));
      // }
    }
  },
  computed: {
    ...mapGetters(["accesstoken"]),
    btn_msg() {
      return this.type_msg || "未选择";
    }
  },
  components: {
    Editor,
    Container
  },
};
</script>

<style lang="less" scoped>
.write_container {
  padding: 10px 15px;
}
</style>
