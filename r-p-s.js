export function getRandomThrow() {
    const randomNumber = Math.ceil(Math.random() * 3);
    console.log(randomNumber);
    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

export function checkResult(computer, player) {
    if (computer === 'rock' && player === 'rock')
        return 'draw';
    if (computer === 'rock' && player === 'paper')
        return 'lose';
    if (computer === 'rock' && player === 'scissors')
        return 'win';

    if (computer === 'paper' && player === 'rock')
        return 'draw';
    if (computer === 'paper' && player === 'paper')
        return 'lose';
    if (computer === 'paper' && player === 'scissors')
        return 'win';

    if (computer === 'scissors' && player === 'rock')
        return 'draw';
    if (computer === 'scissors' && player === 'paper')
        return 'lose';
    if (computer === 'scissors' && player === 'scissors')
        return 'win';
}