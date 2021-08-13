// import functions and grab DOM elements
const score1El = document.querySelector('#score1');
const score2El = document.querySelector('#score2');

const TDButton1 = document.querySelector('#td1');
const TDButton2 = document.querySelector('#td2');

// initialize state
let score1 = 0;
let score2 = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

function zeroifyScore(score) {
    let string = String(score);
    for (let i = string.length; i < 3; i++) {
        string = '0' + string;
    }
    return string;
}

TDButton1.addEventListener('click', () => {
    score1 += 7;
    score1El.textContent = zeroifyScore(score1);
});

TDButton2.addEventListener('click', () => {
    score2 += 7;
    score2El.textContent = zeroifyScore(score2);
});