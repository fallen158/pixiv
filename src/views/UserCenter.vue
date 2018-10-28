<template>
    <div class="leaderboard">
        <header class="head">
            <div class="head_title">
                <div class="users">
                  <i class="el-icon-info"></i>
                  <div class="userName">{{userName}}</div>
                </div>
                <div v-if="this.$store.state.singin">
                  <el-button size="mini" type="danger" @click="singOut" class="user_singOut">退出</el-button>
                </div>
            </div>
            <div class="head_center">
                <router-link to="/singin" v-if="!this.$store.state.singin">
                  <el-button type="primary"  class="user_singin">登录</el-button>
                </router-link>
                <el-button v-else class="medlem" @click="upgradeMedlem">升级小青橙高级会员</el-button>
            </div>
        </header>
        <main>
            <ul class="main_center">
                <li v-for="list in lists" :key="list.id" class="list">
                    <div class="list_left">
                        <span class="leftIcon"><i :class="list.icon"></i></span>
                        <span class="leftName">{{list.name}}</span>
                    </div>
                    <div class="list_right">
                        <router-link :to="list.path">
                            <i :class="list.right"></i>
                        </router-link>
                    </div>
                </li>
            </ul>
        </main>
    </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          name: "图片",
          icon: "el-icon-picture",
          path: "/leaderboard/image",
          right: "el-icon-arrow-right"
        },
        {
          name: "收集",
          icon: "el-icon-star-on",
          path: "/leaderboard/collection",
          right: "el-icon-arrow-right"
        },
        {
          name: "浏览记录",
          icon: "el-icon-time",
          path: "/leaderboard/recording",
          right: "el-icon-arrow-right"
        },
        {
          name: "书签",
          icon: "el-icon-document",
          path: "/leaderboard/bokmark",
          right: "el-icon-arrow-right"
        }
      ]
    };
  },
  computed: {
    userName() {
      return this.$store.state.userName || "未登录";
    }
  },
  methods: {
    singOut() {
      this.$message({
        showClose: true,
        message: "退出成功",
        type: "success"
      });
      this.$store.state.singin = false;
      this.$store.state.userName = "未登录";
    },
    upgradeMedlem() {
      this.$router.push("/medlemplay");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/_var.scss";

.leaderboard {
  height: 100vh;
  background: $leaderboard-background;
  font-size: 0.8rem;
}
.head {
  background: #51575f;
  &_title {
    display: flex;
    justify-content: space-between;
    color: #fff;
    padding: 0.5rem 0.75rem 0.2rem 0.75rem;
    .users {
      display: flex;
      align-items: center;
    }
    .el-icon-info {
      font-size: 1.5rem;
    }
    .userName {
      margin-left: 0.3rem;
    }
    .user_singOut {
    }
  }
  &_center {
    padding: 0 0.75rem 0.5rem 0.75rem;
    .user_singin {
      width: 100%;
      padding: 0.3rem 0;
    }
    .medlem {
      width: 100%;
      border: 1px solid #da9391;
      color: #da9391;
      padding: 0.3rem 0;
    }
  }
}
.main_center {
  margin: 0.8rem 0;
  border-top: 0.5px solid $leaderboard-border;
  background: #fff;
}
.list {
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0.75rem;
  border-bottom: 1px solid $leaderboard-border;
  &_left {
    .leftIcon {
      color: $leaderboard-left-icon;
    }
    .leftName {
      margin-left: 0.7rem;
    }
  }
  &_right {
    color: $leaderboard-right-icon;
  }
}
</style>