<template>
  <div>
    <mu-paper :z-depth="1" class="demo-list-wrap" v-if="NetWork_err">
      <Loading :loading="dataList.length == 0" />
      <List :list="dataList" />
      <Pageination @changePage="changePage" v-if="list.length > 0"></Pageination>
    </mu-paper>
    <div v-else>
      啊哦，网络出错了
    </div>
  </div>
</template>

<script>
import Loading from "../loading";
import Pageination from "../pagination";
import { get } from "../../assets/util/util";
import List from "./list";

export default {
  data() {
    return {
      loading: true,
      NetWork_err: true,
      dataList: []
    };
  },
  props: {
    tab: {
      type: String,
      default: ""
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    tab(val1, va2) {
      this._getDate(1, val1);
    },
    list(newValue) {
      this.dataList = newValue
    }
  },
  methods: {
    changePage(page) {
      this._getDate(page.current);
    },
    _getDate(page = 1, tab = this.tab) {
      let params = { page, limit: 15 };
      if (tab) {
        params.tab = tab;
      }
      get("/topics", params)
        .then(res => {
          this.dataList = res.data;
          this.$nextTick(() => (this.loading = false));
        })
        .catch(e => {
          this.NetWork_err = false;
          this.$toast.message("emmm 出错了");
        });
    }
  },
  components: {
    Loading,
    Pageination,
    List
  }
};
</script>

<style lang='less' scoped>
</style>
