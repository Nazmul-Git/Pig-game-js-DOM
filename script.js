'use strict';

// select element
const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const diceEl=document.querySelector('.dice');
const current0El=document.getElementById('current--0');

// select event
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

let currentScore=0;
// starting condition
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

//  rolling dice 
btnRoll.addEventListener('click', ()=>{
    const dice= Math.trunc(Math.random()*6)+1;
    console.log(dice);

    // display dice
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;

    if(dice !== 1){
       currentScore+=dice;
       current0El.textContent=currentScore;
    }else{
        
    }
})
