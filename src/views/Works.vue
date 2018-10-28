<template>
    <div class="works">
        <div class="works_back" @click="back">
          <svg class="icon" aria-hidden="true">
              <use  xlink:href="#icon-fanhui1"></use>
          </svg> 
        </div>
        <figure class="works_header">
            <img :src="lists.img" alt="" style="height:100%;width:100%;">
        </figure>
        <div class="works_center">
            <div class="title">
                 <div class="title_avatar">
                    <img :src="lists.avatar" alt="头像" style="width:100%;height:100%;">
                  </div>
                  <div class="title_center">
                    <div><b>{{lists.Introduction}}</b></div>
                    <div class="author">{{lists.author}}</div>
                  </div>
            </div>
            <div class="present">
                <span>{{newTime}}</span>
                <span><span class="reads">{{lists.reads}}</span>阅读量</span>
                <span><span class="count">{{lists.count}}</span>喜欢!</span>
            </div>
            <div class="label">
              <el-tag class="description" type="info" v-for="list in lists.labels" :key="list.id">{{list}}</el-tag>
            </div>
            <div class="caption">
              {{lists.caption}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      lists: []
    };
  },
  created() {
    this.lists = this.$route.params[0];
  },
  computed: {
    newTime() {
      var myDate = new Date();
      let Moth = myDate.getMonth();
      Moth = parseInt(Moth + 1);
      return (
        myDate.getFullYear() +
        "-" +
        Moth +
        "-" +
        myDate.getDate() +
        " " +
        myDate.getHours() +
        ":" +
        myDate.getMinutes()
      );
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.works_header {
  height: 16rem;
}
.works_back {
  position: fixed;
  top: 0.5rem;
  left: 0.5rem;
  .icon{
    width: 1rem;
    height: 1rem;
    fill: #fff;
    stroke: gray;
    stroke-width: 10px;
  }
}
.works_center {
  padding: 0.3rem 0.4rem;
  .title {
    display: flex;
    align-items: center;
    font-size: 0.5rem;
    &_avatar {
      width: 1rem;
      height: 1rem;
      img {
        border-radius: 50%;
      }
    }
    &_center {
      margin-left: 0.3rem;
    }
    .author {
      color: #a2a2a2;
      font-size: 0.4rem;
    }
  }
  .present {
    color: #9ba9a9;
    font-size: 0.4rem;
    font-weight: 600;
    margin-top: 0.2rem;
    .reads {
      margin: 0 0.1rem 0 0.4rem;
      color: #678a86;
    }
    .count {
      margin: 0 0.1rem 0 0.4rem;
      color: #2c9af9;
    }
  }
  .label {
    margin-left: -0.2rem;
    .description {
      margin-left: 0.2rem;
      color: #5d5d5d;
      background: #eee;
      border: 1px solid #eee;
      font-weight: 600;
      border-radius: 6px;
    }
  }
  .caption {
    margin-top: 0.3rem;
    font-size: 0.6rem;
    color: #535257;
    font-weight: 500;
    margin-left: 0.2rem;
  }
}
</style>