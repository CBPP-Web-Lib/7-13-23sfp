import { id } from "./globals"
import { select as d3_select } from "d3"

const setup_svg = () => {
  const wrap = document.querySelectorAll("#" + id + " .chart-area")[0]
  const svg = d3_select(wrap).append("svg")
    .attr("viewBox", "0 0 100 150")

  svg.append("line")
    .attr("class","yaxis")
    .attr("stroke-width",0.3)
    .attr("stroke","#000")
    .attr("x1", 75)
    .attr("x2", 75)
    .attr("y1", 0)
    .attr("y2", 150)
}

export { setup_svg }