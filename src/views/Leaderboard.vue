<template>
  <div class="home">
    <Header :name="title"/>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane class="tab-pane" v-for="list in lists" :label="list.label" :name="list.name" :key="list.id">
          <div class="wrapper" v-for="each in list.maxImage" :key="each.id">
              <div class="wrapper_header">
                <router-link :to="{
                  path:'/leaderboard/works',
                  name:'works',
                  params: [each]
                }">
                  <img v-lazy="each.img" alt="" style="width:100%;height:100%;">
                </router-link>
              </div>
              <div class="wrapper_footer">
                <div class="left">
                  <div class="left_avatar">
                    <img :src="each.avatar" alt="头像" style="width:100%;height:100%;">
                  </div>
                  <div class="left_center">
                    <div><b>{{each.Introduction}}</b></div>
                    <div class="author">{{each.author}}</div>
                  </div>
                </div>
                <div class="right">
                  {{each.count}}  
                   <svg  @click="addActive" class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M729.068827 119.55798c-94.686523 0-176.905082 48.314379-217.069851 118.640074-40.163745-70.325695-122.382305-118.640074-217.044268-118.640074-143.767358 0-229.665727 123.660414-229.665727 243.219417 0 283.128359 415.870616 527.841803 433.576883 538.126031 4.062526 2.363837 8.584516 3.538593 13.132088 3.538593 4.547573 0 9.070586-1.174756 13.132088-3.538593 17.706267-10.283204 433.576883-254.997672 433.576883-538.126031C958.708971 243.218394 872.811626 119.55798 729.068827 119.55798z" fill="#6ba6a6" /></svg>
                </div>
              </div>
          </div>
          <div class="footer">
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
            <TwoCoumms :lists="list.recommendImages"/>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import TwoCoumms from "@/components/TwoCoumms.vue";
