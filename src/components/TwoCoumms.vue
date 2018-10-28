<template>
    <div class="tweo_coumms">
         <ul class="center">
            <li v-for="list in lists" :key="list.id">
              <router-link  :to="{
                  path:'/leaderboard/works',
                  name:'works',
                  params: [list]
                }">
                  <img v-lazy="list.img" alt="" style="width:100%;height:100%;">
                </router-link>
               <LoveCollection :images="list"/>
                <div class="lock" v-show="list.isLock" @click="tipsLabe">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-icon-test"></use>
                    </svg>  
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import LoveCollection from "@/components/LoveCollection.vue";
export default {
  props: ["lists"],
  components: {
    LoveCollection
  },
  methods: {
    addActive(e) {
      if (e.target.classList[0]) {
        e.target.classList.remove("active");
      } else {
        e.target.classList.add("active");
      }
    },
    tipsLabe() {
      this.$message({
        showClose: true,
        message: "请先升级为高级会员",
        type: "error"
      });
    }
  },
  created(){
    let isMedlem = this.$store.state.isMedlem
    if(isMedlem){
       this.lists.map(item=>{
         item.isLock = false
      })
      console.log('高级会员解锁')
    }else{
      console.log('不是高级会员')
      return
    }
  }
};
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  li {
    width: 49.5%;
    height: 9rem;
    margin: 0.1rem 0;
    position: relative;
  }
}
.lock {
  position: absolute;
  color: red;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
}
.love {
  position: absolute;
  right: 0.2rem;
  bottom: 0;
  .icon {
    width: 1rem;
    height: 1rem;
    .active {
      fill: #f5806c;
    }
  }
}
</style>