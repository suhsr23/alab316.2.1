document.getElementById('startbutton').addEventListener('click', startGame);

function startGame() {
  const targetNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  let maxAttempts = 10;

  const messageEl = document.getElementById('message');
  const gameStatusEl = document.getElementById('gamestatus');

  function getUserGuess() {
    setTimeout(() => {
      const userGuess = parseInt(window.prompt('Enter your guess:'));
      if (isNaN(userGuess)) {
        window.alert('Please enter a valid number.');
        getUserGuess();
      } else {
        attempts++;
        checkGuess(userGuess);
      }
    }, 100);
  }
  function checkGuess(guess) {
    if (guess === targetNumber) {
      messageEl.textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
      gameStatusEl.textContent = '';
    } else if (attempts >= maxAttempts) {
      messageEl.textContent = `Sorry, you've used all ${maxAttempts} attempts. The number was ${targetNumber}.`;
      gameStatusEl.textContent = '';
    } else {
      if (guess > targetNumber) {
        window.alert('Too high!');
      } else {
        window.alert('Too low!');
      }
      updateGameStatus();
      getUserGuess();
    }
  }

  function updateGameStatus() {
    gameStatusEl.textContent = `Attempts: ${attempts}/${maxAttempts}`;
  }

  messageEl.textContent = 'Guess a number between 1 and 100';
  gameStatusEl.textContent = `Attempts: ${attempts}/${maxAttempts}`;

  getUserGuess();
}
