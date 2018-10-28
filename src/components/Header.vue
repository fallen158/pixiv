<template>
    <div class="header">
        <div class="header_left"><i @click="back" class="el-icon-arrow-left"></i></div>
        <div class="header_content">{{name}}</div>
        <div></div>
    </div>
</template>

<script>
export default {
  props: ["name"],
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem;
  background-color: #409eff;
  color: #fff;
  margin-bottom: -0.05rem;
  &_content {
    font-size: 0.8rem;
  }
}
</style>