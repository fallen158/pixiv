<template>
    <div>
        <Header :name="name"/>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  data(){
    return{
      name:'图片'
    }
  },
  components: {
    Header
  }
};
</script>

<style scoped>
</style>