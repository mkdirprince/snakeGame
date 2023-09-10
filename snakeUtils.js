const GRID_SIZE = 21;

const onSnake = (position) => {
    for (let i = 0; i < snakeBody.length; i++) {
        if (equalPosition(position, snakeBody[i])){
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



const outOfBounds = (position) => {
    return position.x < 1 || position.x > GRID_SIZE || position.y < 1 || position.y > GRID_SIZE
}

const snakeOutOfBounds = () => {
    return outOfBounds(snakeBody[0])
}

const snakeIntersectSelf = () => {
    for (let i = 1; i < snakeBody.length; i++) {
        if (equalPosition(snakeBody[0], snakeBody[i])){
            return true
        }
    }

    return false
}