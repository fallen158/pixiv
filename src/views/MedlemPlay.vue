<template>
    <div class="MedlemPlay">
        <Header :name="name"/>
        <main class="main">
            <div>小青橙高级会员</div>
            <div class="pirce">￥10.00</div>
            <div>
              <el-button type="success" class="play" @click="play">立即支付</el-button>
            </div>
        </main>
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
      name: "会员支付"
    };
  },
  methods:{
    play(){
      alert('调苹果支付接口')
    }
  }
};
</script>

<style lang="scss" scoped>
.main{
  display:flex;
  flex-direction:column;
  align-items: center;
  text-align: center;
  margin-top: 1rem;
  font-size: 0.8rem;
  .pirce{
    font-size: 1.4rem;
  }
  .play{
    margin-top: 3rem;
    padding: 0.5rem 4rem;
  }
}
</style>