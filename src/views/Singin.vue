<template>
   <div class="container">
        <div class="singinPage">
            <h2 class="singinPage_title">小青橙</h2>
            <form class="singinPage_form">
                <div class="row labels">
                    <label>
                        <input type="text"  @focus="getFocus" @blur="getBlur" class="input" placeholder="小青橙ID"  v-model="user">
                    </label><br>
                    <label>
                        <input type="password"  @focus="getFocus" @blur="getBlur" class="input" placeholder="密码"  v-model="pass">
                    </label>
                </div>
                <div class="row">
                    <el-button type="primary"  class="buttons" @click="singin">登录</el-button>
                </div>
                <router-link to="/singup" class="text">忘记了登录资料？</router-link>
                <div class="row">
                    <router-link to="/singup">
                        <el-button type="success" class="buttons2">未持有账号的用户请点这里</el-button>
                    </router-link>
                </div>
            </form>     
    </div>
   </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
      pass: null
    };
  },
  methods: {
    getFocus(e) {
      e.target.classList.add("active");
    },
    getBlur(e) {
      e.target.classList.remove("active");
    },
    singin() {
      let user = this.user;
      let pass = this.pass;

      let obj = JSON.parse(localStorage.getItem("PersonInfo"));

      if (obj) {
        for (let item of obj) {
          if (item.userName === user && item.userPass === pass) {
            this.$message({
              showClose: true,
              message: "登录成功",
              type: "success"
            });
            this.$router.push("/usercenter");
            this.$store.state.singin = true;
            this.$store.state.userName = user;
          } else {
            this.$message({
              showClose: true,
              message: "请输入正确的用户名或密码!",
              type: "error"
            });
          }
        }
      } else {
        this.$message({
          showClose: true,
          message: "用户不存在，请注册!",
          type: "error"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/_var.scss";
.container {
  height: 100vh;
  background: $singin-background;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.singinPage {
  width: 10rem;
  padding: 0.3rem 0.6rem;
  &_title {
    margin-bottom: 1rem;
  }
}

.row {
  .buttons {
    width: 100%;
    padding: 0.5rem 0;
    margin-top: 0.5rem;
  }
  .buttons2 {
    width: 100%;
    margin-top: 1.5rem;
    padding: 0.5rem 0;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
  }
}
.text {
  font-size: 0.4rem;
}
.labels {
  background: #fff;
  border-radius: 5px;
  padding: 0.2rem 0.4rem;
  .input {
    width: 100%;
    border: none;
    border-bottom: 1px solid $singin-background;
    margin: 0.4rem 0;
    padding: 0.15rem 0;
  }
  .input.active {
    border-bottom: 1px solid #2387c5;
  }
  .input.active::-webkit-input-placeholder {
    color: #2387c5;
  }
}
</style>