<template>
  <div>
    <b-navbar toggleable="lg" type="dark">
      <b-container>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item-dropdown text="Pages" right>
              <b-dropdown-item href="#">About US</b-dropdown-item>
              <b-dropdown-item href="#">Faq</b-dropdown-item>
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
              ><i class="fab fa-faecbook"></i> Get A Quote</b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";
.container {
  padding: 10px;
}
.navbar {
  position: fixed;
  width: 100%;
  top: 0;
}
#nav-collapse {
  position: relative;
}
.nav-link {
  color: #fff !important;
  margin-right: 20px;
  font-size: 16px;
  font-weight: 600;
}
.dropdown-menu {
  visibility: hidden !important;
  display: none !important;
}
ul li:hover .dropdown-menu {
  visibility: visible !important;
  display: block !important;
}
.nav-link:hover {
  animation: element 0.1s ease;
}
@keyframes element {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(8px);
  }
}
li.nav-item.colored {
  color: $mainPerple !important;
}
</style>