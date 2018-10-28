<template>
    <div class="findmore">
        <div class="findmore_header" v-for="prop in props" :key="prop.id">
            <router-link  @click.native="setMaxImage(prop)" :to="{
                  path:'findmore/works',
                  name:'moreWorks'
                }">
              <img v-lazy="prop.img" alt="" style="width:100%;height:100%;">
            </router-link>
            <div class="findmore_name">{{prop.name}}</div>
        </div>
        <ul class="findmore_center">
            <li v-for="list in lists" :key="list.id">
                <router-link @click.native="setMaxImage(list)" :to="{
                  path:'findmore/works',
                  name:'moreWorks'
                }">
                  <img v-lazy="list.img" alt="" style="width:100%;height:100%;">
                </router-link>
                <div class="list_name">{{list.name}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      props: [
        {
          img: require("../images/avatar10.jpg"),
          name: "VOCALOID",
          maxImage: [
            {
              avatar: require("@/images/avatar1.jpg"),
              img: require("@/images/WechatIMG1.jpg"),
              author: "K，Kanehira",
              Introduction: "大浮岛群起重港",
              count: "12.2K",
              reads: 107814,
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
              img: require("@/images/WechatIMG2.jpg"),
              author: "和武リバーベイ",
              Introduction: "女子スクール",
              count: "23K",
              reads: 238141,
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
              avatar: require("@/images/avatar3.jpg"),
              img: require("@/images/WechatIMG3.jpg"),
              author: "河CY",
              Introduction: "チャーム姬",
              count: "6K",
              reads: 98501,
              labels: [
                "生序",
                "姬",
                "大きな浮島",
                "重い港",
                "初めは軽",
                "徐々に転移先",
                "巫女",
                "か持たなか",
                "ピエロ",
                "影響を及ぼしてい",
                "恐ろしい生き物",
                "程が軽快",
                "ヒッピの笑顔"
              ],
              caption:
                "・初めは軽い考えしか持たなかったJK主人公が、徐々に転移先の世界で自分の影響を及ぼしていく過程が軽快！"
            }
          ]
        }
      ],
      lists: [
        {
          img: require("../images/avatar1.jpg"),
          name: "足指",
          maxImage: [
            {
              avatar: require("@/images/avatar1.jpg"),
              img: require("@/images/WechatIMG1.jpg"),
              author: "K，Kanehira",
              Introduction: "大浮岛群起重港",
              count: "12.2K",
              reads: 107814,
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
              img: require("@/images/WechatIMG2.jpg"),
              author: "和武リバーベイ",
              Introduction: "女子スクール",
              count: "23K",
              reads: 238141,
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
              avatar: require("@/images/avatar3.jpg"),
              img: require("@/images/WechatIMG3.jpg"),
              author: "河CY",
              Introduction: "チャーム姬",
              count: "6K",
              reads: 98501,
              labels: [
                "生序",
                "姬",
                "大きな浮島",
                "重い港",
                "初めは軽",
                "徐々に転移先",
                "巫女",
                "か持たなか",
                "ピエロ",
                "影響を及ぼしてい",
                "恐ろしい生き物",
                "程が軽快",
                "ヒッピの笑顔"
              ],
              caption:
                "・初めは軽い考えしか持たなかったJK主人公が、徐々に転移先の世界で自分の影響を及ぼしていく過程が軽快！"
            }
          ]
        },
        {
          img: require("../images/avatar2.jpg"),
          name: "风景",
          maxImage: [
            {
              avatar: require("@/images/avatar4.jpg"),
              img: require("@/images/WechatIMG4.jpg"),
              author: "SUEUN",
              Introduction: "凛然",
              count: "13.2K",
              reads: 497502,
              labels: [
                "奇怪な事件",
                "めに僧侶は",
                "中の僧",
                "重い港",
                "とある寺院",
                "徐々に転移先",
                "巫女",
                "その道のエキス",
                "ピエロ",
                "影響を及ぼしてい",
                "パートに助",
                "程が軽快",
                "そのエキスパー"
              ],
              caption:
                "修行中の僧が遭遇した奇怪な事件。その解決のために僧侶は、とある寺院を訪ね、その道のエキスパートに助力を願うが、そのエキスパートというのが…。"
            },
            {
              avatar: require("@/images/avatar5.jpg"),
              img: require("@/images/WechatIMG5.jpg"),
              author: "リバーベイ",
              Introduction: "友人结婚式三次会",
              count: "28K",
              reads: 738141,
              labels: [
                "化の明治",
                "する目を持",
                "大きな浮島",
                "賭け金",
                "初めは軽",
                "徐々に転移先",
                "裏花札賭博",
                "か持たなか",
                "ピエロ",
                "へ連行される",
                "恐ろしい生き物",
                "程が軽快",
                "る目を持つ少年"
              ],
              caption:
                "文明開化の明治9年・横浜。見たモノ全てを記憶する目を持つ少年・柳は父親の借金のカタに己の身体を賭け金にする裏花札賭博『水郷楼』へ連行される。敗北は死。竦む博徒たちの中、柳だけがその戦慄に微笑む…。"
            },
            {
              avatar: require("@/images/avatar6.jpg"),
              img: require("@/images/WechatIMG6.jpg"),
              author: "cccpo",
              Introduction: "今期",
              count: "32K",
              reads: 2398141,
              labels: [
                "有名なお化",
                "こには噂通り",
                "大きな浮島",
                "高原八千穂",
                "な異形",
                "徐々に転移先",
                "していた",
                "か持たなか",
                "不明の母親",
                "常世と",
                "恐ろしい生き物",
                "程が軽快",
                "なるのだ"
              ],
              caption:
                "町はずれの有名なお化け屋敷に引っ越してきた女子高生・高原八千穂。そこには噂通り様々な異形のもの達が存在していた…！行方不明の母親を探す鍵「黄泉の書」を求めて、八千穂は屋敷に棲む常世と現世の渡し場を管理する精霊・モロの手伝いをする事になるのだが…!? "
            }
          ]
        },
        {
          img: require("../images/avatar3.jpg"),
          name: "少女前线",
          maxImage: [
            {
              avatar: require("@/images/avatar4.jpg"),
              img: require("@/images/WechatIMG4.jpg"),
              author: "SUEUN",
              Introduction: "凛然",
              count: "13.2K",
              reads: 497502,
              labels: [
                "奇怪な事件",
                "めに僧侶は",
                "中の僧",
                "重い港",
                "とある寺院",
                "徐々に転移先",
                "巫女",
                "その道のエキス",
                "ピエロ",
                "影響を及ぼしてい",
                "パートに助",
                "程が軽快",
                "そのエキスパー"
              ],
              caption:
                "修行中の僧が遭遇した奇怪な事件。その解決のために僧侶は、とある寺院を訪ね、その道のエキスパートに助力を願うが、そのエキスパートというのが…。"
            },
            {
              avatar: require("@/images/avatar5.jpg"),
              img: require("@/images/WechatIMG5.jpg"),
              author: "リバーベイ",
              Introduction: "友人结婚式三次会",
              count: "28K",
              reads: 738141,
              labels: [
                "化の明治",
                "する目を持",
                "大きな浮島",
                "賭け金",
                "初めは軽",
                "徐々に転移先",
                "裏花札賭博",
                "か持たなか",
                "ピエロ",
                "へ連行される",
                "恐ろしい生き物",
                "程が軽快",
                "る目を持つ少年"
              ],
              caption:
                "文明開化の明治9年・横浜。見たモノ全てを記憶する目を持つ少年・柳は父親の借金のカタに己の身体を賭け金にする裏花札賭博『水郷楼』へ連行される。敗北は死。竦む博徒たちの中、柳だけがその戦慄に微笑む…。"
            },
            {
              avatar: require("@/images/avatar6.jpg"),
              img: require("@/images/WechatIMG6.jpg"),
              author: "cccpo",
              Introduction: "今期",
              count: "32K",
              reads: 2398141,
              labels: [
                "有名なお化",
                "こには噂通り",
                "大きな浮島",
                "高原八千穂",
                "な異形",
                "徐々に転移先",
                "していた",
                "か持たなか",
                "不明の母親",
                "常世と",
                "恐ろしい生き物",
                "程が軽快",
                "なるのだ"
              ],
              caption:
                "町はずれの有名なお化け屋敷に引っ越してきた女子高生・高原八千穂。そこには噂通り様々な異形のもの達が存在していた…！行方不明の母親を探す鍵「黄泉の書」を求めて、八千穂は屋敷に棲む常世と現世の渡し場を管理する精霊・モロの手伝いをする事になるのだが…!? "
            }
          ]
        },
        {
          img: require("../images/avatar4.jpg"),
          name: "背景",
          maxImage: [
            {
              avatar: require("@/images/avatar1.jpg"),
              img: require("@/images/WechatIMG1.jpg"),
              author: "K，Kanehira",
              Introduction: "大浮岛群起重港",
              count: "12.2K",
              reads: 107814,
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
              img: require("@/images/WechatIMG2.jpg"),
              author: "和武リバーベイ",
              Introduction: "女子スクール",
              count: "23K",
              reads: 238141,
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
              avatar: require("@/images/avatar3.jpg"),
              img: require("@/images/WechatIMG3.jpg"),
              author: "河CY",
              Introduction: "チャーム姬",
              count: "6K",
              reads: 98501,
              labels: [
                "生序",
                "姬",
                "大きな浮島",
                "重い港",
                "初めは軽",
                "徐々に転移先",
                "巫女",
                "か持たなか",
                "ピエロ",
                "影響を及ぼしてい",
                "恐ろしい生き物",
                "程が軽快",
                "ヒッピの笑顔"
              ],
              caption:
                "・初めは軽い考えしか持たなかったJK主人公が、徐々に転移先の世界で自分の影響を及ぼしていく過程が軽快！"
            }
          ]
        },
        {
          img: require("../images/avatar5.jpg"),
          name: "宝多六花",
          maxImage: [
            {
              avatar: require("@/images/avatar1.jpg"),
              img: require("@/images/WechatIMG1.jpg"),
              author: "K，Kanehira",
              Introduction: "大浮岛群起重港",
              count: "12.2K",
              reads: 107814,
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
              img: require("@/images/WechatIMG2.jpg"),
              author: "和武リバーベイ",
              Introduction: "女子スクール",
              count: "23K",
              reads: 238141,
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
              avatar: require("@/images/avatar3.jpg"),
              img: require("@/images/WechatIMG3.jpg"),
              author: "河CY",
              Introduction: "チャーム姬",
              count: "6K",
              reads: 98501,
              labels: [
                "生序",
                "姬",
                "大きな浮島",
                "重い港",
                "初めは軽",
                "徐々に転移先",
                "巫女",
                "か持たなか",
                "ピエロ",
                "影響を及ぼしてい",
                "恐ろしい生き物",
                "程が軽快",
                "ヒッピの笑顔"
              ],
              caption:
                "・初めは軽い考えしか持たなかったJK主人公が、徐々に転移先の世界で自分の影響を及ぼしていく過程が軽快！"
            }
          ]
        },
        {
          img: require("../images/avatar6.jpg"),
          name: "黑发",
          maxImage: [
            {
              avatar: require("@/images/avatar1.jpg"),
              img: require("@/images/WechatIMG1.jpg"),
              author: "K，Kanehira",
              Introduction: "大浮岛群起重港",
              count: "12.2K",
              reads: 107814,
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
              img: require("@/images/WechatIMG2.jpg"),
              author: "和武リバーベイ",
              Introduction: "女子スクール",
              count: "23K",
              reads: 238141,
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
              avatar: require("@/images/avatar3.jpg"),
              img: require("@/images/WechatIMG3.jpg"),
              author: "河CY",
              Introduction: "チャーム姬",
              count: "6K",
              reads: 98501,
              labels: [
                "生序",
                "姬",
                "大きな浮島",
                "重い港",
                "初めは軽",
                "徐々に転移先",
                "巫女",
                "か持たなか",
                "ピエロ",
                "影響を及ぼしてい",
                "恐ろしい生き物",
                "程が軽快",
                "ヒッピの笑顔"
              ],
              caption:
                "・初めは軽い考えしか持たなかったJK主人公が、徐々に転移先の世界で自分の影響を及ぼしていく過程が軽快！"
            }
          ]
        },
        { img: require("../images/avatar7.jpg"), name: "少女" },
        { img: require("../images/avatar8.jpg"), name: "初音" },
        { img: require("../images/avatar9.jpg"), name: "创作" },
        { img: require("../images/avatar10.jpg"), name: "FGD" },
        { img: require("../images/avatar11.jpg"), name: "裸足" },
        { img: require("../images/avatar12.jpg"), name: "百合" },
        { img: require("../images/avatar13.jpg"), name: "BanG_Dream!" },
        { img: require("../images/avatar14.jpg"), name: "风景" },
        { img: require("../images/avatar15.jpg"), name: "少女前线" },
        { img: require("@/images/recommend11.jpg"), name: "少女前线" },
        { img: require("@/images/recommend12.jpg"), name: "风景" },
        { img: require("@/images/recommend13.jpg"), name: "风景" },
        { img: require("@/images/recommend14.jpg"), name: "少女前线" },
        { img: require("@/images/recommend15.jpg"), name: "风景" },
        { img: require("@/images/recommend10.jpg"), name: "风景" }
      ]
    };
  },
  methods: {
    setMaxImage(maxImage) {
      this.$store.state.props = maxImage;
    }
  }
};
</script>

<style lang="scss" scoped>
.findmore_header {
  height: 10rem;
  position: relative;
  .findmore_name {
    position: absolute;
    bottom: 0.8rem;
    left: 40%;
    color: #fff;
  }
}
.findmore_center {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
   margin-bottom: 2.1rem;
  li {
    width: 32.7%;
    height: 5rem;
    margin: 1px;
    position: relative;
    .list_name {
      position: absolute;
      left: 35%;
      right: 35%;
      bottom: 0.2rem;
      color: #fff;
      font-size: 0.6rem;
      white-space: nowrap;
    }
  }
}
</style>