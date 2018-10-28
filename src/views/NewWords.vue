<template>
    <div class="newwords">
        <div class="title">
            <div class="header">
                <span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-heart-copy"></use>
                    </svg> 
                </span>
                <span class="text">会员专享</span>
            </div>
            <div></div>
        </div>
        <TwoCoumms :lists="lists"/>
    </div>
</template>

<script>
import TwoCoumms from "@/components/TwoCoumms.vue";
export default {
  components: {
    TwoCoumms
  },
  data() {
    return {
      lists: [
        {
          avatar: require("@/images/recommend11.jpg"),
          img: require("@/images/recommend11.jpg"),
          author: "K，Kanehira",
          Introduction: "大浮岛群起重港",
          count: "12.2K",
          reads: 107814,
          isLock:true,
          labels: [
            "高校のボク",
            "遅くなった三",
            "シング部",
            "山岸三國",
            "初めは軽",
            "徐々に転移先",
            "寮の門",
            "か持たなか",
            "ピエロ",
            "影響を及ぼしてい",
            "部に所属",
            "程が軽快",
            "人気もない校内"
          ],
          caption:
            "高校のボクシング部に所属する2年生の山岸三國。放課後の練習で遅くなった三國は、寮の門限に遅れてしまう。人気もない校内で出会ったのは、特進クラスに在席し、同じく寮生の千堂。慌てて寮へ戻ろうとする二人の前に現れたのは…。"
        },
        {
          avatar: require("@/images/avatar2.jpg"),
          img: require("@/images/recommend12.jpg"),
          author: "和武リバーベイ",
          Introduction: "女子スクール",
          count: "23K",
          reads: 238141,
          isLock:true,
          labels: [
            "地で働く",
            "遅くなった三",
            "プライベー",
            "山岸三國",
            "初めは軽",
            "ムを覗いて",
            "ほのぼの極道",
            "グ「うさひよ",
            "ピエロ",
            "清水アイが描",
            "部に所属",
            "ねことねこ",
            "ふもふギャグコメデ"
          ],
          caption:
            "世界各地で働くおっさん達の、プライベートねこタイムを覗いてみたら…？ほのぼの極道ギャグ「うさひよ」の清水アイが描く、ねことねこ好きメンズもふもふギャグコメディー！"
        },
        {
          avatar: require("@/images/avatar2.jpg"),
          img: require("@/images/recommend13.jpg"),
          author: "和武リバーベイ",
          Introduction: "女子スクール",
          count: "23K",
          reads: 238141,
          isLock:true,
          labels: [
            "地で働く",
            "遅くなった三",
            "プライベー",
            "山岸三國",
            "初めは軽",
            "ムを覗いて",
            "ほのぼの極道",
            "グ「うさひよ",
            "ピエロ",
            "清水アイが描",
            "部に所属",
            "ねことねこ",
            "ふもふギャグコメデ"
          ],
          caption:
            "世界各地で働くおっさん達の、プライベートねこタイムを覗いてみたら…？ほのぼの極道ギャグ「うさひよ」の清水アイが描く、ねことねこ好きメンズもふもふギャグコメディー！"
        },
        {
          avatar: require("@/images/avatar2.jpg"),
          img: require("@/images/recommend14.jpg"),
          author: "和武リバーベイ",
          Introduction: "女子スクール",
          count: "23K",
          reads: 238141,
          isLock:true,
          labels: [
            "地で働く",
            "遅くなった三",
            "プライベー",
            "山岸三國",
            "初めは軽",
            "ムを覗いて",
            "ほのぼの極道",
            "グ「うさひよ",
            "ピエロ",
            "清水アイが描",
            "部に所属",
            "ねことねこ",
            "ふもふギャグコメデ"
          ],
          caption:
            "世界各地で働くおっさん達の、プライベートねこタイムを覗いてみたら…？ほのぼの極道ギャグ「うさひよ」の清水アイが描く、ねことねこ好きメンズもふもふギャグコメディー！"
        },
        {
          avatar: require("@/images/avatar2.jpg"),
          img: require("@/images/recommend15.jpg"),
          author: "和武リバーベイ",
          Introduction: "女子スクール",
          count: "23K",
          reads: 238141,
          isLock:true,
          labels: [
            "地で働く",
            "遅くなった三",
            "プライベー",
            "山岸三國",
            "初めは軽",
            "ムを覗いて",
            "ほのぼの極道",
            "グ「うさひよ",
            "ピエロ",
            "清水アイが描",
            "部に所属",
            "ねことねこ",
            "ふもふギャグコメデ"
          ],
          caption:
            "世界各地で働くおっさん達の、プライベートねこタイムを覗いてみたら…？ほのぼの極道ギャグ「うさひよ」の清水アイが描く、ねことねこ好きメンズもふもふギャグコメディー！"
        },
        {
          avatar: require("@/images/avatar2.jpg"),
          img: require("@/images/recommend16.jpg"),
          author: "和武リバーベイ",
          Introduction: "女子スクール",
          count: "23K",
          reads: 238141,
          isLock:true,
          labels: [
            "地で働く",
            "遅くなった三",
            "プライベー",
            "山岸三國",
            "初めは軽",
            "ムを覗いて",
            "ほのぼの極道",
            "グ「うさひよ",
            "ピエロ",
            "清水アイが描",
            "部に所属",
            "ねことねこ",
            "ふもふギャグコメデ"
          ],
          caption:
            "世界各地で働くおっさん達の、プライベートねこタイムを覗いてみたら…？ほのぼの極道ギャグ「うさひよ」の清水アイが描く、ねことねこ好きメンズもふもふギャグコメディー！"
        },
        {
          avatar: require("@/images/avatar2.jpg"),
          img: require("@/images/recommend17.jpg"),
          author: "和武リバーベイ",
          Introduction: "女子スクール",
          count: "23K",
          reads: 238141,
          isLock:true,
          labels: [
            "地で働く",
            "遅くなった三",
            "プライベー",
            "山岸三國",
            "初めは軽",
            "ムを覗いて",
            "ほのぼの極道",
            "グ「うさひよ",
            "ピエロ",
            "清水アイが描",
            "部に所属",
            "ねことねこ",
            "ふもふギャグコメデ"
          ],
          caption:
            "世界各地で働くおっさん達の、プライベートねこタイムを覗いてみたら…？ほのぼの極道ギャグ「うさひよ」の清水アイが描く、ねことねこ好きメンズもふもふギャグコメディー！"
        },
        {
          avatar: require("@/images/avatar2.jpg"),
          img: require("@/images/recommend18.jpg"),
          author: "和武リバーベイ",
          Introduction: "女子スクール",
          count: "23K",
          reads: 238141,
          isLock:true,
          labels: [
            "地で働く",
            "遅くなった三",
            "プライベー",
            "山岸三國",
            "初めは軽",
            "ムを覗いて",
            "ほのぼの極道",
            "グ「うさひよ",
            "ピエロ",
            "清水アイが描",
            "部に所属",
            "ねことねこ",
            "ふもふギャグコメデ"
          ],
          caption:
            "世界各地で働くおっさん達の、プライベートねこタイムを覗いてみたら…？ほのぼの極道ギャグ「うさひよ」の清水アイが描く、ねことねこ好きメンズもふもふギャグコメディー！"
        },
        {
          avatar: require("@/images/avatar2.jpg"),
          img: require("@/images/recommend19.jpg"),
          author: "和武リバーベイ",
          Introduction: "女子スクール",
          count: "23K",
          reads: 238141,
          isLock:true,
          labels: [
            "地で働く",
            "遅くなった三",
            "プライベー",
            "山岸三國",
            "初めは軽",
            "ムを覗いて",
            "ほのぼの極道",
            "グ「うさひよ",
            "ピエロ",
            "清水アイが描",
            "部に所属",
            "ねことねこ",
            "ふもふギャグコメデ"
          ],
          caption:
            "世界各地で働くおっさん達の、プライベートねこタイムを覗いてみたら…？ほのぼの極道ギャグ「うさひよ」の清水アイが描く、ねことねこ好きメンズもふもふギャグコメディー！"
        },
        {
          avatar: require("@/images/avatar2.jpg"),
          img: require("@/images/recommend20.jpg"),
          author: "和武リバーベイ",
          Introduction: "女子スクール",
          count: "23K",
          reads: 238141,
          isLock:true,
          labels: [
            "地で働く",
            "遅くなった三",
            "プライベー",
            "山岸三國",
            "初めは軽",
            "ムを覗いて",
            "ほのぼの極道",
            "グ「うさひよ",
            "ピエロ",
            "清水アイが描",
            "部に所属",
            "ねことねこ",
            "ふもふギャグコメデ"
          ],
          caption:
            "世界各地で働くおっさん達の、プライベートねこタイムを覗いてみたら…？ほのぼの極道ギャグ「うさひよ」の清水アイが描く、ねことねこ好きメンズもふもふギャグコメディー！"
        },
        { img: require("../images/avatar1.jpg"),isLock:true, },
        { img: require("../images/avatar2.jpg"),isLock:true, },
        { img: require("../images/avatar3.jpg"),isLock:true, },
        { img: require("../images/avatar4.jpg"),isLock:true, },
        { img: require("../images/avatar5.jpg"),isLock:true, },
        { img: require("../images/avatar6.jpg"),isLock:true, }
      ]
    };
  },
  methods: {
    addActive(e) {
      if (e.target.classList[0]) {
        e.target.classList.remove("active");
      } else {
        e.target.classList.add("active");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.newwords {
   margin-bottom: 2.1rem;
  .title {
    display: flex;
    justify-content: space-between;
    font-size: 0.6rem;
    padding: 0.2rem 0.2rem;
    .header {
      margin: 0.2rem 0 -0.1rem 0;
      display: flex;
      align-items: center;
      .icon {
        width: 0.8rem;
        height: 0.8rem;
      }
      .text {
        margin-bottom: 0.2rem;
      }
    }
  }
}
</style>