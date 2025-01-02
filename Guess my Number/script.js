'use strict'

let num = Math.trunc(Math.random()*20 + 1);
let score = 20;
let high = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener
('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess,typeof guess);

  if(!guess){
    displayMessage('🚫 No Number!');
  }

  else if(guess === num){
    document.querySelector('.number').textContent = num;
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = ' #60b347';

    document.querySelector('.number').style.width = '30rem';

    high = Math.max(score,high);
    document.querySelector('.highscore').textContent = high;
  }
  else if(guess !== num){
    if(score > 1){
        displayMessage(guess > num ? '📈 Too high !' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
    }
    else{
      displayMessage('🥲 You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'rgb(246, 56, 56)';
      document.querySelector('.number').textContent = num;
    }
  }

  // else if(guess < num){
  //   if(score > 1){
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }else{
  //     document.querySelector('.message').textContent = '🥲 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  // else if(guess > num){
  //   if(score > 1){
  //     document.querySelector('.message').textContent = '📈 Too high !';
  //     score--;
  //   }
    else{
      document.querySelector('.message').textContent = '🥲 You lost the game!';
    }

});

document.querySelector('.again').addEventListener('click',function () {
  score = 20;
  num = Math.trunc(Math.random()*20 + 1);

  displayMessage('Start Guessing...!! 😉');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

});