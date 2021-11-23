import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cardProp: [
      {
        nameDiv: "circal1",
        image: "/images/points1.png",
        icon: "mdi mdi-window-restore",
        title: "Strategy & Research",
        paragraph:
          "Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.",
      },
      {
        nameDiv: "circal2",
        image: "/images/points2.png",
        icon: "mdi mdi-format-list-bulleted",
        title: "Web Development",

        paragraph:
          "Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.",
      },
      {
        nameDiv: "circal3",
        image: "/images/points3.png",
        icon: "mdi mdi-playlist-check",
        title: "Web Solution",
        paragraph:
          "Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.",
      },
    ],
    sercvices: [{}, {}, {}],
    portfolioImg: [
      {
        img:
          "https://www.ecommerceceo.com/wp-content/uploads/2021/01/Best-Ecommerce-Platforms.png",
        category: "Web Development",
      },
      {
        img:
          "https://d3e1m60ptf1oym.cloudfront.net/3c32b0ad-d29a-4399-ac34-bc1ca36140dc/Photographe_parfum_cosme%CC%81tique_etproduits_de_luxe_Paris_-2_uxga.jpg",
        category: "Branding",
      },
      {
        img:
          "https://c1.wallpaperflare.com/preview/239/635/809/cosmetics-bottle-the-bottle-flatlay-layout-shampoo.jpg",
        category: "Branding",
      },
      {
        img:
          "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNzEwMDMwN3x8ZW58MHx8fHw%3D&w=1000&q=80",
        category: "Branding",
      },
      {
        img:
          "https://cdn.educba.com/academy/wp-content/uploads/2015/12/application-apps-3.jpg",
        category: "SEO",
      },
      {
        img:
          "http://mmsservices.co.uk/assets/upload/blog/Mobile-App-developers.jpg",
        category: "Mobile App",
      },
    ],
    filterValue: "All",
    plans: [
      { name: "plan one ", description: "plan one description ", id: "p1" },
      { name: "plan two ", description: "plan two description ", id: "p2" },
      { name: "plan three ", description: "plan three description ", id: "p3" },
    ],
    planDetails: {},
  },
  mutations: {
    Set_Filter_Value(state, payload) {
      state.filterValue = payload;
    },
  },
  actions: {},
  getters: {
    filter(state) {
      if (state.filterValue && state.filterValue != "All") {
        return state.portfolioImg.filter(
          (ele) => ele.category == state.filterValue
        );
      } else return state.portfolioImg;
    },
  },
});
