<template>
  <div class="services text-center">
    <b-card class="shadow border-0">
      <b-img :src="card.image" alt="" />
      <div class="img-circal">
        <div
          :class="card.nameDiv"
          class="d-flex justify-content-center align-items-center"
        >
          <span :class="card.icon"></span>
        </div>
      </div>
      <div class="service-text">
        <h3>{{ card.title }}</h3>
        <p>{{ card.paragraph }}</p>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  props: ["card"],
  data() {
    return {};
  },
};
</script>
<style lang="scss" >
@import "../assets/scss/variables.scss";
// start service
.services {
  margin-top: $marginTop;
  h4 {
    @extend h4;
  }

  h2 {
    color: $secondaryBlue;
    font-weight: 600;
  }
  .card {
    margin-top: 30px;
    padding: 10px;
  }
  span {
    font-size: 40px;
    color: white;
  }

  img {
    position: relative;
    width: 100px !important;
    height: 100px !important;
    margin-right: 40px;
    transition: all 0.2s ease;
  }
  .card:hover img {
    margin-left: 100px;
  }
  .img-circal {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .circal {
    border-radius: 50px;
    position: absolute;
    top: 40px;
    width: 80px;
    height: 80px;
  }
  .circal1 {
    background-color: #ffa808;
    box-shadow: 0 0.5rem 1rem 0.5rem #ffa90877;
    @extend .circal;
  }
  .circal2 {
    background-color: #ff586e;
    box-shadow: 0 0.5rem 1rem 0.5rem #ff586e75;
    @extend .circal;
  }
  .circal3 {
    background-color: #029e76;
    box-shadow: 0 0.5rem 1rem 0.5rem #029e7771;
    @extend .circal;
  }
}
.service-text {
  h3 {
    margin: 20px;
    font-size: 20px;
    font-weight: bold;
    color: $secondaryBlue;
  }
  p {
    color: $mainBlue;
    line-height: 1.5;
  }
}
//end service
</style>