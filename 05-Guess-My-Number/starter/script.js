'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Write a number 🏈';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 25;
// console.log((document.querySelector('.guess').value = 25));
// document.querySelector('.guess').value = 25;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.score').textContent = 'There is no number';
  }
});
