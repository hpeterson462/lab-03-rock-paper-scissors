// import functions and grab DOM elements
import { getRandomThrow } from './r-p-s.js';
import { checkResult } from './r-p-s.js';

const playButton = document.getElementById('play-button');
const gameResults = document.getElementById('results');
const currentTotal = document.getElementById('current-total');

// initialize state
let winData = 0;
let drawData = 0;
let loseData = 0;
let totalGuesses = 0;

// set event listeners to update state and DOM
playButton.addEventListener('click', () => {
    console.log('hello');

    //if total guesses is 3, end game
    if (totalGuesses === 4) {
        return;
    }

    //generate random number
    getRandomThrow();

    //get user input
    const userInput = document.querySelector('input:checked');
    const userGuess = userInput.value;
    console.log(userGuess);

    currentTotal.textContent = totalGuesses++;

    //compare inputs & add points
    if (checkResult() === 'draw') {
        drawData++;
        gameResults.textContent = 'Draw';
    } else if (checkResult() === 'win') {
        winData++;
        gameResults.textContent = 'Win!';
    } else if (checkResult() === 'lose') {
        loseData++;
        gameResults.textContent = 'Lose';
    }
    console.log(checkResult());
});