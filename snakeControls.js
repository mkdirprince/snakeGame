// declare and assign default input direction and last direction
let inputDirection = {x: 0, y: 1}
let lastDirection = {x:0, y: 1}


// callback function for controls
// the lastDirection condition prevents the snake from doing a 180deg turn
const controls = (event) => {
  if (event.key === "ArrowUp" && lastDirection.x !== 0) {
    inputDirection = {x: 0, y: -1}
  }

  else if (event.key === "ArrowDown"  && lastDirection.x !== 0) {
    inputDirection = {x: 0, y: 1}
  }

  else if (event.key === "ArrowLeft"  && lastDirection.y !== 0) {
    inputDirection = {x: -1, y: 0}
  }

  else if (event.key === "ArrowRight" && lastDirection.y !== 0) {
    inputDirection = {x: 1, y: 0}
  }
}

// listen for arrow keys
window.addEventListener("keydown", controls)


// gettter function for the input direction
const getInputDirection = () => {
  lastDirection = inputDirection
  return inputDirection
}