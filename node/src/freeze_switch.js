import { id } from "./globals"

var freeze_el, freeze_el_inner, chart

function freeze_switch() {
  freeze_el = document.querySelector("#" + id + " .figure-freeze-pane")
  freeze_el_inner = document.querySelector("#" + id + " .figure-freeze-pane-inner")
  chart = document.querySelector("#" + id + " .chart-area")
  window.addEventListener("scroll", freeze_scroll_handler)
}

function freeze_scroll_handler() {
  var offset = freeze_el.getBoundingClientRect()
  var height = chart.offsetHeight + freeze_el.offsetHeight
  var freeze_el_offset = Math.max(0, 0 - offset.y)
  freeze_el_offset = Math.min(height - 200, freeze_el_offset)
  freeze_el_inner.style.transform = "translate(0, " + freeze_el_offset + "px)"
  if (freeze_el_offset > 0) {
    freeze_el_inner.classList.add("shifted")
  } else {
    freeze_el_inner.classList.remove("shifted")
  }
}

export { freeze_switch }