let food = [0, 0];

let snake = [
    [7, 7],
    [7, 8],
    [7, 9]
];

// 0 - right, 1 - up, 2 - left, 3 - down
let direction = 1;
let interval = 200;
let active = false;
let score = 0;

let addToEnd = false;

document.addEventListener('DOMContentLoaded', () => {
    let gameBoard = document.querySelector('.gameBoard');
    let pixelBase = gameBoard.firstElementChild;
    for (let i = 0; i < Math.pow(15, 2) - 1; i++) {
        gameBoard.appendChild(pixelBase.cloneNode(true));
    }

    document.querySelectorAll('.controlBtn').forEach((btn) => {
        btn.addEventListener('click', () => {
            setDirection(parseInt(btn.getAttribute("direction")));
        });
    });

    document.querySelector('.resetBtn').addEventListener('click', () => setupGame());

    setupGame();
});

function setupGame(){
    clearBoard();
    snake = [
        [7, 7],
        [7, 8],
        [7, 9]
    ];
    score = 0;
    direction = 1;
    document.querySelectorAll('.pixel').forEach((pixel) => {
        pixel.classList.remove('blink');
    });
    writeScore();
    document.querySelector('.status').innerText = 'Press arrow keys to start.';

    newFood();

    drawSnake();
    
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowRight':
            setDirection(0);
            break;
        case 'ArrowUp':
            setDirection(1);
            break;
        case 'ArrowLeft':
            setDirection(2);
            break;
        case 'ArrowDown':
            setDirection(3);
            break;
        case 'n':
            appendSnake();
            break;
        default:
            console.log(event.key);
            break;
    }
});

function setDirection(_direction){
    if(!active){
        setupGame();
        drawFood();
        active = true;
    }
    document.querySelector('.status').innerText = 'Playing...';
    direction = _direction;
}

let loop = setInterval((e) => {
    if(active){
        if(addToEnd){
            snake.push([0, 0]);
            addToEnd = false;
        }

        for (let i = snake.length - 1; i > 0; i--) {
            snake[i] = JSON.parse(JSON.stringify(snake[i - 1]));
        }        

        let head = snake[0];
        switch (direction) {
            case 0:
                head[0]++;
                break;
            case 1:
                head[1]--;
                break;
            case 2:
                head[0]--;
                break;
            case 3:
                head[1]++;
                break;
        }

        if (head[0] > 14){
            head[0] = 0;
        }
        if (head[0] < 0){
            head[0] = 14;
        }
        if (head[1] > 14){
            head[1] = 0;
        }
        if (head[1] < 0){
            head[1] = 14;
        }

        snake.forEach((part, index) => {
            if(index != 0){
                if(part[0] == head[0] && part[1] == head[1]){
                    active = false;
                    document.querySelectorAll('.pixel').forEach((pixel) => {
                        pixel.classList.add('blink');
                    });
                    document.querySelector('.status').innerText = 'Game Over!';
                }
            }
        });

        if(head[0] == food[0] && head[1] == food[1]){
            appendSnake();
            newFood();
        };
    }

    if(active){
        clearBoard();
        drawSnake();
        drawFood();
        writeScore();
    }
}, interval);

function clearBoard(){
    document.querySelectorAll('.pixel').forEach((pixel) => {
        pixel.classList.remove('snakeHead');
        pixel.classList.remove('snakeBody');
        pixel.classList.remove('food');
    });
}

function newFood(){
    let availablePixels = [];
    
    for (let x = 0; x < 15; x++) {
        for (let y = 0; y < 15; y++) {
            availablePixels.push([x, y]);
        }
    }

    snake.forEach((part) => {
        availablePixels.forEach((pixel, index) => {
            if(pixel[0] == part[0] && pixel[1] == part[1]){
                availablePixels.splice(index, 1);
            }
        });
    });

    food = availablePixels[Math.floor(Math.random() * availablePixels.length)];

}

function drawSnake(){
    let pixels = document.querySelector('.gameBoard').children;
    snake.forEach((part, index) => {
        if(index == 0){
            pixels[part[0] + part[1] * 15].classList.add('snakeHead');
        }
        else {
            pixels[part[0] + part[1] * 15].classList.add('snakeBody');
        }
    });
}

function drawFood(){
    let pixels = document.querySelector('.gameBoard').children;
    pixels[food[0] + food[1] * 15].classList.add('food');
}

function appendSnake(){
    score += 1;
    addToEnd = true;
}

function writeScore(){
    document.querySelector('.score').innerText = score;
}