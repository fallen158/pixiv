<template>
    <div class="more_works">
      <Header :name="lists.name"/>
        <TwoCoumms :lists="lists.maxImage"/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import TwoCoumms from '@/components/TwoCoumms.vue';
export default {
  components:{
    Header,TwoCoumms
  },
  data() {
    return {
      lists: []
    };
  },
  created() {
    this.lists = this.$store.state.props
  }
};
</script>

<style lang="scss" scoped>
</style>