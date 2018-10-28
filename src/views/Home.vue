<template>
    <div class="home">
        <section class="home_header" v-for="list in lists" :key="list.id">
            <div class="title">
                <div class="title_header">
                    <span>
                        <svg class="icon" aria-hidden="true">
                            <use :xlink:href="list.icon"></use>
                        </svg>    
                    </span>
                    <span>{{list.title}}</span>
                </div>
                <div class="title_footer">
                    <span class="more">
                        <router-link :to="list.url" >{{list.more}}</router-link>
                    </span>
                    <span>
                         <svg class="icon" aria-hidden="true">
                            <use :xlink:href="list.rightIcon"></use>
                        </svg> 
                    </span>
                </div>
            </div>
            <ul class="center">
              <li class="images" v-for="image in list.images" :key="image.id">
                  <router-link  :to="{
                  path:'/leaderboard/works',
                  name:'works',
                  params: [image]
                }">
                  <img :src="image.img" alt="" style="width:100%;height:100%;">
                </router-link>
                <LoveCollection :images="image"/>
              </li>
            </ul>
        </section>
        <section class="home_header" v-for="video in videos" :key="video.id">
            <div class="title">
                <div class="title_header">
                    <span>
                        <svg class="icon" aria-hidden="true">
                            <use :xlink:href="video.icon"></use>
                        </svg>    
                    </span>
                    <span>{{video.title}}</span>
                </div>
                <div class="title_footer">
                    <span class="more">
                        <router-link :to="video.url" >{{video.more}}</router-link>
                    </span>
                    <span>
                         <svg class="icon" aria-hidden="true">
                            <use :xlink:href="video.rightIcon"></use>
                        </svg> 
                    </span>
                </div>
            </div>
            <ul class="center">
              <li class="videos" v-for="prop in video.props" :key="prop.id">
                <video :src="prop.src" style="width:100%;height:100%;"></video> 
              </li>
            </ul>
        </section>
        <section class="home_center">
            <div class="title">
                <div class="title_header">
                    <span>
                         <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-heart-copy"></use>
                        </svg> 
                    </span>
                    <span class="text">为你推荐</span>
                </div>
                <div></div>
            </div>
            <TwoCoumms :lists="centerImages"/>
        </section>
    </div>
</template>

