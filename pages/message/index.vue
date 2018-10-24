<template>
    <Container secNav="我的消息">
        <NewMessage :content="content.hasnot_read_messages"></NewMessage>
        <HasReadMessage :content="content.has_read_messages"></HasReadMessage>
    </Container>
</template>

<script>
import { mapGetters } from "vuex";
import { get } from "~/assets/util/util";
import NewMessage from "~/components/message/new_message";
import HasReadMessage from "~/components/message/old_message";
import Container from "~/components/container";

export default {
  data() {
    return {
      content: {}
    };
  },
  mounted() {
    let accesstoken = localStorage.getItem("accesstoken");
    get("/messages", { accesstoken })
      .then(res => {
        this.content = res.data;
      })
      .catch(e => console.log(e));
  },
  computed: {
    ...mapGetters(["API", "accesstoken"])
  },
  components: {
    NewMessage,
    HasReadMessage,
    Container
  }
};
</script>

<style lang="less" scoped>
</style>
