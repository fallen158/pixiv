<template>
    <div>
        <Header :name="name"/>
        <h1>视频列表</h1>
        渲染视频
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  },
  data() {
    return {
        name:'人气视频'
    };
  }
};
</script>

<style scoped>
</style>