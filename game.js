// Get the game board
const gameBoard = document.getElementById("game-board")


// The main game 
const main = () => {
  update()
  draw()
}

// update and draw the snake 5 times per sec
setInterval(main, 1000/SNAKE_SPEED)

// update the snake
const update = () => {
  console.log("updating")
  updateSnake()
}

// draw the snake
const draw = () => {
  gameBoard.innerHTML = " "
  drawSnake(gameBoard)
  drawFood(gameBoard)
}