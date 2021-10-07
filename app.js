import { didUserWin, getRandomThrow } from "./test/utils.js";
const button = document.getElementById('play');
const winSpan = document.getElementById('win');
const lossSpan = document.getElementById('lost');
const drawSpan = document.getElementById('draw');
const error = document.getElementById('error');

let win = 0;
let lost = 0;
let draw = 0;

button.addEventListener('click', ()=>{
  // console.log('clicking button');
  const selected = document.querySelector('input[type=radio]:checked');
  // console.log(selected);
  if(!selected){
    return error.classList.remove('hidden');
  }
  error.classList.add('hidden');
  const userThrow = selected.value;
  const computerThrow = getRandomThrow();
  // console.log(userThrow);
  // console.log(computerThrow);
  // console.log(userThrow, computerThrow);
  if(didUserWin(userThrow, computerThrow) === 'draw'){
    draw++; drawSpan.textContent = draw;
  } else if(didUserWin(userThrow, computerThrow) === 'win'){
    win++; winSpan.textContent = win;
  } else {
    lost++; lossSpan.textContent = lost;
  }
  });