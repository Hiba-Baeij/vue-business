<template>
  <div class="footer">
    <div class="space w-100">
      <b-container>
        <div class="d-flex justify-content-between">
          <div class="title">
            <h4>More With Us</h4>
            <h2>
              You Want To Showcase Your Website <br />
              In Top Join With Us
            </h2>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <a href=""><span class="mdi mdi-chevron-right"></span> Join Now</a>
          </div>
        </div>
      </b-container>
    </div>
    <div class="footer-back">
      <b-container>
        <div class="text">
          <div class="row">
            <div class="col-md-4">NavBar</div>
            <div class="col-md-3 offset-md-2">
              <span class="mdi mdi-map-marker-radius m-0"></span>
              <span>+91 987-654-3210 <br />info@example.com</span>
            </div>
            <div class="col-md-3">
              <span class="mdi mdi-cellphone m-0"> </span>
              <span> Marmora Road <br />Minh City, Vietnam </span>
            </div>
            <hr />
          </div>
        </div>
        <b-row class="py-3">
          <b-col lg="3">
            <h3>About Us</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
              tempora! Non velit quod aspernatur, iusto molestias eos
            </p>
            <span class="mdi mdi-facebook"></span>
            <span class="mdi mdi-instagram"></span>
            <span class="mdi mdi-twitter"></span>
          </b-col>
          <b-col lg="3">
            <h3>Our Link</h3>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href=""> About Us</a></li>
              <li><a href=""> Services </a></li>
              <li><a href=""> Team </a></li>
              <li><a href=""> Blog </a></li>
            </ul>
          </b-col>
          <b-col lg="3">
            <h3>Other services</h3>
            <ul>
              <li><a href="">Strategy & Research</a></li>
              <li><a href=""> Web Development</a></li>
              <li><a href=""> Web Solution </a></li>
              <li><a href=""> Digital Markting </a></li>
              <li><a href=""> App Design </a></li>
            </ul>
          </b-col>
          <b-col lg="3">
            <h3>Other Links</h3>
            <ul>
              <li><a href="">FAQ</a></li>
              <li><a href=""> Portfolio</a></li>
              <li><a href=""> Privacy Policy </a></li>
              <li><a href=""> Terms & Conditions </a></li>
              <li><a href=""> support </a></li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
      <div class="copy text-center">Copyright ;@ 2021 .All rights reserved</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/variables.scss";

.space {
  padding: 60px;

  background-color: #f7f7f7;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b0aeb4' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  h4 {
    width: 130px;
  }
  span {
    background: $mainPerple;
    color: white;
    padding: 15px;
    border-radius: 30px;
    margin-right: 10px;
  }
  a:hover {
    text-decoration: none;
  }
}
.footer-back {
  hr {
    background: white !important;
    min-width: 100%;
    margin-top: 20px;
  }
  .text {
    font-size: 20px;
  }
  span {
    font-size: 25px;
    margin-left: 20px;
  }
  background: rgb(36, 0, 21);
  background: linear-gradient(
    16deg,
    rgba(36, 0, 21, 1) 0%,
    rgba(0, 39, 204, 1) 0%,
    rgba(180, 163, 255, 1) 0%,
    rgba(132, 104, 254, 1) 52%
  );
  padding-top: 50px;
  color: white;
  p {
    color: white;
  }
  ul {
    padding: 0;
  }
  ul li {
    margin-top: 10px;
    list-style: none;
  }
  ul li a {
    color: white !important;
    text-decoration: none;
  }
  .copy {
    background: #836af0;
    position: absolute;
    min-width: 100%;
    padding: 20px;
  }
}
</style>