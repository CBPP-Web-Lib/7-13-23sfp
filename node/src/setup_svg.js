import { id } from "./globals"
import { select as d3_select } from "d3"

const setup_svg = () => {
  const wrap = document.querySelectorAll("#" + id + " .chart-area")[0]
  const svg = d3_select(wrap).append("svg")
    .attr("viewBox", "0 0 100 150");
}

export { setup_svg }