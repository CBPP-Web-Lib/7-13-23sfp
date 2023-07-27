import "core-js/stable"
import "regenerator-runtime/runtime"
import "./style.scss"
import { load_typekit } from "./typekit_loader"
import { get_data } from "./data_getter"
import { setup_svg } from "./setup_svg"
import { DataManager } from "./data_manager"
import { draw_data } from "./draw_data"
import { setup_legend } from "./setup_legend"
import { freeze_switch } from "./freeze_switch"

Promise.all([
  new Promise((resolve)=>{
    load_typekit(resolve)
  }),
  new Promise((resolve)=>{
    get_data(resolve)
  })
]).then((d)=>{
  var data = d[1]
  setup_svg()
  const mgr = new DataManager()
  const colors = setup_legend()
  freeze_switch()
  mgr.onChange((column)=>{
    draw_data(data, column, colors)
  })
  draw_data(data, mgr.getActiveColumn(), colors)
  mgr.hashchangehandler()
})
