import { url_root } from "./url_root"
import { csv, autoType } from "d3"

const get_data = (cb) => {
  csv(url_root + "/data.csv", autoType)
    .then(cb)
}

export { get_data }