<template>
  <div>
    <h1>{{ title }}</h1>
    <h1>{{ plans.find((el) => el.id == id).name }}</h1>

    <p>{{ plans.find((el) => el.id == id).description }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      title: "",
    };
  },
  props: ["id"],
  computed: {
    ...mapState(["plans"]),
  },
  created() {
    console.log(this.$route);
    this.title = this.$route.meta.title;
  },
};
</script>

<style>
</style>