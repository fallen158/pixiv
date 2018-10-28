import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Leaderboard from "./views/Leaderboard.vue";
import FindMore from "./views/FindMore.vue";
import MoreWorks from "./views/MoreWorks.vue";
import NewWorks from "./views/NewWords.vue";
import Works from "./views/Works.vue";
import Singin from "./views/Singin.vue";
import SingUp from "./views/SingUp.vue";
import Video from "./views/Video.vue";
import MedlemPlay from "./views/MedlemPlay.vue";

import UserCenter from "./views/UserCenter.vue";
import Image from "./views/Image.vue";
import Collection from "./views/Collection.vue";
import Recording from "./views/Recording.vue";
import Bokmark from "./views/Bokmark.vue";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/leaderboard",
      name: "leaderboard",
      component: Leaderboard
    },
    {
      path: "/video",
      name: "video",
      component: Video
    },
    {
      path: "/leaderboard/works",
      name: "works",
      component: Works
    },
    {
      path: "/findmore",
      name: "findmore",
      component: FindMore
    },
    {
      path: "/findmore/works",
      name: "moreWorks",
      component: MoreWorks
    },
    {
      path: "/newworks",
      name: "newworks",
      component: NewWorks
    },
    {
      path: "/usercenter",
      name: "usercenter",
      component: UserCenter
    },
    {
      path: "/singin",
      name: "singin",
      component: Singin
    },
    {
      path: "/singup",
      name: "singup",
      component: SingUp
    },
    {
      path: "/medlemplay",
      name: "medlemplay",
      component: MedlemPlay
    },
    { path: "/leaderboard/image", component: Image },
    { path: "/leaderboard/collection", component: Collection },
    { path: "/leaderboard/recording", component: Recording },
    { path: "/leaderboard/bokmark", component: Bokmark },
    { path: "*", redirect: "/home", component: Home }
  ]
});
