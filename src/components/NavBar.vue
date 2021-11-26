<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      class="w-100"
      :class="{ scrolled: scroll > 200 }"
      :fixed="scroll > 200 ? 'top' : ''"
    >
      <b-container>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Home</b-nav-item>

            <b-nav-item-dropdown text="Pages" right>
              <b-dropdown-item to="/about">About US</b-dropdown-item>
              <b-dropdown-item to="/faq">Faq</b-dropdown-item>
              <b-dropdown-item href="#">Pricing Table</b-dropdown-item>
              <b-dropdown-item href="#">Team</b-dropdown-item>
              <b-dropdown-item href="#">Comming Soon</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="Services" right>
              <b-dropdown-item href="#">Services</b-dropdown-item>
              <b-dropdown-item href="#">Services Details</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>Blog</em>
              </template>
              <b-dropdown-item href="#">Large Right Sidebar</b-dropdown-item>
              <b-dropdown-item href="#">Block Details</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="#">Contact Us</b-nav-item>
            <b-nav-item href="#" class="colored"
              ><span class="shape mdi mdi mdi-chevron-right"></span> Get A
              Quote</b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
//let aos = require("@/aos.js");
export default {
  data() {
    return {
      scroll: 0,
    };
  },
  mounted() {
    //aos.init();
    window.addEventListener("scroll", this.getScrollTop);
  },
  methods: {
    getScrollTop() {
      this.scroll = window.scrollY;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";
.scrolled {
  background-color: $mainPerple !important;
  .nav-item {
    .nav-link {
      color: #fff !important;
      &:hover {
        color: #fff !important;
      }
    }
  }

  .nav-link {
    color: #fff !important;
  }
  .navbar-brand {
    color: #fff !important;
  }

  span.shape {
    background: #f8f9fa !important;
    color: $mainPerple !important;
  }
  li.nav-item.colored a.nav-link {
    color: #fff !important;
  }
}
nav {
  padding: 20px !important;
  background-color: #f8f9fa;
  transition: 0.5s;
  .container {
    span.shape {
      background: $mainPerple;
      color: white;
      padding: 12px;
      border-radius: 30px;
      margin-right: 10px;
    }

    .nav-link {
      color: $blackBlue !important;
      margin-right: 20px;
      font-size: 16px;
      font-weight: 600;
      &:hover {
        color: $mainPerple !important;
        animation: element 0.2s ease-out;
        &:last-child {
          animation: none;
        }
      }
    }
    .dropdown-menu {
      visibility: hidden !important;
      display: none !important;
    }
    ul li:hover .dropdown-menu {
      visibility: visible !important;
      display: block !important;
    }

    @keyframes element {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(8px);
      }
    }
    li.nav-item.colored a.nav-link {
      color: $mainPerple !important;
    }
  }
}
</style>