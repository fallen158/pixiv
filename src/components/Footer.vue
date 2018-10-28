<template>
    <div class="tables" v-show="isTables">
        <div class="footer">
            <div :class="['row',{active:currentNumber === index}]" v-for="(table,index) in tables" :key="table.id" @click="addActive(index)">
                <router-link :to="table.url">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="table.icon"></use>
                    </svg>
                </router-link>
                <div>{{table.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isTables: true,
      tables: [
        {
          icon: "#icon-zhuye",
          url: "/home",
          name: "主页"
        },
        {
          icon: "#icon-fangdajing",
          url: "/findmore",
          name: "发现"
        },
        {
          icon: "#icon-font_ZHYQ",
          url: "/newworks",
          name: "新作"
        },
        {
          icon: "#icon-zhuye",
          url: "/usercenter",
          name: "个人首页"
        }
      ],
      currentNumber: 0
    };
  },
  methods: {
    addActive(index) {
      this.currentNumber = index;
    }
  },
  watch: {
    $route(to, from) {
      if (
        to.path === "/home" ||
        to.path === "/usercenter" ||
        to.path === "/newworks" ||
        to.path === "/findmore"
      ) {
        this.isTables = true;
      } else {
        this.isTables = false;
      }
      if (to.path === "/findmore") {
        this.currentNumber = 1;
      }
    }
  },
  created() {
    let hash = location.hash;
    switch (hash) {
      case "#/home":
        this.currentNumber = 0;
        break;
      case "#/findmore":
        this.currentNumber = 1;
        break;
      case "#/newworks":
        this.currentNumber = 2;
        break;
      case "#/usercenter":
        this.currentNumber = 3;
        break;
      default:
        this.isTables = false;
        break;
    }
  }
};
</script>

<style lang="scss" scoped>
.tables {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.footer {
  background: #2d333b;
  display: flex;
  justify-content: space-around;
  .row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 0.4rem;
    padding: 0.25rem 0;
    div {
      margin-top: -0.1rem;
      color: #929292;
    }
    .icon {
      fill: #788b96;
      width: 2em;
      height: 2em;
      vertical-align: -0.15em;
      overflow: hidden;
    }
  }
  .row.active {
    .icon {
      fill: #fff;
    }
    div {
      color: #fff;
    }
  }
}
</style>