let active = true;
let game = [
    "", "", "",
    "", "", "",
    "", "", ""
];
let player = "X";

document.addEventListener('DOMContentLoaded', () => {
    let elements = document.querySelectorAll('.gridItem');
    elements.forEach(element => {
        element.addEventListener('click', cellClicked);
    });
    document.querySelector('.resetBtn').addEventListener('click', restart);
    setStatus(0);
});

function cellClicked(event){
    let cell = event.target;
    let cellId = getCellId(cell);

    if(active){
        if(game[cellId] === "") {
            game[cellId] = player;
            setCell(cell);
            if(checkWin()){
                toggleCells(false);
                active = false;
            }
            else {
                changePlayer();
                setStatus(0);
            }
        }
    }
}

function getCellId(cell){
    return parseInt(cell.getAttribute('cell'));
}

function setCell(cell){
    cell.innerHTML = player;
    cell.classList.remove("clickable");
}

function changePlayer(){
    player = player === "X" ? "O" : "X";
}

function setStatus(status){
    let lbl = document.querySelector('.status');
    switch (status) {
        case 0:
            lbl.innerHTML = `It's ${player}'s turn`;
            break;
    
        case 1:
            lbl.innerHTML = `It's draw.`;
            break;

        case 2:
            lbl.innerHTML = `Player ${player} won.`;
            break;

        default:
            lbl.innerHTML = `Error: ${status} code received.`;
            break;
    }    
}

function restart(){
    game = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];
    player = "X";
    document.querySelectorAll('.gridItem').forEach(cell => {
        cell.innerHTML = "";
    });
    toggleCells(true);
    setStatus(0);
    active = true;
}

function checkWin(){
    let win = false;
    let winConditions = [
        [0, 1, 2], // Horizontal
        [3, 4, 5], // Horizontal
        [6, 7, 8], // Horizontal
        [0, 3, 6], // Vertical
        [1, 4, 7], // Vertical
        [2, 5, 8], // Vertical
        [0, 4, 8], // Diagonal
        [2, 4, 6]  // Diagonal
    ];

    for (let i = 0; i < winConditions.length; i++) {
        let winCondition = winConditions[i];
        let a = game[winCondition[0]];
        let b = game[winCondition[1]];
        let c = game[winCondition[2]];
        if(a === "" || b === "" || c === "") {
            continue;
        }
        if(a === b && b === c) {
            win = true;
            break;
        }
    }

    if(win){
        setStatus(2);
    } else if(!game.includes("")){
        setStatus(1);
    }

    return win;
}

function toggleCells(state){
    document.querySelectorAll('.gridItem').forEach(cell => {
        if (state) {
            cell.classList.add("clickable");
        }
        else {
            cell.classList.remove("clickable");
        }
    });
}