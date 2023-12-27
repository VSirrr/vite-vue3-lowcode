<script setup>
// import EditorHeader from './components/editor-header/index.vue'
import EditorLeft from './components/editor-left/index.vue'
import EditorRight from './components/editor-right/index.vue'
import EditorContent from './components/editor-content/index.vue'
</script>

<template>
  <el-container class="editor" direction="vertical">
    <!-- <editor-header @back="onBack" @save="saveData" /> -->
    <el-container class="editor-main">
      <editor-left />
      <el-container class="editor-container">
        <editor-content />
      </el-container>
      <editor-right />
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.editor {
  height: 100vh;
  background-color: #f1f1f1;

  &-main {
    height: calc(100vh - 60px);
  }

  &-container {
    position: relative;
    flex-shrink: 0;
    background-image: radial-gradient(rgba(9, 89, 194, 0.3) 6%, transparent 0),
      radial-gradient(#faf9f8 6%, transparent 0);
    background-size: 10px 10px;
    background-position:
      0 0,
      2px 2px;
  }
}
</style>
