// declare and assign default input direction
let inputDirection = {x: 0, y: 1}


// callback function for controls
const controls = (event) => {
  if (event.key === "ArrowUp") {
    inputDirection = {x: 0, y: -1}
  }

  else if (event.key === "ArrowDown") {
    inputDirection = {x: 0, y: 1}
  }

  else if (event.key === "ArrowLeft") {
    inputDirection = {x: -1, y: 0}
  }

  else if (event.key === "ArrowRight") {
    inputDirection = {x: 1, y: 0}
  }
}

// listen for arrow keys
window.addEventListener("keydown", controls)


// gettter function for the input direction
const getInputDirection = () => {
  return inputDirection
}