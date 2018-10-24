<template>
 <mu-card class="friend_container">
   <p class="friend_header">友情社区</p>
   <div class="friend_item_container">
     <div class="item" v-for="item in friend_item_data" :key="item.id">
       <a :href="item.hrefUrl" class="link" target="_blank">
         <img :src="item.imgUrl" alt="frien">
       </a>
     </div>
   </div>
 </mu-card>
</template>

<script>
export default {
  data() {
    return {
      friend_item_data: [
        {
          hrefUrl: "https://ruby-china.org/",
          imgUrl: "https://static2.cnodejs.org/public/images/ruby-china-20150529.png",
          id: 1
        },
        {
          hrefUrl: "http://golangtc.com/",
          imgUrl: "https://static2.cnodejs.org/public/images/golangtc-logo.png",
          id: 2
        },
        {
          hrefUrl: "http://phphub.org/",
          imgUrl: "https://static2.cnodejs.org/public/images/phphub-logo.png",
          id: 3
        },
        {
          hrefUrl: "https://testerhome.com/",
          imgUrl: "https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK",
          id: 4
        }
      ]
    };
  },
  components: {}
};
</script>

<style lang="less" scoped>
.friend_container {
  margin-top: 15px;
  .friend_header {
    margin: 0;
    padding: 10px 15px;
    color: #f50057;
    background: #fafafa;
    border-bottom: 2px solid #f50057;
  }

  .friend_item_container {
    padding: 10px;
  }
  .link {
    padding-right: 30px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
