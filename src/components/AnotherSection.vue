<template>
  <div class="content-inner text-center">
    <b-container class="mt-2">
      <b-row>
        <b-col lg="3">
          <div class="card border-0">
            <div
              class="
                icon-bx1
                m-auto
                d-flex
                justify-content-center
                align-items-center
              "
            >
              <span class="mdi mdi-emoticon-happy-outline"></span>
            </div>
            <h3>Satisfied Clients</h3>
            <h3 class="number">2345</h3>
          </div>
        </b-col>
        <b-col lg="3" class="mt-4">
          <div class="card border-0">
            <div
              class="
                icon-bx2
                m-auto
                d-flex
                justify-content-center
                align-items-center
              "
            >
              <span class="mdi mdi-chart-line"></span>
            </div>
            <h3>Satisfied Clients</h3>
            <h3 class="number">2345</h3>
          </div>
        </b-col>
        <b-col lg="3" class="mt">
          <div class="card border-0">
            <div
              class="
                icon-bx3
                m-auto
                d-flex
                justify-content-center
                align-items-center
              "
            >
              <span class="mdi mdi-rocket-launch-outline"></span>
            </div>
            <h3>Satisfied Clients</h3>
            <h3 class="number">2345</h3>
          </div>
        </b-col>
        <b-col lg="3" class="mt-4">
          <div class="card border-0">
            <div
              class="
                icon-bx4
                m-auto
                d-flex
                justify-content-center
                align-items-center
              "
            >
              <span class="mdi mdi-briefcase-check-outline"></span>
            </div>
            <h3>Satisfied Clients</h3>
            <h3 class="number">2345</h3>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";
.content-inner {
  background-color: #896eff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23595462' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0 100px 0;
  @media (max-width: 768px) {
    .mt {
      margin-top: 1.5rem !important;
    }
  }

  .row {
    margin: 80px 0 80px 0 !important;
  }
  .card {
    width: 100%;
    height: 220px;
    border-radius: 10px;
    text-align: center;
    padding: 20px;
  }
  .card:hover {
    animation: animate 0.5s ease;
  }
  @media (max-width: 768px) {
    .card:hover {
      animation: none !important;
    }
  }
  @keyframes animate {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-15px);
    }
  }
  span {
    font-size: 40px;
    color: white;
  }
  h3 {
    color: $secondaryBlue;
    font-size: 25px;
    margin-top: 20px;
  }
  h3.number {
    color: #896eff;
    font-size: 30px;
    font-weight: bold;
    margin: 0;
  }
}
.icon-bx1 {
  border-radius: 50px;
  width: 70px;
  height: 70px;
  background-color: #029e76;
  box-shadow: 0 0.5rem 1rem 0.5rem #029e7771;
}
.icon-bx2 {
  @extend .icon-bx1;
  background-color: #ffa808;
  box-shadow: 0 0.5rem 1rem 0.5rem #ffa90877;
}
.icon-bx3 {
  @extend .icon-bx1;
  background-color: #5543d1;
  box-shadow: 0 0.5rem 1rem 0.5rem #5643d163;
}
.icon-bx4 {
  @extend .icon-bx1;
  background-color: #ff586e;
  box-shadow: 0 0.5rem 1rem 0.5rem #ff586e75;
}
</style>