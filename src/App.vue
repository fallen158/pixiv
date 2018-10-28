<template>
  <div id="app">
    <div class="opening_anmition" v-show="isEnter">
      <div class="title">小青橙</div>
    </div> 
   <router-view v-show="isAnimation"/>
    <!-- <router-view/> -->
    <Footer/>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {
      isEnter: true,
      isAnimation: false
    };
  },
  components: {
    Footer
  },
  created() {
    let time = setInterval(() => {
      this.isEnter = false;
      this.isAnimation = true
      clearInterval(time);
    }, 2500);
  }
};
</script>
<style lang="scss">
@import "@/style/reset.scss";

.opening_anmition {
  background: #409eff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  transition: all 1s;
  .title {
    animation: bounce-in 1s;
    animation-iteration-count: 2;
  }
}

@keyframes bounce-in {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(3);
  }
  100% {
    transform: scale(1);
  }
}
</style>