<script>
import TwoCoumms from "@/components/TwoCoumms.vue";
import LoveCollection from "@/components/LoveCollection";
export default {
  components: {
    TwoCoumms,
    LoveCollection
  },
  data() {
    return {
      lists: [
        {
          icon: "#icon-huangguan",
          title: "插画排行榜",
          rightIcon: "#icon-you",
          more: "查看更多",
          url: "/leaderboard",
          images: [
            {
              avatar: require("@/images/avatar1.jpg"),
              img: require("@/images/WechatIMG2.jpg"),
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
              img: require("@/images/WechatIMG8.jpg"),
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
              avatar: require("@/images/avatar1.jpg"),
              img: require("@/images/WechatIMG6.jpg"),
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
              img: require("@/images/WechatIMG4.jpg"),
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
            }
          ]
        }
      ],
      videos: [
        {
          icon: "#icon-yuandian",
          title: "人气视频",
          rightIcon: "#icon-you",
          more: "查看更多",
          url: "/video",
          props: [{ src: "" }, { src: "" }, { src: "" }, { src: "" }]
        }
      ],
      centerImages: [
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
        },
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
        },
        {
          avatar: require("@/images/avatar7.jpg"),
          img: require("@/images/WechatIMG7.jpg"),
          author: "阿月唯",
          Introduction: "リバ凤衣装",
          count: "3.8K",
          reads: 9824,
          isLock: true,
          labels: [
            "の肉体",
            "こには噂通り",
            "“輪廻の枝",
            "高原八千穂",
            "前世から",
            "大な天才達の",
            "していた",
            "か持たなか",
            "恐怖の殺人鬼",
            "常世と",
            "る世界で強",
            "程が軽快",
            "の刃を手に"
          ],
          caption:
            "自らの肉体を切り裂き、前世から才能を掘り起こす刃“輪廻の枝”。偉大な天才達のみならず恐怖の殺人鬼も蘇る世界で強く才能に飢えた高校生、東耶がその刃を手にする…。"
        },
        {
          avatar: require("@/images/avatar8.jpg"),
          img: require("@/images/WechatIMG8.jpg"),
          author: "木村",
          Introduction: "web再绿/panorama",
          count: "10.5K",
          reads: 20964,
          isLock: true,
          labels: [
            "江山に坐し",
            "こには噂通り",
            "“輪廻の枝",
            "目の童女",
            "前世から",
            "酒呑童子",
            "していた",
            "か持たなか",
            "よって打ち",
            "常世と",
            "る世界で強",
            "われた―…はずだ",
            "の刃を手に"
          ],
          caption:
            "時は平安。大江山に坐した鬼の大頭目・酒呑童子とその一党は、源頼光率いる「朝家の守護」によって打ち払われた―…はずだった。酒呑童子は幼き盲目の童女・葵を憑代に甦り、隻腕の鬼・茨木童子と共に朝家への復讐を胸に京へと向かう。"
        },
        {
          avatar: require("@/images/avatar9.jpg"),
          img: require("@/images/WechatIMG9.jpg"),
          author: "リバ",
          Introduction: '"次バ世界"',
          count: "2.8K",
          reads: 3981,
          isLock: true,
          labels: [
            "グが大好きな",
            "こには噂通り",
            "高校に入",
            "きた引っ込",
            "前世から",
            "酒呑童子",
            "していた",
            "か持たなか",
            "よって打ち",
            "常世と",
            "然豊かな",
            "木双葉",
            "の刃を手に",
            "小日向光"
          ],
          caption:
            "海とダイビングが大好きな元気いっぱい少女・小日向光。東京から引っ越してきた引っ込み思案な少女・大木双葉。夢ヶ丘高校に入学し出会った2人の少女達が入部したのは、ダイビング部。自然豊かな伊豆半島を舞台に、ダイビングを通して四季折々の素敵な日常の幸せを二人で満喫します。"
        },
        {
          avatar: require("@/images/avatar10.jpg"),
          img: require("@/images/WechatIMG10.jpg"),
          author: "(池内)バ",
          Introduction: "最近バ版着荟",
          count: "6.9K",
          reads: 94891,
          isLock: true,
          labels: [
            "世間を騒",
            "こには噂通り",
            "に突き付",
            "きた引っ込",
            "ツネに突き",
            "酒呑童子",
            "していた",
            "強大な力ゆ",
            "よって打ち",
            "常世と",
            "然豊かな",
            "間を騒",
            "の刃を手に",
            "した子ダヌキ"
          ],
          caption:
            "今は昔、世間を騒がせた悪名高いキツネ。そのキツネに突き付けられた解放の条件は、強大な力ゆえに孤立した子ダヌキの養育で…。"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.home_header {
  .title {
    display: flex;
    justify-content: space-between;
    font-size: 0.6rem;
    padding: 0.3rem 0.2rem;
    .icon {
      fill: #788b96;
      width: 1em;
      height: 1em;
      vertical-align: -0.15em;
      overflow: hidden;
    }
    .more {
      color: #92a1ab;
      font-size: 0.5rem;
    }
    &_header {
      display: flex;
      align-items: center;
      .icon {
        width: 0.9rem;
        height: 0.9rem;
      }
    }
  }
  .center {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    .images {
      width: 55%;
      height: 10rem;
      margin-left: 0.3rem;
      margin-right: 0.1rem;
      position: relative;
      img {
        border-radius: 0.3rem;
      }
    }
    .videos {
      @extend .images;
      height: 4.5rem;
      border: 1px solid;
      video {
        border-radius: 0.3rem;
        border: 1px solid red;
      }
    }
  }
  ul li {
    display: inline-block;
  }
  .center::-webkit-scrollbar {
    display: none;
  }
}

.home_center {
  margin-bottom: 2.1rem;
  .title {
    display: flex;
    justify-content: space-between;
    font-size: 0.6rem;
    padding: 0.2rem 0.2rem;
    &_header {
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