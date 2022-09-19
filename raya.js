
let board; // global
let victoria=0;

let total;
let indice=0;
let selec=0;
let casilla1;

function createBoard(numRows, numCols) {
    const rows = []
    total = numRows * numCols;
    tictac= letras();
    for (let i = 0; i < numRows; i++) {
        const casillas = []

        // crear casillas
        for (let j = 0; j < numCols; j++) {
            casillas.push({
                seMuestra : false,
                emoji : tictac[indice],
            })
            indice++;
        }

        rows.push(casillas)
    }

    return rows
}

  
function letras() {
    let tictac = ["&#10006;" , "&#11093;", "&#10006;" , "&#11093;", "&#10006;" , "&#11093;",
    "&#10006;" , "&#11093;", "&#10006;"]
    let shuffled = tictac.sort(() => Math.random() - 0.5);
    
    return shuffled;
    
}

function printBoard(board) {
    for (let row of board) {
        let rowStr = ""
        for (let casilla of row) {
            rowStr = rowStr + casilla + " "
        }
        console.log(rowStr)
    }
}

function setValue(board, row, col, value) {
    board[row][col] = value
}

//function getValue(board, row, col) {
const getValue = (board, row, col) => {
    return board[row][col]
}

const renderizarBoard = (board) => {
    for (let i = 0; i < board.length; i++) {
        const casillas = board[i]
        for (let j=0; j < casillas.length; j++) {
            const butCasilla = document.getElementById(`${i}_${j}`) // string interpolation
            if (casillas[j].seMuestra) {
                butCasilla.innerHTML = casillas[j].emoji
            }else {
                butCasilla.innerHTML = ""
            }
            
        }
    }
}

const casillaOnClick = (row, col) => {
    const casilla = getValue(board, row, col)
    casilla.seMuestra = true    
    renderizarBoard(board)
    selec++
    if (selec==1){
        casilla1!=casilla

            victoria++;
            if (victoria==9){
                casillas.push({
                    seMuestra : false
                })
            }
        }
}


const main = () => {
    board = createBoard(3, 3) 
    renderizarBoard(board)
}

main()
