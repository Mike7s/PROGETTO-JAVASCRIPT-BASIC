import { createDomElement, makeCongratulation } from "./functions.js";

createDomElement();

// variables 

const scoreDisplay = document.querySelector('.counter');
const incrementButton = document.querySelector('.btn-increase');
const decrementButton = document.querySelector('.btn-decrease');
const reset = document.querySelector('.btn-reset');
const ball = document.querySelector('.ball');
const audio = new Audio('assets/media/audio/SuonoPallone.wav');
const referee = new Audio('assets/media/audio/fischio.mp3');
let score = 0;

// addEventListeners

incrementButton.addEventListener('click', incrementCounter);
reset.addEventListener('click', resetCounter);
decrementButton.addEventListener('click', decrementCounter);
ball.addEventListener('animationend', removeAnimation);

// functions 

function incrementCounter() {
    audio.play();
    score++;
    scoreDisplay.textContent = score;
    ball.classList.remove('bounce-animation');
    void ball.offsetWidth;
    ball.classList.add('bounce-animation');
    makeCongratulation(score);

}

function resetCounter() {
    referee.play();
    score = 0;
    scoreDisplay.textContent = score;
    makeCongratulation(score);

}

function decrementCounter() {
    if (score > 0) {
        score--;
        scoreDisplay.textContent = score;
    }
    makeCongratulation(score);
}

function removeAnimation() {
    ball.classList.remove('bounce-animation')
}
