<template>
  <div class="portfolio text-center">
    <b-container>
      <h4>projects</h4>
      <h2>Take A Look At Our Latest Portfolio</h2>
      <div>
        <ul
          class="
            bg-light
            rounded-pill
            d-flex
            justify-content-between
            align-items-center
          "
          id="filter"
        >
          <li>
            <b-button
              class="one"
              @click="$store.commit('Set_Filter_Value', 'All')"
              >All</b-button
            >
          </li>
          <li>
            <b-button @click="$store.commit('Set_Filter_Value', 'Web Design')"
              >Web Design</b-button
            >
          </li>
          <li>
            <b-button
              @click="$store.commit('Set_Filter_Value', 'Web Development')"
              >Web Development</b-button
            >
          </li>
          <li>
            <b-button @click="$store.commit('Set_Filter_Value', 'Branding')"
              >Branding</b-button
            >
          </li>
          <li>
            <b-button @click="$store.commit('Set_Filter_Value', 'Mobile App')"
              >Mobile App</b-button
            >
          </li>
          <li>
            <b-button @click="$store.commit('Set_Filter_Value', 'SEO')"
              >SEO</b-button
            >
          </li>
        </ul>
      </div>
      <div class="portfolio-img">
        <b-row>
          <b-col lg="4" v-for="prop in filter" :key="prop.id" class="mt-4">
            <img :src="prop.img" alt="" />
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  methods: {},
  computed: {
    ...mapGetters(["filter"]),
    ...mapState(["filterValue"]),
  },
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";
.portfolio {
  padding: 80px 80px 0 80px;
  h4 {
    margin: auto;
  }
  h2 {
    margin: 30px;
  }

  ul {
    margin: 0 !important;

    padding: 8px !important;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 25px;
    }
    ul#filter {
      background: none !important;
      display: inline-block !important;
    }
    ul li {
      margin: 0;
    }
    ul li button {
      font-size: 15px !important;
      display: grid;
      grid-template-rows: repeat(20px 20px 20px);
    }
    ul li button.btn.one {
      padding: 8px 20px 8px 20px !important;
    }
  }

  ul li {
    list-style: none;
    width: 100%;
  }
  ul li button.btn.one {
    background: $mainPerple !important;
    box-shadow: 0 0.5rem 2rem 0.5rem #896eff71;
    border: none;
    border-radius: 30px;
    padding: 10px 30px 10px 30px;
    font-size: 20px;
    color: white;
  }
  ul li button {
    color: $secondaryBlue;
    background: none !important;
    font-size: 18px;
    font-weight: 30px;
    border: none;
  }
  ul li button:hover {
    color: $mainPerple;
  }
  img {
    width: 100% !important;
    height: 100% !important;
  }
  .portfolio-img {
    margin: 30px;
  }
}
</style>