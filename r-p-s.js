export function getRandomThrow() {
    const randomNumber = Math.ceil(Math.random() * 3);
    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

export function checkResult(computer, player) {
    if (computer === player) {
        return 'draw';
    }
    if (computer === 'rock') {
        if (player === 'paper') {
            return 'win';
        }
        if (player === 'scissors') {
            return 'lose';
        }
    }
    if (computer === 'paper') {
        if (player === 'rock') {
            return 'lose';
            
        }
        if (player === 'scissors') {
            return 'win';
            
        }
    }
    if (computer === 'scissors') {
        if (player === 'paper') {
            
            return 'lose';
        }
        if (player === 'rock') {
            return 'win';
            
        }
    }
}