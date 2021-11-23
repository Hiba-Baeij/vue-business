<template>
  <div class="about1">
    <div class="img">
      <div class="blur"></div>

      <div class="text">
        <b-container>
          <b-row>
            <b-col lg="6">
              <h2>About Us 1</h2>
              <div class="content">
                <b-button to="/home">Home</b-button>
                <span class="mdi mdi-chevron-right"></span><span>About Us</span>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    <about></about>
    <another-section></another-section>
    <div class="watch">
      <b-container>
        <b-row>
          <b-col lg="6">
            <h4>Watch us</h4>
            <h2>Watch How Our Team Help You To Achive Goal</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut est
              architecto dolores, excepturi odit cumque explicabo hic
            </p>
            <div class="support">
              <b-row>
                <b-col lg="2">
                  <div class="d-flex justify-content-end align-items-end">
                    <span
                      class="mdi mdi-message-reply-text-outline shadow"
                    ></span>
                  </div>
                </b-col>
                <b-col lg="10">
                  <h3>Online support</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quos ab, incidunt velit, illo iure nemo, laudantium maiores
                    culpa unde aut dolorum pariatur
                  </p>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="2">
                  <div class="d-flex justify-content-end align-items-end">
                    <span
                      class="mdi mdi-message-reply-text-outline shadow"
                    ></span>
                  </div>
                </b-col>
                <b-col lg="10">
                  <h3>Online support</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quos ab, incidunt velit, illo iure nemo, laudantium maiores
                    culpa unde aut dolorum pariatur
                  </p>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <team></team>
    <testmonial></testmonial>
    <contact></contact>
  </div>
</template>

<script>
import About from "../views/About.vue";
import contact from "../components/contact.vue";
import testmonial from "../components/testmonial.vue";
import team from "../components/team.vue";
import AnotherSection from "../components/AnotherSection.vue";
export default {
  components: {
    About,
    contact,
    testmonial,
    team,
    AnotherSection,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";
.about1 {
  .nav {
    position: absolute;
  }
  .img {
    background-image: url("https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80");
    object-fit: cover;
    width: 100%;
    height: 400px;
    .text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: absolute;
      z-index: 2;
      top: 0;
      height: 400px;
      width: 100%;

      h2 {
        font-size: 50px;
        color: white;
      }
      span {
        color: white;
        font-size: 20px;
      }
      a {
        border: none !important;
        padding-top: 0 !important ;
        margin: 0 !important;
        font-size: 25px !important;
        background: none !important;
        font-size: 20px;
        color: white !important;
      }
    }
  }
  .blur {
    background-color: #896eff65;
    width: 100%;
    z-index: 2;
    height: 400px;
  }

  .watch {
    .support {
      margin-top: 44px;
    }
    h3 {
      @extend h2;
      font-size: 25px;
    }
    span {
      padding: 25px;
      border-radius: 10px;
      font-size: 30px;
      color: $mainBlue;
    }
  }
}
</style>