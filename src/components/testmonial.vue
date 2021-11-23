<template>
  <div class="testmonial">
    <b-row>
      <b-col lg="10">
        <VueSlickCarousel v-bind="settings" :arrows="true" :dots="true">
          <div class="background">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto fuga explicabo sunt, culpa accusamus beatae recusandae.
              Consequatur voluptate nemo, iusto ea inventore veniam itaque
              cupiditate illum optio debitis suscipit explicabo"
            </p>
            <hr />
            <b-row>
              <b-col lg="6"> <img src="" alt="" /></b-col>
              <b-col lg="6">
                <h3>Cik Dekin</h3>
                <p>CEO & Founders</p>
              </b-col>
            </b-row>
          </div>
          <div class="background">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto fuga explicabo sunt, culpa accusamus beatae recusandae.
              Consequatur voluptate nemo, iusto ea inventore veniam itaque
              cupiditate illum optio debitis suscipit explicabo"
            </p>
            <hr />
            <b-row>
              <b-col lg="6"> </b-col>
              <b-col lg="6">
                <h3>Cik Dekin</h3>
                <p>CEO & Founders</p>
              </b-col>
            </b-row>
          </div>
          <div class="background">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto fuga explicabo sunt, culpa accusamus beatae recusandae.
              Consequatur voluptate nemo, iusto ea inventore veniam itaque
              cupiditate illum optio debitis suscipit explicabo"
            </p>
            <hr />
            <b-row>
              <b-col lg="6"> </b-col>
              <b-col lg="6">
                <h3>Cik Dekin</h3>
                <p>CEO & Founders</p>
              </b-col>
            </b-row>
          </div>
          <div class="background">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto fuga explicabo sunt, culpa accusamus beatae recusandae.
              Consequatur voluptate nemo, iusto ea inventore veniam itaque
              cupiditate illum optio debitis suscipit explicabo"
            </p>
            <hr />
            <b-row>
              <b-col lg="6"> </b-col>
              <b-col lg="6">
                <h3>Cik Dekin</h3>
                <p>CEO & Founders</p>
              </b-col>
            </b-row>
          </div>
          <div class="background">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto fuga explicabo sunt, culpa accusamus beatae recusandae.
              Consequatur voluptate nemo, iusto ea inventore veniam itaque
              cupiditate illum optio debitis suscipit explicabo"
            </p>
            <hr />
            <b-row>
              <b-col lg="6"> </b-col>
              <b-col lg="6">
                <h3>Cik Dekin</h3>
                <p>CEO & Founders</p>
              </b-col>
            </b-row>
          </div>
          <div class="background">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto fuga explicabo sunt, culpa accusamus beatae recusandae.
              Consequatur voluptate nemo, iusto ea inventore veniam itaque
              cupiditate illum optio debitis suscipit explicabo"
            </p>
            <hr />
            <b-row>
              <b-col lg="6"> </b-col>
              <b-col lg="6">
                <h3>Cik Dekin</h3>
                <p>CEO & Founders</p>
              </b-col>
            </b-row>
          </div>
        </VueSlickCarousel>
      </b-col>
      <b-col lg="2">
        <div class="text-testmonial">
          <h4>Testmonial</h4>
          <h2>See What Are They Say About Us</h2>
          <p>
            Fusce vitae sapien eu mauris semper faucibus eget tristique lorem
          </p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: true,
        infinite: true,
        initialSlide: 2,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
      },
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";
.testmonial {
  padding: 80px 60px 80px 60px;
  background-color: #896eff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23595462' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  .background {
    background: white;
    width: 350px !important;
    border-radius: 10px;
    padding: 15px;
  }
  h3 {
    color: $secondaryBlue;
    font-weight: bold;
    font-size: 22px;
  }
  .text-testmonial {
    width: 238px !important;
    h4,
    h2,
    p {
      color: white;
    }
    h4 {
      background: rgba(255, 255, 255, 0.329);
    }
    h2 {
      font-size: 30px !important;
    }
  }
}
</style>