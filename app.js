// import functions and grab DOM elements
import { getRandomThrow, checkResult } from './r-p-s.js';

const playButton = document.getElementById('play-button');
const gameResultsSpan = document.getElementById('results');
const currentTotalSpan = document.getElementById('current-total');

// initialize state
let winData = 0;
let drawData = 0;
let loseData = 0;
let totalGuesses = winData + loseData + drawData;

// set event listeners to update state and DOM
playButton.addEventListener('click', () => {

    //generate random throw
    const randomThrow = getRandomThrow();

    //get user input
    const userInput = document.querySelector('input:checked');
    const userGuess = userInput;

    if (userGuess === null) {
        alert("Hey, pick a guess!");
    } else {
        const userResponse = userGuess.value
        if (totalGuesses < 3) {
            totalGuesses++;
            
            //compare inputs & add points
            if (checkResult(randomThrow, userResponse) === 'draw') {
                drawData++;
                gameResultsSpan.textContent = 'Draw!';
            } else if (checkResult(randomThrow, userResponse) === 'win') {
                winData++;
                gameResultsSpan.textContent = 'Win!';
            } else if (checkResult(randomThrow, userResponse) === 'lose') {
                loseData++;
                gameResultsSpan.textContent = 'Lose!';
            }
        
            updateNotification();

        } else {
            gameResultsSpan.textContent = "Good Games";
        }
    }
});

function updateNotification() {
    const gameTotalMessage = "Total: " + totalGuesses + "  Wins: " + winData + "  Loses: " + loseData + "  Ties: " + drawData;

    currentTotalSpan.textContent = gameTotalMessage;
}
