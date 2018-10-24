<template>
    <mu-list textline="two-line">
        <mu-list-item avatar button v-for="item in list" :key="item.id" @click="toPic(item.id)">
            <mu-list-item-action>
                <mu-avatar>
                    <img :src="item.author.avatar_url" alt="">
                </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
                <mu-list-item-title>
                    <span class="type top" v-if="item.top">置顶</span>
                    <span class="type good" v-else-if="item.good === true">精华</span>
                    <span class="type common" v-else-if="item.tab == 'share'">分享</span>
                    <span class="type common" v-else-if="item.tab == 'ask' ">问答</span>
                    <span class="type common" v-else-if="item.tab == 'job' ">工作</span>
                    <span class="type common" v-else-if="item.tab == 'dev' ">测试</span>
                    {{item.title}}
                </mu-list-item-title>
                <mu-list-item-sub-title>{{ item.create_at.substr(0, 10)}}</mu-list-item-sub-title>
            </mu-list-item-content>
            <mu-list-item-action>
                
            </mu-list-item-action>
        </mu-list-item>
    </mu-list>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    toPic(id) {
      this.$router.push({
        path: `/topic/${id}`
      });
    }
  }
};
</script>

<style lang="less" scoped>
.type {
  margin-right: 10px;
  font-size: 12px;
  padding: 5px 7px;
  border-radius: 5px;
  margin-bottom: 5px;
  color: #fff;
  &.top {
    background-color: #f50057;
  }
  &.common {
    background-color: #2196f3;
  }
  &.good {
    background-color: #311b92;
  }
}
</style>
