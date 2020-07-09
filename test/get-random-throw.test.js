// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getRandomThrow } from '../get-random-throw.js';
import { checkResult } from '../get-random-throw.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your argument and expectations
    const expected = 'string';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = typeof getRandomThrow();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {
    //Arrange
    // Set up your argument and expectations
    const computer = 'rock';
    const player = 'scissors';
    const expected = 'win';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkResult(computer, player);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

