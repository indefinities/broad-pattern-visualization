<template>
  <section class="pattern-problem-two">
    <h2>Problem Two</h2>
    <pattern-visualization
        pid="p2"
        :main-data="medians"
        :colors="colorHexes" />
  </section>
</template>

<script>
import {
  medians,
  colorHexes,
} from "./functions/functions-export.js";

import patternVisualization from "../components/pattern-visualization.vue";

export default {
  name: "pattern-problem-two",
  components: {
    patternVisualization,
  },
  data() {
    return {
      medians,
      colorHexes,
    }
  },
}
</script>

<style lang="scss" scoped>

</style>