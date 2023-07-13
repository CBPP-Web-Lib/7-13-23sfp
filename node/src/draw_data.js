import { select as d3_select, svg } from "d3"
import { id } from "./globals"
import state_names from "./state_names"

const x_min = -0.07
const x_max = 0

const draw_data = (data, column, colors)=>{
  var svg = d3_select("#" + id + " .chart-area > svg")

  data = data.sort((a, b) => {
    return b[column] - a[column]
  })


  var bar_groups = svg.selectAll("g.state")
    .data(data, d=>d.State)

  const bar_x = (d) => {
    return (-d[column] - x_min)/(x_max - x_min)*70 + 5
  }

  const bar_y = (d, i) => {
    return i/50 * 150 + 0.25
  }

  const bar_width = (d) => {
    return d[column]/(x_max - x_min)*70
  }

  const data_label = (d) => {
    return Math.round(-d[column]*1000)/10 + "%"
  }

  const duration = 200

  bar_groups.enter()
    .append("g")
    .attr("class", "state")
    .attr("transform", (d, i)=> {
      var str = "translate(0, " + bar_y(d, i) + ")"
      return str
    })
    .each(function(d) {
      d3_select(this).append("rect")
        .attr("class","bar")
        .attr("x", bar_x(d))
        .attr("y", 0)
        .attr("width", bar_width(d))
        .attr("height", 2.5)
        .attr("fill", d=>colors[d.tax])
      d3_select(this).append("text")
        .attr("class","data-label")
        .attr("x", bar_x(d) - 0.5)
        .text(data_label(d))
        .attr("text-anchor", "end")
        .attr("font-size","2.5")
        .attr("y", 1.3)
        .attr("dominant-baseline","middle")
      d3_select(this).append("text")
        .attr("class", "state-name")
        .attr("x", 76)
        .attr("y", 1.3)
        .attr("font-size","2.8")
        .attr("dominant-baseline","middle")
        .attr("text-anchor","start")
        .text(state_names[d.State])
    })

  svg.select("line.yaxis").raise()
  
  bar_groups
    .each(function(d) {
      d3_select(this).select("rect.bar")
        .transition()
        .duration(duration)
        .attr("x", bar_x(d))
        .attr("width", bar_width(d))
      d3_select(this).select("text.data-label")
        .transition()
        .duration(duration)
        .attr("x", bar_x(d) - 0.5)
        .text(data_label(d))
    })
    .transition()
    .duration(duration)
    .attr("transform", (d, i)=> {
      var str = "translate(0, " + bar_y(d, i) + ")"
      return str
    })

  
  
    
}

export { draw_data }