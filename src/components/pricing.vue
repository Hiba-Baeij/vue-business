<template>
  <div class="pricing text-center">
    <b-container>
      <h4 class="m-auto">pricing</h4>
      <h2>CHOOSE PLAN</h2>
      <b-row>
        <b-col lg="4" md="6" class="mt-md-4 mt-4">
          <div @mousenter="setClass()" class="background shadow">
            <h3 class="title">Basic Plan</h3>
            <h3>$99/Month</h3>
            <p>Aliquam dui lacus, lobortis quis sapien non.</p>
            <ul>
              <li>Graphic Design</li>
              <li>Web Design</li>
              <li>UI/UX</li>
              <li>HTML/CSS</li>
              <li>SEO Marketing</li>
              <li>Business Analysis</li>
            </ul>
            <b-button to="/p1">Start Now</b-button>
          </div>
        </b-col>
        <b-col lg="4" md="6" class="mt-md-4 mt-4">
          <div @mousenter="setClass()" class="background shadow">
            <h3 class="title">Basic Plan</h3>
            <h3>$99/Month</h3>
            <p>Aliquam dui lacus, lobortis quis sapien non.</p>
            <ul>
              <li>Graphic Design</li>
              <li>Web Design</li>
              <li>UI/UX</li>
              <li>HTML/CSS</li>
              <li>SEO Marketing</li>
              <li>Business Analysis</li>
            </ul>
            <b-button to="/p2">Start Now</b-button>
          </div>
        </b-col>
        <b-col lg="4" md="6" class="mt-md-4 mt-4">
          <div @mousenter="setClass()" class="background shadow">
            <h3 class="title">Basic Plan</h3>
            <h3>$99/Month</h3>
            <p>Aliquam dui lacus, lobortis quis sapien non.</p>
            <ul>
              <li>Graphic Design</li>
              <li>Web Design</li>
              <li>UI/UX</li>
              <li>HTML/CSS</li>
              <li>SEO Marketing</li>
              <li>Business Analysis</li>
            </ul>
            <b-button to="/p3">Start Now</b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  methods: {
    setClass() {
      var cardPrice = "to-top-class";
    },
  },
};
</script>
<style lang="scss">
@import "../assets/scss/variables.scss";
.pricing {
  margin-bottom: 80px;
  .background {
    background: #ffff;
    padding: 30px;
    border-radius: 15px;

    &:hover {
      animation: jump 0.8s ease;
      background: rgb(36, 0, 21);
      background: linear-gradient(
        16deg,
        rgba(36, 0, 21, 1) 0%,
        rgba(0, 39, 204, 1) 0%,
        rgba(139, 115, 244, 1) 56%,
        rgba(137, 110, 255, 1) 100%
      );
      h3,
      p,
      li,
      h3.title {
        color: white;
      }
      @media (max-width: 768px) {
        animation: none !important;
      }
    }

    @keyframes jump {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(-28px);
      }
    }
  }
  h2 {
    margin: 30px;
  }
  li,
  p,
  h3 {
    margin-top: 20px;
  }
  h3 {
    color: $mainPerple;
    font-weight: bold;
    .title {
      color: $secondaryBlue;
      font-weight: bold;
    }
  }

  ul {
    padding: 0 !important;
    li {
      list-style: none;
      color: $mainPerple;
    }
  }

  .btn {
    background: rgb(36, 0, 21);
    background: linear-gradient(
      16deg,
      rgba(36, 0, 21, 1) 0%,
      rgba(0, 39, 204, 1) 0%,
      rgba(139, 115, 244, 1) 56%,
      rgba(137, 110, 255, 1) 100%
    ) !important;
    border: none !important;
    padding: 12px 50px 12px 50px !important;
    border-radius: 15px !important;
    color: white !important;
    font-size: 20px !important;
  }
}
</style>