<template>
  <section class="pattern-problem-one">
    <h2>Problem One</h2>
    <pattern-visualization
        pid="p1"
        :main-data="medians" />
  </section>
</template>

<script lang="js">
import { medians } from "./functions/medians.js";
import patternVisualization from "../components/pattern-visualization.vue";

export default {
  name: "pattern-problem-one",
  components: {
    patternVisualization
  },
  data() {
    return {
      medians,
    }
  },
}
</script>
