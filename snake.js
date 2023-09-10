// How many times in a sec should the game update
const SNAKE_SPEED = 5

// snake body
const snakeBody = [
  {x: 11, y: 11},
  {x: 11, y: 10},
  {x:11, y:9}
]

// updating the snake position
const updateSnake = () => {
  snakeBody.pop()

  const newHead = {...snakeBody[0]}
  let snakeDirection = getInputDirection()

  newHead.x += snakeDirection.x
  newHead.y += snakeDirection.y

  snakeBody.unshift(newHead)
}

// draw the snake
const drawSnake = (gameBoard) => {
  for (let i = 0; i < snakeBody.length; i++){
    const segment = snakeBody[i]

    const snakeElement = document.createElement("div")

    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x 

    snakeElement.classList.add("snake")
    gameBoard.appendChild(snakeElement)
  }
}