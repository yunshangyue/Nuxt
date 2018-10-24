<template>
    <div class="editor_container">
        <textarea ref="editor"></textarea>
        <mu-button color="#1565c0" @click="upContent">提交</mu-button>
    </div>
</template>

<script>
import axios from 'axios'


export default {
  data() {
    return {
      editor: {},
      initValue: "this is title"
    };
  },
  mounted() {
    this.editor = new Editor({
      element: this.$refs.editor
    });
    // editor.render()
  },
  methods: {
      upContent() {
          this.$emit('mdContent', this.editor.codemirror.getValue())
      }
  },
};
</script>

<style lang="less" scoped>
.editor_container {
  padding:10px 15px;
}
</style>
