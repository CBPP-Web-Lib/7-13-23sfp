import { id } from "./globals"

const DataManager = function() {
  var active_col

  var change_handler

  this.onChange = (fn)=>{
    change_handler = fn
  }

  this.getActiveColumn = ()=> {
    return active_col
  }

  var picker = document.querySelectorAll("#" + id + " div.data-picker")[0]

  active_col = picker.querySelectorAll(".picker-option.selected")[0].getAttribute("data-value")

  var options = picker.querySelectorAll(".picker-option")

  options.forEach((option) => {
    option.addEventListener("click", () => {
      options.forEach((_option) => {
        _option.classList.remove("selected")
      })
      option.classList.add("selected")
      active_col = option.getAttribute("data-value")
      change_handler(active_col)
    })
  })

}

export { DataManager }