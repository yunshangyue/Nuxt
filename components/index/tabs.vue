<template>
    <mu-tabs :value.sync="value" inverse  color="secondary" text-color="rgba(0, 0, 0, .54)" full-width>
        <mu-col span="2" v-for="(item, index) in tabs" :key="index">
            <mu-tab @click="tabChange(item.value)">{{item.msg}}</mu-tab>
        </mu-col>
    </mu-tabs>
</template>

<script>
export default {
  data() {
    return {
        value: 0,
        tabs: [
            {
                msg: '全部',
                value: '',
            },
             {
                msg: '精华',
                value: 'good'
            },
             {
                msg: '问答',
                value: 'ask'
            },
             {
                msg: '分享',
                value: 'share'
            },
             {
                msg: '招聘',
                value: 'job'
            },
             {
                msg: '测试',
                value: 'dev'
            },
        ]
    };
  },
  methods: {
      tabChange(tab) {
          this.$emit('tabChange', tab)
      }
  }
}

</script>

<style lang="less" scoped> 
.tab_contanier{
    flex: 1;
}
</style>
