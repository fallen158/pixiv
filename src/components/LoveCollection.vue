<template>
    <div class="love" @click="addActive">
        <svg class="icon" @click="storageImages(images)" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path  d="M729.068827 119.55798c-94.686523 0-176.905082 48.314379-217.069851 118.640074-40.163745-70.325695-122.382305-118.640074-217.044268-118.640074-143.767358 0-229.665727 123.660414-229.665727 243.219417 0 283.128359 415.870616 527.841803 433.576883 538.126031 4.062526 2.363837 8.584516 3.538593 13.132088 3.538593 4.547573 0 9.070586-1.174756 13.132088-3.538593 17.706267-10.283204 433.576883-254.997672 433.576883-538.126031C958.708971 243.218394 872.811626 119.55798 729.068827 119.55798z" /></svg>
    </div>
</template>

<script>
export default {
  props: ["images"],
  data() {
    return {
      isCollection: false,
      isSingin: false
    };
  },
  methods: {
    addActive(e) {
      if (this.isSingin) {
        if (e.target.classList[0]) {
          e.target.classList.remove("active");
          this.isCollection = false;
        } else {
          e.target.classList.add("active");
          this.isCollection = true;
        }
      } else {
        this.$message({
          showClose: true,
          message: "请先登录再进行收集",
          type: "error"
        });
      }
    },
    storageImages(images) {
      if (this.isSingin) {
        let storage = window.localStorage.getItem("collection");
        storage = storage ? JSON.parse(storage) : [];
        if (this.isCollection) {
          console.log("取消刚刚收藏的图片");
          storage.pop(images);
          window.localStorage.setItem("collection", JSON.stringify(storage));
        } else {
          console.log(storage.length);
          if (storage.length === 0) {
            storage.push(images);
            window.localStorage.setItem("collection", JSON.stringify(storage));
          } else {
            for (let i = 0; i < storage.length; i++) {
              if (images.img === storage[i].img) {
                this.$message({
                  showClose: true,
                  message: "该图片已被收集",
                  type: "error"
                });
                return;
              }
            }
            this.$message({
              showClose: true,
              message: "收集成功",
              type: "success"
            });
            storage.push(images);
            window.localStorage.setItem("collection", JSON.stringify(storage));
          }
        }
      }
    }
  },
  created() {
    if (this.$store.state.singin) {
      this.isSingin = true;
    } else {
      this.isSingin = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.love {
  position: absolute;
  right: 0;
  bottom: 0;
}
.icon {
  width: 1rem;
  height: 1rem;
  fill:#fff;
  stroke: #6ba6a6;
  stroke-width:30px;
  .active {
    fill: #f5806c;
      stroke: #f5806c;
    

  }
}
</style>