export default {
  components: {
    Header,
    TwoCoumms
  },
  data() {
    return {
      activeName: "first",
      title: "排行榜",
      lists: [
        {
          label: "每日",
          name: "first",
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
          ],
          recommendImages: [
            {
              avatar: require("@/images/avatar3.jpg"),
              img: require("@/images/recommend1.jpg"),
              author: "河CY",
              Introduction: "チャーム姬",
              count: "6K",
              reads: 98501,
              isLock: true,
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
              avatar: require("@/images/avatar3.jpg"),
              img: require("@/images/recommend2.jpg"),
              author: "河CY",
              Introduction: "チャーム姬",
              count: "6K",
              reads: 98501,
              isLock: true,
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
            { img: require("@/images/recommend3.jpg"), isLock: true },
            { img: require("@/images/recommend4.jpg"), isLock: true },
            { img: require("@/images/recommend5.jpg"), isLock: true },
            { img: require("@/images/recommend6.jpg"), isLock: true },
            { img: require("@/images/recommend7.jpg"), isLock: true },
            { img: require("@/images/recommend8.jpg"), isLock: true },
            { img: require("@/images/recommend9.jpg"), isLock: true },
            { img: require("@/images/recommend10.jpg"), isLock: true }
          ]
        },
        {
          label: "原创",
          name: "male",
          maxImage: [
            {
              avatar: require("@/images/avatar4.jpg"),
              img: require("@/images/WechatIMG4.jpg"),
              author: "SUEUN",
              Introduction: "凛然",
              count: "13.2K",
              reads: 497502,
              isLock: true,
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
              isLock: true,
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
              isLock: true,
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
          ],
          recommendImages: [
            {
              avatar: require("@/images/avatar3.jpg"),
              img: require("@/images/recommend11.jpg"),
              author: "河CY",
              Introduction: "チャーム姬",
              count: "6K",
              reads: 98501,
              isLock: true,
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
              avatar: require("@/images/avatar3.jpg"),
              img: require("@/images/recommend12.jpg"),
              author: "河CY",
              Introduction: "チャーム姬",
              count: "6K",
              reads: 98501,
              isLock: true,
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
            { img: require("@/images/recommend13.jpg"), isLock: true },
            { img: require("@/images/recommend14.jpg"), isLock: true },
            { img: require("@/images/recommend15.jpg"), isLock: true },
            { img: require("@/images/recommend16.jpg"), isLock: true },
            { img: require("@/images/recommend17.jpg"), isLock: true },
            { img: require("@/images/recommend18.jpg"), isLock: true },
            { img: require("@/images/recommend19.jpg"), isLock: true },
            { img: require("@/images/recommend20.jpg"), isLock: true }
          ]
        },
        {
          label: "新人",
          name: "female",
          maxImage: [
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
            }
          ],
          recommendImages: [
            {
              avatar: require("@/images/avatar3.jpg"),
              img: require("@/images/recommend21.jpg"),
              author: "河CY",
              Introduction: "チャーム姬",
              count: "6K",
              reads: 98501,
              isLock: true,
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
              avatar: require("@/images/avatar3.jpg"),
              img: require("@/images/recommend22.jpg"),
              author: "河CY",
              Introduction: "チャーム姬",
              count: "6K",
              reads: 98501,
              isLock: true,
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
            { img: require("@/images/recommend23.jpg"), isLock: true },
            { img: require("@/images/recommend24.jpg"), isLock: true },
            { img: require("@/images/recommend25.jpg"), isLock: true },
            { img: require("@/images/recommend26.jpg"), isLock: true },
            { img: require("@/images/recommend27.jpg"), isLock: true },
            { img: require("@/images/recommend28.jpg"), isLock: true },
            { img: require("@/images/recommend29.jpg"), isLock: true },
            { img: require("@/images/recommend30.jpg"), isLock: true }
          ]
        },
        {
          label: "每周",
          name: "second",
          maxImage: [
            {
              avatar: require("@/images/avatar10.jpg"),
              img: require("@/images/WechatIMG10.jpg"),
              author: "(池内)バ",
              Introduction: "最近バ版着荟",
              count: "6.9K",
              reads: 94891,
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
            },
            {
              avatar: require("@/images/avatar11.jpg"),
              img: require("@/images/WechatIMG11.jpg"),
              author: "choss.",
              Introduction: "刀剑男士ババ",
              count: "4.1K",
              reads: 8141,
              labels: [
                "な青年",
                "こには噂通り",
                "に突き付",
                "古書店",
                "ツネに突き",
                "酒呑童子",
                "していた",
                "シロに古書店",
                "よって打ち",
                "させながら",
                "然豊かな",
                "を読みふける",
                "の刃を手に",
                "には忌ま"
              ],
              caption:
                "寡黙な青年・正太郎が店主を務める、物部古書店。健気な少年・シロに古書店の手伝いをさせながら、本を読みふける日々を送る正太郎だったが、彼には忌まわしき古書を回収する裏の仕事が…？　俊英が描く猟奇的和風幻想譚！"
            },
            {
              avatar: require("@/images/avatar12.jpg"),
              img: require("@/images/WechatIMG12.jpg"),
              author: "女バ子",
              Introduction: "煎茶",
              count: "3.8K",
              reads: 38141,
              labels: [
                "撰組は京",
                "こには噂通り",
                "転戦を重",
                "古書店",
                "ツネに突き",
                "終地とも",
                "していた",
                "シロに古書店",
                "の戦いが",
                "させながら",
                "然豊かな",
                "いの最中",
                "市村鉄之助",
                "勃発に伴"
              ],
              caption:
                "戊辰戦争の勃発に伴い、新撰組は京、江戸、そして蝦夷へと転戦を重ねる。その最終地ともいえる蝦夷･五稜郭での戦いが、今始まろうとしていた…。戦いの最中、市村鉄之助に付き従うように命じられた田村銀之助。鉄之助の少年期に瓜二つの少年･銀之助は、市村鉄之助から壮絶なる戦いの記憶を聞かされることとなる…。"
            }
          ],
          recommendImages: [
            {
              avatar: require("@/images/avatar3.jpg"),
              img: require("@/images/recommend31.jpg"),
              author: "河CY",
              Introduction: "チャーム姬",
              count: "6K",
              reads: 98501,
              isLock: true,
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
              avatar: require("@/images/avatar3.jpg"),
              img: require("@/images/recommend32.jpg"),
              author: "河CY",
              Introduction: "チャーム姬",
              count: "6K",
              reads: 98501,
              isLock: true,
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
            { img: require("@/images/recommend33.jpg"), isLock: true },
            { img: require("@/images/recommend34.jpg"), isLock: true },
            { img: require("@/images/recommend35.jpg"), isLock: true },
            { img: require("@/images/recommend36.jpg"), isLock: true },
            { img: require("@/images/recommend37.jpg"), isLock: true },
            { img: require("@/images/recommend38.jpg"), isLock: true },
            { img: require("@/images/recommend39.jpg"), isLock: true },
            { img: require("@/images/recommend40.jpg"), isLock: true }
          ]
        },
        {
          label: "每月",
          name: "third",
          maxImage: [
            {
              avatar: require("@/images/avatar13.jpg"),
              img: require("@/images/WechatIMG13.jpg"),
              author: "hakusai",
              Introduction: ".*バ*.",
              count: "25.6k",
              reads: 5838141,
              labels: [
                "あのマ",
                "こには噂通り",
                "猫!?清水",
                "古書店",
                "こメンずか",
                "終地とも",
                "していた",
                "新連載を記",
                "の戦いが",
                "させながら",
                "然豊かな",
                "品の中からネコキャラを厳選",
                "市村鉄之助",
                "ご紹介"
              ],
              caption:
                "にゃんと！あのマンガやこのマンガにも猫・猫・猫!?清水アイ先生による「世界ねこメンずかん」の新連載を記念して、マッグガーデンの作品の中からネコキャラを厳選してご紹介！"
            },
            {
              avatar: require("@/images/avatar14.jpg"),
              img: require("@/images/WechatIMG14.jpg"),
              author: "B-银河",
              Introduction: "一着年バババ凌波",
              count: "32.7K",
              reads: 891141,
              labels: [
                "楽しみにし",
                "の人物が画",
                "猫!?清水",
                "古書店",
                "てて面白かっ",
                "終地とも",
                "していた",
                "三話できっ",
                "の戦いが",
                "させながら",
                "でいて続",
                "品の冒頭に繋",
                "市村鉄之助",
                "冒頭に繋がる期待。圧倒"
              ],
              caption:
                "毎話楽しみにしてました。歴史上の人物が画面で生き生きと動いているのは見てて面白かったです。三話できっちり纏まり、それでいて続きが読みたくなる終わり。一話冒頭に繋がる期待。圧倒的な面白さでした。"
            },
            {
              avatar: require("@/images/avatar15.jpg"),
              img: require("@/images/WechatIMG15.jpg"),
              author: "耧米裢",
              Introduction: "白髪バ子",
              count: "40.6K",
              reads: 1023505,
              labels: [
                "あのマ",
                "白露様",
                "猫!?清水",
                "白露様が",
                "こメンずか",
                "どうしてこう",
                "していた",
                "新連載を記",
                "の戦いが",
                "捕食者の方",
                "然豊かな",
                "ガンバレ白露様",
                "喰らう側が翻弄"
              ],
              caption:
                "色々な意味で白露様が食べられそうで笑いましたｗｗガンバレ白露様ｗｗｗｗ。被捕食者の方が物騒な発想で、喰らう側が翻弄されてる…。どうしてこうなった！"
            }
          ],
          recommendImages: [
            {
              avatar: require("@/images/avatar3.jpg"),
              img: require("@/images/recommend41.jpg"),
              author: "河CY",
              Introduction: "チャーム姬",
              count: "6K",
              reads: 98501,
              isLock: true,
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
              avatar: require("@/images/avatar3.jpg"),
              img: require("@/images/recommend42.jpg"),
              author: "河CY",
              Introduction: "チャーム姬",
              count: "6K",
              reads: 98501,
              isLock: true,
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
            { img: require("@/images/recommend43.jpg"), isLock: true },
            { img: require("@/images/recommend44.jpg"), isLock: true },
            { img: require("@/images/recommend45.jpg"), isLock: true },
            { img: require("@/images/recommend46.jpg"), isLock: true },
            { img: require("@/images/recommend47.jpg"), isLock: true },
            { img: require("@/images/recommend48.jpg"), isLock: true },
            { img: require("@/images/recommend49.jpg"), isLock: true },
            { img: require("@/images/recommend50.jpg"), isLock: true }
          ]
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    addCount(each) {
      return (each.count = 1);
    },
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
.home {
  background: #f7f7f7;
  height: 100vh;
}
.tab-pane {
  padding: 0 0.2rem;
}
.wrapper {
  margin-top: 0.3rem;
  background: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
  &_header {
    height: 14rem;
  }
  &_footer {
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
    .left {
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
    .right {
      color: #6ba6a6;
      font-size: 0.8rem;
      .active {
        fill: #f5806c;
      }
    }
  }
}
.footer {
  .title {
    display: flex;
    justify-content: space-between;
    font-size: 0.6rem;
    .header {
      margin-top: 0.35rem;
      margin-bottom: -0.1rem;
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
.icon {
  width: 1.2em;
  height: 1.2em;
  vertical-align: -0.15em;
  overflow: hidden;
}
</style>
