<template>
  <section class="pattern-problem-three">
    <h2>Problem Three</h2>
    <pattern-visualization
        pid="p3"
        :main-data="medians"
        :colors="colorHexes"
        :ascend-alpha="ascendAlpha"
        :descend-median="descendMedian" >
      <div>
        <p>sort by:</p>
        <div class="pattern-problem-three__filters">
            <button
                class="pattern-problem-three__button"
                type="button"
                id="name-ascend"
                @click="sortAscendAlpha()">
              tissue name, ascending alphabetically
            </button>
            <button
                class="pattern-problem-three__button"
                type="button"
                id="median-descend"
                @click="sortDescendMedian()">
              tissue sample, descending by value
            </button>
          <button
              class="pattern-problem-three__button"
              type="button"
              @click="resetFilters()">
            reset filters
          </button>
        </div>
      </div>
    </pattern-visualization>
  </section>
</template>

<script>
import {
  medians,
  colorHexes,
} from "./functions/functions-export.js";
import patternVisualization from "../components/pattern-visualization.vue";

export default {
  name: "pattern-problem-three",
  components: {
    patternVisualization
  },
  data() {
    return {
      medians,
      colorHexes,
      ascendAlpha: false,
      descendMedian: false,
    }
  },
  methods: {
    /**
     * Action when the button for filtering tissues by name ascending alphabetically is pressed.
     */
    sortAscendAlpha() {
      this.ascendAlpha = !this.ascendAlpha;
      this.descendMedian = false;
    },
    /**
     * Action when the button for filtering tissues by name descending by median of sample values is pressed.
     */
    sortDescendMedian() {
      this.descendMedian = !this.descendMedian ;
      this.ascendAlpha = false;
    },

    /**
     * Action to revert data back to original format
     */
    resetFilters() {
      this.descendMedian = false;
      this.ascendAlpha = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.pattern-problem-three {
  &__filters {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  &__button {
    margin: 5px;
  }
}
</style>