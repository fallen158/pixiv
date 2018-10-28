<template>
    <div class="container">
        <div class="container_header">
            <span><i @click="back" class="el-icon-arrow-left"></i></span>
            <span class="title">注册账户</span>
        </div>
        <div class="container_content">
            <form class="form">
                <div class="row">
                    <label>
                        <input class="input" @focus="getFocus" @blur="getBlur" type="text" placeholder="小青橙ID"  v-model="user">
                    </label><br>
                    <label>
                        <input class="input" @focus="getFocus" @blur="getBlur" type="password" placeholder="密码"  v-model="pass">
                    </label>
                </div>
                <div class="row">
                    <el-button type="primary" :plain="true" :class="[{active:buttonActive},'buttons']"  @click="singUp">开始</el-button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      pass: "",
      inputActive: false,
      buttonActive: false
    };
  },
  methods: {
    getFocus(e) {
      e.target.classList.add("active");
    },
    getBlur(e) {
      e.target.classList.remove("active");
    },
    back() {
      this.$router.go(-1);
    },
    singUp() {
      let userName = this.user;
      let userPass = this.pass;
      let PersonInfo = {
        userName,
        userPass
      };

      if (this.user === "" || this.pass === "") {
        this.$message({
          showClose: true,
          message: "请输入正确的账号ID或密码!",
          type: "error"
        });
      } else {
        let storage = window.localStorage.getItem("PersonInfo");
        storage = storage ? JSON.parse(storage) : [];

        for (let i = 0; i < storage.length; i++) {
          if (this.user === storage[i].userName) {
            this.$message({
              showClose: true,
              message: "该账号已被他人注册!",
              type: "error"
            });
            return;
          }
        }

        storage.push(PersonInfo);
        window.localStorage.setItem("PersonInfo", JSON.stringify(storage));
        this.$message({
          showClose: true,
          message: "恭喜您,注册成功,已为您登录",
          type: "success"
        });
        this.$router.push("/usercenter");
        this.$store.state.singin = true;
        this.$store.state.userName = userName;
      }
    }
  },
  watch: {
    user(val, oldval) {
      if (val) {
        this.buttonActive = true;
      } else {
        this.buttonActive = false;
      }
    },
    pass(val, oldval) {
      if (val) {
        this.buttonActive = true;
      } else {
        this.buttonActive = false;
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
  &_header {
    font-size: 0.8rem;
    padding: 0.2rem;
    .title {
      margin-left: 0.8rem;
    }
  }
  &_content {
    width: 10rem;
    border: 1px solid;
    background: #fff;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.row {
  padding: 0.3rem 0.6rem;
  .input {
    border: none;
    border-bottom: 1px solid $singin-background;
    width: 100%;
    margin: 0.2rem 0;
    padding-bottom: 0.2rem;
  }
  .buttons {
    width: 100%;
    padding: 0.5rem 0;
    margin-bottom: 0.2rem;
    background: #9b9b9b;
    border: 1px solid #9b9b9b;
    color: #fff;
  }
  .input.active {
    // color: #2387c5;
    border-bottom: 1px solid #2387c5;
  }
  .input.active::-webkit-input-placeholder {
    color: #2387c5;
  }
  .buttons.active {
    border: 1px solid #409eff;
    background: #409eff;
  }
}
</style>