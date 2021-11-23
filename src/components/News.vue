<template>
  <div class="news-letter">
    <b-container>
      <b-row>
        <b-col lg="4"><img src="" /> </b-col>
        <b-col lg="8">
          <h4>Newsletter</h4>
          <h2>
            Subscribe To Our Newsletter For Latest Update Of Finanical Services
          </h2>
          <p>
            Curabitur eleifend nibh sit amet ex posuere, vel malesuada turpis
            pretium. Quisque et tincidunt risus, a tempor massa. Cras tempor
            egestas libero, eu laoreet enim pharetra non.
          </p>

          <form>
            <div class="input">
              <input type="text" placeholder="Email Address" />
            </div>
          </form>
          <div class="d-flex justify-content-end align-items-center">
            <button>Subscribe Now</button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/variables.scss";
.news-letter {
  margin: 100px 0 70px 0;
  background-color: #896eff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23595462' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  width: 100%;
  min-height: 400px;

  h2,
  p {
    color: white;
    margin-top: 20px;
  }
  h4 {
    @extend h4;
    color: white;
    margin-top: 20px;
  }
  input {
    margin-top: 20px;
    font-weight: 400;
    height: 50px;
    padding: 20px;
    color: #888;
    background: #fff;
    border-radius: 30px;
    width: 500px;
    border: 1px solid $mainPerple;
  }
  @media (max-width: 768px) {
    input {
      width: 300px;
    }
    button {
      font-size: 12px !important;
      left: 199px !important;
      top: 329px !important;
      padding: 12px 16px 12px !important;
    }
  }
  button {
    background: #896eff !important;
    border-radius: 30px;
    border: none;
    color: white;
    position: absolute;
    padding: 12px 35px;
    display: inline-block;
    font-size: 15px;
    font-weight: 500;
    left: 342px;
    top: 264px;
  }
}
</style>