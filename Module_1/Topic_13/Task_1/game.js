'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };
    return function start() {
      const playerChange = prompt('Выберите: камень, ножницы, бумага');
      if (playerChange === null) {
        const PlayerChangeTwo = prompt('Вы точно хотите выйти?');
        if (PlayerChangeTwo === null) {
          alert(`Количество очков: \nИгрок: ${result.player} 
Компьютер: ${result.computer} `);
          throw new Error('Stop script');
        } else {
          start();
        }
      }
      if (playerChange === '') {
        start();
      }
      const ComputerChange = FIGURES_RUS[getRandomIntInclusive(0, 2)];


      if (playerChange === FIGURES_RUS[0] ||
          playerChange === FIGURES_RUS[1] ||
          playerChange === FIGURES_RUS[2]) {
        if ((playerChange === 'камень') && (ComputerChange === 'ножницы') ||
            (playerChange === 'ножницы') && (ComputerChange === 'бумага') ||
            (playerChange === 'бумага') && (ComputerChange === 'камень')) {
          alert('Компьютер: ' + ComputerChange + '\nИгрок: ' +
      playerChange.toLowerCase() + '\nРезультаты: игрок победил');
          result.player++;
          start();
        } else if (playerChange === ComputerChange) {
          alert('Компьютер: ' + ComputerChange + '\nИгрок: ' +
          playerChange.toLowerCase() + '\nРезультаты: ничья');
          start();
        } else {
          alert('Компьютер: ' + ComputerChange + '\nИгрок: ' +
          playerChange.toLowerCase() + '\nРезультаты: вы проиграли');
          result.computer++;
          start();
        }
      }
      start();
    };
  };


  window.rps = game;
})();
