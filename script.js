const chooseElement = document.querySelector('#player-human');

const playGame = () => {
  chooseElement.addEventListener('click', (event) => {
    if (
      event.target.id !== 'rock' &&
      event.target.id !== 'paper' &&
      event.target.id !== 'scissors'
    ) {
      return;
    } else {
      console.log(event.target.id);
    }
  });
};
playGame();
