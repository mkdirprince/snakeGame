const GRID_SIZE = 21;

const onSnake = (position) => {
    for (let i = 0; i < snakeBody.length; i++) {
        if (equalPosition(snakeBody[i], position)){
            return true
        }
    }

    return false
}

const equalPosition = (position1, positon2) => {
    return position1.x === positon2.x && position1.y === positon2.y
}

const growSnake = () => {
    snakeBody.push({...snakeBody[snakeBody.length - 1]})
}


const getNewFoodPosition = () => {
    let randomFoodPosition = getGridPosition()
    while (onSnake(randomFoodPosition)){
       randomFoodPosition = getGridPosition()
    }

    return randomFoodPosition
}

const getGridPosition = () => {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1,
    }
}
