<template>
    <div>
        <Header :name="name"/>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  data() {
    return {
      name: "浏览记录"
    };
  },
  components: {
    Header
  }
};
</script>

<style scoped>
</style>