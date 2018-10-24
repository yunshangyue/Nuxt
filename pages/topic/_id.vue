<template>
  <Container>
    <Loading :loading="loading" />
    <topicMain :content="content" />
    <topicReply :content="content" />
  </Container>
</template>

<script>
import topicReply from "~/components/topic/topic_reply.vue";
import topicMain from "~/components/topic/topic_main.vue";
import Loading from "~/components/loading.vue";
import Container from "~/components/container.vue";
import { get } from "~/assets/util/util";

export default {
  async asyncData({ params }) {
    let { data } = await get(`/topic/${params.id}`, {});
    return { content: data };
  },
  data() {
    return {
      loading: true
    };
  },
  async mounted() {
    let accesstoken = localStorage.getItem("accesstoken");
    let { data } = await get(`/topic/${this.$route.params.id}`, {
      accesstoken
    });
    this.content = data;
  },
  created() {
    if (this.content) {
      this.loading = false;
    }
  },
  components: {
    Loading,
    Container,
    topicReply,
    topicMain
  }
};
</script>

<style lang="less" scoped>
</style>
