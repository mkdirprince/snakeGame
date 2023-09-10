// Get the game board
const gameBoard = document.getElementById("game-board")

let gameOver = false



// The main game 
const main = () => {
  update()
  draw()
  if (gameOver) {
     alert("Game over, referesh to start")
     clearInterval(gameLoop)
  }
}

// update and draw the snake 5 times per sec
let gameLoop = setInterval(main, 1000/SNAKE_SPEED)

// update the snake
const update = () => {
  console.log("updating")
  updateSnake()
  updateFood()
  gameOver = isGameOver()
}

// draw the snake
const draw = () => {
  gameBoard.innerHTML = " "
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

const isGameOver = () => {
  return snakeOutOfBounds() || snakeIntersectSelf()
}