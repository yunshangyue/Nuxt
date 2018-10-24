<template>
  <Container secNav="用户详情">
    <UserMain :content="content"></UserMain>
    <RecentTopic :content="content.recent_topics"></RecentTopic>
    <RecentReplay :content="content.recent_replies"></RecentReplay>
  </Container>
</template>

<script>
import UserMain from "~/components/user/user_main";
import RecentReplay from "~/components/user/recent_replay";
import RecentTopic from "~/components/user/recent_topic";
import Container from "~/components/container";
import { get } from "~/assets/util/util";

export default {
  async asyncData({ params }) {
    let { data } = await get(`/user/${params.loginname}`, {});
    return { content: data };
  },
  components: {
    UserMain,
    RecentReplay,
    RecentTopic,
    Container
  }
};
</script>

<style lang="less" scoped>
</style>
