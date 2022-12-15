<template>
  <div class="pattern-visualization">
    <div :id="`${pid}-container`">
    </div>
<!-- slot for buttons to filter the data-->
    <slot />
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "pattern-visualization",
  data() {
    return {
      width: 500,
      height: 500,
      margin: {
        top: 50,
        bottom: 50,
        left: 200,
        right: 50,
      },
      data: this.mainData.slice(),
    }
  },
  props: {
    /**
     * The ID indicating the problem number so the visualization
     * re-renders for different problems
     */
    pid: {
      type: String,
      default: "",
      required: true,
    },
    /**
     * The medians of tissue samples which will be used to visualize the bar graph
     */
    mainData: {
      type: Array,
      default: [],
      required: true,
    },
    /**
     * The colors of the bars in the graph with tissue name.
     */
    colors: {
      type: Array,
      default: [],
      required: false,
    },

    /**
     * Determines if the data should be sorted ascending
     * alphabetically by name
     */
    ascendAlpha: {
      type: Boolean,
      default: false,
      required: false,
    },

    /**
     * Determines if the data should be sorted descending
     * numerically by median value
     */
    descendMedian: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  watch: {
    /**
     * Watches for changes in the prop for ascending name alphabetically
     * @param val
     */
    ascendAlpha(val) {},
    /**
     * Watches for changes in the prop for descending the median values for samples
     * @param val
     */
    descendMedian(val) {},
  },
  methods: {
    /**
     * Sorts the data based on which button is pressed.
     * @param a an entry in the data array
     * @param b an entry in the data array
     * @returns {*}
     */

    sortItems(a, b) {
      if (this.ascendAlpha) {
        return d3.ascending(a.name, b.name);
      } else if (this.descendMedian) {
        return d3.descending(a.median, b.median)
      }
    },

    /**
     * Renders the visualization using D3
     */
    renderChart() {
      // appends the SVG object to the body of the page
      var svg = d3.select(`#${this.pid}-container`)
          .append("svg")
          .attr("width", this.margin.left + this.width + this.margin.right)
          .attr("height", this.margin.top + this.height + this.margin.bottom)
          .append("g")
          .attr("transform",
              "translate(" + this.margin.left + "," + this.margin.top + ")");

      // x-axis
      var x = d3.scaleLinear()
          .domain([0, d3.max(this.data.map(m => m.median))])
          .range([0, this.width]);
      svg.append("g")
          .attr("transform", "translate(0," + this.height + ")")
          .call(d3.axisBottom(x))
          .selectAll("text")
          .attr("transform", "translate(-10,0)rotate(-45)")
          .style("text-anchor", "end");

      // y-axis
      var y = d3.scaleBand()
          .range([ 0, this.height ])
          .domain(this.data
              .sort((m, n) => this.sortItems(m, n))
              .map((m) => m.name))
          .padding(0.1);
      svg.append("g")
          .call(d3.axisLeft(y))


      // bar graph
      svg.selectAll("bar")
          .data(this.data)
          .enter()
          .append("rect")
          .attr("x", x(0) )
          .attr("y", (m) => { return y(m.name); })
          .attr("width", (m) => { return x(m.median); })
          .attr("height", y.bandwidth() )
          .attr("fill", (m) => this.pid === 'p1' ? "white" : `#${this.colors.find(t => m.name === t.name).hex}`)

      svg.node();
    },
  },
  mounted() {
    try {
      this.renderChart();
    } catch (e) {
      console.log(e);
    }
  },
  beforeUpdate() {
    // removes any existing form of the bar graph before updating
    d3.select(`#${this.pid}-container`).select('svg').remove();
    this.data = this.mainData.slice();
  },
  updated() {
    try {
      this.renderChart();
    } catch (e) {
      console.log(e);
    }
  }
}
</script>

<style lang="scss" scoped>
.pattern-visualization {
}
</style>