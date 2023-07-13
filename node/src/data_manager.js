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

  var picker = document.querySelectorAll("#" + id + " select[name='data-picker']")[0]

  active_col = picker.value

  picker.addEventListener("change", () => {
    active_col = picker.value
    change_handler(active_col)
  })

}

export { DataManager }