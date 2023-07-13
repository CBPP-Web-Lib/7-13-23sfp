import { id } from "./globals"
import { select as d3_select } from "d3"

const setup_legend = () => {
  const colors = {}
  const legend_el = document.querySelectorAll("#" + id + " div.legend")[0]
  legend_el.querySelectorAll(".legend-item").forEach((legend_item) => {
    var color = legend_item.getAttribute("data-color")
    colors[legend_item.getAttribute("data-value")] = color
    var box = d3_select(legend_item)
      .append("svg")
      .attr("viewBox", "0 0 10 10")
      .attr("class","legend-box")
    box.lower()
    box.append("rect")
      .attr("x",-1)
      .attr("y",-1)
      .attr("width",12)
      .attr("height",12)
      .attr("fill", color)

  })
  
  return colors
}

export { setup_legend }