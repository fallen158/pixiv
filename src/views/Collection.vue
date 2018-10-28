<template>
    <div class="collection">
        <Header :name="name"/>
        <ul>
          <li v-for="list in lists" :key="list.id">
            <img :src="list.img" alt="" style="width:100%;height:100%;">
            <div class="love">
                <svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M729.068827 119.55798c-94.686523 0-176.905082 48.314379-217.069851 118.640074-40.163745-70.325695-122.382305-118.640074-217.044268-118.640074-143.767358 0-229.665727 123.660414-229.665727 243.219417 0 283.128359 415.870616 527.841803 433.576883 538.126031 4.062526 2.363837 8.584516 3.538593 13.132088 3.538593 4.547573 0 9.070586-1.174756 13.132088-3.538593 17.706267-10.283204 433.576883-254.997672 433.576883-538.126031C958.708971 243.218394 872.811626 119.55798 729.068827 119.55798z" fill="#f5806c" /></svg>
              </div>
          </li>
        </ul>
        <div v-show="isPrompt" class="isPrompt">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sdglogo" fill="#6ba6a6"></use>
          </svg> 
          <div class="message">没有收集图片,快去收集吧!</div>
        </div>
        <div v-show="isSingin" class="isSingin">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sdglogo" fill="#6ba6a6"></use>
          </svg> 
          <div class="message">没有图片,请先登陆!</div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  data() {
    return {
      name: "收集",
      isPrompt: false,
      lists: [],
      isSingin: false
    };
  },
  components: {
    Header
  },
  created() {
    if (this.$store.state.singin) {
      console.log("登录成功过");
      let store = window.localStorage.getItem("collection");
      if (store) {
        store = JSON.parse(store);
        this.lists = store;
      } else {
        this.isPrompt = true;
      }
    } else {
      this.isSingin = true;
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  li {
    width: 49.5%;
    height: 8rem;
    margin: 0.1rem 0;
    position: relative;
    .love {
      position: absolute;
      right: 0.2rem;
      bottom: -0.1rem;
      .icon {
        width: 1rem;
        height: 1rem;
      }
    }
  }
}
.isSingin,.isPrompt{
  display: flex;
  flex-direction:column;
  align-items:center; 
  color:#6ba6a6;
   margin-top: 50%;
   .message{
     margin-top: 0.4rem;
   }
}
</style>