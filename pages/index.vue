<template>
  <mu-container class="main_container">
    <mu-row gutter>
      <mu-col sm="12" md="12" lg="9" xl="9">
        <mu-card :raised="true">
          <Tabs @tabChange="tabChange" />
          <TabContent :tab="tab" :list="list"></TabContent>
        </mu-card>
      </mu-col>
      <indexAside></indexAside>
    </mu-row>
  </mu-container>
</template>

<script>
import axios from 'axios'
import indexAside from "../components/index/index_aside";
import TabContent from "../components/index/tabContent";
import Tabs from '../components/index/tabs'
import { get } from "../assets/util/util";



export default {

  data() {
    return {
      tab: "",
      list: []
    };
  },
  methods: {
    _getDate(page = 1, tab = this.tab) {
      let params = { page, limit: 15 };
      if (tab) {
        params.tab = tab;
      }
      get("/topics", params)
        .then(res => {
          this.list = res.data;
        })
        .catch(e => {
          this.$toast.message("emmm 出错了");
        });
    },
    tabChange(tab) {
      this.tab = tab
      // this._getDate(1, tab);
    },
  },
  created() {
    this._getDate();
  },
  components: {
    indexAside,
    Tabs,
    TabContent
  }
};
</script>

<style lang='less' scoped>
.main_container {
  margin-top: 90px;
}
</style>
