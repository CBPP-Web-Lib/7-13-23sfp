import { id } from "./globals"

const scroll_if_needed = () => {
  var bounds = document.getElementById(id).getBoundingClientRect()
  var viewheight = window.innerHeight
  var top = bounds.top + window.scrollY
  var above = bounds.top < 0
  var below = bounds.top > viewheight
  if (above || below) {
    window.scrollTo({
      top,
      behavior: 'smooth',
    })
  }
}

export { scroll_if_needed }