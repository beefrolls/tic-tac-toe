/*

Gameboard 
Create GRID items within gameboard function (3x3)

Might also be applicable for players, just add a feature to it that lets it check for
1. Function that checks for the marked boxes
2. Function that checks for wins. loses & ties.

Players
Create factory function for players that include the following:
1. Marker function (something that marks the box onclick)


*/

/*

Winning Conditions:
(row1.col1 == '1' && row2.col2 == '1' && row3.col3 == '1') || (row1.col1 == '1' && row1.col2 == '1' && row1.col3 == '1') || (row2.col1 == '1' && row2.col2 == '1' && row2.col3 == '1') || (row3.col1 == '1' && row3.col2 == '1' && row3.col3 == '1'

Once one of the players fill six blocks, check for matches, then declare win.

*/

/*

Marking Conditions

if block is marked, you can no longer change the value of the block

Marking values can only be "X" or "O"
Default block values are empty

*/ 


/* Gameboard*/

const gameboard = (() => {
    let board = [
        {
            col1: null,
            col2: null,
            col3: null
        },
        {
            col1: null,
            col2: null,
            col3: null
        },
        {
            col1: null,
            col2: null,
            col3: null
        }
    ];

    const square = document.querySelector('.gameboard');

    const makeBoard = function() {
        board.forEach((cell) => {
            for (let key in cell) {
                console.log(key)
                console.log(cell[key])
                const item = document.createElement('div')
                if (cell[key] == '0') {
                    item.style.backgroundColor = 'white';
                } else if (cell[key] == '1'){
                    item.style.backgroundColor = 'black';
                }
                square.appendChild(item);
            }
        })
    };

    return {board, makeBoard}
})();


/* PLayer Method */
const player = (() => {
    let row1 = gameboard.board[0];
    let row2 = gameboard.board[1];
    let row3 = gameboard.board[2];

    /* for testing only */
    const aiInput = function() {
        return `r${Math.floor(Math.random() * 3) + 1}c${Math.floor(Math.random() * 3) + 1}`
    }

    const markBoard = function(input) {
        /*if (input == 'r1c1') {
            console.log(Boolean(row1.col1 === null))
            if (row1.col1 === null) {
                row1.col1 = 'Lol';
            }
        }*/

        switch (input) {
            case 'r1c1':
                if (row1.col1 === null) {
                    row1.col1 = 'max';
                }
                break;

            case 'r1c2':
                if (row1.col2 === null) {
                    row1.col2 = 'max';
                }
                break;

            case 'r1c3':
                if (row1.col3 === null) {
                    row1.col3 = 'max';
                }
                break;

            case 'r2c1':
                if (row2.col1 === null) {
                    row2.col1 = 'max';
                }
                break;

            case 'r2c2':
                if (row2.col2 === null) {
                    row2.col2 = 'max';
                }
                break;

            case 'r3c3':
                if (row2.col3 === null) {
                    row2.col3 = 'max';
                }
                break;

            case 'r3c1':
                if (row3.col1 === null) {
                    row3.col1 = 'max';
                }
                break;

            case 'r3c2':
                if (row3.col2 === null) {
                    row3.col2 = 'max';
                }
                break;

            case 'r3c3':
                if (row3.col3 === null) {
                    row3.col3 = 'max';
                }
                break;
        }
        console.log(gameboard.board)
        const gamecells = document.querySelectorAll('.gameboard > *');
        gamecells.forEach((gamecell) => {
            gamecell.remove()
        })
        gameboard.makeBoard()
        console.log(gameboard.board)
    }

    const checkWin = function() {
        if ((row1.col1 == '1' && row2.col2 == '1' && row3.col3 == '1') || (row1.col1 == '1' && row1.col2 == '1' && row1.col3 == '1') || (row2.col1 == '1' && row2.col2 == '1' && row2.col3 == '1') || (row3.col1 == '1' && row3.col2 == '1' && row3.col3 == '1')) {
            console.log('You win!')
        } else {
            console.log('You lose!')
        }
    }


    return {markBoard, checkWin, aiInput}
})();


/* Enemy Method */
const enemy = (() => {
    let row1 = gameboard.board[0];
    let row2 = gameboard.board[1];
    let row3 = gameboard.board[2];

    const aiInput = function() {
        return `r${Math.floor(Math.random() * 3) + 1}c${Math.floor(Math.random() * 3) + 1}`
    }

    const markBoard = function(input) {
        switch (input) {
            case 'r1c1':
                if (row1.col1 === null) {
                    row1.col1 = 'nigga';
                }
                break;

            case 'r1c2':
                if (row1.col2 === null) {
                    row1.col2 = 'nigga';
                }
                break;

            case 'r1c3':
                if (row1.col3 === null) {
                    row1.col3 = 'nigga';
                }
                break;

            case 'r2c1':
                if (row2.col1 === null) {
                    row2.col1 = 'nigga';
                }
                break;

            case 'r2c2':
                if (row2.col2 === null) {
                    row2.col2 = 'nigga';
                }
                break;

            case 'r2c3':
                if (row2.col3 === null) {
                    row2.col3 = 'nigga';
                }
                break;

            case 'r3c1':
                if (row3.col1 === null) {
                    row3.col1 = 'nigga';
                }
                break;

            case 'r3c2':
                if (row3.col2 === null) {
                    row3.col2 = 'nigga';
                }
                break;

            case 'r3c3':
                if (row3.col3 === null) {
                    row3.col3 = 'nigga';
                }
                break;
        }
        console.log(enemy.aiInput)
        console.log(gameboard.board)
        const gamecells = document.querySelectorAll('.gameboard > *');
        gamecells.forEach((gamecell) => {
            gamecell.remove()
        })
        gameboard.makeBoard()
     }


       const readTest = function(input) {
            let string = input.toString()
            console.log(string)
       }

    return {aiInput, markBoard, readTest}
})();

(gameboard.board).forEach((cell) => {
    for (let keys in cell) {
        console.log(cell[key])
    }
})



