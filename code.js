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

const gameboard = (() => {
    let board = [
        {
            col1: '0',
            col2: '0',
            col3: '0'
        },
        {
            col1: '0',
            col2: '0',
            col3: '0'
        },
        {
            col1: '0',
            col2: '0',
            col3: '0'
        }
    ];

    return {board}
})();

const game = (() => {
    let row1 = gameboard.board[0];
    let row2 = gameboard.board[1];
    let row3 = gameboard.board[2];

    const markBoard = function(input) {
        switch (input) {
            case 'r1c1':
                row1.col1 = '1';
                break;

            case 'r1c2':
                row1.col2 = '1';
                break;

            case 'r1c3':
                row1.col3 = '1';
                break;

            case 'r2c1':
                row2.col1 = '1';
                break;

            case 'r2c2':
                row2.col2 = '1';
                break;

            case 'r2c3':
                row2.col3 = '1';
                break;

            case 'r3c1':
                row3.col1 = '1';
                break;

            case 'r3c2':
                row3.col2 = '1';
                break;

            case 'r3c3':
                row3.col3 = '1';
                break;
        }
        console.log(gameboard.board)
    }

    const checkWin = function() {
        if ((row1.col1 == '1' && row2.col2 == '1' && row3.col3 == '1') || (row1.col1 == '1' && row1.col2 == '1' && row1.col3 == '1') || (row2.col1 == '1' && row2.col2 == '1' && row2.col3 == '1') || (row3.col1 == '1' && row3.col2 == '1' && row3.col3 == '1')) {
            console.log('You win!')
        } else {
            console.log('You lose!')
        }
    }

    return {markBoard, checkWin}
})();

