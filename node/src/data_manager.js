import { setImmediate } from "core-js"
import { id } from "./globals"
import { scroll_if_needed } from "./scroll.js"

const DataManager = function() {
  var active_col

  var change_handler

  this.onChange = (fn)=>{
    change_handler = fn
  }

  this.getActiveColumn = ()=> {
    return active_col
  }

  const highlight_option = (active_col) => {
    options.forEach((_option) => {
      _option.classList.remove("selected")
      if (_option.getAttribute("data-value")===active_col) {
        _option.classList.add("selected")
      }
    })
  }

  var picker = document.querySelectorAll("#" + id + " div.data-picker")[0]

  active_col = picker.querySelectorAll(".picker-option.selected")[0].getAttribute("data-value")

  var options = picker.querySelectorAll(".picker-option")

  var in_click_event

  const valid_hash = {}

  options.forEach((option) => {
    valid_hash["#figure-tab-" + option.getAttribute("data-value")] = true
    option.addEventListener("click", () => {
      in_click_event = true
      active_col = option.getAttribute("data-value")
      highlight_option(active_col)
      change_handler(active_col)
      window.location.hash = 'figure-tab-' + active_col
      setImmediate(()=>{
        in_click_event = false
      })
    })
  })

  this.hashchangehandler = (e)=>{
    if (valid_hash[window.location.hash]) {
      if (e) {
        e.preventDefault()
      }
      if (!in_click_event) {
        active_col = window.location.hash.replace("#figure-tab-","")
        highlight_option(active_col)
        change_handler(active_col)
        scroll_if_needed()
      }
    }
  }

  window.addEventListener("hashchange", this.hashchangehandler)



}

export { DataManager }