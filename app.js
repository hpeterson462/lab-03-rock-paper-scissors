// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';
import { checkResult } from './get-random-throw.js';

const playButton = document.getElementById('play-button');
const gameResults = document.getElementById('results');
const currentTotal = document.getElementById('current-total');

// initialize state
let win = 0;
let draw = 0;
let lose = 0;
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
    console.log(totalGuesses);

    //compare inputs & add points
    if (checkResult() === 'draw') {
        draw++;
        gameResults.textContent = 'Draw';
    } else if (checkResult() === 'win') {
        win++;
        gameResults.textContent = 'Win!';
    } else if (checkResult() === 'lose') {
        lose++;
        gameResults.textContent = 'Lose';
    }

});