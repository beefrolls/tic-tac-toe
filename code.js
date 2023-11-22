const code = function() {
    const blocks = document.querySelectorAll('.gameboard div')
    
    const enemy = function() {
        return `row${Math.floor(Math.random() * 3) + 1}col${Math.floor(Math.random() * 3) + 1}`
    }
 
    let gameboard = {
        row1col1: null,
        row1col2: null,
        row1col3: null,
        row2col1: null,
        row2col2: null,
        row2col3: null,
        row3col1: null,
        row3col2: null,
        row3col3: null,
    }

    let clicks = 0;

    blocks.forEach((block) => {
        block.addEventListener('click', function() {
            if (block.id == 'none') {
                block.setAttribute('id', 'x')
                console.log(block)
                console.log(blocks)
                block.style.backgroundColor = 'blue';
                let name = block.className.toString()
                gameboard[name] = 'x';
                console.log(gameboard)
                clicks = clicks + 1;
                console.log(clicks)
                setTimeout (function(){
                    if (clicks <= 4) {
                        aiInput()
                    } else {
                        console.log('game ends')
                    }
                }, 500)
               
                let delay = 1500;
                setTimeout(function() {
                    if (!(winningCondPlayer())) {
                    winningCondEnemy()
                    }
                }, delay)
            } else {
                console.log('This one is filled')
            }

        })
    })

    const aiInput = function() {
        let empty = false;
        while (empty == false) {
            let input = enemy()
            if (gameboard[input] == null) {
                empty = true;
                gameboard[input] = 'o'
                console.log(input)
                console.log(input)
                console.log('yay')
                for (i = 0; i < blocks.length; i++) {
                    if (input == blocks[i].className) {
                        console.log(`This is the match ${blocks[i].className}`)
                        blocks[i].id = 'o'
                        blocks[i].style.backgroundColor = 'pink'
                    }
                }
            }
        }
    }

    const winningCondPlayer = function() {
        let win = null;
        if (gameboard.row1col1 == 'x' && gameboard.row1col2 == 'x' && gameboard.row1col3 == 'x'){
            console.log('you win')
            alert('you win')
            win = true;
        } else if (gameboard.row2col1 == 'x' && gameboard.row2col2 == 'x' && gameboard.row2col3 == 'x'){
            console.log('you win')
            alert('you win')
            win = true;
        } else if (gameboard.row3col1 == 'x' && gameboard.row3col2 == 'x' && gameboard.row3col3 == 'x'){
            console.log('you win')
            alert('you win')
            win = true;
        } else if (gameboard.row1col1 == 'x' && gameboard.row2col1 == 'x' && gameboard.row3col1 == 'x'){
            console.log('you win')
            alert('you win')
            win = true;
        } else if (gameboard.row1col2 == 'x' && gameboard.row2col2 == 'x' && gameboard.row3col2 == 'x'){
            console.log('you win')
            alert('you win')
            win = true;
        } else if (gameboard.row1col3 == 'x' && gameboard.row2col3 == 'x' && gameboard.row3col3 == 'x'){
            console.log('you win')
            alert('you win')
            win = true;
        } else if (gameboard.row1col1 == 'x' && gameboard.row2col2 == 'x' && gameboard.row3col3 == 'x'){
            console.log('you win')
            alert('you win')
            win = true;
        } else if (gameboard.row1col3 == 'x' && gameboard.row2col2 == 'x' && gameboard.row3col1 == 'x'){
            console.log('you win')
            alert('you win')
            win = true;
        }
        
        if (win == true) {
            return true;
        }
    }

    const winningCondEnemy = function() {
        let lose = null;
        if (gameboard.row1col1 == 'o' && gameboard.row1col2 == 'o' && gameboard.row1col3 == 'o'){
            console.log('you lose')
            alert('you lose')
            lose = true;
        } else if (gameboard.row2col1 == 'o' && gameboard.row2col2 == 'o' && gameboard.row2col3 == 'o'){
            console.log('you lose')
            alert('you lose')
            lose = true;
        } else if (gameboard.row3col1 == 'o' && gameboard.row3col2 == 'o' && gameboard.row3col3 == 'o'){
            console.log('you lose')
            alert('you lose')
            lose = true;
        } else if (gameboard.row1col1 == 'o' && gameboard.row2col1 == 'o' && gameboard.row3col1 == 'o'){
            console.log('you lose')
            alert('you lose')
            lose = true;
        } else if (gameboard.row1col2 == 'o' && gameboard.row2col2 == 'o' && gameboard.row3col2 == 'o'){
            console.log('you lose')
            alert('you lose')
            lose = true;
        } else if (gameboard.row1col3 == 'o' && gameboard.row2col3 == 'o' && gameboard.row3col3 == 'o'){
            console.log('you lose')
            alert('you lose')
            lose = true;
        } else if (gameboard.row1col1 == 'o' && gameboard.row2col2 == 'o' && gameboard.row3col3 == 'o'){
            console.log('you lose')
            alert('you lose')
            lose = true;
        } else if (gameboard.row1col3 == 'o' && gameboard.row2col2 == 'o' && gameboard.row3col1 == 'o'){
            console.log('you lose')
            alert('you lose')
            lose = true;
        }

        if (lose == true) {
            return true;
        }
    }

    return {enemy, aiInput, blocks}
}


code()