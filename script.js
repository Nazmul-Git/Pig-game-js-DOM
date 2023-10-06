'use strict';

// select element
const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const diceEl=document.querySelector('.dice');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');

// select event
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

// starting condition
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');



let currentScore=0;
let activePlayer=0;
//  rolling dice 
btnRoll.addEventListener('click', ()=>{
    const dice= Math.trunc(Math.random()*6)+1;
    console.log(dice);

    // display dice
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;

    // check for roll 1
    // if.. we did not get 1 then add all dice point
    // else.. when get 1 then switch to the next player by reassign the activePlayer value..like at first.. activePlayer===0 that is true so assign activePlayer value 1  .
    if(dice !== 1){
        // add dice to current score
       currentScore+=dice;
       document.getElementById(`current--${activePlayer}`).textContent=currentScore;

    }else{
        // switch to the next player
        document.getElementById(`current--${activePlayer}`).textContent=0;
        currentScore=0;
        // reassign active player value
        activePlayer=activePlayer === 0 ? 1 : 0;
    }
})
